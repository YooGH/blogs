[promise.html](./promise.html)
> 浏览器是多线程的，每打开一个tab就是一个线程<br/>
因为js是单线程的，一次只能执行一次任务，多个任务等待上一任务。<br/>像ajax请求这种等待服务器返回数据就会被挂起,但返回数据就会加入主线程


**Promise.all**(等待所有200的接口回来)

**Promise.race**(等待第一个回来的接口)

**Promise.allSettled**(等待所有状态的接口回来，ES2020)

**Promise.any**(等待第一个回来的接口，ES2021)

<br/><br/><br/>

```
1. promise （resolve,reject）

var oPromise = new Promise(function (resolve,reject) {});  // resolve成功(.then接收)，reject失败(.catch接收)
new Promise((resolve,reject)=>{ setTimeout(()=>{ resolve(true) },1000) })

 
Promise.all(['对象1',对象2"]).then(function () {//对象1、对象2请求成功，执行})

Promise.race(['对象1',对象2"]).then(function () {//对象1、对象2谁最快请求成功，执行})
```


<br/><br/><br/>
##### 例子： 封装一个get请求的方法

```
function getJSON(url) {
  return new Promise(function(resolve, reject) {
    const XHR = new XMLHttpRequest();
    XHR.open('GET', url, true);
    XHR.send();

    XHR.onreadystatechange = function() {
      console.log(JSON.stringify(XHR))
      console.dir(XHR.readyState)
      
      if (XHR.readyState === 4) {
        if(XHR.status == 200) {

            try {
              console.log(XHR.statusText)
              var response = JSON.parse(XHR.responseText);
              console.log(response)
              resolve(response);
            } catch (e) {
              reject(e);
            }
        } else {
            reject(new Error(XHR.statusText));
        }
      }
    }
  })
}



let url = 'http://wthrcdn.etouch.cn/weather_mini?citykey=101070101';
getJSON(url).then(res => console.log(res));
```


<br/><br/><br/>
##### 参考
[原生ajax请求与Promise请求](https://blog.csdn.net/qq_29849641/article/details/69233788)

[Javascript异步编程的4种方法: 回调、监听addEventListener、发布/订阅、Promise](http://www.ruanyifeng.com/blog/2012/12/asynchronous%EF%BC%BFjavascript.html)

[promise](https://es6.ruanyifeng.com/#docs/promise)

[async 函数的含义和用法](http://www.ruanyifeng.com/blog/2015/05/async.html)