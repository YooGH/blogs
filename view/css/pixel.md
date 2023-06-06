一、px
绝对像素 ``1px就是指1个显示像素但是要注意的是显示像素不等于物理像素``

①.字体设置为10px

chrome浏览器最小字体12px，firefox和IE没有限制;

如果都设置成10px,可用css3的缩放属性：transform:scale(0.90)， 其他浏览器创建新的样式设置font-size:10px即可；

[来源](https://www.cnblogs.com/boanyi/p/NewBigGod.html)



二、em
根据上级元素，都没有就取html,html就取浏览器默认

三、rem
rem 根据根元素（没有显示设置html，则用浏览器的设置一般16px）
``html {font-size: 10px;} div {font-size: 2rem} => 2*10px;``

四、vh、vw

五、%

[博客](https://www.cnblogs.com/lgyong/p/13744011.html)
