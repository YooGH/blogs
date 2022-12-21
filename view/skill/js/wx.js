const wxList = [
  { id: 1, sort: 1, type: 'wx', question: '生命周期', answer: '页面Page：\nonLoad: 页面加载(一个页面只会调用一次，可以在 onLoad 中获取打开当前页面所调用的 query 参数。)\nonShow: 页面显示(每次打开页面都会调用一次。)\nonReady: 页面初次渲染完成(一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。,对界面的设置如wx.setNavigationBarTitle请在onReady之后设置。详见生命周期)\nonHide: 页面隐藏(当navigateTo或底部tab切换时调用。)\nonUnload: 页面卸载\n\nApp：\nonLaunch,onShow,onHide,onError'},
  { id: 2, sort: 2, type: 'wx', question: '小程序常用的几种跳转方式', answer: 'navigateTo()\nredirectTo()\nnavigateBack()\nswitchTab()\nreLaunch()'},
  { id: 3, sort: 3, type: 'wx', question: '小程序页面间有哪些传递数据的方法5', answer: 'globalData\n本地缓存\n路由带参数\n页面栈（getCurrentPages()）\n事件通信通道(EventChannel)'},
  { id: 4, sort: 4, type: 'wx', question: 'rpx和px转化', answer: 'rpx转px：屏幕宽度/750\npx转rpx：750/屏幕宽度'},
  { id: 5, sort: 5, type: 'wx', question: '如何阻止小程序的事件冒泡？', answer: 'catchtap\nreturn false'},
  { id: 6, sort: 6, type: 'wx', question: '小程序的双向绑定和Vue哪里不一样？', answer: '在vue中通过v-modal,视图和逻辑的改变是同步的\n但是在小程序中呢,data数据修改必须调用this.setData(),视图的更改需要通过input的bindinput获取数据'},
  { id: 7, sort: 7, type: 'wx', question: '小程序的发布流程', answer: ''},
]