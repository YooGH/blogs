1.<a href="#h1"> 定位属性 </a><br/>
2.<a href="#h2"> 自身属性/盒子模型 </a><br/>
3.<a href="#h3"> 字体样式 </a><br/>
<br/><br/>
4.<a href="#h4"> 文本属性/段落样式 </a><br/>
5.<a href="#h5"> 列表样式 </a><br/>
6.<a href="#h6"> cSS3新样式 </a><br/>
<br/><br/>
7.<a href="#h7"> image 和 video </a><br/>
8.<a href="#h8"> 其他 </a><br/>
********************





<h6>
<h5 id="h1">一、定位属性</h5>
  position | float/clear | display | z-index | overflow  (1.和2.不能同用于一个元素)

```
1.　position: fixed、absolute、relative、static、inherit、sticky      
    // fixed(父级高度和transform:translate(0,100px));
       https://zhuanlan.zhihu.com/p/36393631
       sticky([坑](https://blog.csdn.net/qq_35585701/article/details/81040901)relative和fixed的结合)、 relative > absolute1 > absolute2   2相对于1; 
       static为默认正常的页面流;

2.　float: left、right、none、inherit
    // 清浮动clear、overflow

3.　display: ?、flex、inline-block、block、inline...
    // flex用margin调距离

4.　z-index: 0 ~ 2147483647(2的31次方减一)
    // [详情](https://www.cnblogs.com/58top/archive/2013/01/25/minimum_and_maximum_value_of_z_index.html)

5.　overflow: scroll、auto、hidden、visible、inherit
    // 单独对x/y轴设置: overflow-y/overflow-x、 可用于子元素溢出父元素

6.  visibitity: visible、hidden、collapse、inherit
    // 隐藏了但占布局空间，display:none则不会有空间了
```





<br/><br/><br/>

<h5 id="h2">二、自身属性/盒子模型</h5>
   width | height | margin | padding | border | opacity | background  (1.和2.不能同用于一个元素)

```

1. width: auto、length

2. height: auot、length

3. （复合）margin: auto、length; （top、bottom、left、right）

　　缩写型式：
　　　　　　　　margin:上下边距 左右边距;

　　　　　　　　margin:上边距 左右边距 下边距;

　　　　　　　　margin:上边距 右边距 下边距 左边距;
    // (margin-top影响父级 (父元素的第一个子元素的上边距margin-top如果碰不到有效的border或者padding)  --   父元素加个overflow:hidden或padding或border、margin上下边距合并)

4. （复合）padding: auto、length; （top、bottom、left、right）

　　缩写型式：
　　　　　　　　padding:上下边距 左右边距;

　　　　　　　　padding:上边距 左右边距 下边距;

　　　　　　　　padding:上边距 右边距 下边距 左边距;

5. 边框样式(border | border-radius | box-shadow)

  5.1 (复合)border: border-width border-style border-color;

　　border-style: none/hidden/dotted/dashed/solid /double/groove/ridge/inset/outset; （border-top/bottom/left/right-style）

　　border-width: length/medium/thin/thick; (border-top/bottom/left/right-width)

　　border-color: color/0x/rgba; (border-top/bottom/left/right-color)

  5.2
    border-radius

  5.3
    box-shadow

6. opacity: number(0.0~1.0之间的小数)

　　兼容: filter:alpha(opacity=50) /*IE6~8*/
         opacity:.5 /*现代浏览器*/

7. background、background-size

    (复合)background: #EDEDED url(images/bg.png) no-repeat 50% 30px; (color image repeat position；与background-size配合使用)

　　background-color: tansparent(透明默) / colr...(rgba);

　　background-image: none / url(url);

　　background-repeat: repeat / no-repeat / repeat-x / repeat-y;

　　background-position: 左对齐方式 上对齐方式;

　　background-size: length length / % %(% auto) / cover / contain;

　　backgorund-origin: border-box (默)| padding-box | content-box;  （background-image有效）

　　background-clip: border-box/padding-box/content-box/text;      （background-color有效）
```





<br/><br/><br/>

<h5 id="h3">三、字体样式</h5>
  font | color

