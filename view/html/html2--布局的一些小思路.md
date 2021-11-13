> 1. <a href="#h1"> table转div+css </a>
> 2. <a href="#h2"> 圣杯布局和双飞翼布局的作用和区别 </a>
> 3. <a href="#h3"> CSS各方法的显隐比较 </a>
>     <br/><a href="#ck">  参考 </a>



<br/><br/>

###  <h1 id="h1"> 1.table转div+css </h1>

```
改版的时候更方便 只要改 css 文件。
页面加载速度更快、结构化清晰、页面显示简洁。
表现与结构相分离。
易于优化（seo）搜索引擎更友好，排名更容易靠前
```

<br/><br/>


###  <h1 id="h2"> 2.圣杯布局和双飞翼布局的作用和区别 </h1>

[圣杯布局和双飞翼布局的作用和区别]('https://www.cnblogs.com/woodk/p/5147085.html')

<br/><br/>


###  <h1 id="h3"> 3. CSS各方法的显隐比较 </h1>
|: ;|2|3|1|2|3|
|:--|:--|:--|:--|:--|:--|
|不在占位,影响布局|下|而纷纷|小明|下|而纷纷 

|属性|值|占位，不影响布局|其他|
|:--|:--|:--|:--|
|display|none/block|不占|
|visibility|hidden/visible|占|微信小程序canvas无效|
|opacity|0.0~1.0/filter:alpha(opacity = 0/100)|占|微信小程序canvas无效|
|position,left|relative，-99999px|占|
|height|0|不占|

 　　   

###  <h1 id="ck"> 参考 </h1>

>[display、visibility、opacity、rgba、z-index隐藏元素的区别](https://blog.csdn.net/WRian_Ban/article/details/51958195)

