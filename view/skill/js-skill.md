# JS

1.防抖节流（https://www.jianshu.com/p/c8b86b09daf0）

- 防抖： 触发函数后n秒内执行一次，不断触发重新开始（登陆，模糊查询，页面跳转）
- 节流：不断触发只执行一次(吸顶(配合transform和transition)，顶部导航栏)

2. 继承的方法有多少种(https://www.cnblogs.com/gwf93/p/10384352.html)

3. 深浅拷贝方法（深拷贝数据类型是不是一样） https://www.cnblogs.com/hyns/p/12405328.html

4. js为什么万物都是对象（基本类型可以new出来，数组是对象继承的）

5. 循环有多少种(https://www.cnblogs.com/dianzan/p/12898882.html)(https://blog.csdn.net/haochuan9421/article/details/81414532/)

6. 数组（push/unshift   pop/shift  splice  slice   concat   split）(find(), fill(), flat(), includes, )

7. 闭包（vue里面的data）

8. 原型链（https://www.cnblogs.com/manhuai/p/14281967.html）

9. eatchart（等比例缩放）

10. 页面到服务器输入流程： 1.DNS域名解析；2.建立TCP连接； 3.http请求；4.服务器处理相关的请求；5.返回响应的结果；6关闭TCP连接；7.浏览器解析HTML；8浏览器渲染

11. es6（includes, 箭头函数，解构，扩展运算符，new Set, for...of, filter, find, map     ...，）

12. AMD和CMD的区别：https://blog.csdn.net/qq_38912819/article/details/80597101?ivk_sa=1024320u

13. call和apply

    ```
    let arr = [10, 22, 39, 18]
    Math.max.call(null, arr) // NaN  call不传是就是null环境
    Math.max.apply(null, arr) // 39  apply不传是就是window
    
    1 call的语法：函数名.call(obj,参数1,参数2,参数3……); 
    2 apply的语法：函数名.apply(obj,[参数1,参数2,参数3……]); 
    ```
14. switch比if快
 - 采用branch table索引优化
 - 使用全等操作符，不会类型转换损耗
[JavaScript的ifelse和switch对比](https://wenku.baidu.com/view/7dfd5b7374232f60ddccda38376baf1ffc4fe3e6.html)


15. 什么是柯里化？

16. Js怎么实现一个类，怎么实例化这个类  
构造函数
    





