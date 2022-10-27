<h1>滚动到指定位置</h1>
> onPageScroll

HTML

```
<view class="report-nav-fixed {{isPadding ? 'opeacty-all' : ''}}">
  <view
    class="nav-item {{item.id === navId ? 'active' : ''}}"
    wx:for="{{navList}}"
    wx:key="id"
    catchtap="changeNav"
    data-id="{{item.id}}"
  >{{item.title}}</view>
</view>

<view style="height: 800rpx;">撑起高度</view>
<view class="report-nav {{!isPadding ? 'opeacty-all' : ''}}">
  <view
    class="nav-item {{item.id === navId ? 'active' : ''}}"
    wx:for="{{navList}}"
    wx:key="id"
    catchtap="changeNav"
    data-id="{{item.id}}"
  >{{item.title}}</view>
</view>
<view class="detail-title" style="height: 200rpx;">套餐详情</view>
<view style="height: 800rpx;">撑起高度</view>
<view class="ikown-title" style="height: 200rpx;">体检须知</view>
<view style="height: 800rpx;">撑起高度</view>

```

JS

```
function throttle(fn, delay = 500) {
  let timer = null
  return function () {
    if (timer) { return }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      clearTimeout(timer)
      timer = null
    }, delay)
  }
}
Page({
  navTop1: '',
  navTop2: '',
  /**
   * 页面的初始数据
   */
  data: {
    isPadding: false,
    navId: 1,
    navList: [
      {id: 1, title: '套餐详情',},
      {id: 2, title: '体检须知',},
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  onReady() {
    this.getDetailHeightFn();
  },
  getDetailHeightFn() {
    console.log('jjjjjjjjj')
    // setTimeout(()=>{

      let that = this;
      const query1 = wx.createSelectorQuery()
      query1.select('.detail-title').boundingClientRect()
      query1.exec(function(res){
        that.navTop1 = Math.ceil(res[0]['top'] - 48); // 减去导航栏高度，可以在动态计算出来
        console.log(that.navTop1)
      })
  
      const query2 = wx.createSelectorQuery()
      query2.select('.ikown-title').boundingClientRect()
      query2.exec(function(res){
        that.navTop2 = Math.ceil(res[0]['top'] - 48); // 减去导航栏高度，可以在动态计算出来
      })
    // }, 1000)

  },
  changeNav(e) {
    this.setData({
      navId: Number(e.currentTarget.dataset.id),
    })
    wx.pageScrollTo({
      scrollTop: this['navTop'+Number(e.currentTarget.dataset.id)]
    })
  },
  onPageScroll: throttle(function(e) {
    let that = this;
    const query1 = wx.createSelectorQuery()
    query1.select('.report-nav').boundingClientRect()
    query1.exec(function(res){
      if(res && res[0]) {
        let isPadding = Math.floor(res[0].top)<20
        that.setData({
          isPadding
        })
      }
    })
  }, 300),
})
```


css

```
.report-nav-fixed {
  top: -100rpx;
  opacity: 0;
  z-index: 9;
  position: fixed;
  padding: 16rpx 0;
  width: 750rpx;
  display: flex;
  justify-content: center;
  background: #fefefe;
  box-shadow: 0 4rpx 40rpx 0 rgba(0,0,0,0.1);
  transition: opacity 0.1s;
}
.report-nav {
  opacity: 0;
  padding: 16rpx 0;
  width: 750rpx;
  display: flex;
  justify-content: center;
  background: #fefefe;
  /* transition: all 0.1s; */
}
.opeacty-all {
  top: 0rpx;
  opacity: 1;
}
.nav-item {
  padding: 0 32rpx 16rpx;
  font-size: 32rpx;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.85);
  line-height: 48rpx;
}
.nav-item.active {
  position: relative;
  color: #4DA9FB;
}
.nav-item.active:after {
  content: '';
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 0;
  width: 80rpx;
  height: 4rpx;
  background: #4DA9FB;
  border-radius: 2rpx;
}
```
