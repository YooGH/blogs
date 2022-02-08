1. <a href="#h1"> 初始化 </a>
2. <a href="#h2"> 前端直接访问数据库 </a>
3. <a href="#h3"> 服务端（前端调云函数） </a>
4. <a href="#h4"> 功能 </a>
  <br/><a href="#ck"> 参考 </a>


<br/><br/><br/>  
### <h1 id="h1"> 1.初始化 </h1>
> 应用页面(App.vue的onLoaunch初始化)
  ```
  onLaunch() {
    wx.cloud.init()  // 云端初始化
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }
  }
  ```
> 页面
  ```
  const db = wx.cloud.database()            // 直接访问数据库 - 前端直接调
  const dbFn = wx.cloud;                    // 访问云函数(通过云函数访问数据库) - 云函数处理后间接调
  ```


<br/><br/><br/>
### <h1 id="h2"> 2.前端直接访问数据库 </h1>
> ①、增（add）
  ```
  db.collection(表名).add({
    data: 增加的对象
  }).then(res => {
    console.log('成功回调',res)
  }).catch(res => {
    console.log('失败回调',res)
  })
```
> ②、删（doc.remove）
  ```
  db.collection(表名).doc(数据_id).remove({
      success: function(res) {
          console.log('成功回调',res)
      }        
  })
```
> ③、改（doc.update）
  ```
  db.collection(表名).doc(数据_id).update({
      data: 更新数据对象,
      success: res => {
          console.log('成功回调',res)
      }
  })
  ```



<br/><br/><br/>
### <h1 id="h3"> 3.服务端 </h1>
```
// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  let data = await db.collection('table_three').aggregate().match({
    _id: event.type_id
  }).lookup({
    from: 'table_four',          // 链接的表
    localField: '_id',           // 主表字段
    foreignField: 'attribute_id',  // 链接的表的字段
    as: 'data_list',
  })
  .end().then(res => {
    return res;
  })
  .catch(err => {
    return err
  })
  return data;
}
```



<br/><br/><br/>
### <h1 id="h4"> 功能 </h1>
> ①. 1.排序--orderBy; 先按 progress 排降序（progress 越大越靠前）、再按 description 排升序（字母序越前越靠前）
  ```
  db.collection('todos')
  .orderBy('progress', 'desc')
  .orderBy('description', 'asc')
  .get()
  .then(console.log)
  .catch(console.error)

  ```
  
> ②. limit(), 可突破云函数默认返回最多100条，


> ③. 消息推送云小程序：http://www.imooc.com/article/287110

> ④. 二维码
https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/qr-code/wxacode.get.html 
<br/>https://developers.weixin.qq.com/miniprogram/dev/wxcloud/guide/openapi/openapi.html#云调用（ 云调用）

> ⑤. x.cloud.uploadFile?和?wx.cloud.downloadFile

> ⑥. 云：https://blog.csdn.net/qiushi_1990/article/details/96117294
数据库 -> 联表查询


### <h1 id="ck"> 参考 </h1>
[blogs](https://www.cnblogs.com/lgyong/p/13152133.html)
  

  

  
