
const fs = require("fs");


// // {id: 0, name: '枇杷',}, 
// let CSS = {
//   postList: [
//     {id: 0, name: '苹果',}, 
//       {id: 1, name: '橙子',}, 
//       {id: 2, name: '猕猴桃',}, 
//       {id: 3, name: '甘蔗',}, 
//       {id: 4, name: '柚子',}, 
//       {id: 5, name: '雪莲果',}, 
  
//   ]
// }
// console.log(CSS.postList)

// let longStr = '';


// // for (i = CSS.postList.length-1; i >= 0; i--) {
//   for (i = 0; i < CSS.postList.length; i++) {
//   // console.log(CSS.postList[i].title)
//   // longStr += `{id: ${CSS.postList.length-1-i}, name: '${CSS.postList[i]['name']}', href: '${CSS.postList[i]['url']}'}, \n`
//   longStr += `{ id: ${i+1}, name: '${CSS.postList[i]['name']}',}, \n`
// }
// // for (i = 0; i < CSS.postList.length; i++) {
// //   console.log(CSS.postList[i].title)
// //   longStr += `{id: ${i}, name: '${CSS.postList[i]['title']}'}, \n`
// // } 

// fs.writeFile("./cc.txt", longStr, error => {
//   if (error) return console.log("写入文件失败,原因是" + error.message);
//   console.log("写入成功");
// });

fs.stat('./vue.global.js', (err, data) => {
  // console.log(Object.entries(data))
  console.log(data.birthtime)
})

