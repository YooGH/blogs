const vueList = [
  { id: 1, sort: 1, type: 'vue', question: '生命周期', answer: 'beforeCreate,created（做页面权限判断；可以用于页面请求）\nbeforeMount,mounted（方法）\nbeforeUpdate,updated（数据变动）\nbeforeDestroy,destroyed（页面缓存不触发，用路由钩子beforeRouteLeave）', details: '子组件和父组件的生命周期顺序？'},
  { id: 2, sort: 2, type: 'vue', question: '指令 - 有那些指令；if和show的区别；on和bind的缩写；自定义', answer: '', },
  { id: 3, sort: 3, type: 'vue', question: '组件传值 - 有那些；兄弟；', answer: '', },
  { id: 4, sort: 4, type: 'vue', question: 'vuex--是什么；5个属性或核心；刷新丢失怎么做', answer: '', },
  { id: 5, sort: 5, type: 'vue', question: 'router--模式；传值区别；守卫顺序;vue-router有哪几种导航钩子', answer: '', },
  { id: 6, sort: 6, type: 'vue', question: 'computed和watch的区别', answer: '', },
  { id: 7, sort: 7, type: 'vue', question: '双向绑定--原理(用什么模式)；ES5和ES6区别', answer: '', details: 'Object.defineProperty -- 对象的属性进行拦截/代理对象属性   初始化data加入观察者（Observe）;除了观察a和b, 还要递归观察c和d\nProxy -- 对象的属性进行拦截/代理对象, 只要代理a和b,一层'},
  { id: 8, sort: 8, type: 'vue', question: 'data为什么函数', answer: 'data是个对象存在浅拷贝，方法的话就有作用域\ndata()为什么是对象: 组件要复用的，data需要隔离开来，闭包  \n[Vue(ES6)中的data属性为什么不能是一个对象？](https://blog.csdn.net/sinat_17775997/article/details/83757985)  ', },
  { id: 9, sort: 9, type: 'vue', question: 'vue-loader是什么？使用它的用途有哪些？', answer: '解析.vue文件的一个加载器，跟template/js/style转换成js模块\n用途：js可以写es6、style样式可以scss或less、template可以加jade等', },
  { id: 10, sort: 10, type: 'vue', question: 'axios是什么？怎么使用？描述使用它实现登录功能的流程？', answer: '', },
  { id: 11, sort: 11, type: 'vue', question: 'vue中父组件如何触发子组件的函数，子组件如何触发父组件的函数', answer: '父组件中获取子组件函数：$children、$refs\n子组件中获取父组件函数：$on', },
  { id: 12, sort: 12, type: 'vue', question: '什么是虚拟DOM，与真实DOM有什么区别', answer: '一个原生的JS对象去描述一个DOM节点（将HTML结构层映射成行为层JS的树型结构对象)\n虚拟dom比真实dom体积小，操作是相对来说消耗性能少，虚拟Dom不会进行回流和重绘操作\n真实Dom频繁的回流和重绘效率非常低', },
]