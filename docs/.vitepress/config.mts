import { defineConfig } from 'vitepress'
import { themeConfig } from "./themeConfig/themeConfig.mjs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "上冬辰",
  // 站点的描述
  description: "博客",

  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/vitepress-blog/logo/favicon.png",
      },
    ],
  ],

  // 站点的 lang 属性
  lang: "zh-CN",

  // 站点将部署到的 base URL
  base: "/vitepress-blog/",

  // 删除 .html 后缀
  cleanUrls: true,

  // 自定义目录 <-> URL 映射
  rewrites: {},

  // markdown 页面的目录
  srcDir: "./src",

  // 用于匹配应作为源内容输出的 markdown 文件的全局模式
  srcExclude: ["**/README.md"],

  // 项目的构建输出位置
  outDir: "./.vitepress/dist",

  // 指定放置生成的静态资源的目录。该路径应位于 outDir 内，并相对于它进行解析。
  assetsDir: "assets",

  // 缓存文件的目录，相对于项目根目录。
  cacheDir: "./.vitepress/cache",

  // VitePress 不会因为死链而导致构建失败
  ignoreDeadLinks: true,

  // 主题模式：深色浅色
  appearance: true,

  // 获取每个页面的最后更新时间戳
  lastUpdated: true,

  // 主题相关配置
  themeConfig,

  // 行号
  markdown: {
    lineNumbers: true
  }
})
