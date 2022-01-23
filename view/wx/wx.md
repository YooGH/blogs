1. <a href="#h1"> HTML </a>
2. <a href="#h2"> CSS </a>
3. <a href="#h3"> JS </a>
4. <a href="#h4"> more </a>



[mpvue](http://mpvue.com/)<br/>
[wepy](https://tencent.github.io/wepy/document.html#/)<br/>
[blogs](https://www.cnblogs.com/lgyong/p/9959023.html)<br/>


<br/><br/>
###  <h1 id="h1"> 1、HTML </h1>
- input组件的属性bindinput为小程序双向绑定（vue则为v-model）
- picker 自定义数组对象需两个属性配合（range和range-key）
- 请勿在 scroll-view中使用textarea、map、canvas、video组件;  换行：\n 在text组件中生效（如果在view里面要套个text）

- movable-view　　iphone控制点
- swiper　　　　　　轮播图
- scroll-view　　　　scroll
  ```
　　1.scroll-view 中的需要滑动的元素不可以用 float 浮动；
　　2.scroll-view 中的包裹需要滑动的元素的大盒子用 display:flex; 是没有作用的；
　　3.scroll-view 中的需要滑动的元素要用 dislay:inline-block; 进行元素的横向编排；
　　4.包裹 scroll-view 的大盒子有明确的宽和加上样式-->  overflow:hidden;white-space:nowrap;
  ```

<br/><br/>
###  <h1 id="h2"> 2、CSS </h1>
- CSS元素组件的清默认效果
  ```
  	button { margin: 0; padding: 0; line-height: normal; text-align: left; background: transparent; border-radius: 0; box-sizing: content-box; }
	button::after { border: 0; }
	input { min-height: 0; height: 0; }
	cover-view { line-height: 0/normal; overflow: visible; pointer-events; }
  ```
- 盒子（w3c标准盒模型 -- 宽高等于宽高,  IE盒模型 -- 宽高等于宽高 + padding + border）, 小程序button默认是IE盒模型
- 超小屏幕 手机 (<768px)       |       小屏幕 平板 (≥768px)       |       中等屏幕 桌面显示器 (≥992px)       |       大屏幕 大桌面显示器 (≥1200px)





<br/><br/>
###  <h1 id="h3"> 3、JS </h1>
- wx.navigateBack()当delta的值小于等于0时，都说放回上一层。(小程序基础库2.6.0)
- 减少setData:
  ```
  	①、canvas代替setData,
	②、数据不用展示时，不使用setData,用this.data.xx代
  ```




<br/><br/>
###  <h1 id="h4"> 4、more </h1>
- catchtap防止冒泡
  ```
	currentTarget vs target
	父元素事件子元素也能触发
	e.currentTarget.dataset
	e.target.dataset 点击子元素是没有数据的
  ```
- "tabBar"页面，跳转的其他页面是不关闭本页面的(第二次进入tabBar页面时，只执行onshow);
- 官方自带返回上一层是关闭本页面的(再次进入本层时，又重新开始执行onload - onshow - onready);
- globalData为内存。storage为缓存。即小程序退出globalData会清空，storage则不会。
  ```
　　关闭微信 或退出小程序太久时(相当于删了小程序重新搜索，但不清除缓存)  ==  开发工具中的ctrl + s
　　关闭微信 或退出小程序太久时：小程序的会被回收，之前只是隐藏的页面(onHide), onload会再次执行；
  	关闭微信 或退出小程序太久时：data和globalData的值会初始化
  ```
- phone5/6/7　　顶部导航64px = 128rpx ( 开发微信小程序时设计师可以用 iPhone6 作为视觉稿的标准。width=750rpx) (img1.jpg)
- wx的运行环境
  ```
  	IOS的webkit（苹果开源的浏览器内核）
	Android的X5（QQ浏览器内核）
	开发工具nw.js（C++实现的web转桌面应用）
	为什么wx不直接运行在浏览器（webview）中，而要绕过浏览器直接调用内核呢？因为运行在浏览器中的webapp是做不了监控的，而wx的表现是半native app，半web app,而native app与web app和一个很重要的区别就是native app 有自己的生命周期。
  ```

　　

