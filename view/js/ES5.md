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
> 值类型(基本类型)：字符串（String）、数字(Number)、布尔(Boolean)、空（Null）、未定义（Undefined）、Symbol、BigInt-6<br/>
> 引用数据类型（对象类型）：对象(Object)、数组(Array)、函数(Function)，还有两个特殊的对象：正则（RegExp）和日期（Date）、Math



<br/><br/><br/>
###  <h1 id="h2"> 2.数字 </h1>
存储是64位的浮点型，所有1===1.0

[Date](https://blog.csdn.net/qq_39759115/article/details/78893853)
> [toFixed()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)

    输入： 数字类型(不会弱转化)
    规则：
        ①. 四舍五入 （0.2357.toFixed(2) => 0.24）
        ②. 保存后面小数点0-20，实际看浏览器可能更多，默认0, （0.2357.toFixed() => 0）
    输出: 字符串类型，不改变原值

> [Number()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number)

    输入： 所有类型
    规则： 
        ①. 纯数字的字符串/数字，可转数字 (Number('01456446') => 1456446; Number(1456446) => 1456446; )
        ②. 字符串包含除数字和除数字/字符串,返回NaN（Number('01456446也') => NaN; Number({a:1}) => NaN）
        ③. '', null, false返回0 (Number(null) => 0)

    输出: 数字类型/NaN

> Math: 
abs<br/>
ceil/floor/round（Math.round四舍五入取整)<br/>
max/min<br/>
pow/sqrt<br/>
random<br/>

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
 - 声明
```
  var s1 = '我是字符串';
  var s2 = new String('我是字符串');
```



 - 长度: **length** ``'hi Jim'.length // 6`` 


 - 增 ``+``


 - 查(值 => 键)

   + **indexOf**
   (值,开始检索键可选) // 返检索的键，没有则返-1(可用于数组)
   + **lastIndexOf**  (值)           // 返检索的键，没有则返-1(可用于数组)
   + **search**       (值/正则)           // 返检索的键，没有则返-1
> search: 支持正则和字符串，
<br/>indexOf: 只支持字符串，但性能高
<br/>（字符串优选用indexOf,要用到正则用search）
 - 查(键 => 值)
   
   + **charAt**(键)


 - 改(值 => 键)
   
   + **substr**      (键,个数)          // 返新字符串，没有则返空字符串
   + **substring**   (键1,键2)       // 返键1到键2-1新字符串，没有则返空字符串

<br/><br/><br/>


 - 替换
   + **replace()**

 - 大小写转换（不改变原字符串）
   + **toLowerCase()**
   + **toUpperCase()** 


 - 正则
```
按位与(NOT ~)：取最小的值
按位或(AND &)：取最大的值
按位非(OR |)：反码(补码：原码的反码加1)
~~：浮点转化为整数
```










  
<br/><br/><br/>
###  <h1 id="h4"> 4.数组 </h1>
> 声明
```
var arr = new Array()
var arr = []
```

<br/>

> 长度: length(同字符串)
```
[1,2].length // 2
```

<br/>

> ①. 增
 - **unshift()**
 - **push()**
 - **splice()**
```
unshift(num1,numb2,...)     // 返新数组长度
push(num1,numb2,...)        // 返新数组长度
splice(键、删除个数(0)、替换)  // 返删除的数组,如果有
```

<br/>

> ②. 删
 - **shift()**
 - **pop()**
 - **splice()**
```
shift()                     // 返删除的数字
pop()                       // 返删除的数字
splice(键、删除个数)          // 返删除的数组,如果有
```

<br/>

