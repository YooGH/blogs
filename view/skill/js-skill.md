1.<a href="h1"> 数据类型 </a>
2.<a href="h2"> 判断 JS 类型的方式 </a>
3.<a href="h3"> switch比if快 </a>
4.<a href="h4"> 循环有多少种 </a>
5.<a href="h5"> 描述一下cookies，sessionStorage和localStorage的区别？ </a>
6.<a href="h6"> JS 中的主要有哪几类错误 </a>
7.<a href="h7"> 栈和堆的区别？ </a>
8.<a href="h8"> call和apply </a>
9.<a href="h9"> 数组 </a>
10.<a href="h10"> ES6 </a>
11.<a href="h11"> 闭包 </a>
12.<a href="h12"> [防抖节流](https://blog.csdn.net/m0_48166663/article/details/121144995) </a>
13.<a href="h13"> 页面到服务器输入流程 </a>
14.<a href="h14"> 深浅拷贝方法（深拷贝数据类型是不是一样) </a>
15.<a href="h15"> [继承的方法有多少种](https://www.cnblogs.com/gwf93/p/10384352.html) </a>
16.<a href="h16"> 原型链（https://www.cnblogs.com/manhuai/p/14281967.html） </a>
17.<a href="h17"> AMD和CMD的区别 </a>
18.<a href="h18"> 什么是柯里化？ </a>
19.<a href="h19"> JS怎么实现一个类，怎么实例化这个类 </a>
20.<a href="h20"> JS为什么要区分微任务和宏任务 </a>
21.<a href="h21"> JS延迟加载的方式有哪些？ </a>
22.<a href="h22"> 你如何组织，优化自己的代码？(5分题) </a>
23.<a href="h23"> prototype </a>
24.<a href="h24"> [垃圾回收机制](https://blog.csdn.net/weixin_44653493/article/details/124665921) </a>
25.<a href="h25"> JS为什么万物都是对象 </a>
26.<a href="h26"> eatchart（等比例缩放） </a>
27.<a href="h27"> 题目 </a>
********************


闭包、防抖节流、递归、柯里化、回调


<br/><br/><br/>

### <h1 id="h1"> 1. 数据类型 </h1>
值类型(基本类型)：字符串（String）、数字(Number)、布尔(Boolean)、对空（Null）、未定义（Undefined）、Symbol（独一无二的值）。<br/>
引用数据类型：对象(Object)、数组(Array)、函数(Function)。





<br/><br/><br/>

### <h1 id="h2"> 2. 判断 JS 类型的方式 </h1>
typeof、
instanceof、
Object.prototype.toString.call()--[Object Array]、
constructor





<br/><br/><br/>

### <h1 id="h3"> 3. switch比if快 </h1>
 - 采用branch table索引优化
 - 使用全等操作符，不会类型转换损耗
[JavaScript的ifelse和switch对比](https://wenku.baidu.com/view/7dfd5b7374232f60ddccda38376baf1ffc4fe3e6.html)





<br/><br/><br/>

### <h1 id="h4"> 4. 循环有多少种 </h1>
[笔记](https://www.cnblogs.com/lgyong/p/12704162.html)

[其他1](https://www.cnblogs.com/dianzan/p/12898882.html)

[其他2](https://blog.csdn.net/haochuan9421/article/details/81414532/)





<br/><br/><br/>

### <h1 id="h5"> 5. 描述一下cookies，sessionStorage和localStorage的区别？ </h1>





<br/><br/><br/>

### <h1 id="h6"> 6. JS 中的主要有哪几类错误 </h1>
  JS有三类的错误:
  加载时错误：加载web页面时出现的错误(如语法错误)称为加载时错误，它会动态生成错误。
  运行时错误：由于滥用html语言中的命令而导致的错误。
  逻辑错误：这些错误是由于对具有不同操作的函数执行了错误的逻辑而导致的





<br/><br/><br/>

### <h1 id="h7"> 7. 栈和堆的区别？ </h1>
  栈（stack）：由编译器自动分配释放，存放函数的参数值，局部变量等；
  堆（heap）：一般由程序员分配释放，若程序员不释放，程序结束时可能由操作系统释放。





<br/><br/><br/>

### <h1 id="h8"> 8. call和apply </h1>
  两个都是硬绑定，apply参数是数组，所以多参数传apply,少传call

  ```
  let arr = [10, 22, 39, 18]
  Math.max.call(null, arr[0]) // NaN  call不传是就是null环境
  Math.max.apply(null, arr) // 39  apply不传是就是window
  
  1 call的语法：函数名.call(obj,参数1,参数2,参数3……); 
  2 apply的语法：函数名.apply(obj,[参数1,参数2,参数3……]); 
  ```





<br/><br/><br/>

### <h1 id="h9"> 9. 数组 </h1>

push/unshift<br/>
pop/shift<br/>
<br/>
splice<br/>
slice<br/>
concat<br/>
split<br/>
<br/>
find()<br/>
fill()<br/>
flat()<br/>
includes<br/>





<br/><br/><br/>

### <h1 id="h10">10. ES6</h1>

new Promise<br />
let/const<br />
模板字面量：后台删除某项<br />
箭头函数(this永远来自其上下文,普通函数是运行的上下文收隐式和硬绑定影响)<br />
解构：用于接口返回、表单接受、函数参数<br />
扩展运算符（扩展方法）<br />
includes/for...of/filter/new Set/map/find/<br />





<br/><br/><br/>

### <h1 id="h11"> 11. 闭包 </h1>
[笔记](https://yoogh.github.io/blogs/view/js/js-closure.md)

（vue里面的data）；外部需要访问内部函数的变量
 柯里化(15)

http://192.168.31.93/blogs/



<br/><br/><br/>

### <h1 id="h12"> 12. [防抖节流](https://blog.csdn.net/m0_48166663/article/details/121144995) </h1>
- 防抖：任务频繁触发的情况下,只有任务触发的间隔超过指定间隔的时候,任务才会执行（登陆，模糊查询，页面跳转）-- setTiomeout
- 节流：当某个操作是连续性执行的时候，我们通过某种方式，降低该操作的执行频率(吸顶(配合transform和transition)，顶部导航栏吸顶) -- setInterval





<br/><br/><br/>

### <h1 id="h13"> 13. 页面到服务器输入流程 </h1>
 1.DNS域名解析；

 2.建立TCP连接； 

 3.http请求；

 4.服务器处理相关的请求；

 5.返回响应的结果；

 6关闭TCP连接；

 7.浏览器解析HTML；

 8.浏览器渲染

[参1](https://blog.csdn.net/qq_51447436/article/details/124538265)

[参2](https://www.cnblogs.com/bkhdd/p/13877467.html)





<br/><br/><br/>

### <h1 id="h14"> 14. 深浅拷贝方法（深拷贝数据类型是不是一样) </h1>

[笔记](https://yoogh.github.io/blogs/view/js/js1.md)

[浅拷贝的几种方法：JSON、Object.assign、concat、slice](https://www.cnblogs.com/hyns/p/12405328.html)





<br/><br/><br/>

### <h1 id="h15"> 15. [继承的方法有多少种](https://www.cnblogs.com/gwf93/p/10384352.html) </h1>

class<br/>
prototype<br/>





<br/><br/><br/>

### <h1 id="h16"> 16. 原型链（https://www.cnblogs.com/manhuai/p/14281967.html）</h1>





<br/><br/><br/>

### <h1 id="h17"> 17. AMD和CMD的区别 </h1>
[AMD和CMD的区别](https://blog.csdn.net/qq_38912819/article/details/80597101?ivk_sa=1024320u)





<br/><br/><br/>

### <h1 id="h18"> 18. 什么是柯里化？ </h1>
 > 接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数(省市区)





<br/><br/><br/>

### <h1 id="h19"> 19. JS怎么实现一个类，怎么实例化这个类 </h1>
Class
构造函数





<br/><br/><br/>

### <h1 id="h20"> 20. JS为什么要区分微任务和宏任务 </h1>
[来源](https://www.zhihu.com/question/316514618/answer/2446634118)<br/>
微任务的出现，使得宏任务执行完，到浏览器渲染之前，可以在这个阶段插入任务的能力<br/>
JS把异步分为宏任务和微任务，微任务的优先级要比宏任务的优先级高，同步任务js主线程，异步委托给宿主，主线程执行完会调任务队列

- 宏任务（macrotask）又称为 task，宏任务是由宿主发起的
如：异步Ajax请求、setTimeOut、setInterval、文件操作等

- 微任务（microtask）又称为 jobs，微任务是由 JS 本身发起
如：Promise.then、Promise.catch、process.nextTick等(Promise是同步，then和catch是异步)


[例子js](./view/js-task.js)
[例子html： 宏任务和微任务](./view/js-task.html)
[Javascript 同步,异步:微任务和宏任务](https://blog.csdn.net/m0_57135756/article/details/124690260)<br/>
[宏任务与微任务](https://www.jianshu.com/p/334b0e40b4dd)






<br/><br/><br/>

### <h1 id="h21"> 21. JS延迟加载的方式有哪些？ </h1>





<br/><br/><br/>

### <h1 id="h22"> 22. 你如何组织，优化自己的代码？(5分题) </h1>
首先分享有没有可用的组件，有的话就直接引用，减少开发时长和空间也能加快资源加载
对图片进行压缩，





<br/><br/><br/>

### <h1 id="h23">23. prototype</h1>
https://zhuanlan.zhihu.com/p/113362285
https://blog.csdn.net/weixin_60684791/article/details/121416611





<br/><br/><br/>

### <h1 id="h24"> 24. [垃圾回收机制](https://blog.csdn.net/weixin_44653493/article/details/124665921) </h1>
函数作用域或块作用域执行完成就会释放内存, 全局变量直到浏览器关闭或应用关闭
回收方式： 标记清除、引用计数(低版本的浏览器)





<br/><br/><br/>

### <h1 id="h25"> 25. JS为什么万物都是对象 </h1>

基本类型可以new出来或constructor，数组是对象继承的；但null和undefined就不是对象





<br/><br/><br/>

### <h1 id="h26"> 26. eatchart（等比例缩放） </h1>





<br/><br/><br/>

### <h1 id="tm"> 题目 </h1>
[函数优先](https://blog.csdn.net/L2395183536/article/details/120768181)





了解JavaScript基本数据类型（如String、Number、Boolean、Object、Null、Undefined）以及对应数据类型字面量表达式，能够正确应用基本数据类型进行JS编程。*
熟悉JavaScript语法结构，熟悉常用的JavaScript内置对象（Array、Date、Math、RegExp、Window、Navigator、Screen、History、Location）以及api，了解Json、JsonP、Ajax原理，能够使用JavaScript进行前端异步编程。
掌握JavaScript的Scope、Closure、Prototype编程技能，能够使用原型继承进行面向对象编程。
掌握JavaScript模块化设计、类库封装技能，了解ES6、TS(Generator、Promise)等OOP特性，能够进行前端基于JavaScript的控件开发。
理解JavaScript的内存和事件原理（如V8、webkit等），能够定位和分析内存溢出、页面加载慢等问题并优化。



