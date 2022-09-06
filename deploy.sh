#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

#删除之前生成的静态文件
rm -rf ./docs/.vuepress/dist/*
# 生成静态文件
yarn build

# 进入生成的文件夹
cd ./docs/.vuepress/dist/


git init
git add -A
git commit -m "更新博客"
git branch -M main

git push -f git@github.com:Chenghana/Chenghana.github.io.git main
git push -f git@http://8.142.191.34:/home/git/blog.git