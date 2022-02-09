1. <a href="#h1"> 深浅拷贝 </a>



###  <h1 id="h1"> 深浅拷贝 </h1>
```
var o = {};
var a = {};
var b = null;

console.log(typeof a)               // object
console.log(typeof b)               // object

console.log(a == o)                 // false 深浅拷贝
console.log(a == b)                 // false

console.log(a instanceof Object);   // true
console.log(b instanceof Object);   // false
```

浅拷贝：var obj2 = obj1;

深拷贝：
一层拷贝对象可用 ①var obj2 = JSON.parse(JSON.stringify(obj1));(适用于json对象，函数会报错)　　②Object.assign({}, obj1)
多层拷贝①jq $.extend(true,{},obj1)
> ②遍历且防止死循环
```
function deepClone(initalObj, finalObj) {    
  var obj = finalObj || {};    
  for (var i in initalObj) {        
    var prop = initalObj[i];        // 避免相互引用对象导致死循环，如initalObj.a = initalObj的情况
    if(prop === obj) {            
      continue;
    }        
    if (typeof prop === 'object') {
      obj[i] = (prop.constructor === Array) ? [] : {};            
      arguments.callee(prop, obj[i]);
    } else {
      obj[i] = prop;
    }
  }    
  return obj;
}
var str = {};
var obj = { a: {a: "hello", b: 21} };
deepClone(obj, str);
console.log(str.a);
```
> ②new Object.create()
```
function deepClone(initalObj, finalObj) {    
  var obj = finalObj || {};    
  for (var i in initalObj) {        
    var prop = initalObj[i];        // 避免相互引用对象导致死循环，如initalObj.a = initalObj的情况
    if(prop === obj) {            
      continue;
    }        
    if (typeof prop === 'object') {
      obj[i] = (prop.constructor === Array) ? [] : Object.create(prop);
    } else {
      obj[i] = prop;
    }
  }    
  return obj;
}
```

<br/><br/><br/>
[我](https://www.cnblogs.com/lgyong/p/12710862.html)
[参考](https://www.cnblogs.com/Chen-XiaoJun/p/6217373.html)


