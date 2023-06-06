<h6>

1. <a href="#h1">浏览器内核</a>
2. <a href="#h2">盒子模型</a>
3. <a href="#h3">inline-block的4像素问题</a>
4. <a href="#h4">css样式的书写顺序及原理和继承</a>

<br/><br/><br/>

<h4 id="h1"> 1.浏览器内核 </h4>
IE:trident内核<br/>
Firefox：gecko内核<br/>
safari：webkit内核<br/>
opera：以前是presto内核，现在改用google chrome的Blink内核<br/>
Chrome：Blink（基于webkit，google与opera software共同开发）<br/>

<br/>
<ol>
  <li>不同浏览器的标签默认的外补丁和内补丁不同，解决方案：用通配符*来设置各个标签的内外补丁是0；（即设置margin和padding为0）</li>
  <li>div的垂直居中问题 vertical-align：middle；</li>
  <li>margin加倍问题：设置为float的div在ie下的margin会加倍。解决方案：为这个div设置样式：display:inline;</li>
  <li>[js判断浏览器内核 及ie的版本问题](https://www.cnblogs.com/skybady/p/3513465.html)</li>
</ol>
 
<br/><br/><br/>

<h4 id="h2"> 2.盒子模型 </h4>

 - 两种：
  + IE盒子模型（width=border+padding+内容）
  + W3C标准盒子模型（width=内容）
 - 区别：
  两者对于width的计算方式不同（可以通过box-sizing设置）
 - 盒子模型包括四部分：
  + 内容（content = 宽*高）
  + 内边距/填充（padding）
  + 边框（border）
  + 外边距/边界（margin）

<br/><br/><br/>

<h4 id="h3"> 3.inline-block的4像素问题 </h4>

 - HTML结构、负的margin、
 - 设置父元素字体为0、丢失结束标签、
 - jquery方法、全兼容的样式解决方法


<br/><br/><br/>

<h4 id="h4"> 4.css样式的书写顺序及原理和继承 </h4>

[css样式的书写顺序及原理](https://blog.csdn.net/qq_36060786/article/details/79311244)

[可继承样式和不可继承样式](https://www.cnblogs.com/thislbq/p/5882105.html)

 




　　

<br/><br/><br/>

<h4>其他</h4>


[前端开发面试知识点大纲](https://www.cnblogs.com/wzhiq896/p/5927180.html)

[博客](https://www.cnblogs.com/lgyong/p/8617620.html)

</h6>

