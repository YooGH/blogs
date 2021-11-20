- > 1. <a href="#h1"> 介绍 </a>
  > 2. <a href="#h2"> setup </a>
  > 3. <a href="#h3">  </a>
  >    <br/><a href="#ck"> 参考 </a>


  # compositionApi 组合式api

  > 新增setup,ref,toRefs

  ```
  import {
  	ref,
  	onMounted,
  	watch
  } from 'vue'
  ```

  


  <br/><br/><br/><br/>

  ###  <h1 id="h1"> 1.[介绍](https://v3.cn.vuejs.org/guide/composition-api-introduction.html) </h1>

  > **setup**：api运用于**setup**块里; 不能用this是因为在data/property/computed/methods解析前执行函数的
  >
  > **ref**：此api提供的一个响应式函数``const counter = ref(0)``(没了this)（扩展还有``reactive``函数的响应式）
  > ``{{ counter.value }} ``自动浅解析=> ``{{ counter }}``
  >
  > **生命周期**：在原来的名称前缀加**on**,小驼峰
  >
  > **watch**变成一个抛出的函数
  >
  > **computed**和watch一样

  ```
  import { ref, watch } from 'vue'
  const counter = ref(0)
  watch(counter, (newValue, oldValue) => {
    console.log('The new counter value is: ' + counter.value)
  })
  ```


  <br/><br/><br/><br/>

  ###  <h1 id="h2"> 2. setup </h1>

  > setup有两函数 -> setup(props, context){}


  #### props

  1. props对象，是响应式的

  ```
  export default {
    props: {
      title: String
    },
    setup(props) {
      console.log(props.title)
    }
  }
  ```

  2. props不能用ES6结构，可以通过setup函数里toRefs()实现(响应式结构)
     ``const { title } = toRefs(props)``
  3. props对象传入没有某属性时(如1.的porps.title传进来没有这个)，需要用``toRef(props, 'title')``进行响应

  > 有点像data.c没有这个属性，需要vue.set('c', '我是c')


  #### Context

  > 对象，三属性``attrs``?``slots``?``emit``
  > 不是响应式可以解构``setup(props, { attrs, slots, emit })()``

  <br/><br/>

  ### property

  > 执行 setup 时，组件实例尚未被创建

   - 无法访问：data, computed, methods
   - 可以访问：props,attrs,slots,emit

  <br/><br/>

  ### 函数渲染

  ```
  setup() {
    return () => h('div', [readersNumber.value, book.title]) // 需要显式调用 ref 的 value
  }
  ```

  <br/><br/><br/><br/>

  ###  <h1 id="ck"> 参考 </h1>

  [vue3打包，可通过export看看有什么函数抛出](https://cdn.jsdelivr.net/npm/vue@3.0.0-beta.14/dist/vue.global.js)

  [可参考新语法项目:vue如何使用TypeScript语法](https://www.cnblogs.com/yf-html/p/13723268.html)

  [Vue3 Hook 到底是啥黑魔法？](https://blog.csdn.net/qq_42241862/article/details/119209138)

  [在线写vue](https://sfc.vuejs.org/)
