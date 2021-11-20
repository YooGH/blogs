# 微信web-view

##### 限制

- https
- 小程序后台添加web-view(业务域名)白名单
- 不能改小程序导航栏（ 客户端 6.7.2 版本开始，[`navigationStyle: custom`](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html) 对 [web-view](https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html) 组件无效）

(工具->详情->本地设置-> "不校验合法域名....")





###### 小程序传值

```
<web-view src="https://www.baidu.com?id=ddd&name=jack">
```



#### 嵌套h5接收和传回小程序

- 引入[sdk]('https://res.wx.qq.com/open/js/jweixin-1.3.2.js')

- 接收
- wx.miniProgram.navigateTo(方法和小程序一样只是在wx.navigateTo 间加多miniProgram)



[文档]('https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html')