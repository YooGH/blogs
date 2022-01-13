1. <a href="#h1"> 排序 </a>
    <a href="#ck"> 参考 </a>

  

  ### <h1 id="h1"> 1.排序--orderBy </h1>
  > 先按 progress 排降序（progress 越大越靠前）、再按 description 排升序（字母序越前越靠前）
  ```
  db.collection('todos')
  .orderBy('progress', 'desc')
  .orderBy('description', 'asc')
  .get()
  .then(console.log)
  .catch(console.error)

  ```
  
  

  


  ### <h1 id="ck"> 参考 </h1>


  

  

  
