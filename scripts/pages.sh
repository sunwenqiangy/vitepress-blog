#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 清空build生成的dist目录下的内容
rm -rf ./docs/.vitepress/dist/*

# 生成静态文件 yarn docs:build 
pnpm build

# 进入生成的文件夹
cd ./docs/.vitepress/dist

#git初始化，每次初始化不影响推送
git init
git add -A
git commit -m 'deploy'
git branch -M deploy-page

# 如果你想要发布到 https://<USERNAME>.github.io
git push -f git@github.com:sunwenqiangy/vitepress-blog.git deploy-page