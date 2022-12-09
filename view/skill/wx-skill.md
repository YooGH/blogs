1.<a href="h1"> 生命周期  </a>
2.<a href="h2"> 小程序常用的几种跳转方式  </a>
3.<a href="h3"> 小程序页面间有哪些传递数据的方法  </a>
4.<a href="h4"> rpx和px转化  </a>
5.<a href="h5"> 如何阻止小程序的事件冒泡？  </a>
6.<a href="h6"> 小程序的双向绑定和Vue哪里不一样？  </a>
7.<a href="h7"> 小程序的发布流程  </a>
********************


生命周期 </a>







<br/><br/><br/>

### <h1 id="h1"> 1.生命周期 </h1>
页面Page
onLoad: 页面加载(一个页面只会调用一次，可以在 onLoad 中获取打开当前页面所调用的 query 参数。)

onShow: 页面显示(每次打开页面都会调用一次。)

onReady: 页面初次渲染完成(一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。,对界面的设置如wx.setNavigationBarTitle请在onReady之后设置。详见生命周期)

onHide: 页面隐藏(当navigateTo或底部tab切换时调用。)

onUnload: 页面卸载

App
onLaunch,onShow,onHide,onError





<br/><br/><br/>

### <h1 id="h2"> 2.小程序常用的几种跳转方式 </h1>

navigateTo()
redirectTo()
navigateBack()
switchTab()
reLaunch()





<br/><br/><br/>

### <h1 id="h3"> 3.小程序页面间有哪些传递数据的方法 </h1>

globalData、本地缓存、路由带参数、页面栈（getCurrentPages()）、事件通信通道(EventChannel)





<br/><br/><br/>

### <h1 id="h4"> 4.rpx和px转化 </h1>

rpx转px：屏幕宽度/750

px转rpx：750/屏幕宽度





### <h1 id="h5"> 5.如何阻止小程序的事件冒泡？ </h1>
catchtap





### <h1 id="h6"> 6.小程序的双向绑定和Vue哪里不一样？ </h1>
在vue中通过v-modal,视图和逻辑的改变是同步的
但是在小程序中呢,data数据修改必须调用this.setData(),视图的更改需要通过input的bindinput获取数据




### <h1 id="h7"> 7.小程序的发布流程 </h1>




熟悉掌握小程序的基本目录结构、小程序的文件类型与小程序的基本响应式单位rpx、小程序核心组件，能够在指导下进行小程序开发。
熟悉掌握配置文件与全局配置文件、Page页面的生命周期、单向与简易双向数据绑定、列表渲染、小程序的MVVM模式、小程序的路由系统，能够独立进行小程序开发。
熟悉掌握自定义组件、组件与模板的区别、页面与组件的属性、组件的监听器，能够运用组件进行小程序开发。
深入理解小程序与服务端API通信、小程序的核心开放API、小程序的wx.request、异步编程async与await、ES6语法，并且能够搭建小程序基础架构。
精通小程序和服务端通信逻辑、setData的意义和特点、小程序渲染原理、能够优化小程序性能和小程序架构，实现多人共建能力。
