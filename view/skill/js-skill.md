1. <a href="h1">  [防抖节流](https://blog.csdn.net/m0_48166663/article/details/121144995)  </a>
2. <a href="h2">  [继承的方法有多少种](https://www.cnblogs.com/gwf93/p/10384352.html)  </a>
3. <a href="h3">  [深浅拷贝方法（深拷贝数据类型是不是一样](https://www.cnblogs.com/hyns/p/12405328.html)  </a>
4. <a href="h4">  js为什么万物都是对象（基本类型可以new出来，数组是对象继承的）  </a>
5. <a href="h5">  循环有多少种(https://www.cnblogs.com/dianzan/p/12898882.html)(https://blog.csdn.net/haochuan9421/article/details/81414532/) </a>
6. <a href="h6">  数组 </a>
7. <a href="h7">  闭包 </a>
8. <a href="h8">  原型链（https://www.cnblogs.com/manhuai/p/14281967.html） </a>
9. <a href="h9">  eatchart（等比例缩放） </a>
10. <a href="h10">  页面到服务器输入流程 </a>
11. <a href="h11">  es6 </a>
12. <a href="h12">  AMD和CMD的区别 </a>
13. <a href="h13">  call和apply </a>
14. <a href="h14">  switch比if快 </a>
15. <a href="h15">  什么是柯里化？ </a>
16. <a href="h16">  Js怎么实现一个类，怎么实例化这个类 </a>
17. <a href="h17">  ES6 </a>
18. <a href="h18">  介绍JavaScript的数据类型 </a>
19. <a href="h19">  判断 js 类型的方式 </a>
20. <a href="h20">  栈和堆的区别？ </a>
21. <a href="h21">  JS 中的主要有哪几类错误 </a>
22. <a href="h22"> JS为什么要区分微任务和宏任务 </a>
23. <a href="h23">  JS延迟加载的方式有哪些？ </a>
24. <a href="h24">  你如何组织，优化自己的代码？(5分题) </a>
25. <a href="h25">  描述一下cookies，sessionStorage和localStorage的区别？ </a>
26. <a href="h26">  prototype </a>
********************












###  <h1 id="h1"> 1. [防抖节流](https://blog.csdn.net/m0_48166663/article/details/121144995) </h1>
- 防抖： 触发函数后n秒内执行一次，不断触发重新开始（登陆，模糊查询，页面跳转）-- setTiomeout
- 节流：不断触发只执行一次(吸顶(配合transform和transition)，顶部导航栏吸顶) -- setInterval





<br/><br/><br/>

###  <h1 id="h2"> 2. [继承的方法有多少种](https://www.cnblogs.com/gwf93/p/10384352.html) </h1>





<br/><br/><br/>

###  <h1 id="h3"> 3. [深浅拷贝方法（深拷贝数据类型是不是一样](https://www.cnblogs.com/hyns/p/12405328.html) </h1>





<br/><br/><br/>

###  <h1 id="h4"> 4. js为什么万物都是对象（基本类型可以new出来，数组是对象继承的） </h1>





<br/><br/><br/>

###  <h1 id="h5">5. 循环有多少种(https://www.cnblogs.com/dianzan/p/12898882.html)(https://blog.csdn.net/haochuan9421/article/details/81414532/)</h1>





<br/><br/><br/>

###  <h1 id="h6">6. 数组</h1>
（push/unshift   pop/shift  splice  slice   concat   split）(find(), fill(), flat(), includes, )





<br/><br/><br/>

###  <h1 id="h7">7. 闭包</h1>
（vue里面的data）





<br/><br/><br/>

###  <h1 id="h8">8. 原型链（https://www.cnblogs.com/manhuai/p/14281967.html）</h1>





<br/><br/><br/>

###  <h1 id="h9">9. eatchart（等比例缩放）</h1>





<br/><br/><br/>

###  <h1 id="h10">10. 页面到服务器输入流程</h1>
 1.DNS域名解析；2.建立TCP连接； 3.http请求；4.服务器处理相关的请求；5.返回响应的结果；6关闭TCP连接；7.浏览器解析HTML；8浏览器渲染





<br/><br/><br/>

###  <h1 id="h11">11. es6</h1>
（includes, 箭头函数，解构，扩展运算符，new Set, for...of, filter, find, map     ...，）





<br/><br/><br/>

###  <h1 id="h12">12. AMD和CMD的区别</h1>
[AMD和CMD的区别](https://blog.csdn.net/qq_38912819/article/details/80597101?ivk_sa=1024320u)





<br/><br/><br/>

###  <h1 id="h13">13. call和apply</h1>
    ```
    let arr = [10, 22, 39, 18]
    Math.max.call(null, arr) // NaN  call不传是就是null环境
    Math.max.apply(null, arr) // 39  apply不传是就是window
    
    1 call的语法：函数名.call(obj,参数1,参数2,参数3……); 
    2 apply的语法：函数名.apply(obj,[参数1,参数2,参数3……]); 
    ```





<br/><br/><br/>

###  <h1 id="h14">14. switch比if快</h1>
 - 采用branch table索引优化
 - 使用全等操作符，不会类型转换损耗
[JavaScript的ifelse和switch对比](https://wenku.baidu.com/view/7dfd5b7374232f60ddccda38376baf1ffc4fe3e6.html)





<br/><br/><br/>

###  <h1 id="h15">15. 什么是柯里化？</h1>





<br/><br/><br/>

###  <h1 id="h16">16. Js怎么实现一个类，怎么实例化这个类</h1>
Class
构造函数





<br/><br/><br/>

###  <h1 id="h17">17. ES6</h1>
  new Promist<br/>
  let/const<br />
  模板字面量：后台删除某项<br />
  箭头函数<br />
  解构：用于接口返回、表单接受、<br />
  includes/for...of/filter<br />





<br/><br/><br/>

###  <h1 id="h18">18. 介绍JavaScript的数据类型</h1>
值类型(基本类型)：字符串（String）、数字(Number)、布尔(Boolean)、对空（Null）、未定义（Undefined）、Symbol（独一无二的值）。
引用数据类型：对象(Object)、数组(Array)、函数(Function)。





<br/><br/><br/>

###  <h1 id="h19">19. 判断 js 类型的方式</h1>
typeof、Object.prototype.toString.call()、instanceof、constructor





<br/><br/><br/>

###  <h1 id="h20">20. 栈和堆的区别？</h1>
栈（stack）：由编译器自动分配释放，存放函数的参数值，局部变量等；
堆（heap）：一般由程序员分配释放，若程序员不释放，程序结束时可能由操作系统释放。





<br/><br/><br/>

###  <h1 id="h21">21. JS 中的主要有哪几类错误</h1>
JS有三类的错误:
加载时错误：加载web页面时出现的错误(如语法错误)称为加载时错误，它会动态生成错误。
运行时错误：由于滥用html语言中的命令而导致的错误。
逻辑错误：这些错误是由于对具有不同操作的函数执行了错误的逻辑而导致的





<br/><br/><br/>

###  <h1 id="h22">JS为什么要区分微任务和宏任务</h1>
JS是单线程的，一些响应的需要微任务防止阻塞





<br/><br/><br/>

###  <h1 id="h23">23. JS延迟加载的方式有哪些？</h1>





<br/><br/><br/>

###  <h1 id="h24">24. 你如何组织，优化自己的代码？(5分题)</h1>
首先分享有没有可用的组件，有的话就直接引用，减少开发时长和空间也能加快资源加载
对图片进行压缩，





<br/><br/><br/>

###  <h1 id="h25">25. 描述一下cookies，sessionStorage和localStorage的区别？</h1>





<br/><br/><br/>

###  <h1 id="h26">26. prototype</h1>
https://zhuanlan.zhihu.com/p/113362285
https://blog.csdn.net/weixin_60684791/article/details/121416611