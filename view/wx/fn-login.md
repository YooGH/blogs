### 微信小程序登录


<br/><br/><br/>
#### openId获取
> 小程序小程序调wx.login()拿到code<br/>
> code发给后端，后端通过[微信接口](https://api.weixin.qq.com/sns/jscode2session)解析出数据   -- (api.weixin.qq.com小程序加不了白名单，安全问题放后端调)<br/>
> 数据用户唯一id,openid<br/>

<br/>
> 前端

```
wx.login({
  success (e) {
    console.log(e)
    let code = e.code;
    
  }
})
```
> 后端调(https://api.weixin.qq.com/sns/jscode2session)

```
wx.request({
  url: 'https://api.weixin.qq.com/sns/jscode2session',
  data: {
    appid: '',  // 微信公众平台获取
    secret: '', // 微信公众平台获取
    js_code: code, // 前端通过wx.logion获取的
    grant_type: 'authorization_code' // 固定写法
  },
  success(res) {
    let openid = res.data.openid
    console.log(openid)
  }
})
```





<br/><br/><br/>

### [获取手机号](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/getPhoneNumber.html)
> 通过<button>开发接口getPhoneNumber,点击触发拿到code
> 后端拿code调[getuserphonenumber](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/phonenumber/phonenumber.getPhoneNumber.html),参数code和access_token
> [access_token](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/access-token/auth.getAccessToken.html)需要后端用参数grant_type=client_credential&appid=APPID&secret=APPSECRET获取


  ```
  <button open-type="getPhoneNumber" bindgetphonenumber="getPhoneNumber">获取手机</button>
  getPhoneNumber() {
    // console.log('getPhoneNumber', e)
    wx.request({
      url: 'https://api.weixin.qq.com/cgi-bin/token',
      data: {
        grant_type: 'client_credential',  // 固定写死
        appid: '', // 微信公众平台获取
        secret: '', // 微信公众平台获取
      },
      success(res) {
        console.log(res.data.access_token)
        console.log(res.data.expires_in)
        wx.request({
          url: 'https://api.weixin.qq.com/wxa/business/getuserphonenumberaccess_token='+res.data.access_token+'&code='+e.detail.code,
          method: "POST",
          success(res) {
            console.log(res.data.access_token)
            console.log(res.data.expires_in)
          }
        })
      }
    })
  }
  },
  ```



<br/><br/><br/>
#### 用户信息
> 用户信息（头像，微信名，性别，地区，openid,unionid,appid）<br/>
> 通过的button属性open-type="getUserInfo", bindgetuserinfo方法回调获取<br/>


> 用户直接授权 => 获取用户信息<br/>
> 用户拒绝授权 => 提示用户授权，开启wx.openSetting授权界面，开启后获取用户信息 <br/>
> （授权时这些encryptedData、iv、rawData、signature、errMsg是要后端解密出来的加密信息，可以拿到openid、unionid、appid）<br/>
> wx.getUserInfo()只有授权过才能调用<br/>
> wx.openSetting使用授权，不能直接调用[官方推荐](https://developers.weixin.qq.com/community/develop/doc/000cea2305cc5047af5733de751008)     <br/>
> 打开授权过的权限``<button bindtap="openSetting">``<br/>
<br/>

```
wxml
<button open-type="getUserInfo" bindgetuserinfo='userInfo'>点击授权登录</button>

js
userInfo (res) {
  if (!res.detail.userInfo) {
    // 没有直接授权
    // 提示要授权，用户同意后，开启wx.openSetting()
    wx.showModal({
      title: '提示',
      content: '不授权信息拿不到数据，授权吧',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
          wx.openSetting({
            success (res) {
              wx.getUserInfo({
                success (res) {
                  console.log(res)
                  // 间接授权，用户基本信息
                  let userInfo = res.userInfo
                  console.log(userInfo)
                }
              })
            },
            fail (res) {
              console.log(res)
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  } else {
    // 直接授权,获取用户基本信息
    let userInfo = res.detail.userInfo;
    console.log(userInfo)
  }
}
```






