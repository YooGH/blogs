﻿Webpack

1. webpack loader和plugin

webpack
git
vue2和vue3

http和https（https://www.cnblogs.com/wqhwe/p/5407468.html）



[面试八股文](https://zhuanlan.zhihu.com/p/416984200)




1. 如果需要手动写动画，你认为最小时间间隔是多久？
  多数显示器默认频率是60Hz，即1秒刷新60次，所以理论上最小间隔为1/60*1000ms ＝ 16.7ms  
2. 浏览器的渲染过程，DOM 树和渲染树的区别？
 - https://blog.csdn.net/Gbing1228/article/details/103575756





5. 如何封装一个弹窗组件，在以后的项目中都能使用
https://blog.csdn.net/weixin_44340914/article/details/106738672  
首先用组件props控制显隐,绝对定位做渐变的半透明背景，中间（flex）做可配置关闭、确定和取消的框，插槽做扩展  


6. function fn() {
  var arrFn = new Array();
  for(var i=0; i<5; i++) {
    arrFn[i]=function() {
      return i;
    }
  }
}
var box = fn();
for(var j=0; j<box.length; j++) { alert(box[j]()}


7. 
document.addEventListener('click', function(e){
  setTimeout(function() {
    console.log(this)
  }, 200)
  console.log(this)
}, false)