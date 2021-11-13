> 1. <a href="#h1"> 框架安装 </a>
> 2. <a href="#h2"> 引入vuex </a>
> 3. <a href="#h3"> 引入router </a>
> 引入router有问题待解决

<br/><hr/><br/>


<h1 id="h1"> 1.安装 </h1>
> vue3.0脚手架需要node版本10以上
> 用yarn安装快些

```
yarn global add @vue/cli      	(1.更新最新的vue-cli脚手架）npm i -g @vue/cli
vue upgrade --next     			(2.目前不知道是干什么的)
yarn create @vitejs/app xxx		(3.用vite构建工具初始化项目xxx,xxx:自己命名的项目文件)ya
cd xxx							(4.进入项目文件夹)
yarn							(5.安装依赖)
yarn dev						(6.跑项目)
安装全家桶
yarn add vue-router@4.0.0 vuex@4.0.0 (npm info 包 -- 可以看包信息)
```

[官网教程]('https://v3.cn.vuejs.org/guide/installation.html')


<h1 id="h2"> 2.vuex </h1>
根目录下创建 src/store/index.ts

```
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

export interface State {
  count: number
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state() {
    return {
      count: 0
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})
```

main.ts 修改

```
import { store, key } from './store'
const app = createApp(App)
app.use(store, key)
app.mount('#app')
```

components/HelloWord.vue 修改

```
<template>
  <h1>{{ msg }}</h1>
  <button @click="inCrement"> count is: </button>
  <p>{{ count }}</p>
</template>

<script>
  import { defineComponent, computed } from 'vue'
  import { useStore } from 'vuex' // 加
  import { key } from '../store' // 加

  export default defineComponent({
    name: 'HelloWorld',
    props: {
      msg: {
        type: String,
        default: ''
      }
    },
    setup() {
      const store = useStore(key)

      const count = computed(() => store.state.count)

      return {
        count,
        inCrement: () => store.commit('increment')
      }
    }
  })
</script>
```

<h1 id="h3"> 3.router </h1>

建立 router/index.ts

```
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "HelloWorld",
        component: HelloWorld,
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "About" */ "../components/About.vue")
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), //链接process is not defined
    routes,
});

export default router;
```

components/About.vue 文件，内容如下

```
<template>
  <img
    alt="Vue logo"
    src="../assets/logo.png"
  />
  <h1>{{ msg }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'About',
  data() {
    return {
      msg: 'Hello Vue 3.0 + Vite!'
    }
  },
  setup() {}
})
</script>
```

再修改 main.ts

```
import router from "./router";
const app = createApp(App)
app.use(router)
app.mount('#app')
```











##### 参考
[vue3中文文档]('https://vue3js.cn/docs/zh/')

https://blog.51cto.com/u_15291238/2983150

https://www.cnblogs.com/hu308830232/p/14910763.html

https://blog.csdn.net/weixin_43720095/article/details/112766189  (便利脚手架)

[vue 3.0 初体验 （项目搭建）](https://www.cnblogs.com/yf-html/p/12753540.html)

[ Vue3+TypeScript 完整项目上手教程: ](https://blog.csdn.net/xgangzai/article/details/108878178)

[ 使用vue3.0和element实现后台管理模板: ](https://www.cnblogs.com/zhoulifeng/p/10123632.html)


## bug

process is not defined： https://blog.csdn.net/henryhu712/article/details/117897998

脚手架可先卸载2再安装3
```
npm  uninstall  vue-cli -g，全局卸载
安装vue3.0的脚手架： npm  install  -g  @vue/cli
```