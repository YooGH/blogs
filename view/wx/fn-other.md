1. <a href="#h1"> 小程序关闭自己 </a>
2. <a href="#h2"> 小程序跳转公众号 </a>
3. <a href="#h3"> 小程序跳转小程序 </a>
4. <a href="#h4"> 开发工具中不执行的函数 </a>
5. <a href="#h5"> 下来刷新api </a>






<br/><br/>
###  <h1 id="h1"> 1、小程序关闭自己 </h1>
> navigator组件，属性target为miniProgram，open-type为exit(exit退出，需targer="miniProgram"为前提)
```
<navigator target="miniProgram" open-type="exit"></navigator> 
```



<br/><br/>
###  <h1 id="h2"> 2、小程序跳转公众号 </h1>
> ①.[official-account](https://developers.weixin.qq.com/miniprogram/dev/component/official-account.html)
> ②.小程序和公众号同一主体（认证的公司或个人信息相同，可在设置->基本设置查看）
> ③.公众号要与小程序关联
> ④.小程序要开启“公众号关注组件”(设置->关注公众号)
```
<official-account></official-account>
```



<br/><br/>
###  <h1 id="h3"> 3、小程序跳转小程序 </h1>
> 跳转之前微信自带弹框，提示用户是否跳转
> [wx.navigateToMiniProgram](https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.navigateToMiniProgram.html) 属性envVersion(develop 开发版 | trial 体验版 | release 正式版)
> 目标appid需要，全局app.json的navigateToMiniProgramAppIdList添加跳转小程序的appid
```
wx.navigateToMiniProgram({
  appId: '',  // 目标appId
  path: 'pages/index/index?id=123', // 跳转页面路劲( 参数在`App.onLaunch`、`App.onShow` 和 `Page.onLoad`能获取 )
  extraData: {},                    //            ( 参数在`App.onLaunch`，`App.onShow`能获取 )
  envVersion: 'develop', // 
  success(res) {
    // 打开成功
    console.log(res)    
  }
})
```
> **app.json**
```
"window": {
  "backgroundTextStyle": "light",
  "navigationBarBackgroundColor": "#fff",
},
"navigateToMiniProgramAppIdList": ["目标appId"],
```



<br/><br/>
###  <h1 id="h4"> 4、开发工具中不执行的函数 </h1>
> wx.getSystemInfo回调的res.brand判断
```
wx.getSystemInfo({
    success: function (res) { 　　　　　// 当设备为'devtools',则开发工具
        if (!(res.brand == 'devtools')) {
           console.log('不是开发执行')
        }
         
    }
})
```



<br/><br/>
###  <h1 id="h5"> 5、下来刷新api </h1>
```
uni.showNavigationBarLoading()
uni.stopPullDownRefresh();  （onPullDownRefresh() {}）
```




