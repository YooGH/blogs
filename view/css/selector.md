1. <a href="#h1">通配选择符</a>
2. <a href="#h2">元素选择符</a>
3. <a href="#h3">群组选择符</a>
4. <a href="#h4">关系选择符</a>
5. <a href="#h5">id 及 class选择器</a>
6. <a href="#h6">属性选择符</a>
7. <a href="#h7">伪类选择器</a>
8. <a href="#h8">伪对象选择符</a>
9. <a href="#h9">深度选择器</a>
10. <a href="#h10">选择器权重</a>

<br/><br/><br/>

<h4 id="h1"> 1.通配选择符 </h4>
*


<br/><br/><br/>

<h4 id="h2"> 2.元素选择符 </h4>
body、h1、p



<br/><br/><br/>

<h4 id="h3"> 3.群组选择符 </h4>
h1,h2,h3,p（“,”分隔）



<br/><br/><br/>

<h4 id="h4"> 4.关系选择符 </h4>
E F : 包含选择符(css1)<br/>
E>F : 子选择符(css2)<br/>
E+F : 相邻选择符(css2)<br/>
E~F : 兄弟选择符(css3)<br/>
（都作用于F元素）



<br/><br/><br/>

<h4 id="h5"> 5.id 及 class选择器 </h4>
（id：锚点用“name”）


<br/><br/><br/>

<h4 id="h6"> 6.属性选择符 </h4>
E[att]<br/>
E[att=”val”]<br/>
E[att~=”val”]<br/>
E[att|=”val”]<br/>
E[att^=”val”]<br/>
E[att$=”val”]<br/>
E[att*=”val”]



<br/><br/><br/>

<h4 id="h7"> 7.伪类选择器 </h4>
E:link<br/>
E:visited<br/>
E:hover<br/>
E:active<br/>
  [“爱恨原则”（LoVe/HAte）](https://blog.csdn.net/a15044774767/article/details/52522849)

<br/><br/>
E:focus<br/>
E:lang(zh-cn)<br/>
E:not(s)<br/>
E:root

<br/><br/>
E:first-child<br/>
E:last-child<br/>
E:nth-child(n)<br/>
E:nth-last-child(n)<br/>
E:only-child<br/>

<br/><br/>
E:first-of-type<br/>
E:last-of-type<br/>
E:nth-of-type(n)<br/>
E:nth-last-of-type(n)<br/>
E:only-of-type<br/>

<br/><br/>
E:empty<br/>
E:checked<br/>
E:enabled<br/>
E:disabled<br/>
E:target<br/>




:focus-within  自己及子元素聚焦<br/>
:has  父级包含子级 （p:has(span), p标签里面有span，p才展示样式）<br/>

<br/><br/><br/>

<h4 id="h8"> 8.伪对象选择器 </h4>
E:first-letter/E::first-letter<br/>
E:first-line/E::first-line<br/>
E:before/E::before<br/>
E:after/E::after<br/>
E::placeholder<br/>
E::selection<br/>


<br/><br/><br/>

<h4 id="h9"> 9.深度选择器 </h4>
::v-deep(vue专用)）、 deep()(vue3专用) <br/>  
/deep/ .child-class {}<br/>
>>> (适用于css<br/>
/deep/（适用于less或scss）、<br/>
[文档](https://vue-loader.vuejs.org/guide/scoped-css.html#child-component-root-elements)

```
::v-deep ::-webkit-scrollbar{width:8px;}
::v-deep ::-webkit-scrollbar-thumb{width:8px;border-radius: 4px;}/* 滚动条宽度 */
::v-deep ::-webkit-scrollbar-track{background-color: transparent;}/* 滚动条轨道颜色 */
::v-deep ::-webkit-scrollbar-thumb{background: #E1E4EB;}/* 滚动条颜色 */
::v-deep ::-webkit-scrollbar-thumb:hover {background-color: #ddd;}/* 鼠标移动到滚动条上后显示的颜色 */
::v-deep ::-webkit-scrollbar-thumb:active {background-color: #ddd;}/* 点击时滚动条的颜色 */
```


<br/><br/><br/>

<h4 id="h10"> 10.选择器权重 </h4>

!import>内联>id>class>标签

css定义的权重：!import(10000)、内联(style)(1000)、id(100)、class(10)、标签(1)
