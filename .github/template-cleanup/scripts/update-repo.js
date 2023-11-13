// update-repo.js
const fs = require('fs');
const path = require('path');

// 获取当前命令行上下文路径
const currentDirectory = process.cwd();

// 获取 package.json 文件中的内容
const packageJsonPath = path.join(currentDirectory, 'package.json');
const packageJsonContent = fs.readFileSync(packageJsonPath, 'utf8');
const packageJson = JSON.parse(packageJsonContent);

// 更新 package.json 文件中的 repository 字段
packageJson.repository = process.argv[2];
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log(`repository 已更新为 ${process.argv[2]}`);