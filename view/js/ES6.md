1. <a href="#h1"> 新类型 </a>
2. <a href="#h2"> 声明变量 </a>
3. <a href="#h3"> 解构赋值</a>
4. <a href="#h4"> 字符串</a>
5. <a href="#h5"> 正则 </a>
6. <a href="#h6"> 数组 </a>
7. <a href="#h7"> 函数</a>
8. <a href="#h8"> 对象 </a>
9. <a href="#h9"> 数据结构 </a>
10. <a href="#h10"> 历史</a>
<br/><a href="#ck"> 参考 </a>



###  <h1 id="h1"> 1.新类型 </h1>
    symbol




###  <h1 id="h2"> 2.声明变量 </h1>

- **let** 块级作用域，不存在变量提升（需先声明，后使用），且作用域“锁死”(在域里面不能先用在声明)
  
- **const**块级作用域，var函数作用域
  
    ```
    var tem = '1'
    function k2() {
        tem = 'kkk';                
        console.log(tem)            // kkk
        var tem
    }
    k2()
    function k1() {
        tem = 'kkk';                //  Cannot access 'tem' before initialization
        console.log(tem)
        let tem
        // var tem
    }
    k1()
    ```





###  <h1 id="h3"> 3.解构赋值 </h1>

- 字符串

    ```
    ① const [a,b,c,d,e] = 'hello';　　　　//b =》e
    ② let {length: len} = 'hello'　　　　  //len =》5
    ```

- 数组

    ```
    ① var [a, b, c] = [1, 2, 3]
    ② let [foo, [[bar,], baz]] = [1, [[2], 3]]
    ③ let [head, ...tail] = [1, 2, 3, 4]　　　　　　//...tail =》 2,3,4;        ...rest运算符;     类 对象扩展运算符 --arguments:  let a = [1,2,3]; let b = [...a];
    ④ let [a,b='kk'] = ['33']　　　　　　　　　　// b 的默认值是'kk'　
    ```

- 对象

    ```
      var foo; ({foo} = {foo:'bbb'})
    ① var {foo, bar} = {bar:'bbb', foo:'aaa'}
    ② let {foo:baz} = {foo:'aaa', bar:'bbb'}//  baz =》'aaa'    foo =》undefined
           (var {foo:foo, bar:bar} = {foo:'aaa', bar:'bbb'})
    ③ 重命名变量名： 
    let 后端数据 = {a:1, b:2}
    let {a:name, b:sex} =  
    后端数据;           console.log(name) =》 1 
    ```
    
- 函数

  ```
  function add([x, y]){　　return  x+y;　　}
  
  　　　　add([1,2])
  ```

  

###  <h1 id="h4"> 4.字符串 </h1>

- 模板字符串(`${}`)

  ```
  let a ='你好'; 
  let b = `hello ${a} world 世界。`;    // hello 你好 world 世界
  ```
- 增(后两es2017)

  ```
  repeat()
  padStart()
  padEnd()   
  ```
- 查

  ```
  includes()
  startsWith()
  endsWith()
  ```
- 

  ```
  {}
  codePointAt()
  fromCodePoint()
  ```
  





###  <h1 id="h5"> 5.正则 </h1>

- 修饰符

  u、y

- stickey属性

  是否有y修饰符

- flangs属性

  返回修饰符

###  <h1 id="h6"> 6.数组</h1>

- ...     : <small>扩展运算符</small>

- Array.from()：<small>转为数组，不改变原来遍历; [详细](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from)</small>

  ```
  字符串转数组:
  const Str = 'yes';
  Array.of(Str)  // ["y", "e", "s"]
  
  Set转数组:
  const set = new Set(['one', 'two', 'three', 'two']);
  Array.of(set) // ["one", "two", "three"]
  
  对象转数组(要有length,不然不能转)：
  let arrayLike = {
      '0': 'a',
      '1': 'b',
      '2': 'c',
      length: 3
  };
  Array.from(arrayLike) // ["a", "b", "c"]
  ```
  
- Array.of()：<small>数值转为数组，不改变原来遍历; [详细](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of);   可以用于替换new Array()的问题</small>

  ```
  Array.of(1,2,3,4)  // [1,2,3,4]  数值转为数组
  '1,2,3,4'.split(',')  // [1,2,3,4]  字符串转为数组
  
  Array.of(3) // [3]
  Array(3)    // [,,,]
  ```
  
- copyWithin()替换 ，**改变原数组**

  ```
  copyWithin 替换，数组长度不变，改变原数组
  [1,2,3,4,5].copyWithin(0, 3) // [4, 5, 3, 4, 5]
  
  splice 添加，数组长度改变，改变原数组
  [1,2,3,4,5].splice(0, 0, '外来数据1') // ['外来数据1', 1, 2, 3, 4, 5]
  ```
- find() / findIndex()  <small>返回值/键，undefind/-1</small>

  > findIndex()参数是函数
  >
  > indexOf()参数是字符串/数字

  ```
  const Arr =[1,2,3,4,5,6,7,8,9];
  let value1 = Arr.find(function(value,index,arr){
      return value > 5;
  })
  console.log(value1) // 6(返回值，没有返回undefind)
  let value1 = Arr.findIndex(function(value,index,arr){
      return value > 5;
  })
  console.log(value1) // 5(返回键，没有返回-1)  
  ```

