<h6>

<br/><br/><br/>

grid: 网格布局

> ``display: grid;``也支持内联``display: inline-grid;`` <br/>  (类似table布局，与flex的区别是不仅能对横向的设置还可以对竖向的设置)
> 

<br/><br/><br/>

一、容器的属性（12）
> columns-柱，左右关系；row-行/排, 上下关系

<br/><br/><br/><br/>

 - <h3><strong>grid-auto-flow: column/row;(默认row)</strong></h3>
 - <h3><strong>grid-template-row</strong></h3>
 - <h3><strong>grid-template-columns</strong></h3>
   值： （repeat、fr、minmax()、auto-fit）

   ```
    repeat(3, 33.33%); // 分成三分，每份33.33%
    repeat(auto-fit, 200px); // 主动填充，溢出换行
    1fr 2fr;           // 类flex： 1；flex: 2;
    200px 1fr;         // 左边固定右边不固定
    1fr 2fr minmax();  // minmax(100px 1fr) 接受最小和最大值
   ```
[demo1](./demo/display-grid1.html)<br/><br/><br/><br/>

 - <h3><strong>grid-row-gap</strong></h3>
 - <h3><strong>grid-column-gap</strong></h3>
 - <h3><strong>grid-gap</strong></h3>

[demo2](./demo/display-grid2.html)<br/><br/><br/><br/>


 - <h3><strong>justify-content</strong></h3>
 - <h3><strong>align-content</strong></h3>
 - <h3><strong>place-content: space-around space-evenly</strong></h3>

<br/><br/><br/><br/>

- <h3><strong>justify-items</strong></h3>
- <h3><strong>align-items</strong></h3>
- <h3><strong>place-items: align-items justify-items</strong></h3>

<br/><br/><br/><br/>
<h3>合并属性</h3>
- grid-template属性是grid-template-columns、grid-template-rows和grid-template-areas这三个属性的合并简写形式。
- grid属性是grid-template-rows、grid-template-columns、grid-template-areas、 grid-auto-rows、grid-auto-columns、grid-auto-flow这六个属性的合并简写形式。


<br/><br/><br/>
二、单元格的属性（4）




<br/><br/><br/><br/>


<br/><br/><br/>


[博客](https://www.cnblogs.com/lgyong/p/13293059.html)
</h6>