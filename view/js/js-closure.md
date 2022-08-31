# 闭包
> 什么？

**有权访问另一个函数作用域中的变量的函数。**

*（创建闭包的常见方式，就是一级函数内部里面返回二级函数并且二级函数调用一级的变量/一个函数内部创建另一个函数）*



<br /><br /><br />

> 例子

```
function closureFn() {
  　var a = 3
　　function sonFn() {
　　　　return ++a;
　　}
　　return sonFn
}
let changeNum = closureFn();
console.log(changeNum())    // 4
console.log(changeNum())    // 5

(sonFn)有权访问另一个函数(closureFn)作用域变量的函数(changeNum)就是闭包
```



<br /><br /><br />

> 为什么? （作用/优缺点）

优: 可以读取函数内部变量 和 防止污染全局数据
缺: 变量始终保存在内存中，导致内存泄漏



<br /><br /><br />

> 应用(怎么用？)

定时器、事件监听器、 Ajax请求、跨窗口通信、Web Workers或者任何其他的异步(或者同步)任务中，只要使 用了回调函数，实际上就是在使用闭包!(模块暴露)