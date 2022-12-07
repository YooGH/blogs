const fs = require('fs');

const url = './a';
let dirData = fs.readdirSync(url, 'utf8');
console.log(dirData)
let longStr = ''
for(item of dirData) {
  longStr += `${item}\n`
}

setTimeout(()=> {
  fs.writeFile(`./test.txt`, longStr, err => {
    if (err) throw err;
    console.log('写入成功');
  });
}, 1000)