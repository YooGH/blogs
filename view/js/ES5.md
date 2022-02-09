1. <a href="#h1"> 类型 </a>
2. <a href="#h2"> 数字 </a>
3. <a href="#h3"> 字符串 </a>
4. <a href="#h4"> 数组 </a>
5. <a href="#h5"> 对象 </a>
6. <a href="#h6"> 注释 </a>
7. <a href="#h7"> 运算符 </a>
8. <a href="#h8"> 程序流程控制 </a>
9. <a href="#h9"> 类型转化 </a>
10. <a href="#h10"> 码 </a>
<br/><a href="#ck"> 参考 </a>



<br/><br/><br/>
###  <h1 id="h1"> 1.类型 </h1>
> 基本类型: boolean、number、string、null、undefined、<br/>
> 引用类型: Array、Object(深浅拷贝)



<br/><br/><br/>
###  <h1 id="h2"> 2.数字 </h1>
[Date](https://blog.csdn.net/qq_39759115/article/details/78893853)
```
toFixed()　　 // 四舍五入，0-20保存后面小数点
Number()　　  // 强制转化数字
```

> Math: 　　　　abs　　ceil/floor/round（Math.round四舍五入取整，　　toFixed四舍六入五考虑）　　max/min　　pow/sqrt　　random
```
小明考试考砸，第一次被他爸打10，下次双倍，一年中被打了13次，总共到了多少下？
let sum = 0;
let n = 10;
let six = '';
for(let i=0;i<13;i++){
    let k = Math.pow(2,i) * n;
    sum += k;
    // console.log(i+1+'次='+k)
    six += k.toString() + (i==12 ? '' : '+');
}
console.log(`${six} = ${sum}(总和)`)  // 10+20+40+80+160+320+640+1280+2560+5120+10240+20480+40960 = 81910(总和)
```



<br/><br/><br/>
###  <h1 id="h3"> 3.字符串 </h1>
> ①. 声明
```
```

<br/>

> ②. 长度: length
```
'string'.length // 6
```

<br/>

> ③. 增
```
+
```

<br/>

> ④. 
查(值 => 键)
```
indexOf(值,开始检索键可选) // 返检索的键，没有则返-1(可用于数组)
lastIndexOf(值)           // 返检索的键，没有则返-1(可用于数组)
search(值/正则)           // 返检索的键，没有则返-1
```
查(键 => 值)
```
charAt(键)
```

<br/>

> ⑤. 改(值 => 键)
```
substr(键,个数)          // 返新字符串，没有则返空字符串
substring(键1,键2)       // 返键1到键2-1新字符串，没有则返空字符串
```

<br/>

> ⑥. 大小写转换
```
toLowerCase()、toUpperCase()不改变原字符串
```



> 正则
```
按位与(NOT ~)：取最小的值
按位或(AND &)：取最大的值
按位非(OR |)：反码(补码：原码的反码加1)
~~：浮点转化为整数
```










  
<br/><br/><br/>
###  <h1 id="h4"> 4.数组 </h1>
> ①. 声明
```
var arr=new Array()
var arr = []
```

<br/>

> ②. 长度: length(同字符串)
```
[1,2].length // 2
```

<br/>

> ③. 增
```
unshift(num1,numb2,...)     // 返新数组长度
push(num1,numb2,...)        // 返新数组长度
splice(键、删除个数(0)、替换)  // 返删除的数组,如果有
```

<br/>

> ④. 删
```
shift()                     // 返删除的数字
pop()                       // 返删除的数字
splice(键、删除个数)          // 返删除的数组,如果有
```

<br/>

> ④. 其他
```
slice(键1、键2)  // 切，返原数组键1到键2 - 1的数组，不改变原数组
concat()        // 合，返原合并数组，不改变原数组
reverse()       // 倒，返原反转后的数组，改原数组
sort(function(a,b){return a-b})
join()          // Arr => Str
split(',')      // Str => Arr

```
```
数组累加器：array.reduce(function(total, currentValue, currentIndex, arr), initialValue)   -- (参1函数；参2初始值，不传则数组的第一个;    函数主要减少手动遍历)

```



<br/><br/><br/>
###  <h1 id="h5"> 5.对象 </h1>
in: 操作符检查属性在对象是否存在

```
one:for(...){
　　two:for(...) {
　　　　break one;
　　}
}
```


<br/><br/><br/>
###  <h1 id="h6"> 6.注释 </h1>
```
单行: //
多行: /**/
```



<br/><br/><br/>
###  <h1 id="h7"> 7.运算符 </h1>
```
算术： +、-、*、/、%

增量/减量（递增/递减）: ++、--

比较(返回布尔值)：>、<、>=、<=、==、!=(php还有<>)、===、!===

赋值：+=（php是.=）、-=、*=、/=

逻辑：&&、||、!

三元：expression ? expresion2 : expresion3
```



<br/><br/><br/>
###  <h1 id="h8"> 8.程序流程控制 </h1>
```
if、switch

for(forEach/for of)、while(do...while)

break、continus

(js: for..in)
```



<br/><br/><br/>
###  <h1 id="h9"> 9.类型转化 </h1>
```
字符串类数组: (用数组的方法时，弱转化。例: 'dfjdfkd'.[0])

JSON: JSON.parse() / JSON.stringify()

转字符串: toString()：　把一个逻辑值转换为字符串，并返回结果

数组: valueOf()

浮点: toFixed()　　 // 四舍五入，0-20保存后面小数点
数字: Number()　　  // 强制转化数字


取整:　~~
```



<br/><br/><br/>
###  <h1 id="h10"> 10.码 </h1>
Unicode (统一码、万国码、单一码)

String.fromCharCode()          可用于切割字符串的空格32（二进制00100000）

1
console.log(String.fromCharCode(72,101,108,108,111))     //  hello
stringObject.charCodeAt(index)     返回值在 0 - 65535 之间

1
'Hello'.charCodeAt(0)     //  72
Unicode，UTF-32,UTF-16,UTF-8到底是啥关系？　




###  <h1 id="ck"> 参考 </h1>
类型判断：https://www.cnblogs.com/onepixel/p/5126046.html（typeof,instanceof,原型toSring.call()）
调试
```
alert()
console.log('%c ', 'color:blue')

toString()
typeof
instaceof
isArray()
test
```
[blogs](https://www.cnblogs.com/lgyong/p/8711614.html)

<br/>
ES1：1997 年 6 月
ES2：1998 年 6 月
ES3：1999 年 12月
ES4：未通过(政治因素)
ES5：2009 年12 月
ES6：2015 年 6 月每年一版