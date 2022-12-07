1.<a href="h1">  块级元素、非块级元素(内联)和空元素  </a>
2.<a href="h2">  语义化和h5标签  </a>
3.<a href="h3">  动态网页和静态网页有什么区别？  </a>
4.<a href="h4">  熟悉HTML、XHTML和HTML5的概念  </a>
5.<a href="h5">  浏览器工作原理  </a>
6.<a href="h6">  donctype的作用和模式区别  </a>
7.<a href="h7">  倒三角  </a>
8.<a href="h8">  像素  </a>
9.<a href="h9">  HTML 全局属性有哪些？  </a>
10.<a href="h10">  HTML5 的新特性-自定义属性有哪些？什么是自定义属性？  </a>
11.<a href="h11">  html中div+css 的布局较 table 布局有什么优点？  </a>
12.<a href="h12">  HTML5 的离线储存怎么使用，工作原理能不能解释一下？（5分题）  </a>
13.<a href="h13">  前端页面有哪三层构成，分别是什么？作用是什么？  </a>
14.<a href="h14">  DOM事件的执行顺序  </a>
********************





<br/><br/><br/>

###  <h1 id="h1"> 1. 块级元素、非块级元素(内联)和空元素 </h1>
  header、nav、footer、aside、section、div、article、p(ul、ol)
  span、a
  hr、br(不能加样式)

  li(display: list-item)





<br/><br/><br/>

###  <h1 id="h2"> 2. 语义化和h5标签 </h1>
  方便被pc浏览器识别内容、方便交接、方便重构、





<br/><br/><br/>

###  <h1 id="h3"> 3. 动态网页和静态网页有什么区别？ </h1>
  静态：数据是固定，没有数据库连接
  动态：数据可以跟进后端接口连数据库做动态更改和交互，如提交表单





<br/><br/><br/>

###  <h1 id="h4"> 4. 熟悉HTML、XHTML和HTML5的概念 </h1>
        正确嵌套  属性值双引号    特殊字符(实体表示)    标签以及属性小写     XHTML 用 id 属性代替 name 属性
XHTML   ✅       ✅            ✅                  ✅ 
HTML5   ❌       ❌            ❌                  ❌
(✅表示必须，❌表示非必须(可以有也可以没有))

HTML：超文本标记语言
XHTML：可扩展超文本标记语言，是更严谨的HTML
HTML5：是HTML的下一代，增加新特性画布(canvas)、媒体(video/audio)等

总：HTML指的是HTML4.01，XHTML是HTML的过渡版，HTML5是HTML的升级版(https://blog.csdn.net/weixin_43272781/article/details/98488492)





<br/><br/><br/>

###  <h1 id="h5"> 5. 浏览器工作原理 </h1>
  [浏览器工作的流程大体就是这样：DNS查找，TCP(TLS)握手，发送http请求，构建DOM，构建CSS，CSS构建DOM，布局，绘制等](https://blog.csdn.net/m0_61706518/article/details/125519882)
  浏览器在解析html的时候是一个单线程，在扫描代码过程中，如果遇到script标签，浏览器会加载script文件，并执行其代码，此时html暂停解析,所以才把脚本放html后面；像css和图片是异步的可以先加载，html会先渲染后样式回来会回流重绘





<br/><br/><br/>

###  <h1 id="h6"> 6. donctype的作用和模式区别 </h1>
 [详情](../html/HTML.md#h1)

  浏览器的解析器使用哪种HTML规范；

  严格模式：又称标准模式，是指浏览器按照W3C标准来解析代码，呈现页面
  混杂模式：又称为怪异模式或者兼容模式，是指浏览器按照自己的方式来解析代码，使用一种比较宽松的向后兼容的方式来显示页面   





<br/><br/><br/>

###  <h1 id="h7"> 7. 倒三角 </h1>
  宽高0,boder-top: 6px solid #f00;其他边的背景颜色transparent





<br/><br/><br/>

###  <h1 id="h8"> 8. 像素 </h1>
 + px
 + rem（相对于根元素html）
 + em (相对于上级元素，没有设置也是根元素)
 + vh和vw 可视区宽高总,共100(vmin,vmax)





<br/><br/><br/>

###  <h1 id="h9"> 9. HTML 全局属性有哪些？ </h1>
 lang，title，id，class，style





<br/><br/><br/>
###  <h1 id="h10"> 10. HTML5 的新特性-自定义属性有哪些？什么是自定义属性？ </h1>
canvas、语义化标签（header、nav、article、section、footer、）、video和audio、
data-
自定义属性目的∶是为了保存并使用数据





<br/><br/><br/>
###  <h1 id="h11"> 11. html中div+css 的布局较 table 布局有什么优点？ </h1>
页面加载速度更快、结构化清晰、页面显示简洁。





<br/><br/><br/>
###  <h1 id="h12"> 12. HTML5 的离线储存怎么使用，工作原理能不能解释一下？（5分题） </h1>
manifest
在file.appcache文件里编写离线存储的资源
原理：
在线时，浏览器发现html头部有manifest属性，就会请求manifest文件，如果是第一次访问，浏览器就会根据manifest文件进行相应资源的下载，如果已经访问过并且已经有资源了，就会使用离线下载的资源。然后对新旧的manifest文件进行比较，如果有改变则重新下载文件中的资源，没有改变就不进行任何操作
离线时：直接使用离线下载的资源





<br/><br/><br/>
###  <h1 id="h13"> 13. 前端页面有哪三层构成，分别是什么？作用是什么？ </h1>
结构层、表示层、行为层。
结构层：由 HTML 或 XHTML 之类的标记语言负责创建。标签，也就是那些出现在尖括号里的单词，对网页内容的语义含义做出了描述，但这些标签不包含任何关于如何显示有关内容的信息。例如，P 标签表达了这样一种语义：“这是一个文本段。”
表示层：由 CSS 负责创建。 CSS 对“如何显示有关内容”的问题做出了回答。
行为层：负责回答“内容应该如何对事件做出反应”这一问题。这是 Javascript 语言和 DOM 主宰的领域。





<br/><br/><br/>
###  <h1 id="h14"> 14. DOM事件的执行顺序 </h1>
[DOM事件的执行顺序](https://blog.csdn.net/xxgjjh/article/details/127504853)
onBlur>onChange>onClick>onFocus>onKeyDown



浏览器加载的事件执行顺序

js代码是自上而下执行，遇到setTimeout等异步创建微任务，函数会对变量进行提升
html 和 js, css和图片是异步








了解HTML语法结构（如Element、Attribute、Head、Entities、Symbols、Charset等），能够正确使用HTML元素进行web页面开发。
了解静态网页和动态网页的不同，熟悉网页浏览器的工作原理，熟悉HTML、XHTML和HTML5的概念，能够熟练编写HTML页面。
理解HTML排版和渲染过程，能够优化页面和资源的加载和渲染效率。
熟悉HTML DOM事件对象和浏览器加载的事件执行顺序，理解DOM事件冒泡原理，能够使用DOM事件对象进行编程，能够对HTML事件作出反应。
掌握HTML5表单语法结构，能够使用Canvas、Storage、File、Form，EventSource等进行HTML5应用开发。