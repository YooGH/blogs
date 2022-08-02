### h5支付

#### 微信支付

1.判断环境主要微信和支付宝
```
export function getAppClient(obj) {
  const ua = window.navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    return 'weixin';
  } else if (ua.match(/AlipayClient/i) == 'alipayclient') {
    return 'alipay';
  } else {
    return 'other';
  }
}
```

2.微信支付需要openid，前端需要获取code给后端转化为openid

```
if (!this.GetQueryString('code')) {
  let currentUrl = encodeURIComponent(window.location.href);  // 为了跳转微信获取code后，微信跳转回来
  window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${this.appId}&redirect_uri=${currentUrl}&response_type=code&scope=snsapi_base&state=STATE&connect_redirect=1#wechat_redirect`; // appId为公众号id
} else {
  微信重定向回来拿到code
  this.code = this.GetQueryString('code');
}
```

3. GetQueryString方法如下

```
GetQueryString(name) {
  let url = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  let newUrl = window.location.search.substr(1).match(url);
  if (newUrl != null) {
    return unescape(newUrl[2]);
  } else {
    return false;
  }
},
```

4.拉起支付

```
weixinPayFn(wxSignMap) { // 后端创建订单接口后提供拉起信息wxSignMap
  let payData = {
    appId: wxSignMap.appId,
    nonceStr: wxSignMap.nonceStr,
    package: wxSignMap.package,
    paySign: wxSignMap.sign,
    signType: 'MD5',
    timeStamp: wxSignMap.timeStamp
  };
  window.WeixinJSBridge.invoke('getBrandWCPayRequest', payData, function(
    res
  ) {
    if (res.err_msg == 'get_brand_wcpay_request:ok') { // 支付回调
      // 使用以上方式判断前端返回,微信团队郑重提示：
      //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
    }
  });
}
```


#### 支付宝支付
后端提供跳转路径，前端只要用location.href=去承接，支付成功后端可以定性前端支付成功页面(前端提供支付成功页面就行)