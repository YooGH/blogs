路由：

状态管理：redux

[框架搭建](https://taro-docs.jd.com/taro/docs/GETTING-STARTED)

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

### hooks
> [参考项目](https://github.com/xiaohuwei/Tarodemo) <br/> [taro官网](https://taro-docs.jd.com/taro/docs/hooks)

> 页面生命周期
``import Taro, {useDidShow} from '@tarojs/taro'``


> globalData
[从原生小程序迁移过来？](https://nervjs.github.io/taro/docs/come-from-miniapp)

``globalData -> taroGlobalData``

``const app = Taro.getApp(); console.log(app.x)``


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







### 参考
[微信小程序转 Taro](https://taro-docs.jd.com/taro/docs/taroize)