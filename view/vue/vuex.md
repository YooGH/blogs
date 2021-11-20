> vuex 状态管理器，或者是一个curd管理数据变化的js仓库。


<br/><br/><br/>
> <a href="#h1"> main.js </a><br/>
> <a href="#h2"> store.js </a><br/>
> 1. <a href="#h3"> state  </a>
> 2. <a href="#h4"> 方法  </a>
> <a href="#ck"> 参考 </a>

<br/><br/><br/>
<h1 id="h1"> main.js </h1>
一般在根目录main.js全局引入用prototype

```
vue.prototype.$store = store (import store from './store')
const app = new Vue({
　　store,
})
```


<br/><br/><br/><br/>
## <h1 id="h2"> store.js </h1>

> state相当于data    |    getters相当于computed    
>
>  mutations(同步)     |   action(异步)相当于methods
>

```
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({ 
state => 基本数据；存状态 调用方法this.store.state(不要直接修改this.store.sate,不会渲染)、this.$store.setState(对象)，setState异步的话用setState(函数)

getters => 从基本数据派生的数据 ；类似computed计算属性,监听值的变化

mutations => 提交更改数据的方法，同步！ ；更改状态，方法(推荐用同步) 调用mutations用commit同步 -> this.$store.commit('方法名',参数)

actions => 像一个装饰器，包裹mutations，使之可以异步。 ； （异步的mutations） 调用action用dispatch异步

modules => 模块化Vuex
})
```


<br/><br/><br/><br/>
## <h1 id="h3"> 1. state </h1>
> ①、直接调用：this.$store.state.变量
> ②、组件引入调用
一级(二级命名modules,要加***namespaced: true***)
```
import {mapState} from 'vuex'
computed: {
　　...mapState('二级命名',[变量,变量])
}
```
二级store  --  createNamespacedHelpers
```
import {createNamespacedHelpers, mapState, mapGetters} from 'vuex'
const {
    mapState: chatState,
    mapGetters: chatGetters
} = createNamespacedHelpers(分包)
```
```
二级获取主的state
rootState
```


<br/><br/><br/><br/>
## <h1 id="h4"> 2. 方法 </h1>
mutations和actions调用：
> 同步用this.store.commit(′方法名′,参数),
> 异步用this.store.dispatch('方法名',参数)



[vuex](https://www.cnblogs.com/lgyong/p/10641363.html)



<br/><br/><br/><br/>

## <h1 id="ck"> 参考 </h1>
关于this.setState()的那些事https://www.jianshu.com/p/a883552c67de

正确使用state(状态）:https://blog.csdn.net/zsy_snake/article/details/80860167

vuex中mutations为什么要写成同步方法？https://www.jianshu.com/p/392cb1d0a301

Vuex的五个核心概念：https://www.cnblogs.com/y896926473/p/6709733.html