> 1. <a href="#h1"> shortcut和bookmark两者说明 </a>
> 2. <a href="#h2"> shortcut各浏览器兼容 </a>
> 3. <a href="#h3"> icon制作 </a>
>     <br/><a href="#ck">  参考 </a>



<br/><br/>

###  <h1 id="h1"> 1.shortcut和bookmark两者说明 </h1>
> **shortcut icon**：特指浏览器中地址栏左侧显示的图标，一般放大小为16x16 或者 32*32（再大是完全没有必要的！16、32、48、64、128、），后缀名为.icon的图标；

> **bookmark：**浏览器书签、收藏用的图标；

```
<head>
    <title>shortcut icon VS bookmark</title>
    <!-- 地址栏左侧显示的图标 -->
    <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
    <!-- 书签、收藏用的图标 -->
    <link rel="bookmark" type="image/x-icon" href="favicon.ico">
</head>
```
<br/><br/>


###  <h1 id="h2"> 2.shortcut各浏览器兼容 </h1>
>对于不同的浏览器，方法是有差别的
>（firefox和chrome可以直接在物理地址访问，其他要用服务器地址如127.0.0.1）

1/4. 浏览器**通用**：这大概是所有浏览器通用的在标签页加入指定图标的方法：
   把favicon.ico图标放到网站根目录下，

   在网页的``<head></head>``中加入``<link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />``

```
<head>
    <title>shortcut icon</title>
    <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
</head>
```
<br/>
2/4. 对于**IE**浏览器：把需要显示的16x16像素的ICO图标命名为favicon.ICO放置在网站根目录下，浏览器会自动检索<br/>
3/4. 对于**火狐、Safari、Chrome、\**Edge\****浏览器：图标格式没有IE低版本那么严格，**GIF**（兼容性差）**和PNG**格式的图标也可以显示，图标名称也可以不是favcion
   把图标放在根目录后，在```<head></head>```中加入

```
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
<link rel="icon" href="gif_favicon.gif" type="image/gif" >
```

或（显示最下面的图标(除Edge)，如下png）

```
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
<link rel="icon" href="png_favicon.png" type=" image/png" >
```
<br/>
4/4. **Vue**: Vue框架要改配置文件build/webpack.dev.conf.js,

   ```plugins:[new HtmlWebpackPlugin({favicon: 'favicon.ico'})]```

![img](https://images2018.cnblogs.com/blog/1340491/201806/1340491-20180612233951794-107697682.png)

<br/><br/>


###  <h1 id="h3"> 3. icon制作 </h1>
1. 图片转化为ico格式(在线工具：[比特虫]('http://www.bitbug.net'))
2. 测试用图片(16x16)
① ico
② png
③ gif

 　　   

###  <h1 id="ck"> 参考 </h1>

>[theWayToAce](https://www.cnblogs.com/theWayToAce/p/5558705.html)

