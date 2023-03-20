1. <a href="h1">  文字超出  </a>
2. <a href="h2">  选择器级别  </a>
3. <a href="h3">  居中  </a>
3. <a href="h15">  换行  </a>
4. <a href="h4">  清浮动  </a>
5. <a href="h5">  自适应高度  </a>
6. <a href="h6">  两边固定，中间自适应；左边固定，右边自适应  </a>
7. <a href="h7">  iphoneX及以上苹果底部横条  </a>
8. <a href="h8">  flex  </a>
9. <a href="h9">  重绘和回流的概念  </a>
10. <a href="h10">  css中padding和margin区别  </a>
11. <a href="h11">  CSS 雪碧图的好处  </a>
12. <a href="h12">  position属性用于元素定位有几种方式，相对定位和绝对定位的区别？  </a>
13. <a href="h13">  有几种像素单位？em和rem有什么区别  </a>
14. <a href="h14">  如果需要手动写动画，你认为最小时间间隔是多久？  </a>
********************








<br/><br/><br/>

###  <h1 id="h1"> 1. 文字超出 </h1>
+ 单行

```
width: 宽度;                 // flex布局可以用flex: 0 0 宽度;
overflow: hidden;
text-overflow: ellipsis;    // ...省略号
white-space: nowrap;        // 超出不换行(no+wrap)

```

+ 多行

```
width: 宽度;
overflow: hidden;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;            // 多行溢出，需要-webkit-box，因为不是规范内的，有兼容问题
```

[例子](./view/css-cut.html)


<br/><br/><br/>

###  <h1 id="h2"> 2. 选择器级别 </h1>

选择器排序： id选择器 > 类选择器 > 属性选择器 > 标签选择器 > 通配符选择器


!import > 内联样式 > 选择器  

关系选择符``（后代，子， +, ~）``、伪类选择符、伪对象选择符


<br/><br/><br/>

###  <h1 id="h3"> 3. 居中 </h1>
 - flex => display: flex; justify-content: center; align-items: center;
 - position: absolute; top: 50%; left: 50%; margin: auto; transform:translate(-50%,-50%)
 - position: absolute; width: 100%; height: 100%; left: 0; top: 0; bottom: 0; right: 0; margin: auto;(子元素也会居中)


<br/><br/><br/>

###  <h1 id="h15"> 15. 换行 </h1>
中文： 这是英语书本
英文单词：this is a English text
字母：aaaaaaaaaaaaaaaaaaa

强制换行： word-wrap: break-word
word-break: 
normal：不拆分字母, 会拆分中文和英文单词
break-all：强制换行
keep-all：拆分英文单词，中文文本和字母不换行

