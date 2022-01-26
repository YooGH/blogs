<h1>组件</h1>

```
<!-- template -->
<template name="msgItem">
  <view>
    <text>Name: {{username}}</text>
    <text>Age: {{age}}</text>
    <text>Time: {{time}}</text>
  </view>
</template>
 
view text {
  display: block;
}
 
 
 
<!-- tReal -->
<import src="/demo/template/template.wxml" />
<template is="msgItem" data="{{...tData}}" />
 
data: {
  tData: {
    username: 'haha!',
    age: 18,
    time: '2019/2/19'
  }
}
 
@import "/demo/template/template.wxss";
```


```
<!-- components -->
json
{
  "component": true,
  "usingComponents": {}
}
 
html
<view class="wrapper">
  <view>这里是组件的内部节点</view>
  <slot></slot>
</view>
 
css
.wrapper {
  background: #ddd;
}
 
js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    myName: {
      type: String,
      value: '张兮兮'
    },
  },
 
  /**
   * 组件的初始数据
   */
  data: {
 
  },
 
  /**
   * 组件的方法列表
   */
  methods: {
 
  }
})
 
 
<!-- cReal -->
json
{
  "usingComponents": {
    "my-component": "/components/component-tag-name"
  }
}
 
html
<view>
  <my-component my-name="二哈">
    <!-- 这部分内容(下面的view)将被放置在组件 <slot> 的位置上 -->
     <view>这里是插入到组件slot中的内容</view>
  </my-component>
</view>　
```




<h1>子组件传父父组件（triggerEvent）[源](https://blog.csdn.net/qq_40190624/article/details/87972265)</h1>
> A子组件
**html**
  ``<button class="btn-getuserinfo" open-type='getUserInfo' bindgetuserinfo='getuserinfo' plain='true'></button>``
**js**
  ```
    getuserinfo(){  //登录授权
      // 取到点击的具体下标
      let selectIndex = this.data.baitiao[this.data.selectIndex]
      // 点击事件带参传入父级,登录成功点成功状态会父级
      this.triggerEvent('isLogin',false)
    }
  ```
> 父组件 （html:接收）
**html**
  ``<!-- 子组件 -->
<login bind:isLogin="goList"></login>``
**js**
  ```
    data: {
      sLogin: true,　　　　// 是否显示授权登录按钮
    },
    goList(e){//点击登录,获取子组件传过来的值,隐藏按钮，并跳转到用户列表页面
        console.log(e.detail.desc)//可以从e中得到传过来信息
        let sLogin = e.detail;
        this.setData({
          
          sLogin: sLogin
        })
          wx.navigateTo({
            url: '../lottery/lottery',
          })
    },
  ```