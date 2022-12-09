const fs = require('fs');
const [
  oldUrl, // 旧数据路径
  newUrl, // 旧数据路径
  rnStr,
] = [
  './oldText.txt',
  './newText.txt',
  /r/n
]


let dirData = fs.readdirSync(oldUrl, 'utf8');
console.log('旧数据', dirData);

let longStr = ''; // 写入内容





for(item of dirData) {
  longStr += `${item}\n`
}








setTimeout(()=> {
  fs.writeFile(newUrl, longStr, err => {
    if (err) throw err;
    console.log('写入成功');
  });
}, 1000)