[参考](https://blog.csdn.net/The_Light_/article/details/97618386)

<br/><br/><br/>

###  <h1 id="h4"> 4. 清浮动 </h1>
> 父级没有高度时，父级的高度是由子元素撑开的，但子元素浮动后，父元素的高度无法被撑开，所以需要清浮动；(父元素为0)
> 新加入的兄弟级标签，希望不受之前浮动元素的影响，则需要清浮动
 - 空标签(元素)间隔
 - :after/:before(伪元素)
 - clear:both;(只在block元素起作用，并且影响上下文元素)
 - overflow:hidden;(缺点：元素需要滚动不能用)
 - 父子都浮动（缺点: 父元素周围元素不换行）

[参考](https://www.jianshu.com/p/84e0e056a3e2)
[例子](./view/css-float.html)


<br/><br/><br/>

###  <h1 id="h5"> 5. 自适应高度 </h1>
  [自适应高度](https://jingyan.baidu.com/article/37bce2bec2171c5003f3a221.html)
  [flex](./view/css-sameHeight1.html) => 父: display: flex; | 左边: width: 宽度; | 右边： width: 宽度; height: 高度;
  [position](./view/css-sameHeight2.html) => 父: position:relative; | 左边: position:absulote; height: 100%; width: 宽度; | 右边： width: 宽度; margin-left: 左边宽度; height: 100px;(父级高度随右侧兼容，左侧高度设置100%继承父级)





<br/><br/><br/>

###  <h1 id="h6"> 6. 两边固定，中间自适应；左边固定，右边自适应 </h1>
(两边固定，中间自适应)[https://blog.csdn.net/lemaktub/article/details/107138319]

- ***flex***: 父--display: flex;   左右两边--flex 0 0 100px;   中--flex: 1;padding: 0 100px;box-sizing: border-box;

- ***position***: 父--position: relative;   左右两边--position: absolute;top: 0;left/right: 0; width: 100px;   中--width: 100%;padding: 0 100px;box-sizing: border-box;
- ***float***: 父--清浮动；左右两边--float: left/right; 中间: width: 100%;padding: 0 100px;box-sizing: border-box;    （中间元素标签放最后）
- ***vertical-align***: 父--text-align: center; display: block; 子都设置： display: inline-block; vertical-align: middle;（vertical-align需配合行内元素使用）
- ***table***





<br/><br/><br/>

###  <h1 id="h7"> 7. iphoneX及以上苹果底部横条 </h1>
 iphoneX及以上苹果底部横条 小程序（wx.getSystemInfo -> safeArea.bottom与可视区相减）




<br/><br/><br/>

###  <h1 id="h8"> 8. flex </h1>





<br/><br/><br/>

###  <h1 id="h9"> 9. 重绘和回流的概念 </h1>
  回流(重排): 当浏览器必须重新处理和绘制部分或全部页面时，回流就会发生。  
  重绘: 不影响布局, 只是标签页面发生变化, 重新绘制。  
  注意: 回流(重排)必引发重绘, 重绘不一定引发回流(重排)。  

重绘(repaint)：当元素样式改变而不影响元素在页面中的位置时，浏览器对元素进行更新这就是重绘；
回流(reflow)：当元素样式改变而影响到其在页面中的位置和大小时，浏览器将对页面重新计算渲染树，这就是回流
二者之间的关系：发生回流一定会触发重绘，但是触发重绘不一定会发生回流；
举个简单的例子：
因为元素的颜色的改变会导致元素的样式改变此时就触发了重绘，但是其并没有影响其在页面的位置和大小所以就没有触发回流；
但是元素通过定位或者改变大小导致样式的改变此时即符合重绘的定义也符合回流的定义；因而即触发了重绘又触发了回流；
DOM 样式发生了变化，但没有影响到页面布局时，会触发重绘，而不会触发回流。
重绘由于 DOM 位置信息不需要更新，省去了布局过程，因而性能上优于回流
（https://zhuanlan.zhihu.com/p/391932368）





<br/><br/><br/>

###  <h1 id="h10"> 10. css中padding和margin区别 </h1>
margin是用来隔开元素与元素的间距;
padding是用来隔开元素与内容的间隔





<br/><br/><br/>

###  <h1 id="h11"> 11. CSS 雪碧图的好处 </h1>
1.合并多少图片，减少页面请求次数
2.提高加载速度
3.方便风格更改，查找





<br/><br/><br/>

###  <h1 id="h12"> 12. position属性用于元素定位有几种方式，相对定位和绝对定位的区别？ </h1>
fixed
absolute
relative





<br/><br/><br/>

###  <h1 id="h13"> 13. 有几种像素单位？em和rem有什么区别 </h1>
 + px
 + rem（相对于根元素html）
 + em (相对于上级元素，没有设置也是根元素)
 + vh和vw 可视区宽高总,共100(vmin,vmax)
 + em相对于父元素(设置font-size)，rem相对于根元素（html）





<br/><br/><br/>

###  <h1 id="h14"> 14. 如果需要手动写动画，你认为最小时间间隔是多久？ </h1>
  多数显示器默认频率是60Hz，即1秒刷新60次，所以理论上最小间隔为``1/60*1000ms ＝ 16.7ms ``


[ddd](https://mp.weixin.qq.com/s/DOSHry6HLYQk4o9V-DLMOQ)

了解CSS基础语法（如选择器、声明、属性、值），了解CSS常用单位（尺寸、颜色）和字体样式，能够对HTML页面编写简单的CSS样式。
熟悉CSS Selector（如元素选择器、选择器分组、派生选择器、子元素选择器、相邻兄弟选择器、ID 选择器、类选择器、属性选择器、伪类、伪元素），理解CSS继承原理，能够使用CSS Selector编写复杂样式。
掌握CSS的Priority(权重)、Specificity(特性)、Box Model(盒模型)，能够根据浏览器盒模型的差异进行CSS样式编写。
掌握CSS定位（如相对定位、绝对定位、浮动）技巧，能够使用CSS3媒体查询进行响应式编程，能够针对不同终端页面做响应式开发。
掌握兼容性处理的技巧，理解浏览器回流和重绘原理，理解不同浏览器之间的差异，能够对不同浏览器做兼容器处理。