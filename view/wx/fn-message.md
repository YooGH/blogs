### 微信小程序模板消息接口
> 后端完成，前端搞不来（小程序添加不了pi.weixin.qq.com业务域名）<br/>
> 去小程序创建模板，拿到模板id(功能->模板库：创建成功后，在功能->我的模板,查看id)<br/>
> 1. [后端获取token](https://api.weixin.qq.com/cgi-bin/token), 小程序添加不了业务域名(安全)<br/>
> 2. 发送模板

<br/><br/><br/>


> 1. 后端获取token

```
https://api.weixin.qq.com/cgi-bin/token (get)
参数：
grant_type: 'client_credential',
appid: '',  // 微信公众平台获取
secret: ''  // 微信公众平台获取
```

<br/><br/><br/>



> 2. 后端发送模板

```
https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send (post)
参数
jsonData = {
  access_token: token, // ②获取的token
  touser: 用户openid, // 前端传或后端数据库拿
  template_id: 模板id, // 小程序创建的模板id
  form_id: e.detail.formId, // (用户自动点击按钮id,线上或真机才能获取,有效期7天)
  page: "pages/index/index", // 用户收到推送后，点推送信息跳到小程序的页面
  data: { // 推送的信息（小程序创建的模板里设置格式）
    "keyword1": { "value": "测试数据一", "color": "#F00" },
    "keyword2": { "value": "测试数据二", "color": "#0F0" },
    "keyword3": { "value": "测试数据三", "color": "#00F" },
    "keyword4": { "value": "测试数据四", "color": "#0FF" },
  }
}

```
([发送失败原因之一form_id](https://blog.csdn.net/huningjun/article/details/79192759)： 用户自动点击按钮id只能使用一次；用户自动点击按钮id在7天后失效)








