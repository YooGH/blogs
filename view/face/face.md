1. 生命周期
beforeCreate,created（做页面权限判断；可以用于页面请求）
beforeMount,mounted（方法）
beforeUpdate,updated（数据变动）
beforeDestroy,destroyed（页面缓存不触发，用路由钩子beforeRouteLeave）

2. vuex
   ①

- state相当于data

- getters相当于computed

- mutations同步用this.store.commit(′方法名′,参数)

- actions异步用this.store.dispatch('方法名',参数) | modules
  ②
  vuex刷新数据
  [数据没了](https://www.jb51.net/article/160918.htm)
  （1）localstorage/(2)vuex-persistedstate/(3)cookie
  ③
  引入方法

- ```
  import {mapState,} from 'vuex'
  ```
  
- ```
  
  ```
  
- 
  
  

3. 组件传值

- vuex
- ref
- emit/props
- location


4. data()为什么是对象: 组件要复用的，data需要隔离开来，闭包

5. v-for和v-if
   v-show和v-if（show是初始渲染消耗，之后通过样式display来展示，而if是判断是否需要渲染，操纵dom元素）
   
6. 路由

- 两种模式: hash, history(默认hash)
- hash： 1.后面带#；2.hTTP请求中对后端不影响，不会重新加载页面；3.兼容性好（）
- history: 1.兼容性不好（pushState()和replaceState()); 2.路径要和后端一致

[原理](https://blog.csdn.net/qq_38912819/article/details/80636195)

- params / query区别: https://www.cnblogs.com/lsy0403/p/8885658.html 
- query路由展示，需要路由的路径path; 
- params需要路由的名称name，不展示

7. 子组件和父组件的生命周期顺序





#### JS

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
11. es6（filter,find,map     ...，includes, 箭头函数，）
12. AMD和CMD的区别：https://blog.csdn.net/qq_38912819/article/details/80597101?ivk_sa=1024320u





#### CSS

1. iphoneX及以上苹果底部横条 小程序（wx.getSystemInfo -> safeArea.bottom与可视区相减）

2. (两边固定，中间自适应)[https://blog.csdn.net/lemaktub/article/details/107138319]
- ***flex***: 父--display: flex;   左右两边--flex 0 0 100px;   中--flex: 1;padding: 0 100px;box-sizing: border-box;

- ***position***: 父--position: relative;   左右两边--position: absolute;top: 0;left/right: 0; width: 100px;   中--width: 100%;padding: 0 100px;box-sizing: border-box;
- ***float***: 父--清浮动；左右两边--float: left/right; 中间: width: 100%;padding: 0 100px;box-sizing: border-box;    （中间元素标签放最后）
- ***table***


3. em相对于父元素(设置font-size)，rem相对于根元素（html）
4. 选择器排序： id选择器 > 类选择器 > 标签选择器
5. 自适应高度https://jingyan.baidu.com/article/37bce2bec2171c5003f3a221.html





Webpack

1. webpack loader和plugin

webpack
git
vue2和vue3

http和https（https://www.cnblogs.com/wqhwe/p/5407468.html）

