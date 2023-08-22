// node script.js view下面的文件路径()


// 识别h5
// 命令例子： node script.js js/dom.md


const fs = require("fs");
let route = process.argv.splice(2)[0];
const sourceFiles = {
  prefix: __dirname + "/view/",
  // prefix: __dirname + "/",
  distinguish: '********************'
};
console.log('prefix',sourceFiles.prefix + route)



// 获取文件数据
let oldTemplate = fs.readFileSync(sourceFiles.prefix + route).toString('utf-8');

let newStr = oldTemplate.substr(oldTemplate.indexOf(sourceFiles.distinguish) + 20);  // 识别'********************'并且清空


// 正则识别<h1></h1>的内容，并根据内容生成头部跳转
// let reg = /(?<=(<h1[^>]*?>)).*?(?=(<\/h1>))/g;
let reg = /(?<=(<h2[^>]*?>)).*?(?=(<\/h2>))/g;                                          
// let reg = /(?<=(<h3[^>]*?>)).*?(?=(<\/h3>))/g;                                          


// 正则源自：https://blog.csdn.net/jason_renyu/article/details/122188106
let titleList = newStr.match(reg);
let titleLongTitle = '';
titleList.forEach((item,index)=>{
  titleLongTitle += `${index+1}. <a href="#h${index+1}"> ${item.substr(3)} </a>\n`
})



try {
  fs.writeFileSync(sourceFiles.prefix + route, `${titleLongTitle}${sourceFiles.distinguish}\n\n\n${newStr}`);
  console.log(`Success: 修改成功！`);
} catch (e) {
  console.log(`Error:${e} 修改失败！`);
}