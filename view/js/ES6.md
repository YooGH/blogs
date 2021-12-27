﻿1. <a href="#h1"> 新类型 </a>
2. <a href="#h2"> 声明变量 </a>
3. <a href="#h3"> 解构赋值</a>
4. <a href="#h4"> 字符串</a>
5. <a href="#h5"> 正则 </a>
6. <a href="#h6"> 数组 </a>
7. <a href="#h7"> 函数</a>
8. <a href="#h8"> 对象 </a>
9. <a href="#h9">数据结构 </a>
10. <a href="#h10"> 历史</a>
-. <a href="#ck"> 参考 </a>



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

- ...（扩展运算符）

- Array.from() / Array.of()

  ```
  json => array:
  Array.form(json);      // 类数组转成真正数组， 如new set([1,1,12,3,45])
  数字、文本、变量　　Array.of(1,2,3);
  ```
  
- copyWithin()

  ```
  666
  ```
  
- find() / findIndex()

  ```
  let arr=[1,2,3,4,5,6,7,8,9];
  console.log(arr.find(function(value,index,arr){
      return value > 5;
  }))
  ```

- fill()

  ```
  let arr=[0,1,2,3,4,5,6,7,8,9];
  arr.fill('jspang',2,5);                     //填充内容  start  end
  console.log(arr);
  ```
  

````
for (let item of arr )
for (let item of arr.keys() )
for (let [ index, val ] of arr.entries() )
````

```
let arr=['jspang','技术胖','大胖逼逼叨']
let list=arr.entries();
console.log(list.next().value);
console.log(list.next().value);
console.log(list.next().value);
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