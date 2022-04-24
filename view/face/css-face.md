0.  文字超出

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

1. iphoneX及以上苹果底部横条 小程序（wx.getSystemInfo -> safeArea.bottom与可视区相减）

2. (两边固定，中间自适应)[https://blog.csdn.net/lemaktub/article/details/107138319]

- ***flex***: 父--display: flex;   左右两边--flex 0 0 100px;   中--flex: 1;padding: 0 100px;box-sizing: border-box;

- ***position***: 父--position: relative;   左右两边--position: absolute;top: 0;left/right: 0; width: 100px;   中--width: 100%;padding: 0 100px;box-sizing: border-box;
- ***float***: 父--清浮动；左右两边--float: left/right; 中间: width: 100%;padding: 0 100px;box-sizing: border-box;    （中间元素标签放最后）
- ***table***


3. em相对于父元素(设置font-size)，rem相对于根元素（html）
4. 选择器排序： id选择器 > 类选择器 > 标签选择器
5. 自适应高度https://jingyan.baidu.com/article/37bce2bec2171c5003f3a221.html
6. 居中 (flex | transform:translate(-50%,-50%)  |  position: absolute; left: 0; margin: auto;)
7. 清浮动（clear:both;    overflow:hidden;   :after/:before）

8. flex  (什么作用，)



9. 重绘和回流的概念
 
回流(重排): 当浏览器必须重新处理和绘制部分或全部页面时，回流就会发生。

重绘: 不影响布局, 只是标签页面发生变化, 重新绘制。

注意: 回流(重排)必引发重绘, 重绘不一定引发回流(重排)。





[ddd](https://mp.weixin.qq.com/s/DOSHry6HLYQk4o9V-DLMOQ)