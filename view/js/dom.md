1. <a href="#h1"> 类型(常用有三)  </a>
2. <a href="#h2"> 属性  </a>
3. <a href="#h3"> 方法  </a>
4. <a href="#h4"> 事件  </a>
5. <a href="#ck"> 参考  </a>
********************
<br/><br/><br/>


<h6>

### <h1 id="h1"> 节点类型(常用有三) </h1>

 - 元素-1

 - 文本-3

 - 属性-2（getAttribute(属性名)、 setAttribute(属性名, 新值)）

  <a href="#dome1">例子1</a>

  [其他节点类型](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/nodeType)


<br/><br/><br/>
###  <h1 id="h2"> 节点属性 </h1>

- 类型，名称、值和属性<br/>
　　　　      nodeType、nodeName、nodeVale、attributes[0]

- 子节点<br/>
　　　　      childNodes[0]　　firstChild　　lastChild

- 父节点<br/>
　　　　      parentNode　　nextSibling　　previousSibling

- 节点信息<br/>
　　　　      nodeName　　nodeType(132)　　nodeValue




<br/><br/><br/>
###  <h1 id="h3"> 节点方法 </h1>

- createElement(标签名)   // 返回节点<a href="#dome1">例子2、创建节点``.nodeType``等</a>

- querySelector()         // 返回一个对象

- querySelectorAll()     //  返回一个数组对象

<br/>

+ getElementById()      // 获取id的

+ getElementsByTagName()  

+ getElementsByName()


<br/><br/><br/><br/><br/><br/><br/><br/><br/>
<div style="display:flex;justify-content: center;">    

![图片1](./img/dom.jpg)

</div>
<br/><br/><br/><br/><br/><br/>




<br/><br/><br/>
<h5 id="dome1">例子1、获取类型属性``.nodeType``等</h5>

```
<p class='yellow'>我是元素节点</p>

<script>
  let nodeObj = document.querySelector('.yellow')
  console.log(nodeObj.nodeValue)                 // null
  console.log(nodeObj.nodeType)                  // 1
  console.log(nodeObj.nodeName)                  // 'p'

  console.log(nodeObj.firstChild.nodeValue)      // '我是元素节点'
  console.log(nodeObj.firstChild.nodeType)       // 3
  console.log(nodeObj.firstChild.nodeName)       // #text

  console.log(nodeObj.attributes[0].nodeValue)   // 'yellow'
  console.log(nodeObj.attributes[0].nodeType)    // 2
  console.log(nodeObj.attributes[0].nodeName)    // class
</script>
```
[他人例子](https://blog.csdn.net/hu1628299958/article/details/109502400?spm=1001.2101.3001.6650.18&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-18-109502400-blog-104876472.235%5Ev38%5Epc_relevant_default_base3&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-18-109502400-blog-104876472.235%5Ev38%5Epc_relevant_default_base3&utm_relevant_index=24)




<br/><br/><br/>
<h5 id="dome1">例子2、创建节点：后期接入支付宝apid</h5>

```
const script = document.createElement('script');         // 创建标签“<script>”的节点
script.type = 'text/javascript';                         // 设置节点类型
script.onload = function() {                             // 加载判断  
  if ('ap' in window && 'getAuthCode' in window.ap) {
    console.log('支付宝api加载成功！')
  }
};
const linkAddress = 'https://gw.alipayobjects.com/as/g/h5-lib/alipayjsapi/3.1.1/alipayjsapi.min.js';
const head = document.getElementsByTagName('head')[0]; // 获取“head”标签，需要将script标签插入head标签里加载
script.src = linkAddress;  // 设置节点的属性
head.appendChild(script);  // 将节点“script”插入头部“head”
```


<br/><br/><br/>
<h5 id="dome2">例子4、鼠标移动</h5>

```
document.onclick = function (ev) {
       console.log('相对于屏幕：菜单栏+可视区')
       console.log(getScreenMousePos(ev))
       console.log('相对于可视区窗口')
       console.log(getFaceMousePosx(ev))
       console.log('相对于文档： 相对于可视区窗口 + 滚动条区')
       console.log(getDocMousePoss(ev))
   }
   function getScreenMousePos(event) {
       var e = event || window.event;
       return {'x':e.screenX,'y':e.screenY}
   }
   function getFaceMousePosx(event) {
       var e = event || window.event;
       return {'x':e.clientX,'y':e.clientY}
   }
   function getDocMousePoss(event) {
      var e = event || window.event;
      var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
      var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
      var x = e.pageX || e.clientX + scrollX;
      var y = e.pageY || e.clientY + scrollY;
      return { 'x': x, 'y': y };
   }
}
```



<br/><br/><br/>
<h5 id="dome5">例子5、键盘按钮</h5>

```
document.onkeyup = function () {
    if(event.keyCode) {
        console.log(event.keyCode)
    }
}
```



<br/><br/><br/>
<h5 id="dome6">例子6、 根节点和body节点</h5>

```
document.body　　　　　　　　返回html dom中的body节点 即<body>

document.documentElement　　返回html dom中的root 节点 即<html> 
```
[document.body 与 document.documentElement区别介绍](https://www.cnblogs.com/mrdooo/p/6633688.html)


<br/><br/><br/>
<h5 id="dome7">例子7、 new URLSearchParams</h5>

```
new URLSearchParams：接收一个 URL 的查询字符串

const searchParams = new URLSearchParams(window.location.search);

searchParams.get('name')
```






<br/><br/><br/>
###  <h1 id="h4"> 事件 </h1>
  - onload<br/>
  - onscroll<br/><br/>

  - onkeyup<br/>
  - onkeydown<br/><br/>

  - onmouseenter(鼠标指针移动到元素上时触发)<br/>
  - onmouseout(鼠标指针移动到元素外时触发)<br/><br/>

  - onclick<br/>
  - onmousedown(点击鼠标时触发)<br/>
  - onmousemove<br/>
  - onmouseup(松开鼠标时触发)<br/>
```
  mouseover和mouseout在父元素和其子元素都可以触发，当鼠标穿过一个元素时，触发次数得依子元素数量而言。
  mouseenter和mouseleave只在父元素触发，当鼠标穿过一个元素时，只会触发一次。
  mouseover和mouseout比mouseenter和mouseleave先触发
```
<br/>
  - touchstart<br/>
  - touchmove<br/>
  - touchend<br/>
<br/>
  [实现图片轮播](https://blog.csdn.net/m0_37568521/article/details/77836756)<br/>[获取鼠标位置](http://www.cnblogs.com/dolphinX/archive/2012/10/09/2717119.html)
  










<br/><br/><br/>
###  <h1 id="ck"> 参考 </h1>

[JavaScript 获取鼠标点击位置坐标](https://www.cnblogs.com/dolphinX/archive/2012/10/09/2717119.html)

[document.body 与 document.documentElement区别介绍](https://www.cnblogs.com/lgyong/p/8998967.html)

[JS中的位置和宽度：clientWidth、offsetWidth、scrollWidth等区别](https://blog.csdn.net/qq_42089654/article/details/80515916)




[博客](https://www.cnblogs.com/lgyong/p/8998967.html)

</h6>