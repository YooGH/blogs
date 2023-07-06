<h6>

> 防止对象之前未定义(可用于是否缓存判断，后端传值是否是空，阻断for等遍历条件)(可防止空对象下面对象的属性报错)<br/>
> throw 抛出错误，类return（阻断for等遍历条件，配合try...catch);


<br/><br/><br/>


 - 判断是否存在b对象 -- 方法1

```
try {
    b.a = 10
    console.log(b.a)
} catch (e) {
    let b = {};
    b.a = 5;
    b.a = 10;
    console.log(b.a)
}

throw: 
(()=> {
  let x,y;
  try{
    throw new Error()
  } catch(x) {
    (x=1), (y=2);
    console.log(x)
  }
  console.log(x)
  console.log(y)
})()


打印： 1, undefined, 2 （第一个x以参数声明，属于catch作用域里）
```


<br/><br/><br/>


 - 判断是否存在b对象 -- 方法2
```
if(typeof b === 'undefined') {
    var b = {};
    b.a = 5;
    b.a = 10;
} else {
    b.a = 10;
}
console.log(b.a)
```


<br/><br/><br/>


 - 遍历识别断掉

```
let abc = [1,2,3,4,5,6,76,7,7,7,,77,,7,7,7,7,7,,7,,7,7]
let a = null;

try{
  for(let item of abc) {
  console.log(item)
  if(item === 76) {
    a = item
    throw 333
  }
}
} catch(ee) {
  
}
console.log('下面正常执行', a)

打印： 1  2  3  4  5  6  76  下面正常执行
```


<br/><br/><br/>


[博客](https://www.cnblogs.com/lgyong/p/10579658.html)

</h6>