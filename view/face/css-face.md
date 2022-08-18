1. <a href="#h1"> 文字超出 </a>
2. <a href="#h2"> 选择器级别； </a>
3. <a href="#h3"> 居中 </a>
4. <a href="#h4"> 清浮动 </a>
5. <a href="#h5"> 自适应高度 </a>
6. <a href="#h6"> 两边固定，中间自适应；左边固定，右边自适应 </a>
7. <a href="#h7"> iphoneX及以上苹果底部横条 </a>
8. <a href="#h8"> flex </a>
9. <a href="#h9"> 重绘和回流的概念 </a>
10. <a href="#h10">  </a>




<br/><br/><br/>

###  <h1 id="h1"> 1.文字超出 </h1>
+ 单行

```
overflow: hidden;
text-overflow: ellipsis;       // ...省略号
white-space: nowrap;        // 超出不换行

```

+多行

```
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;            // 多行溢出，需要-webkit-box，因为不是规范内的，有兼容问题
```



<br/><br/><br/>

###  <h1 id="h2"> 2.选择器级别 </h1>

选择器排序： id选择器 > 类选择器 > 标签选择器  

!import > 内联样式 > 选择器  





<br/><br/><br/>

###  <h1 id="h3"> 3.居中 </h1>
 - flex
 - transform:translate(-50%,-50%)
 - position: absolute; left: 0; margin: auto;



<br/><br/><br/>

###  <h1 id="h4"> 4.清浮动 </h1>
 - clear:both;
 - overflow:hidden;
 - :after/:before




<br/><br/><br/>

###  <h1 id="h5"> 5.自适应高度 </h1>
  [自适应高度](https://jingyan.baidu.com/article/37bce2bec2171c5003f3a221.html)




<br/><br/><br/>

###  <h1 id="h6"> 6.两边固定，中间自适应；左边固定，右边自适应 </h1>
(两边固定，中间自适应)[https://blog.csdn.net/lemaktub/article/details/107138319]

- ***flex***: 父--display: flex;   左右两边--flex 0 0 100px;   中--flex: 1;padding: 0 100px;box-sizing: border-box;

- ***position***: 父--position: relative;   左右两边--position: absolute;top: 0;left/right: 0; width: 100px;   中--width: 100%;padding: 0 100px;box-sizing: border-box;
- ***float***: 父--清浮动；左右两边--float: left/right; 中间: width: 100%;padding: 0 100px;box-sizing: border-box;    （中间元素标签放最后）
- ***table***



<br/><br/><br/>

###  <h1 id="h7"> 7.iphoneX及以上苹果底部横条 </h1>
 iphoneX及以上苹果底部横条 小程序（wx.getSystemInfo -> safeArea.bottom与可视区相减）




<br/><br/><br/>

###  <h1 id="h8"> 8.flex </h1>
	



<br/><br/><br/>

###  <h1 id="h9"> 9.重绘和回流的概念 </h1>
  回流(重排): 当浏览器必须重新处理和绘制部分或全部页面时，回流就会发生。  
  重绘: 不影响布局, 只是标签页面发生变化, 重新绘制。  
  注意: 回流(重排)必引发重绘, 重绘不一定引发回流(重排)。  





[ddd](https://mp.weixin.qq.com/s/DOSHry6HLYQk4o9V-DLMOQ)