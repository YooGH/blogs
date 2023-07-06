<h6>

1. <a href="#demo1"> Cookie </a>
2. <a href="#demo2"> localStorage本地存储(1.5MB以上   | 无尽河流，飞机大战)  </a>
3. <a href="#demo3"> sessionStorage </a>
4. <a href="#demo4"> webSql(本地数据库) </a>
********************


<br/>


||cookie|sessionStorage|localStorage|
|:--|:--|:--|:--|
|大小|4kb/个||5m(ie:1630k)|
|周期|设置|页面关闭|清空缓存|
||可以带给后端接口|生命周期为当前窗口或标签页，一旦窗口或标签页被永久关闭了，那么所有通过sessionStorage存储的数据也就被清空了|生命周期是永久，这意味着除非用户显示在浏览器提供的UI上清除localStorage信息，否则这些信息将永远存在。|

<br/><br/><br/>

<h2>H4</h2>
<h3 id="demo1">一、 Cookie</h3>
<h6>
保存用户登录状态<br/>
跟踪用户行为<br/>
定制页面<br/>
其他说明<br/>
　最大为 4096 字节的 Cookie<br/>
　每个站点存储 20 个 Cookie<br/>
　总站点300 个 Cookie<br/>
　Cookie默认情况都会随着Http请求发送到后台服务器<br/>
</h6><br/><br/>

1、增<br/>
　　　document.cookie="userId=828";<br/>
　　　document.cookie="userId=828; userName=hulk";<br/>
    <!-- 　　escape()/unescape()已废弃<br/> -->
2、除(expires设置过期时间)<br/>
　　　document.cookie="userId=828; expires=GMT_String";<br/>
3、查<br/>
　　　document.cookie<br/>

<br/>

```
var exp = new Date();
exp.setTime(exp.getTime() + 1000 * 60 * 60 * 24 * 0.5); //这里表示保存24小时
document.cookie = "music_identify=" + true + ";expires=" + exp.toGMTString();

function getCookie(name) {
  var strCookie = document.cookie;
  var arrCookie = strCookie.split("; ");
  for (var i = 0; i < arrCookie.length; i++) {
    var arr = arrCookie[i].split("=");
    if (arr[0] == name){
      return arr[1];
    }
    return "";
  }
}
```


<br/><br/><br/>


<h2>H5</h2>
<h3 id="demo2"> 二、localStorage本地存储(1.5MB以上   | 无尽河流，飞机大战) </h3>


1、增<br/>
　　　localStorage.setItem(`myCat`, `Tom`);<br/>
2、除<br/>
　　　localStorage.removeItem(`myCat`);<br/>
3、查<br/>
　　　localStorage.getItem(`myCat`);<br/>
　　　localStorage.clear();（移除所有的 localStorage 项）<br/>

```
localStorage['fishinglegendHighScore']   = 10/1000/9999

// 1. 存储大小限制测试及异常处理
// 2. 不同浏览器对 HTML5 的本地存储大小基本均有限制，一个测试的结果如下 
　　IE 9 > 4999995 + 5 = 5000000
　　firefox 22.0 > 5242875 + 5 = 5242880 
　　chrome 28.0 > 2621435 + 5 = 2621440
　　safari 5.1 > 2621435 + 5 = 2621440 
　　opera 12.15 > 5M （超出则会弹出允许请求更多空间的对话框）
// 3. 数据存储异常处理 
　　try{
　　  localStorage.setItem(key,value);
　　}catch(oException){
　　  if(oException.name == 'QuotaExceededError'){ 
　　    console.log('超出本地存储限额！'); 
　　    //如果历史信息不重要了，可清空后再设置
　　    localStorage.clear();
　　    localStorage.setItem(key,value);
　　}}
```


<br/><br/><br/>


<h3 id="demo3"> 二、sessionStorage</h3>
sessionStorage的操作方法基本与localStorage一致。

1、增<br/>
　　　sessionStorage.setItem(key,value)  添加本地存储数据<br/>
2、除<br/>
　　　sessionStorage.removeItem(key)  通过key删除本地数据<br/>
　　　sessionStorage.clear()  清空数据<br/>
3、查<br/>
　　　sessionStorage.getItem(key)  通过key获取相应的Value<br/>

```
(function() {
    if(!window.localStorage) {
        console.log('当前浏览器不支持localStorage!')
    }    
    var test = '0123456789';
    var add = function(num) {
        num += num;
        if(num.length == 10240) {
            test = num;
            return;
        }
        add(num);
    }
    add(test);
    var sum = test;
    var show = setInterval(function(){
        sum += test;
        try {
            window.localStorage.removeItem('test');
            window.localStorage.setItem('test', sum);
            console.log(sum.length / 1024 + 'KB');
        } catch(e) {
            alert(sum.length / 1024 + 'KB超出最大限制');
            clearInterval(show);
        }
    }, 0.1)
})()
```


<br/><br/><br/>



<h3 id="demo4"> 四、webSql(本地数据库)</h3>


<br/><br/><br/>


[博客](https://www.cnblogs.com/lgyong/p/9281353.html)

[参考](https://blog.csdn.net/qq_38627581/article/details/77353015)

</h6>