- fill() 填充，改变原数组

  ```
  let arr=[0,1,2,3,4,5,6,7,8,9];
  arr.fill('Hi',2,5);              // 填充内容  start  end
  console.log(arr);                // [0,1,"Hi","Hi","Hi",5,6,7,8,9]
  ```

- keys()/values()/entries()

````
let arr = ['a', 'b', 'c'];
for (let key of arr.keys()) {  console.log(key);  }
> 0
> 1
> 2
for (let val of arr.values()) {  console.log(val);  }
> a
> b
> c
for (let item of arr.entries()) {  console.log(item)  }
> [0,"a"]
> [1,"b"]
> [2,"c"]
````
> 不借助for...of,可以用**next**
```
let arr = ['a', 'b', 'c'];
let list= arr.entries();
console.log(list.next().value);  // [0,"a"]
console.log(list.next().value);  // [0,"a"]
console.log(list.next().value);  // [0,"a"]

let keyList = arr.keys();
console.log(keyList.next().value);  // 0
```

- inculdes()  

> 参1：查询的值 （NaN为true）
>
> 参2：从哪里开始查（默认，0开始/大于数组是也是0）
>
> ES7， 返回布尔值
>
> 而indexOf()，返回是键

```
const Arr = [1,2,3, NaN];
Arr.includes(2)  // true
Arr.includes(NaN) // true（用indexOf(NaN)则是-1）
Arr.inculdes(3,5) // false(从键第5位开始查)
```







- in（对象和数组是否存在）

  ```
  obj = { a: 'blogs'}
  console.log('a' in obj);   // true    
  arr = [ 'blogs', '博客园']
  console.log(0 in arr);  // true         
  ```

- forEach、filter、some、map(替换)、

- toString();

- arr.map(function (arrItem) { /**/ })　　循环数组





###  <h1 id="h7"> 7.函数 </h1>

- 参数默认值： y = y|r --> (y=4)

- name

- 箭头函数

  ```
  var a = 0;
  let obj1 = {
      a: 1,
      fn1: function () {
          setTimeout(function () {
              console.log('普通函数')
              console.log(this.a)                    // 指向调用的对象
          },1000)
      }
  }
  let obj2 = {
      a: 2,
      fn2: function () {
          setTimeout( () => {
              console.log('箭头函数')
              console.log(this.a)                    // 指向所处的对象
          },1000)
      }
  }
  obj1.fn1()
  obj2.fn2()
  ```

![图片1](E:\blogss\view\js\img\set.png)



### <h1 id="h8"> 对象 </h1>

- 

  ```
  var name = 'name', function = 'function';　　　　var obj = {name,function}
  ```

- 结构
  ```
  var foo = ‘bar’　
  var baz = {foo}　
  
  => es5
  
  var baz = {foo:'baz'}
  ```
  
- function结构  

  ```
  var o = {　　　 
    method () {}　
  }
  
  => es5
  
  var o = {
      method:function(){}
  } 
  ```

- 对象的属性

  ```
  obj['a' + 'bc'] = 123;
  
  => es5
  
  let obj = {
    [prokey] : true,
    ['a' + 'bc'] : 123;　　　　　
  };
  ```


- name

  ```
  返回对象名称  Object.is(NaN,NaN);     Object.is(+0,-0);
  ```

- assign

  ```
  合并
  ```
- for...of
- 模块
  ```
  { cid as c, aid as a, family as f}
  export default   vs  export  import
  ```





### <h1 id="h9"> 数据结构 </h1>

**new Map()** :map为解决对象中的键值不能为非数字,map((当前元素值,小标,当前数组)=>{})

**new Set()**

  ```
var m = new Map()
m.set('Adam', 67)
  ```







### <h1 id="h10"> 历史 </h1>

- ES8(ES2017)  [new **`Uint8Array()`**](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)

- **babal**

  ```
  npm install -g babel-cli (全局)
  npm install --save-dev babel-preset-es2015 babel-cli（生产环境）
  ```

- promize 

  https://www.jianshu.com/p/7e60fc1be1b2
- ??
  ```
  1.?? 的意思是，如果 ?? 左边的值是 null 或者 undefined，那么就返回右边的值。 
  let a = 99;,b=null;
  console.log(b??a)   =>   99       =>
  ```

- bug1

  ```
  bug1:Invalid attempt to destructure non-iterable instance
  let [name,id] = {name: 'tony', id: 1};    // 左右两边类型不同
  ```
- 生成器函数
  >（步骤生成器） function*    --   yield    --     next().value
  
  > yield 有return效果，但next()就走下一个next
  ```
  function* step(i) {
  　　yield i;
  　　console.log('下一步')
  　　yield i*3;
  } 
  
  let k = step(10)
  
  console.log(k.next().value)       // 10 
  
  console.log(k.next().value)       // 下一步  30
  ```


###  <h1 id="ck"> 参考 </h1>

[ES6文档](https://es6.ruanyifeng.com/#docs/promise)

https://www.cnblogs.com/lgyong/p/8711550.html

[E6 ~ E10](https://www.cnblogs.com/miaSlady/p/10955729.html)

[ES2021](https://h3manth.com/ES2021/)

#### (ES2022)[https://h3manth.com/ES2020/]
1. top-level await（不在需要与async配合，可以单独）
2. 类
3. Temporal(完善Date(), 提前体验包：@js-temporal/polyfill)
4. 内置对象

 - Object.hasOwn()
 - at()
 - cause
 - /d