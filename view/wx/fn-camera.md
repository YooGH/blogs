### 微信小程序摄像头授权

> wx.getSetting(权限获取) -> res.authSetting['scope.camera'](是否摄像头) -> 没有: wx.authorize

```
wx.getSetting({
  success(res) {
    if (!res.authSetting['scope.camera']) {
      wx.authorize({
        scope: 'scope.camera',
        success() {
          console.log('授权成功')
        },
        fail() {
          wx.showModal({
            content: '此功能需要授权摄像头',
            success() {
              wx.openSetting({
                success(res) {

                }
              })
            }
          })
        }
      })
    }
  }
})
```









