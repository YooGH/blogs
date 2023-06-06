<h6>

<br/><br/><br/>

flex: 弹性盒子;用于栅格布局和元素居中等
> ``display: flex;``; (Webkit内核的浏览器，必须加上-webkit前缀。)
> 父元素为display: flex;孙元素不受影响。所以想让子元素不受父元素影响，在子元素上套一层，让子元素变成孙元素

<br/><br/><br/>

一、容器的属性（6）


 - <h3>flex-direction</h3>主轴左右还是上下，左始还是右始: row | row-reverse | column | column-reverse;
 - <h3>flex-wrap</h3>项目换行: nowrap | wrap | wrap-reverse;
 - <h3>flex-flow</h3>复合属性: 1 和 2的合体 -- flex-direction || flex-wrap;
 - <h3>justify-content</h3>: flex-start | flex-end | center | space-between | space-around;（主轴对齐方式）<br/>space-between：两端对齐，项目之间的间隔都相等。<br/>
　　space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
 - <h3>align-items</h3>: flex-start | flex-end | center | baseline | stretch;（交叉轴对齐方式）<br/>baseline: 项目的第一行文字的基线对齐。<br/>
　　stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
 - <h3>align-content</h3>: flex-start | flex-end | center | space-between | space-around | stretch;（基于主轴 并且交叉轴的设置；[与align-items的区别](https://blog.csdn.net/cc18868876837/article/details/88138057)）


例子：
```
display: flex;
justify-content: center;
align-items: center;
width: 100%;
/* 为什么加width: 100%;才能上下左右居中 */
/* 会让子元素上下左右居中*/
```


<br/><br/><br/>

二、项目的属性（6、儿子的属性）

 - <h3>order</h3>
  插队排序: <integer>; （/* default 0 */  -- 类z-index）
 - <h3>flex-grow</h3>
  增长: default=0 
 - <h3> flex-shrink</h3>
  缩小: default=1
 - <h3> flex-basis</h3>
 - <h3> flex</h3>
  复合属性: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]（② ③ ④简写）
 - <h3> align-self </h3>
  属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性


<br/><br/>


三、应用

1. 父元素平分三个子元素

```
父--display: flex; flex-wrap: nowrap;
子--flex: 0 0 33.3%; / 0 0 100px%;
```

2. 

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Flex</title>
    <style>
        .flex{
            display: flex;
            width: auto;
            height: 200px;
            background: #ccc;
        }
        .inlineFlex{
            display: inline-flex;
            width: auto;
            height: 200px;
            border: 1px solid #000;
            margin-top: 20px;
        }
        section{
            /* margin-left: 10px; */
            /* width: 200px; */
            flex-grow: 1;
        }
        .f1{
            order: 9;
        }
        .f2{
            flex-grow: 2;
        }
        .f3{
             
        }
        .f4{
            order: -2;
        }
        .f5{
             
        }
        .f6{
             
        }
    </style>
</head>
<body>
    <div class="flex">
        <section class="f1">1</section>
        <section class="f2">2</section>
        <section class="f3">3</section>
        <section class="f4">4</section>
        <section class="f5">5</section>
    </div>
    <div class="inlineFlex">
        <article>01</article>
        <article>02</article>
        <article>03</article>
        <article>04</article>
        <article>05</article>
        <article>06</article>
        <article>07</article>
    </div>
    <div class="inlineFlex"></div>
</body>
</html>
```

<br/><br/>

四、概念
Flex容器（flex container），简称”容器”。它的所有子元素自动成为容器成员，称为Flex项目（flex item）
<br/>
主轴<br/>
交叉轴<br/>
main start<br/>
main end<br/>
cross start<br/>
cross end<br/>
main size（宽）<br/>
cross size（高）<br/>

</h6>






[博客](https://www.cnblogs.com/lgyong/p/9231735.html)

[参考1](https://ruanyifeng.com/blog/2015/07/flex-grammar.html)

[参考2](https://blog.csdn.net/weixin_41832017/article/details/106415639)