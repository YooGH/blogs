1. <a href="#h1"> doctype </a>
2. <a href="#h2"> WEB 标准以及 W3C 的理解与认识 </a>
3. <a href="#h3"> xhtml 和 html 有什么区别 </a>
4. <a href="#h4"> 块级/内联元素</a>
5. <a href="#h5"> 语义化</a>
6. <a href="#h6"> 微格式</a>
7. <a href="#h7"> 编码方式</a>
8. <a href="#h8"> manifest</a>
9. <a href="#h9"> 折叠标签<summary> </a>
   <br/><a href="#ck"> 参考 </a>

  

  <br/><br/>

  ###  <h1 id="h1"> 1.doctype </h1>

  ```
<!doctype> 声明必须处于 HTML 文档的第一行，在<html>标签之前，HTML5 中不区分大小
写
<!doctype>声明不是一个 HTML 标签，是一个用于告诉浏览器当前 HTMl 版本的指令 现代浏览器的 html 布局引擎通过检查 doctype 决定使用兼容模式还是标准模式对文档 进行渲染，一些浏览器有一个接近标准模型。

在 HTML4.01 中<!doctype>声明指向一个 DTD，由于 HTML4.01 基于 SGML，所以 DTD 指 定了标记规则以保证浏览器正确渲染内容

HTML5 不基于 SGML，所以不用指定 DTD

常见 dotype：

HTML4.01 strict：不允许使用表现性、废弃元素（如 font）以及 frameset。声明：<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

HTML4.01 Transitional:允许使用表现性、废弃元素（如 font），不允许使用 frameset。声 明：<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

HTML4.01 Frameset:允许表现性元素，废气元素以及 frameset。声明：<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">

XHTML1.0 Strict:不使用允许表现性、废弃元素以及frameset。文档必须是结构良好的XML 文档。声明：<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> XHTML1.0 Transitional:允许使用表现性、废弃元素，不允许 frameset，文档必须是结构 良好的 XMl 文档。声明： <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> 

XHTML 1.0 Frameset:允许使用表现性、废弃元素以及 frameset，文档必须是结构良好的 XML 文档 。 声 明： <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd"> HTML
  ```

  <br/><br/>

  ###  <h1 id="h2"> 2.WEB 标准以及 W3C 的理解与认识 </h1>

标签闭合、标签小写、不乱嵌套、提高搜索机器人搜索几率、

使用外 链 css 和 js 脚本、 结构行为表现的分离、文件下载与页面速度更快、内容能被更多的用户所访问、内容能被更 广泛的设备所访问、更少的代码和组件，容易维 护、改版方便，不需要变动页面内容、提 供打印版本而不需要复制内容、提高网站易用性。 

<br/><br/>


  ###  <h1 id="h3"> 3. xhtml 和 html 有什么区别</h1>

HTML  是一种基本的 WEB 网页设计语言。

XHTML 是一个基于 XML 的置标语言。

最主要的不同： XHTML 元素必须被正确地嵌套。 XHTML 元素必须被关闭。 标签名必须用小写字母。 XHTML 文档必须拥有根元素。 

<br/><br/>

###  <h1 id="h4"> 4. 块级/内联元素 </h1>

block: div、p、h1、form、ul、hr (header、nav 、aside、section、article、footer、canvas、figure、hgroup)

inline: span、a、b、i、select、lable、 input

空元素: br、hr、img、input、link、meta <br/>
空元素指的是没有内容的HTML元素，空元素下是没有子级节点和内容的；空元素是在开始标签中关闭的，也就是说空元素没有闭合标签的


  ```
表示页面不同位置的标签：header、nav、article、section、aside、footer

表格：table、colgroup、col、caption、thead、tbody、tfoot、tr、th、td

表单：form、input、label、select、optgroup、option、textarea

列表：ul、ol、li、dl、dt、dd、

媒体：audio、video、source  -- img、figure、figcaption(canvas)

表示具体元素的作用或者意义的标签：

  big、small、sub、sup、em(i)、strong(b)、ins、del(s、strike、u)

  h1...h6、abbr、address、pre、code、blockquote、detail、mark、iframe

 

被忽视或少用的标签：datalist、keygen、output、embed、base、bdo

表示不用的或被替换的标签：

  form > lable > input 

  fremeset > frame、iframe
  ```

<br/><br/>

###  <h1 id="h5"> 5. 语义化 </h1>   

狭义：html

广义：html、css、js等

web 语义化是指通过 HTML 标记表示页面包含的信息，包含了 HTML 标签的语义化和 css 命名的语义化。

 HTML 标签的语义化是指：通过使用包含语义的标签（如 h1-h6）恰当地表示文档结构

 css 命名的语义化是指：为 html 标签添加有意义的 class，id 补充未表达的语义，如 Microformat 通过添加符合规则的 class 描述信息

　　为什么需要语义化：

　　 SEO：搜索引擎更好地理解页面，有利于收录 便团队项目的可持续运作及维护

　　 设备：方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以语义的方式来渲染网页

　　 用户体验：例如title、alt用于解释名词或解释图片信息、label标签的活用；

　　 纯结构：去掉样式后页面呈现清晰的结构

　　 好看：便于团队开发和维护，语义化更具可读性，如果遵循W3C标准的团队都遵循这个标准，可以减少差异化，利于规范化。

借鉴：
https://www.cnblogs.com/freeyiyi1993/p/3615179.html
http://www.w3school.com.cn/tags



<br/><br/>

###  <h1 id="h6"> 6. 微格式 </h1>   

知道什么是微格式吗？谈谈理解。在前端构建中应该考虑微格式吗？

来自：BAT 及各大互联网公司 2014 前端笔试面试题集

参考：

微格式（Microformats）是一种让机器可读的语义化 XHTML 词汇的集合，是结构化数据 的开放标准。是为特殊应用而制定的特殊格式。

优点：将智能数据添加到网页上，让网站内容在搜索引擎结果界面可以显示额外的提示。 （应用范例：豆瓣，有兴趣自行 google）

<br/><br/>

###  <h1 id="h7"> 7. 编码方式 </h1>   

``` HTML 4.01: HTML 5: ```

<br/><br/>

###  <h1 id="h8"> 8. manifest </h1>   

```
<!DOCTYPE html>
<html manifest="offline.appcache">
<head>
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<title>魔方跳跃 - 7k7k手机小游戏</title>
<script type="text/javascript">document.domain='7k7k.com'</script>
<link rel="manifest" href="appmanifest.json" />
 
 
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<link rel="apple-touch-icon" sizes="256x256" href="icon-256.png" />
<meta name="HandheldFriendly" content="true" />
 
<meta name="mobile-web-app-capable" content="yes" />
<link rel="shortcut icon" sizes="256x256" href="icon-256.png" />
```

<br/><br/>

###  <h1 id="h9"> 9. 折叠标签``<summary>`` </h1>   
> details里面除了summary(HTML 5)是展示的，其他折叠([summary](https://www.w3school.com.cn/tags/tag_summary.asp))
<details>
  <summary>HTML 5</summary>
  This document teaches you everything you have to learn about HTML 5.
  <p>hi!</p>
</details>

```
<details>
  <summary>HTML 5</summary>
  This document teaches you everything you have to learn about HTML 5.
  <p>hi!</p>
</details>
```




  ###  <h1 id="ck"> 参考 </h1>

  

  
