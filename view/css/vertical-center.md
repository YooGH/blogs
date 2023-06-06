1.flex(不用宽高)

父元素　　display: flex;  justify-content: center;  align-items: center;

 

3.translate(不用宽高)

父　　position: relative;

子　　position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);

子元素　　display: inline / inline-block;

 

4.absolute 负边距

父　　position: relative;

子　　position: absolute; left: 50%; top: 50%; margin-left: -子元素宽/2; margin-top: -子元素高/2;

 

5.absolute 0

父　　position: relative;

子　　position: absolute; top: 0; bottom: 0; left: 0; right: 0; margin: auto;  width: 50%; height: 50%;

 

5.table-cell(不用宽高)

父元素　　display: table-cell;  vertical-align: center;  text-align: center;



[博客](https://www.cnblogs.com/lgyong/p/9968670.html)
