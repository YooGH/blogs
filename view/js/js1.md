# 深浅拷贝

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






<br/><br/><br/>

### 浅拷贝
``var obj2 = obj1;``(引用关系)






<br/><br/><br/>

### 深拷贝
> JSON.parse(JSON.stringify(obj)); 遍历;

[弊端](https://blog.csdn.net/weixin_44194217/article/details/111192652)


<br/><br/><br/>

##### 一层拷贝对象可用
1. ``var obj2 = JSON.parse(JSON.stringify(obj1));`` (适用于json对象，函数丢失或JSON.parse(undefined)会报错)　　

2. ``Object.assign({}, obj1)``

3. ``Object.assign()``(多层二级属性就是浅拷贝)


<br/><br/><br/>

##### 多层拷贝
1. jq $.extend(true,{},obj1)

2. 遍历且防止死循环

```
function deepClone(obj) {
  let objClone =  Array.isArray(obj) ? [] : {};
  if(obj && typeof(obj) === 'object') {
    for(let key in obj) {
      if(obj[i] === obj) { continue }
      if(obj[key] && typeof(obj[key]) === 'object') {
        objClone[key] = deepClone(obj[key])
      } else {
        objClone[key] = obj[key]
      }
    }
  }
  return objClone
}
var obj1 = {
  a: {
    b: "hello",
    c: 21, 
    d: { e: 'bigo1'},
  }
};
var obj2 = deepClone(obj1);
obj2.a.b.d.e = 'bigo2'
console.log(obj1.a.b.d.e);
console.log(obj2.a.b.d.e);
```


<br/><br/><br/>
[博客](https://www.cnblogs.com/lgyong/p/12710862.html)

[参考](https://www.cnblogs.com/hyns/p/12405328.html)
