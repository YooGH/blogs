> vue2.0 不支持IE8及以下(Object.definepropey)
> vue3.0 不支持IE11及以下(Object.definepropey)



<br/><br/><br/>
1. [Vue(ES6)中的data属性为什么不能是一个对象？](https://blog.csdn.net/sinat_17775997/article/details/83757985)
> data是个对象存在浅拷贝，方法的话就有作用域



<br/><br/><br/>
2. [v-if与v-for不能放在同一级]https://blog.csdn.net/namechenfl/article/details/83987488
> v-for>v-if: v-for先渲染v-if后，v-if为false就摧毁元素，v-for又再次一边；(10数据，2个是false的话就要v-for执行3遍)
> 可以用computed过滤原数据，用computed的变量做数据绑定



<br/><br/><br/>
3. [computed和watch的区别]
> computed缓存
> watch不缓存



<br/><br/><br/>
4. Object.defineProperty  vs  Proxy

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
5. vue-resource 与 axios 区别？
axios比较成熟，官方对vue-resource停止更新
axios兼容后端http请求库



<br/><br/><br/>
6. v有那些指令? v-if和v-show的区别? v-on和v-bind缩写<br/>
v-model     v-for     v-if     v-show     v-on(@)<br/>

v-bind(:)     v-html     v-once<br/>



<br/><br/><br/>
7. v-router顺序<br/>
全局前置/钩子：beforeEach、beforeResolve、afterEach<br/>
路由独享的守卫：beforeEnter<br/>
组件内的守卫：beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave<br/>



<br/><br/><br/>
8. vuex是什么? 和其他有什么区别？五种属性？<br/>
①、状态管理插件<br/>
②、<br/>
③、State、 Getter、Mutation 、Action、 Module<br/>

（https://blog.csdn.net/qq_47272950/article/details/124807338）