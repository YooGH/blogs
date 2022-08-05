项目：e:/ai_trao（用taro,hooks）
- [x] JSX(v-for, v-if, 方法, 响应)
- [x] hooks
- [x] 生命周期
- [x] 组件
- [ ] 路由
- [x] 状态






1. <a href="#h1"> 路由------ </a>
2. <a href="#h2"> redux------ </a>
3. <a href="#h3"> JSX </a>
4. <a href="#h4"> 生命周期 </a>
5. <a href="#h5"> 组件 </a>
6. <a href="#h6"> 框架搭建 </a>
7. <a href="#h7"> hooks </a>
8. <a href="#h8"> 路由 </a>
<br/><a href="#ck"> 参考 </a>





<br/><br/><br/><br/><br/><br/>



  
### <h1 id="h1"> 1. 路由：[在React中使用react-router-dom路由](https://www.jianshu.com/p/8954e9fb0c7e) </h1>
<br/><br/><br/>




<br/><br/><br/>

###  <h1 id="h2"> 2. 状态管理：redux </h1>
https://zhuanlan.zhihu.com/p/256297415?utm_source=wechat_session
<br/><br/><br/>




###  <h1 id="h3"> 3. JSX </h1>
 <br/>[React 组件条件渲染的几种方式（类似vue的v-if指令）](https://blog.csdn.net/qq_37034928/article/details/107119716)<br/>
  + 三元运算符
  + &&
  + 函数

 <br/>[v-for]()
  + {arrList.map(item => <View>ddd</View>)}

 <br/>设置data``import { useState } from 'react'; const [val, setVal] = useState('')``
<br/><br/><br/>



###  <h1 id="h4"> 4. 生命周期（will相当于vue的before） </h1>
- ComponentWillMount() // 组件挂载之前===vue的beforeMount

- ComponentDidMount() // 组件挂载完成之后出发===vue的mounted

- ComponentWillReceiveProps(nextProps) // 组件将要接收新的props

- shouldComponentUpdate(nextProps,nextState) // 通过返回值判断组件是否需要更新用于react优化，true更新，false不更新

- ComponentWillUpdate // 组件将要更新===vue的beforeUpdate

- ComponentDidUpdate // 组件更新完成===vue的updated

- ComponentWillUNmount // 组件将要卸载

- unmountComponentAtNode() // 卸载组件

[战神七小姐](https://www.jianshu.com/p/b659f9cd41c6)

### 按阶段分类
- 实例化阶段
首次使用一个组件类时会有getDefaultProps
对于组件类的所有后应用设有getDefaultProps
 + 1、getDefaultProps
 + 2、getInitialstate
 + 3 componentwillMount
 + 4、render
 + 5、componentDidMount
- 更新阶段存在期
 + 1.componentwillReceiveProps
 + 2.shouldComponentUpdate
 + 3.componentwillUpdate
 + 4.render
 + 5.componentDidUpdate
- 销毁&清理期
 + componentwillUnmount


<br/><br/><br/>
###  <h1 id="h5"> 5. 组件(hooks) </h1>
#### 父子传值
> 组件：引入后直接使用，不用像vue要components注册后使用
    父
    ```
    import Report from './components/report.jsx'
    <Report reportArray={reportArray} />
    ```

    子
    ```
    function Report(props) {
        console.log(props)
    }
    export default Report;
    Report.defaultProps = {
      reportArray: [],
    }
    ```
    <!-- 1. hooks => **Context** 上下文的作用就是对它所包含的组件树提供全局共享数据的一种技术。
    React Hooks之useRef、createRef、forwardRef（还没测） -->
<br/><br/><br/>



###  <h1 id="h6"> [框架搭建](https://taro-docs.jd.com/taro/docs/GETTING-STARTED) </h1>
```
<div id="reactContainer"></div>
let Hellow = React.createClass({
    getInitialState () {                            // 初始化
        return {opacity: 1.0};
    },
    componentDidMount () {                          // 类mounted
        setInterval(function (){
            let opacity = this.state.opacity;
            opacity -= .02;
            if(opacity < 0.1) {
                opacity = 1.0;
            }
            this.setState({opacity: opacity});
        }.bind(this),100)
    },
    render () {                                     // 组件视图部分
        return(
            <div style={{opacity:this.state.opacity}}>
                <h2>Hello {this.props.name}</h2>
            </div>
        )
    }
});
ReactDOM.render(
    <Hellow name='reactDemo'/>, document.getElementById('reactContainer')
)
```

=> ReactDOM.render(组件，挂载id) => React.createClass({getInitialState, componentDidMount, render })
<br/><br/><br/>



###  <h1 id="h7"> 7. hooks </h1>

> [参考项目](https://github.com/xiaohuwei/Tarodemo) <br/> [taro官网](https://taro-docs.jd.com/taro/docs/hooks)

> 页面生命周期
``import Taro, {useDidShow} from '@tarojs/taro'``


> globalData
[从原生小程序迁移过来？](https://nervjs.github.io/taro/docs/come-from-miniapp)

``globalData -> taroGlobalData``

``const app = Taro.getApp(); console.log(app.x)``


## hooks: v16.8 版本引入了全新的 API
所有的钩子都是为函数引入外部功能，所以 React 约定，钩子一律使用use前缀命名，便于识别。
```
useState() 状态钩子
useContext() 共享状态钩子(组件之间)
useReducer()
useEffect()
```
[文章](http://www.ruanyifeng.com/blog/2019/09/react-hooks.html?tdsourcetag=s_pctim_aiomsg)

<br/><br/><br/>


> 模板

```
import { useState } from 'react';
import { Block, Image, View, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './login.scss'

export default function Login() {
  const [status, setStatus] = useState(false);
  const [opacity, setOpacity] = useState(0.4);
  
  const nologin = () => {
       setOpacity(status ? 1.0 : 0.4) 
  }
  const loginFn = () => {

  }
  return (
    <Block>
      <Image
        className='logo-div'
        mode='cover'
        src=''
      ></Image>

      <Button
        className='login-btn'
        style={'opacity: ' + opacity + ';'}
        onClick={loginFn}
      >
          我要登录
        </Button>
        <View className='login-btn' onClick={nologin}>
          非法登录
        </View>
    </Block>

  )
}
```

> 组件



<br/><br/><br/>

<h1 id="h8">8. 路由</h1>

****

Redux 的三大核心概念为：Store，Action，Reducers：<br/>
Store：保存着全局的状态，有着 ”数据的唯一真相来源之称“。(state)getters<br/>
Action：发起修改 Store 中保存状态的动作，是修改状态的唯一手段。(mutations/actions)<br/>
Reducers：一个个的纯函数，用于响应 Action，对 Store 中的状态进行修改。<br/>
[Taro3搭建redux](https://www.cnblogs.com/Nyan-Workflow-FC/p/13529088.html)
1. taro按照redux``yarn add redux @tarojs/redux @tarojs/redux-h5  redux-logger``


<br/><br/>
[taro2使用Hooks版的Redux](https://segmentfault.com/a/1190000022164777)<br/>
[taro2项目](https://github.com/tuture-dev/ultra-club)<br/>
****



<br/><br/><br/>

### 参考
[Taro 小程序开发大型实战（一）：熟悉的 React，熟悉的 Hooks](https://blog.csdn.net/huan1043269994/article/details/107539593)
[微信小程序转 Taro](https://taro-docs.jd.com/taro/docs/taroize)