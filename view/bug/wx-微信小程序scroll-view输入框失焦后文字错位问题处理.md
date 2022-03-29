微信小程序scroll-view输入框失焦后文字错位问题处理:在scroll-view标签中设置属性scroll-y="{{!focusFlag}}"，即当聚焦时，控制scroll-view不滚动即可解决错位问题

```
if(['blur'].includes(e.type)) {
  this.setData({
    focusFlag: true
  })
} else if(['focus'].includes(e.type)) {
  this.setData({
    focusFlag: false
  })
}
```
[参考](https://www.cnblogs.com/jaolo/p/12923200.html)