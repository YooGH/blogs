<h6>

### 模块(CMD AMD)

 - 对于依赖的模块，AMD 是提前执行，CMD 是延迟执行。不过 RequireJS 从 2.0 开始，也改成可以延迟执行（根据写法不同，处理方式不同）。
 - CMD 推崇依赖就近，AMD 推崇依赖前置（define关键字）CMD 推崇 as lazy as possible.
 - CMD和AMD的代表分别是require.js以及sea.js
 - 原生js window 好像没有define方法,这应该是SeaJS框架里的 你要用首先要导入SeaJS包



<br/><br/><br/>



#### AMD (amd 提前读取并加载(前置读取并加载))

> 是 RequireJS 在推广过程中对模块定义的规范化产出。https://github.com/amdjs/amdjs-api/wiki/AMD

```
require(['./a','./b'],function(a,b){
   a.doSomething()
   b.doSomething()
}) 
```

demo: demo/amd



<br/><br/><br/>



#### CMD (cmd 提前读取后加载)

> 是 SeaJS 在推广过程中对模块定义的规范化产出。https://github.com/seajs/seajs/issues/242<br/>
> （NodeJS是CommonJS规范的实现，webpack 也是以CommonJS的形式来书写。）

```
define(function(require, exports, module) {
  var a = require('./a')
  a.doSomething()
  var b = require('./b')
  b.doSomething()
})
```
 

1. cmd 提前读取后加载,而是在需要时加载 “懒加载”==as lazy as possible

2. 一个模块就是一个文件(崇尚简单)



<br/><br/><br/>



参考

[js模块化编程之彻底弄懂CommonJS和AMD/CMD！](https://www.cnblogs.com/chenguangliang/p/5856701.html)

[vue.js符合cmd规范吗](https://zhidao.baidu.com/question/202485791140666125.html)

[【面试系列】之一：关于Cmd和Amd](https://segmentfault.com/a/1190000006264897)

[AMD 和 CMD 的区别有哪些？](https://www.zhihu.com/question/20351507/answer/14859415)

[SeaJS与RequireJS最大的区别](https://www.douban.com/note/283566440/?_i=6102679_aIDRAT)

[YUI Modules 与 AMD/CMD，哪一种方式更好？](https://www.zhihu.com/question/21347409#answer-2323656)

[博客](https://www.cnblogs.com/lgyong/p/8586283.html)





</h6>


