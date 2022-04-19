#Vue

1. 生命周期
```
  beforeCreate,created（做页面权限判断；可以用于页面请求）
  beforeMount,mounted（方法）
  beforeUpdate,updated（数据变动）
  beforeDestroy,destroyed（页面缓存不触发，用路由钩子beforeRouteLeave）
```
2. 指令

   ```
   v-for  v-if  v-show v-on v-bind  v-model
   ```

3. 组件传值

   ```
   - vuex
   - $ref
   - emit/props
   - location
   ```

4. data()为什么是对象: 组件要复用的，data需要隔离开来，闭包

5. v-for和v-if
   v-show和v-if（show是初始渲染消耗，之后通过样式display来展示，而if是判断是否需要渲染，操纵dom元素）

6. 子组件和父组件的生命周期顺序

# vuex
① 基本(响应的，不能直接更改，)

```
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    modules,
})
- state相当于data

- getters相当于computed

- mutations同步用this.store.commit(′方法名′,参数)

- actions异步用this.store.dispatch('方法名',参数) | modules
```

② vuex刷新数据
[数据没了](https://www.jb51.net/article/160918.htm)
localstorage/(2)vuex-persistedstate/(3)cookie
③ 引入方法

- ```
  import {mapState,} from 'vuex'
  ```

  
  


# 路由
①. 两种模式
```
- : hash, history(默认hash)
- hash： 1.后面带#；2.hTTP请求中对后端不影响，不会重新加载页面；3.兼容性好（）
- history: 1.兼容性不好（pushState()和replaceState()); 2.路径要和后端一致
```
[原理](https://blog.csdn.net/qq_38912819/article/details/80636195)

②. 传值区别

- params / query区别: https://www.cnblogs.com/lsy0403/p/8885658.html 
- query路由展示，需要路由的路径path; 
- params需要路由的名称name，不展示





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

11. es6（filter,find,map     ...，includes, 箭头函数，）

12. AMD和CMD的区别：https://blog.csdn.net/qq_38912819/article/details/80597101?ivk_sa=1024320u

13. call和apply

    ```
    let arr = [10, 22, 39, 18]
    Math.max.call(null, arr) // NaN  call不传是就是null环境
    Math.max.apply(null, arr) // 39  apply不传是就是window
    
    1 call的语法：函数名.call(obj,参数1,参数2,参数3……); 
    2 apply的语法：函数名.apply(obj,[参数1,参数2,参数3……]); 
    ```



    


​    









Webpack

1. webpack loader和plugin

webpack
git
vue2和vue3

http和https（https://www.cnblogs.com/wqhwe/p/5407468.html）



[面试八股文](https://zhuanlan.zhihu.com/p/416984200)