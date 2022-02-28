### 获取key: [腾讯位置服务](https://lbs.qq.com/) -> 右上角的控制台 -> 应该管理 -> 我的应用



<br/><br/><br/>
### 1. 腾讯地图跨域
方法1： [vue引入vue-jsonp实现跨域的方法](https://blog.csdn.net/u011200562/article/details/109225292)



方法2： [使用axios发送jsonp请求](https://www.jianshu.com/p/9d719dcdcbcf)自封装jsonp，返回QQMAP{}问题,未解决没使用

  ```
  jsonp(`https://apis.map.qq.com/ws/place/v1/suggestion?${longStr}callback=jsonCallBack`)
  function jsonp(url) {
    return new Promise((resolve, reject) => {
     // 这里的 "jsonCallBack" ，和调用的 jsonp 的 url 中的 callback 值相对应（见粗体字）
      window.jsonCallBack =(result) => {
        resolve(result)
      }
      const JSONP = document.createElement('script');
      JSONP.type = 'text/javascript';
      JSONP.src = url;
      document.getElementsByTagName('head')[0].appendChild(JSONP);
    });
  }
  ```

异步加载地图
```
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = `https://map.qq.com/api/gljs?v=1.exp&key=${this.key}&callback=initMap`;
  document.body.appendChild(script);
```

<br/><br/><br/>
### 2. 地点模糊搜索接口

> [关键词输入提示](https://lbs.qq.com/webservice_v1/guide-suggestion.html)


<br/><br/><br/>
### 3. vue引入地图
1. 引入(腾讯没设置npm包)

```
 const script = document.createElement('script');
 script.type = 'text/javascript';
 script.src = `https://map.qq.com/api/gljs?v=1.exp&key=${this.key}&callback=initMap`;
 document.body.appendChild(script);
```

2. 初始化
> [Map](https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap)

   ```
   let [lat,lng] = [23.125155698,113.287276349]
   var center = new TMap.LatLng(lat, lng);
       //定义map变量，调用 TMap.Map() 构造函数创建地图
       this.newMap = new TMap.Map(document.getElementById('geo-map'), {
       center: center, //设置地图中心点坐标
       zoom: 16 // 设置地图缩放级别值越大目标越大
       // pitch: 43.5, //设置俯仰角
       // rotation: 45 //设置地图旋转角度
   });
   ```

3. 标签 [文本标记MultiMarker](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocLabel#5)
   > styles -> LabelStyle
   >
   > geometries -> LabelGeometry
   
   ```
    if (this.markerObj) {
      this.markerObj.setMap(null);
      this.markerObj = null;
    }
    this.markerObj = new window.TMap.MultiMarker({
      map: this.newMap,
      styles: {
        // 点标记样式
        marker: new window.TMap.MarkerStyle({
          width: 17, // 样式宽
          height: 25, // 样式高
          offset: { x: 0, y: -20 } // 描点位置
        })
      },
      geometries: [
        {
          styleId: 'marker',
          // content: `${this.locationInfo.title}`,
          properties: {
            title: 'marker'
          },
          position: new window.TMap.LatLng(lat, lng, 0) // 标记位置(经度，纬度，高度)
        }
      ]
    });
   ```

4. 信息窗体 [InfoWindow](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocInfo)

  ```
  if (this.infoWindowObj) {
    this.infoWindowObj.setMap(null);
    this.infoWindowObj = null;
  }
  
  this.infoWindowObj = new window.TMap.InfoWindow({
    map: this.newMap,
    position: new window.TMap.LatLng(lat, lng, 0), //设置信息框位置
    offset: { x: 0, y: -20 }, // 描点位置
    content: `<div style="padding: 4px 0;font-size: 14px;color: #333;text-align: left;font-weight: bold;">标题</div><div style="font-size: 10px;color: #e0e0e0;">内容</div>`
  });
  ```

5. 点击地图回调
> [腾讯示例](https://lbs.qq.com/webDemoCenter/glAPI/glMarker/markerAdd)
  ```
  this.newMap.on('click', evt => { // this.newMap = TMap.Map()
    console.log('evt', evt.poi); // 返回经纬度和地标名称(evt.poi.name)
  });
  ```



<br/><br/><br/>
### 参考

[地图开发文档](https://lbs.qq.com/webApi/javascriptGL/glGuide/glBasic)

[地图示例](https://lbs.qq.com/webDemoCenter/glAPI/glMap/mapAsync)

[腾讯地图](https://map.qq.com/)



### 问题 
1. 标签和信息窗体
> 高度设置非0，移动地图会有所改变,固定不动设置为0``position: new window.TMap.LatLng(lat, lng, 0)``

