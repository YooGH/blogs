1. <a href="#h1"> 生命周期--有哪些；常用的那些并且怎么应用；父子生命周期顺序;请详细说下你对vue生命周期的理解？ </a>
2. <a href="#h2"> 指令 </a>
  <br/>有那些指令；if和show的区别；on和bind的缩写；自定义
3. <a href="#h3"> 组件传值 </a>
  <br/>有那些；兄弟；
4. <a href="#h4"> vuex--是什么；5个属性或核心；刷新丢失怎么做 </a>
5. <a href="#h5"> router--模式；传值区别；守卫顺序;vue-router有哪几种导航钩子 </a>
6. <a href="#h6"> computed和watch的区别 </a>
7. <a href="#h7"> 双向绑定--原理(用什么模式)；ES5和ES6区别 </a>
8. <a href="#h8"> data为什么函数 </a>
9. <a href="#h9"> vue-loader是什么？使用它的用途有哪些？ </a>
10. <a href="#h10"> axios是什么？怎么使用？描述使用它实现登录功能的流程？ </a>

11. <a href="#h11"> vue中父组件如何触发子组件的函数，子组件如何触发父组件的函数 </a>
12. <a href="#h12"> 什么是虚拟DOM，与真实DOM有什么区别 </a>




> 生命周期、指令、组件传值、vuex、router
> vue2.0 不支持IE8及以下(Object.definepropey)
> vue3.0 不支持IE11及以下(Object.definepropey)






<br/><br/><br/>

###  <h1 id="h1"> 1.生命周期 </h1>

```
  beforeCreate,created（做页面权限判断；可以用于页面请求）
  beforeMount,mounted（方法）
  beforeUpdate,updated（数据变动）
  beforeDestroy,destroyed（页面缓存不触发，用路由钩子beforeRouteLeave）
```

子组件和父组件的生命周期顺序？ 先子后父

vue的实列从创建到销毁的整个过程





<br/><br/><br/>

###  <h1 id="h2"> 2.指令 </h1>
  v-model | v-for | v-if | v-show | v-on | v-bind | v-html | v-once
  v-if和v-show的区别?  
  v-on和v-bind缩写?   @和:  
  [v-if与v-for不能放在同一级]https://blog.csdn.net/namechenfl/article/details/83987488

    > v-for>v-if: v-for先渲染v-if后，v-if为false就摧毁元素，v-for又再次一边；(10数据，2个是false的话就要v-for执行3遍)
    > 可以用computed过滤原数据，用computed的变量做数据绑定；v-show和v-if（show是初始渲染消耗，之后通过样式display来展示，而if是判断是否需要渲染，操纵dom元素）

v-if 是“真正的”条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。



<br/><br/><br/>

###  <h1 id="h3"> 3.组件传值 </h1>
  ```
   - vuex
   - $ref
   - emit/props
   - location (watch"router")
  ```

  [兄弟组件](https://segmentfault.com/a/1190000020232224)
  1. vuex
  2. A组件emit, 父组件中间变量，B组件prop接受中间变量
  3. 建立Vue 实例模块 bus.js $on和$emit
  





<br/><br/><br/>

###  <h1 id="h4"> 4.vuex </h1>
状态管理插件
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

  ```
  import {mapState,} from 'vuex'
  ```

④. [更多](https://blog.csdn.net/qq_47272950/article/details/124807338)





<br/><br/><br/>

###  <h1 id="h5"> 5.路由 </h1>

①. 两种模式
```
- : hash, history(默认hash)
- hash： 1.后面带#；2.hTTP请求中对后端不影响，不会重新加载页面；3.兼容性好（）
- history: 1.兼容性不好（pushState()和replaceState()-HTML5支持的); 2.路径要和后端一致
```
[原理](https://blog.csdn.net/qq_38912819/article/details/80636195)

②. 传值区别  

- params / query区别: https://www.cnblogs.com/lsy0403/p/8885658.html 
- query路由展示，需要路由的路径path; 
- params需要路由的名称name，不展示

③. v-router顺序<br/>
全局前置/钩子：beforeEach、beforeResolve、afterEach<br/>
路由独享的守卫：beforeEnter<br/>
组件内的守卫：beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave<br/>

④. vue-resource 与 axios 区别？
axios比较成熟，官方对vue-resource停止更新
axios兼容后端http请求库


1.全局钩子
2.单个路由独享的
3.组件级的

$router和$route: 前者是全局的路由对象，后者是当前路由
https://www.jianshu.com/p/93fd5ff47d17





<br/><br/><br/>

###  <h1 id="h6"> 6.computed和watch的区别 </h1>
> computed缓存
> watch不缓存





<br/><br/><br/>

###  <h1 id="h7"> 7.双向绑定 </h1>
Object.defineProperty  vs  Proxy

```
{
  a: 1,
  b: {
    c: 2,
    d: 7
  }
}
```

> Object.defineProperty初始化data加入观察者（Observe）;除了观察a和b, 还要递归观察c和d

> Proxy只要代理a和b,一层





<br/><br/><br/>

###  <h1 id="h8"> 8.data为什么函数 </h1>
  > data是个对象存在浅拷贝，方法的话就有作用域  
  > data()为什么是对象: 组件要复用的，data需要隔离开来，闭包  
  [Vue(ES6)中的data属性为什么不能是一个对象？](https://blog.csdn.net/sinat_17775997/article/details/83757985)  





<br/><br/><br/>

###  <h1 id="h9"> 9.vue-loader是什么？使用它的用途有哪些？ </h1>
  解析.vue文件的一个加载器，跟template/js/style转换成js模块。
  用途：js可以写es6、style样式可以scss或less、template可以加jade等





<br/><br/><br/>

###  <h1 id="h10"> 10.axios是什么？怎么使用？描述使用它实现登录功能的流程？ </h1>




<br/><br/><br/>

###  <h1 id="h11"> 11.vue中父组件如何触发子组件的函数，子组件如何触发父组件的函数 </h1>
父组件中获取子组件函数：$children、$refs
子组件中获取父组件函数：$on




<br/><br/><br/>
###  <h1 id="h12"> 12.什么是虚拟DOM，与真实DOM有什么区别 </h1>
虚拟dom比真实dom体积小，操作是相对来说消耗性能少，虚拟Dom不会进行回流和重绘操作
真实Dom频繁的回流和重绘效率非常低
