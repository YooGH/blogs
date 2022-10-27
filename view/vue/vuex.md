> vuex 状态管理器，或者是一个curd管理数据变化的js仓库。

1. <a href="#h1"> main.js </a><br/>
2. <a href="#h2"> store.js </a><br/>
3. <a href="#h3"> state  </a><br/>
4. <a href="#h4"> 方法  </a><br/>
5. <a href="#sz"> 实战搭建步骤 </a><br/>
5. <a href="#ck"> 参考 </a><br/>







<br/><br/><br/><br/>

<h1 id="h1"> main.js </h1>
> 一般在根目录main.js全局引入用prototype

```
import store from './store'
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

```





<br/><br/><br/><br/>

## <h1 id="h2"> store.js </h1>

- state相当于data
- getters相当于computed

- mutations(同步)
- action(异步)相当于methods（更新state，还是通过commit调用mutations）

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

## <h1 id="h3"> state </h1>

1. 直接调用：this.$store.state.变量<br/><br/>

2. 组件局部调用
> 一级(二级命名modules,要加***namespaced: true***,直接获取this.$store.state.二级分包名称.二级分包state变量)

  <br/>
  - 引入方法1--mapState('二级分包名称', [映射state变量])

      ```
      import {mapState} from 'vuex'
      computed: {
      　　...mapState('二级分包名称',[变量,变量])
      }
      ```

  <br/>
  - 引入方法2--createNamespacedHelpers
    <br/>  ①. 正常

      ```
      import {createNamespacedHelpers} from 'vuex'
      const {
          mapState,
          mapGetters
      } = createNamespacedHelpers(二级分包名称)
      computer: {
      　　...mapState([变量,变量]) // 不用引入方法1加分包名称
      }
      ```
      
    <br/> ②. createNamespacedHelpers

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

## <h1 id="h4"> 方法 </h1>
**mutations**:&nbsp;同步用this.store.commit(′方法名′,参数); 局部引入...mapMutations(['方法名'])

**actions**:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;异步用this.store.dispatch('方法名',参数); 局部引入...mapActions(['方法名'])






<br/><br/><br/><br/>

## <h1 id="sz"> 实战搭建步骤 </h1>
文件：vuex-test.7z
版本：vue2,vue-router3,vuex3

1. 脚手架``npm install -g @vue/cli``
2. 创建vue``vue create 项目名称``
3. 搭建两个页面
       ①. 安装：npm install --save vue-router@3  （vue2中使用的vue-router是3版本，同理vue3中安装4版本的vue-router ）
       ②. 创建router文件：router-index.js（代码1）,设置main和App.vue(代码2)
       ③. 创建页面文件: view--page1.vue; view--page1.vue(代码3)
4. 创建vuex
       ①. 安装：npm install vuex@3
       ②. 创建vuex文件：store-index.js（代码4）,设置main(代码5)
       ③. 直接vuex应用（代码6）--this.$store['state'/'commit'/'dispatch']
       ③. 引入vuex应用（代码7）--映射->import {mapState, mapMutations, mapActions} from 'vuex'
       ③. 二级vuex应用（代码8）--namespaced: true(store-user.js)
       ③. 二级vuex应用2（代码9）--import {createNamespacedHelpers} from 'vuex'('page4.vue')








<br/><br/><br/><br/>

## <h1 id="ck"> 参考 </h1>

[vuex](https://www.cnblogs.com/lgyong/p/10641363.html)

关于this.setState()的那些事https://www.jianshu.com/p/a883552c67de

正确使用state(状态）:https://blog.csdn.net/zsy_snake/article/details/80860167

vuex中mutations为什么要写成同步方法？https://www.jianshu.com/p/392cb1d0a301

Vuex的五个核心概念：https://www.cnblogs.com/y896926473/p/6709733.html
