1. <a href="#"> map组件 </a>
2. <a href="#h1"> 获取当前地位 </a>
3. <a href="#h2"> 直接打开目标地图 </a>
4. <a href="#h3"> 两点的距离 </a>


<br/><br/>
### map组件
> [map组件文档](https://developers.weixin.qq.com/miniprogram/dev/component/map.html)

```
<map
  class="map-block"
  latitude="{{latitude}}"  // 纬度
  longitude="{{longitude}}" // 经度
  markers="{{markers}}" // 标签组
  scale="{{scale}}" // 缩放
  show-location="{{true}}" // 展示当前位置
  show-compass="{{true}}" // 展示指南针
>
```
> 


<br/><br/>
###  <h1 id="h1"> 2、获取当前地位 </h1>
> [wx.getLocation()文档](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getLocation.html)
> 需要在page.json配置说明
```
wx.getLocation({
 type: 'wgs84',
}).then(res => {
  console.log(res) // res.errMsg: "getLocation:ok"
  const latitude = res.latitude      // 纬度
  const longitude = res.longitude    // 经度
})
```
> [page.json](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#permission)
```
"permission": {
　　"scope.userLocation": {
　　　　"desc":"你的位置信息将用于小程序位置接口的效果展示"
　　}
}
```


<br/><br/>
###  <h1 id="h2"> 3、直接打开目标地图 </h1>
> [wx.openLocation()文档](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.openLocation.html)<br/>
> **onShow**可以监听地图开关
```
wx.openLocation({
 latitude,  // 必传
 longitude, // 必传
 name,      // 用于展示的地址
 scale: 18
})
```


<br/><br/>
###  <h1 id="h3"> 4、两点的距离 </h1>
> [路线规划（驾车/公交/步骑）api](https://lbs.qq.com/service/webService/webServiceGuide/webServiceRoute)
```
let [mode, from, to, key] = [
  'walking', // 方式(走路)
  `${this.data.latitude},${this.data.longitude}`, // 开始经纬度
  `${this.data.targetLatitude},${this.data.targetLongitude}`, // 目的地经纬度
  '微信地图后台申请的key' // 
]
wx.request({
  url: `https://apis.map.qq.com/ws/distance/v1/matrix/?mode=${mode}&from=${from}&to=${to}&key=${key}`,
  success: (res)=> {
    console.log(res)
    // console.log()
    let distance = res.data.result.rows[0]['elements'][0]['distance']
    let markers = that.data.markers;
    markers[0]['callout']['content'] = `距离${distance}m`
    that.setData({
      markers
    })
  }
})
```

