<h6>

1. <a href="#h1"> 方法 </a>
2. <a href="#h2"> 语法 </a>
3. <a href="#h3"> 例子 </a>


<br/><br/><br/>


###  <h1 id="h1"> 1.方法 </h1>
> s=原来字符串，r=正则的规则，s1=原来的字符串里要识别的


- [search()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/search) - s.search(r)  查询，返回查到的下标或-1，不改变原来

- [match()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match) - s.match(r)  查询，返回查到的数组(值)或null，不改变原来

- [replace()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace) - s.replace(r, 替换的字符串) 替换，返回替换的值，不改变原来

<br/>

* [test()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) - r.test() 要匹配正则表达式的字符串，返回布尔值

* [exec()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) - r.exec() 要匹配正则表达式的字符串，返回数组(值)或 null


<br/><br/><br/>


###  <h1 id="h2"> 2.语法 </h1>

<h3>元字符</h3>

\d 匹配一个数字

\D 匹配除数字以外任何一个字符 (可用于过滤手机号)

\w 匹配一个英文字母、数字或下划线

\W 匹配除英文字母、数字和下划线以外任何一个字符

\s 匹配一个空白字符

\S 匹配除空白字符以外任何一个字符

<br/><br/>

\n 匹配一个换行符

\f 匹配一个换页符

\r 匹配一个回车符

\t 匹配一个制表符

\v 匹配一个垂直制表符

\xxx 查找一个以八进制数xxx规定的字符

<br/><br/>

\xdd 查找以16进制数dd规定的字符

\uxxxx 查找以16进制数的xxxx规定的Unicode字符

<br/><br/>


<h3>特殊字符</h3>

n* 匹配零个或者多个n的字符串

n+ 匹配任何至少包含一个n的字符串

n? 匹配零个或者1个n的字符串

^n 匹配以n开头的字符串

<br/><br/>

n$ 匹配以n结尾的字符串

n{x} 匹配包含x个n的序列字符串

n{x,y} 匹配至少x个，最多y个n的字符串

n{x,} 匹配至少x个的字符串

<br/><br/>

?=n 匹配其后紧接指定的n字符串

?!n 匹配其后没有紧接指定的n字符串

\b 匹配一个单词边界，也就是单词与空格之间的位置，不匹配任何字符

\B 匹配除单词边界以外的部分

<br/><br/>

| 左右两边表达式之间 “或” 关系，匹配左边或者右边

[] 匹配方括号中的任一字符

[^] 匹配除方括号中的字符外的任何字符（排除方法）

() 括号里面表示一个整体

. 匹配除换行之外的任何一个字符


<br/><br/><br/>


###  <h1 id="h3"> 3.例子 </h1>

(1) 去空格``/(^\s+)|(\s+$)/g ``

```
function delHtmlTag(str)
{
    var str=str.replace(/<\/?[^>]*>/gim,"");  //  去掉所有的html标记
    var result=str.replace(/(^\s+)|(\s+$)/g,"");  //  去掉前后空格
    return  result.replace(/\s/g,"");  //  去除字符串空格
}
```

(2) 高亮字体

```
function highLightKeywords(str, words, tag, stylee) {       // 需要的改的字体,需要高亮的字体,标签,样式
    tag = tag || 'span';                                    // 默认的标签，如果没有指定，使用span(h5端)
    stylee = stylee || 'color: #476FF3'                     // 高亮颜色
    re = new RegExp(words, 'gi');
    if (re.test(str)) {
        str = str.replace(re, '<'+ tag +' style="' + stylee + '">$&</'+ tag +'>');
    }
    return str;
}
```

(3) px转rpx

```
pxToRpx(str) {
  if(!str) {return ''}
  let r = /(0|1|2|3|4|5|6|7|8|9)px*/g;  // 识别到"px"并且前面带数字
  let index = str.search(r);
  if(index != -1) {
    let newVal = `${str.slice(0,index+1)}r${str.slice(index+1)}`
    return pxToRpx(newVal)
  } else {
    return str
  }  
}
```

(999)常见的过滤
> 判断数据有效性 数据的有效性包括很多内容，例如一个字符串是否为日期格式，是否为有效的数字，是否为有效的Email等，这类判断都是由正则表达式完成。 常用的正则表达式

- 过滤固定电话号码:  str.replace(/[^0-9|-]/g, '')
- 电话加手机： ``/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/``   （没有19开头的手机号）
- 手机： ``/^1(3|4|5|6|7|8|9)\d{9}$/``  或者 ``/^1[3456789]\d{9}$/``
- 固定电话: ``0\d{2,3}-[1-9]\d{6,7}``  (匹配区号3到4位，电话7到8位的固定电话号码)
- IP地址： ``/(\d+)\.(\d+)\.(\d+)\.(\d+)/``
- 邮件地址： ``/^([a-z0-9]+[-_\.]?[a-z0-9]+)*@([a-z0-9]+)\.([a-z0-9]{1,})$/i``
- 身份证号： ``/ (^\d{15})|(\d17([0−9]|X))``

```
使用例子： var tel = "13828418882",res; res =tel.search(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/); if(res==-1){//找不到则返回-1 alert("这不是一个有效的手机号码"); }
```

- img标签：/<img(?:(?!\/>).|\n)*?\/>/gm
- p标签：/<p(?:(?!<\/p>).|\n)*?<\/p>/gm
- img的src: /(http?|https):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g

<br/><br/><br/>

[博客](https://www.cnblogs.com/lgyong/p/9564328.html)




</h6>