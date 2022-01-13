1. <a href="#h1">变量</a>
2. <a href="#h2">嵌套</a>
3. <a href="#h3">混合</a>

<br/><br/><br/>

> SASS
> css预处理器，需bable转化，浏览器不解析，好的兼容
> SASS版本3.0之前的后缀名为.sass，而版本3.0之后的后缀名.scss
> 两者是有不同的，继sass之后scss的编写规范基本和css一致，sass时代是有严格的缩进规范并且没有‘{}’和‘；’。而scss则和css的规范是一致的。

<h5 id="h1"> 1.变量 </h5>
> **$**(同php变量用于)


```
$blue: #00f;
```
- 特殊：
```
Sht: shop
border-#{Sht}: 1px solid red;
```
- 多值变量：　　　
```
$linkColor: black blue red green yellow;
a{　　color: nth($linkColor,2)　}　　　　//blueSht: shop
```
- map　(类Json): 
   ```
   $heading: {h1:2em, h2:1.5em; ...}
　 h1{ 　　font-size: map-get($heading,h1)　　　}
   ```　
　　　　


<br/><br/>
<h5 id="h2"> 2.嵌套 </h5>


```
p {
	font-size: 24px;
	a {
		color: #ff0;
		&:hover {
			color: #f00;
		}
	
	}
}
```


<br/><br/>
<h5 id="h3"> 2.混合 </h5>
```
@mixin left{
  float:left;
}
ul li {
  @include left;
}
ol li {
  @include left;
}
```
带参数
```
@mixin colorAndBg($color, $bg) {
  color: $color;
  background: $bg;
  font-size: 14px;
}
p {
  @include colorAndBg('#fff', '#000');
}
div {
  @include colorAndBg('#f00', '#fff');
}
```



4.继承

　　@entend

5.运算

6.。。。

　　① 三目判断

　　②循环
