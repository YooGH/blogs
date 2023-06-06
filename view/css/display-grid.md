<h6>

<br/><br/><br/>

grid: 网格布局

> ``display: grid;``; (类似table布局，与flex的区别是不仅能对横向的设置还可以对竖向的设置)
> 也支持内联``display: inline-grid;``

<br/><br/><br/>

一、容器的属性（6）
 - <h3>grid-template-columns</h3>
 - <h3>grid-template-row</h3>

   值： （repeat、fr、minmax()、auto-fit）

   ```
    repeat(3, 33.33%); // 分成三分，每份33.33%
    repeat(auto-fit, 200px); // 主动填充，溢出换行
    1fr 2fr;           // 类flex： 1；flex: 2;
    200px 1fr;         // 左边固定右边不固定
    1fr 2fr minmax();  // minmax(100px 1fr) 接受最小和最大值
   ```

 - <h3>grid-row-gap</h3>
 - <h3>grid-column-gap</h3>
 - <h3>grid-gap</h3>

</h6>