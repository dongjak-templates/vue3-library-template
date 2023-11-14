// update-library-name.js
const fs = require('fs');
const path = require('path');

// 获取当前命令行上下文路径
const currentDirectory = process.cwd();

// 获取 package.json 文件中的内容
const docsDir = path.join(currentDirectory, 'docs');
function replaceInFile(filePath, searchValue, replaceValue) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const newContent = fileContent.replace(new RegExp(searchValue, 'g'), replaceValue);
    console.log(`replace ${searchValue} to ${replaceValue} in ${filePath}, newContent: ${newContent}`)
    fs.writeFileSync(filePath, newContent, 'utf8');
}
function walkDir(dir) {
    fs.readdirSync(dir).forEach(file => {
        let fullPath = path.join(dir, file);
        if (fs.lstatSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (path.extname(fullPath) === '.md') {
            replaceInFile(fullPath, 'vue3-library-template', process.argv[2]);
        }
    });
}
walkDir(docsDir);
