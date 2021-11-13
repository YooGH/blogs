1. <a href="#h1">等腰三角形</a>
2. <a href="#h2">直角三角形</a>

<br/><br/><br/>

三角形就是宽高为0，通过设置边框**边框属性**的上下左右，不必要的边设置transparent/0

<h5 id="h1"> 1.等腰三角形 </h5>

<div style="height: 0;width: 0;
border-top: 10px solid #f00;
border-bottom: 10px solid transparent;
border-left: 10px solid transparent;
border-right: 10px solid transparent;"></div>

```
/* 上下左右border的宽度一样 */
height: 0;
width: 0;
border-top: 10px solid #f00;
border-bottom: 10px solid transparent;
border-left: 10px solid transparent;
border-right: 10px solid transparent;
```

<h5 id="h2"> 2.直角三角形 </h5>


<div style="
border-top: 20px solid transparent;
border-left: 20px solid #00f;
border-bottom: 0;
border-right: 0;
height: 0;
width: 0;"></div>

```
/* 相临两边有宽度，其他设置0 */
border-top: 20px solid transparent;
border-left: 20px solid #00f;
border-bottom: 0;
border-right: 0;
height: 0;
width: 0;
```

