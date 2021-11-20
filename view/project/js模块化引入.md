- > 1. <a href="#h1"> commonjs -> node.js （服务端) </a>
  > 2. <a href="#h2"> amd -> requirejs(浏览器端)  | cmd -> sea.js（浏览器端） </a>
  > 3. <a href="#h3"> es6 modules => es6（两端）</a>
  >    <a href="#ck"> 参考 </a>

  > 模块化是防止变量的冲突

  ### <h1 id="h1"> 1.commonjs </h1>

  > ***require***/**exports**/**module**(原来的module.exports 发展成 exports)
  >
  > 导出是拷贝模式
  >
  > 同步

  ```
  // a.js
  let name = 'your father'
  let age = 'man'
  let num = 1;
  setinterval(()=>{
  	num++
  },1000)
  exports.name = name
  exports.age = age
  exports.num = num
  ```

  ```
  let ggsmd = require('a.js')
  setinterval(()=>{
  	console.log(ggsmd.num) // num值不变,就证明导出是拷贝模式鑫
  },1000)
  ```


  ### <h1 id="h2"> 2.requirejs </h1>

  > requirejs -> amd
  >
  > **define**
  >
  > ``define(id?, dependencies?, factory)``

  ```
  // a.js
  define(function(){
      var name = 'morrain'
      var age = 18
      return {
          name,
          getAge: () => age
      }
  })
  // b.js
  define(['a.js'], function(a){
      var name = 'lilei'
      var age = 15
      console.log(a.name) // 'morrain'
      console.log(a.getAge()) // 18
      return {
          name,
          getAge: () => age
      }
  })
  ```

  

  > CMD -> sea.js
  >
  > 
  >
  > **define** | **exports/module.exports**

  ```
  // 所有模块都通过 define 来定义
  define(function(require, exports, module) {
  
    // 通过 require 引入依赖
    var a = require('xxx')
    var b = require('yyy')
  
    // 通过 exports 对外提供接口
    exports.doSomething = ...
  
    // 或者通过 module.exports 提供整个接口
    module.exports = ...
  
  })
  // a.js
  define(function(require, exports, module){
      var name = 'morrain'
      var age = 18
  
      exports.name = name
      exports.getAge = () => age
  })
  // b.js
  define(function(require, exports, module){
      var name = 'lilei'
      var age = 15
      var a = require('a.js')
  
      console.log(a.name) // 'morrain'
      console.log(a.getAge()) //18
  
      exports.name = name
      exports.getAge = () => age
  })
  ```

  

  


  ### <h1 id="h3"> 3.es6 modules </h1>

  > ES6模块化测试必须在服务器上测试，如果本地浏览器访问会报错！
  > **exports** | **import** | **type="module"**

  

  

  


  ### <h1 id="ck"> 参考 </h1>

  [commonjs不是前端却革命了前端 ](https://zhuanlan.zhihu.com/p/113009496)

  [ES Modules（模块）](http://www.html.cn/archives/10283)

  [浏览器已原生支持 ES 模块，这对前端开发来说意味着什么？](https://blog.csdn.net/weixin_34146805/article/details/88029504)

  

  

  
