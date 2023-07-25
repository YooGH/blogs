<h6>

<br/><br/><br/>

grid: 网格布局

> ``display: grid;``也支持内联``display: inline-grid;`` <br/>  (类似table布局，与flex的区别是不仅能对横向的设置还可以对竖向的设置)
> 

<br/><br/><br/>

<h1>一、容器的属性（14）</h1>

> columns - 柱，左右关系<br/>row - 行/排, 上下关系

<br/><br/><br/><br/>

<h2>布局</h2>

 - <h3>grid-auto-flow: column/row;(默认row,排序从左到右，从上到下等)</h3>
 - <h3>grid-template-rows（每行，从上倒下）</h3>
 - <h3>grid-template-columns（每列，从左到右）</h3>
 - <h3>grid-template-areas</h3>
 - <h3>grid-template: 属性是grid-template-columns、grid-template-rows和grid-template-areas这三个属性的合并简写形式。</h3>

    |值|翻译|
    |:--|:--|
    |repeat|...|
    |fr|...|
    |minmax()|...|
    |auto-fit|...|
    
   ```
    repeat(3, 33.33%); // 分成三分，每份33.33%
    repeat(auto-fit, 200px); // 主动填充，溢出换行
    1fr 2fr;           // 类flex： 1；flex: 2;
    200px 1fr;         // 左边固定右边不固定
    1fr 2fr minmax();  // minmax(100px 1fr) 接受最小和最大值
   ```

[demo1](./demo/display-grid1.html)<br/><br/><br/><br/>

<h2>间隙</h2>

 - <h3>grid-row-gap</h3>
 - <h3>grid-column-gap</h3>
 - <h3>grid-gap</h3>

[demo2](./demo/display-grid2.html)<br/><br/><br/><br/>

<h2>居中（整体）</h2>

 - <h3>justify-content</h3>
 - <h3>align-content</h3>
 - <h3>place-content: space-around space-evenly</h3>

<br/><br/><br/><br/>

<h2>居中（项目）</h2>

- <h3>justify-items</h3>
- <h3>align-items</h3>
- <h3>place-items: align-items justify-items</h3>

<br/><br/><br/><br/>
<h3>合并属性</h3>

- <h3>grid</h3>是<br/>grid-template-rows、grid-template-columns、grid-template-areas、 <br/>grid-auto-rows、grid-auto-columns、grid-auto-flow<br/>这六个属性的合并简写形式。


<br/><br/><br/>
<h1>二、单元格的属性</h1>

<h2>位置</h2>

- grid-column-start (从左开始位置，单位数字)
- grid-column-end (从左结束位置，单位数字)
- grid-row-start
- grid-row-end
<br/><br/>合并属性<br/>
- grid-column: grid-column-start grid-column-end
- grid-row: grid-row-start grid-row-end
- grid-area: e (需要和grid-template-areas属性的字母对应)

<br/><br/><br/>


<h2>位置</h2>

- justify-self
- align-self
<br/><br/>合并属性<br/>
- place-self: align-self justify-self

|值|翻译|
|:--|:--|
|start|对齐单元格的起始边缘|
|end|对齐单元格的结束边缘|
|center|单元格内部居中|
|stretch|拉伸，占满单元格的整个宽度（默认值）|

<br/><br/><br/><br/>


[博客](https://www.cnblogs.com/lgyong/p/13293059.html)

[参考](https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)
</h6>