```
1. font
   （复合）font:italic bold 14px/22px 宋体 （style,weight,size/line-height,familiy） ?font-variant:normal/small-caps/inherit;（font: 400 14px/22px '宋体';）

　　style: normal/italic/oblique;

　　weight: normal/ bold/ bolder/ lighter/ 100~900(100的倍数);

　　size: length/%;

　　line-height: normal/number/length/%;

　　family: '宋体','黑体','Arial'...;(@font-face)

2. color: color / 0x、rgba()；

3. 扩展@font-face
```





<br/><br/><br/>

<h5 id="h4">四、文本属性/段落样式</h5>
  line-height | text-align | text-indent | letter-spacing  | text-decoration | text-shadow | text-transform

```
1. line-height: normal、length

2. text-align: left、right、center、justify

3. text-indent: length、em(根据父节点)

4. letter-spacing: normal、length

5. text-decoration: none、underline、blink 、overline、line-through

6. text-shadow: h-shadow v-shadow blur color;

7. text-transform: none、capitalize、uppercase、lowercase、inherit


word-wrap: normal、break-word;(长单词)

word-break: normal、break-word、keep-all;(长单词)

text-overflow: clip、ellipsis; ( overflow: hidden; white-space: nowrap;不换行 text-overflow: ellipsis;。。。 )

```





<br/><br/><br/>

<h5 id="h5">五、列表样式</h5>
  list-style-type | list-style-image | list-style-position

```
list-style-type: disc、circle、square、decimal、lower-roman、upper-roman、lower-alpha、upper-alpha、none、armenian、cjk-ideographic、georgian、lower-greek、hebrew、hiragana、hiragana-iroha、katakana-iroha、lower-latin、upper-latin;

list-style-image: none、url(url);

list-style-position: inside、outside、inherit;

```





<br/><br/><br/>

<h5 id="h6">六、CSS3新样式</h5>

```
1. border-radius: length / percentage; border-top-left-radius;

2. box-shadow: none / h-shadow v-shadow blur spread color inset;

3. box-sizing：content-box(w3c标准盒子w=w) / border-box(IE盒子w=w+p+b) / inherit

4. 扩展：border-image

5. 变形样式(transform) transform-origin； transform: translate(100px,100px) rotate(45deg) scale(.5,.5) skew(45deg);

6. 过渡动画(transition) transition: none /<transition-property> || < transition-duration > || <transition-timing-function> || < transition-delay>;

7. 自定义动画(animation)

　　@keyfrans 123{ 0%{} 100%{} }

　　animation-name: 123;

　　animation: <animation-name> || <animation-duration> || <animation-timing-function> || <animation-delay> || <animation-iteration-count> || <animation-direction> || <single-animation-fill-mode> || <single-animation-play-state> ; animation: 123 1s linear 1s infinite reverse;

　　animation-fill-mode: none | forwards | backwards | both;

 8. filter
```





<br/><br/><br/>

<h5 id="h7">七、image 和 video</h5>






<br/><br/><br/>

<h5 id="h8">八、其他</h5>
[object-fit](https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit): fill(填充,不保证比例)/contain（保证比例填充，留边）/cover（原比例裁剪，object-position）/none/scale-down

[object-position](https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-position): 类background-position



<br/><br/><br/>




[简单比较display、visibility、opacity](https://blog.csdn.net/qq_15626693/article/details/54619334)

比较  display:none  opacity:0 visibility:hidden
占据空间  否 是 是
回流与渲染 是 否 否
子代继承性 不继承 继承  继承
子代反继承 否 否 能
transition效果  无效  有效  有效
绑定的事件 不响应 能响应 不响应
 

[css样式的书写顺序及原理1](https://blog.csdn.net/qq_36060786/article/details/79311244)

[css样式的书写顺序及原理2](https://www.shejidaren.com/css-written-specifications.html)

 

[勿用_](https://www.cnblogs.com/kaiye/archive/2011/06/13/3039046.html)

 

①.字体设置为10px

chrome浏览器最小字体12px，firefox和IE没有限制;

如果都设置成10px,可用css3的缩放属性：transform:scale(0.90)， 其他浏览器创建新的样式设置font-size:10px即可；

[来源](https://www.cnblogs.com/boanyi/p/NewBigGod.html)

 

 

字母换行：word-wrap: break-word;
单词换行：word-break: break-all;   （￥1111111111111）
文字换行：white-space:pre-wrap;

[line-height多行和单行](https://blog.csdn.net/sillies_3/article/details/100023507)
### 其他、
[博客](https://www.cnblogs.com/lgyong/p/8617501.html)

</h6>