> ③. 数组累加器[reduce](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
 - **reduce()**
 > 可用于get请求，代码对象写法，在通过如下转化<br/>``array.reduce((total, currentValue, currentIndex, arr), initialValue)``

  let array1 = [1,2,3]
  array1.reduce(
    (pre, cur) => pre + cur,   // (pre, cur) => { return pre + cur }
    0
  );
```
参1: callback函数
参2：初始值,不传则数组的第一个

let longStr = Object.entries({
    id: 666,
    name: 'reduce'
}).reduce((result, [key, value], yy, arr) => {
    console.log(result) // ''/ &id=666
    console.log(yy) // 0 / 1
    console.log(arr) // [['id',666], ['name', 'reduce']]
    return (result += `&${key}=${value || ''}`);
}, '')
console.log(longStr) // &id=666&name=reduce
```

<br/>

> ④. ... 其他
```
slice(键1、键2)  // 切，返原数组键1到键2 - 1的数组，不改变原数组
concat()        // 合，返原合并数组，不改变原数组
reverse()       // 倒，返原反转后的数组，改原数组（应用：第三方的物流信息）

join()          // Arr => Str
split(',')      // Str => Arr
Array.isArray([]) // 返回布尔值 
```
sort(function(a,b){return a-b}) 

```
let arr = [1,22,3,12]
arr.sort() // 1,12,3,22
arr.sort((a,b)={return a-b}) // 1,3,12,22
```



<br/><br/><br/>
###  <h1 id="h5"> 5.对象 </h1>
 
 <h3>一</h3>


 - **Object.create()**<br/>
 [{},Object.create(),new Object()区别](https://blog.csdn.net/weixin_45446654/article/details/115296998)


 ```
 let a = {b: 1}
 let c = Object.create(a)
 console.log(Object.getOwnPropertyNames(c))  // [] -> Object.create() 是将创建的对象继承到原型链上, {}和new Object是继承后在创建对象Object.getOwnPropertyNames(a)
 ```

 - **Object.defineProperty()** [例子来源](https://blog.csdn.net/qq_45954420/article/details/123315867)

 ```
 参数: obj、prop、descriptor(对象)

 let person = {age: 16}
 Object.defineProperty(person, 'age', {
   // value: 18,          // 属性的值
   // enumerable: true,   // 控制属性是否可以枚举 默认值false（for...in）
   // writable: true,     // 控制属性是否可以修改 默认值false（修改属性将不成功）
   // configurable: true, // 控制属性是否可以被删除 默认值false(delete 'age' in person)
   get: function() { // vue订阅/收集调用
     return number
   },
   set: function(value) { // 发布/值改变后把收集调用全部更新
     number = value
   }

 })
 ```


 - **Object.defineProperties()** --（上面的只能操作一个属性，下面则是1变多）

 ```
 let person = {age: 16};
 Object.defineProperties(person, {
   'age': {
     value: 18,
     writable: true,
   },
   'name': {
     value: 'aaa',
     enumerable: true, // 新属性默认是false,打印不出
     writable: true,
   }
 })
 console.log(person)
 ```

 <br/>



 - **Object.freeze()**
> 不能修复对象的属性并且是浅操作(需要深层，还需递归冻结)，但可以重新赋值<br>, 与preventExtensions区别是不可以编辑原来的属性
[参考](https://www.jianshu.com/p/2b4ab7105dbd)



 - **Object.isFrozen()**
 ```
 let g = {x:1,y:{a:5}}
 Object.freeze(g)
 Object.isFrozen(g.x) // true
 Object.isFrozen(g.y) // false
 ```


<br/><br/><hr/>

 <h3>二</h3>

 - **Object.getOwnPropertyDescriptor(obj, key)**
 ```
 获取自身的某个属性描述(value、writable:true-是否可以赋值、enumerable:true-是否可以遍历、configurable:true-是否被删除/改变特性值、)
 let obj = {b:2, c:3};
 Object.getOwnPropertyDescriptors(obj, 'b') // {value,configurable,enumerable,writable}
 ```

 - **Object.getOwnPropertyDescriptors(obj)**

 ```
 获取自身的所属性描述(configurable、enumerable、value、writable)
 Object.prototype.a = 1;
 let obj = {b:2, c:3};
 Object.getOwnPropertyDescriptors(obj) // {a:{value...}, c:{value...}}
 ```

 - **Object.getOwnPropertyNames(obj)**

 查询属性名(关键包括不可遍历的，与keys()区分)

 - **Object.getOwnPropertySymbols() -- ES6**

 - **Object.prototype.hasOwnProperty()**  新api: Object.hasOwn()


<br/><br/><hr/>

 <h3>三</h3>

 - **Object.isExtensible()**,是否可以扩展，Object.preventExtensions，Object.seal 或 Object.freeze标记

 - **Object.preventExtensions()**,不可扩展，可通过Object.isExtensible()检测, 与freeze区别是可以编辑原来的属性

 - **Object.isSealed()**,判断一个对象是否被密封（Object.preventExtensions也包括属性不可配置） (Object.seal())

 - **Object.seal()**, 阻止添加新属性，但已经有属性还是可以读写不能删除(Object.isSealed())

 - **Object.keys()**,枚举对象的key


<br/><br/><hr/>

 <h3>四</h3>

 - **Object.prototype.isPrototypeOf()**,一个对象是否存在于另一个对象的原型链

 - **Object.prototype.propertyIsEnumerable()**,查询属性是否可以枚举


 - **Object.setPrototypeOf()**

 - **Object.prototype.toLocaleString()** 对象转为字符串

 - **Object.prototype.toString()** 对象转为字符串(tostring()方法是直接转换成字符串，tolocalstring()方法是转化成带有本地格式的字符串。最好的例子就是new 一个Date对象，然后分别tostring 和tolocalstring一下)

 - **Object.prototype.valueOf()** 指定对象的原始值

 

 

**in**: 操作符检查属性在对象是否存在

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


取整:　~~（浮点转化为整数）
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
[](https://blog.csdn.net/weixin_39583029/article/details/111097271)
chrome38版本  -- 2018