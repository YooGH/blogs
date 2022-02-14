### 获取key: [腾讯位置服务](https://lbs.qq.com/) -> 右上角的控制台 -> 应该管理 -> 我的应用

### 1. 腾讯地图跨域
[vue引入vue-jsonp实现跨域的方法](https://blog.csdn.net/u011200562/article/details/109225292)

[使用axios发送jsonp请求](https://www.jianshu.com/p/9d719dcdcbcf)自封装jsonp，当QQMAP问题,未解决没使用



### 2.  地点模糊搜索接口

> [关键词输入提示](https://lbs.qq.com/webservice_v1/guide-suggestion.html)



### 3. vue引入地图
1. 引入(腾讯没设置npm包)

```
 const script = document.createElement('script');
 script.type = 'text/javascript';
 script.src = `https://map.qq.com/api/gljs?v=1.exp&key=${this.key}&callback=initMap`;
 document.body.appendChild(script);
```

2. 初始化

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

3. 标签 [文本标记](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocLabel#5)

   > styles -> LabelStyle
   >
   > geometries -> LabelGeometry
   
   ```
   this.markerObj = new TMap.MultiMarker({
     map: this.newMap,
     styles: {
       // 点标记样式
       marker: new TMap.MarkerStyle({
         color: '#333',
         size: 12,
         offset: { x: 0, y: -30 }, //文字偏移属性单位为像素
         width: 20, // 样式宽
         height: 30, // 样式高
         anchor: { x: 0, y: 0 } // 描点位置
         // src: 'https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/markerDefault.png' // 标记路径
       })
     },
     geometries: [
       // 点标记数据数组
       {
         styleId: 'marker',
         content: `${this.locationInfo.title}`,
         properties: {
           title: 'marker'
         },
         position: new TMap.LatLng(lat, lng, 134) // 标记位置(经度，纬度，高度)
       }
     ]
   });
   ```
   





[地图开发文档](https://lbs.qq.com/webApi/javascriptGL/glGuide/glBasic)

[地图示例](https://lbs.qq.com/webDemoCenter/glAPI/glMap/mapAsync)

