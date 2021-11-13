> 1. <a href="#h1"> 倒三角 </a>
> 2. <a href="#h2"> 点+左右两边一条杠 </a>
> 3. <a href="#h3"> 标题左边有一块 </a>
>     <br/><a href="#ck">  参考 </a>



<br/><br/>

###  <h1 id="h1"> 1.倒三角  </h1>
> 宽高为0, border做展示
```
<div style="
	width: 0;
	height: 0;
	border-top: 10px solid #f00;
	border-bottom: 10px solid transparent;
	border-left: 10px solid transparent;
	border-right: 10px solid transparent;"
></div>
```

<br/><br/>


###  <h1 id="h2"> 2.点+左右两边一条杠 </h1>
> 一条线中间多了一个点（）

_______________ . __________________
```
<h5 class="point-blcok"> . </h5>
.point-blcok {
    display: inline-block;
    position: relative;
    left: 50%;
    transform: translate(-50%);
    margin: 0 auto;
    color: #d8d8d8;
    font-size: 24px;
    font-weight: 400;
}
.point-blcok:before, .point-blcok:before {
    content: "";
    position: absolute;
    top: 50%;
    width: 24px;
    height: 2px;
    background: #d8d8d8;
 }
```
> 同理布局

![图片1](./img/html1.png)

<br/><br/>


###  <h1 id="h3"> 3. 标题左边有一块 </h1>
> 标题左边或下边有快膏药

 　　   

###  <h1 id="ck"> 参考 </h1>

>[布局格式](https://www.cnblogs.com/lgyong/p/10395420.html)
>[布局](https://www.cnblogs.com/lgyong/p/8617581.html)

