1. <a href="#h1"> 小程序->h5 </a>
2. <a href="#h2"> h5跳回小程序 </a>
3. <a href="#h3"> web-view的bindmessage </a>





<br/><br/>
###  <h1 id="h1"> 1、小程序->h5 </h1>
> [web-view](https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html)的src属性加h5地址<br/>
> 参数拼接到路径后面<br/>
> h5地址需要到小程序添加业务域名<br/>

> **小程序**
```
wxml: 
<web-view src='{{webUrl}}' />

js: 
webUrl='https://www.baidu.com?id=123&name=哦吼'
```
> **h5**
```
this.$route.query.id
this.$route.query.name(或window.location获取参数)
```



<br/><br/>
###  <h1 id="h2"> 2、h5跳回小程序 </h1>
> 需要引入微信jsJDK，wx.miniProgram对应的方法跳转
```
npm install weixin-js-sdk


import wx from 'weixin-js-sdk';
wx.miniProgram.navigateTo({
  url: '/pages/index/index?id=666'
})
```



<br/><br/>
###  <h1 id="h3"> 3、web-view的bindmessage </h1>
> bindmessage（小程序后退、组件销毁、分享）才触发，可以通过接受回显数组最后一个拿到数据
> 需要引入微信jsJDK，wx.miniProgram.postMessage({ data });    对象数据都放在data,在data接受的
> 小程序在web-view页面bindmessage方法接受

> 小程序
```
```
wxml: 
<web-view src='https://www.abc.com' bindmessage="getDataFn" />
js: 
getDataFn(e) {
  let dataArr = e.detail.data.reverse(); // 数组反转
  console.log(dataArr[dataArr.length-1]); // 拿到最后一次传的数据
}
```
> h5
```
npm install weixin-js-sdk

import wx from 'weixin-js-sdk';
wx.miniProgram.postMessage({
  data: {
    id: 666,
    name: 'kkk',
    type: 'info'
  }
});
```




