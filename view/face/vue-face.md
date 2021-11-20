1. [Vue(ES6)中的data属性为什么不能是一个对象？](https://blog.csdn.net/sinat_17775997/article/details/83757985)
> data是个对象存在浅拷贝，方法的话就有作用域

2. [v-if与v-for不能放在同一级]https://blog.csdn.net/namechenfl/article/details/83987488
> v-for>v-if: v-for先渲染v-if后，v-if为false就摧毁元素，v-for又再次一边；(10数据，2个是false的话就要v-for执行3遍)
> 可以用computed过滤原数据，用computed的变量做数据绑定

3. [computed和watch的区别]
> computed缓存
> watch不缓存

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

5. vue-resource 与 axios 区别？
axios比较成熟，官方对vue-resource停止更新
axios兼容后端http请求库