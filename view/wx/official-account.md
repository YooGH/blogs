差异


1. 微信h5请求接口，苹果手机需要https,安卓没限制（苹果如果没有https不会发送请求，也没有报错）

2. [JS-SDK](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html)
> 授权登录的回调，vue的hash模式，location.href会乱排，会变成如： https://www.a.com/?code=code&appId=appId/#/pages/index/index,需要location.href方法去重置，才能拉起JS-SDK

3. [此公众号并没有这些scope的权限 错误码10005](https://developers.weixin.qq.com/community/minihome/doc/000e48481c001879624a068f856400)
> 遇到问题是公众号的服务号年审过期

	1.使用的是订阅号，订阅号没有权限使用网页授权

	2.使用的是未认证的服务号

	3.网页授权回调域名填写错误

	4.scope参数顺序不对

	5.如果都排查了，可以留下您的APPID等官方大大核实。