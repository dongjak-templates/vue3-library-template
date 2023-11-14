// update-package-json.js
const fs = require('fs');
const path = require('path');

// 获取当前命令行上下文路径
const currentDirectory = process.cwd();

// 获取 package.json 文件中的内容
const packageJsonPath = path.join(currentDirectory, 'package.json');
const packageJsonContent = fs.readFileSync(packageJsonPath, 'utf8');
const packageJson = JSON.parse(packageJsonContent);

// 更新 package.json 文件中的 repository 字段
packageJson.name = process.argv[2];
packageJson.author= process.argv[3];
packageJson.repository = process.argv[4];
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
