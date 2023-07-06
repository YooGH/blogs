<h6>

<h3>判断空对象的方法</h3>

1. 将json对象转化为json字符串，再判断该字符串是否为"{}"
```
var data = {};
var b = (JSON.stringify(data) == "{}");
console.log(b);//true
```

<br/><br/><br/>

2. for in 循环判断
```
  var obj = {};
  var b = function() {
    obj && for(var key in obj) {
      return false;
    }
    return true;
  }
  console.log(b()); //true
```

<br/><br/><br/>

3. jquery的isEmptyObject方法
此方法是jquery将2方法(for in)进行封装，使用时需要依赖jquery
```
var data = {};
var b = $.isEmptyObject(data);
console.log(b);  //true
```

<br/><br/><br/>

4. Object.getOwnPropertyNames()方法
此方法是使用Object对象的getOwnPropertyNames方法，获取到对象中的属性名，存到一个数组中，返回数组对象，我们可以通过判断数组的length来判断此对象是否为空
注意：此方法不兼容ie8，其余浏览器没有测试
```
var data = {};
var arr = data && Object.getOwnPropertyNames(data);
console.log(arr.length == 0);//true

data = {a:1, b:2};
var arr = data && Object.getOwnPropertyNames(data);
console.log(data) // ["a", "b"]
console.log(arr.length == 0); // false
```

<br/><br/><br/>

5. 使用ES6的Object.keys()方法
与4方法类似，是ES6的新方法, 返回值也是对象中属性名组成的数组
```
var data = {};
var arr = data && Object.keys(data);
console.log(arr.length == 0);//true
```
 
<br/><br/><br/>
 
6. ?做，数组和对象判空
```
[]?.length     // 0
null?.length   // 0（可以满足后端返回列表没数据时，返回null代码报错）、
obj?.a         // 
```



[博客](https://www.cnblogs.com/lgyong/p/9507031.html)

[参考](https://blog.csdn.net/qq_38627581/article/details/77353015)

</h6>