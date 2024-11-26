import path from "node:path";
import fs from "node:fs";

// 文件根目录
const DIR_PATH = path.resolve();

// 源文件目录
const SRC_Path = path.join(DIR_PATH, '/docs/src/guide');

// 公共路径
const commentPath = '/guide'

console.log('DIR_PATH', DIR_PATH, SRC_Path);

const WHITE_LIST = [
    ".vitepress",
    "node_modules",
    ".idea",
    "assets",
    "images",
    "index.md",
];

// 判断是否是文件夹
const isDirectory = (path) => fs.lstatSync(path).isDirectory();

// 取差值
const intersections = (arr1, arr2) =>
    Array.from(new Set(arr1.filter((item) => !new Set(arr2).has(item))));

// 把方法导出直接使用
function getList(params, path1, pathname) {
    // 存放结果
    const res = [];
    // 开始遍历params
    for (let file in params) {
        // 拼接目录
        const dir = path.join(path1, params[file]);
        // 判断是否是文件夹
        const isDir = isDirectory(dir);
        if (isDir) {
            // 如果是文件夹,读取之后作为下一次递归参数
            const files = fs.readdirSync(dir);
            const name = path.basename(params[file]);
            const items = intersections(files, WHITE_LIST);
            res.push({
                text: name,
                collapsed: true,
                items: getList(items, dir, `${pathname}/${name}`),
            });
        } else {
            // 获取名字
            const name = path.basename(params[file]);
            // 排除非 md 文件
            const suffix = path.extname(params[file]);
            if (suffix !== ".md") {
                continue;
            }
            res.push({
                text: name,
                link: `${commentPath}${pathname}/${name}`,
            });
        }
    }
    // 对name做一下处理，把后缀删除
    res.map((item) => {
        item.text = item.text.replace(/\.md$/, "");
    });
    // console.log('res', res);
    return res;
}

export const set_sidebar = (pathname) => {
  // 获取pathname的路径
  const dirPath = path.join(SRC_Path, pathname);
  // 读取pathname下的所有文件或者文件夹
  const files = fs.readdirSync(dirPath);
  // 过滤掉
  const items = intersections(files, WHITE_LIST);
  // console.log('items>>>', items, dirPath, pathname);
  // getList 函数后面会讲到
  return getList(items, dirPath, pathname);
};