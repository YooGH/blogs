### Webpack(6)

1. webpack loader和plugin

webpack
git
vue2和vue3

http和https（https://www.cnblogs.com/wqhwe/p/5407468.html）



[面试八股文](https://zhuanlan.zhihu.com/p/416984200)




1. 如果需要手动写动画，你认为最小时间间隔是多久？
  多数显示器默认频率是60Hz，即1秒刷新60次，所以理论上最小间隔为1/60*1000ms ＝ 16.7ms  
2. 浏览器的渲染过程，DOM 树和渲染树的区别？
 - https://blog.csdn.net/Gbing1228/article/details/103575756





5. 如何封装一个弹窗组件，在以后的项目中都能使用
https://blog.csdn.net/weixin_44340914/article/details/106738672  
首先用组件props控制显隐,绝对定位做渐变的半透明背景，中间（flex）做可配置关闭、确定和取消的框，插槽做扩展  


6. 
```
function fn() {
  var arrFn = new Array();
  for(var i=0; i<5; i++) {
    arrFn[i]=function() {
      return i;
    }
  }
}
var box = fn();
for(var j=0; j<box.length; j++) { alert(box[j]()}
```


7. 
```
document.addEventListener('click', function(e){
  setTimeout(function() {
    console.log(this)
  }, 200)
  console.log(this)
}, false)

```






### 开发工具(5)
1）列举工作中常用的几个git命令？
git init
git clone
git add(git reset HEAD)
git commit
git push
git pull
git merge
git diff

git chechout
git branch

2）如果本次提交误操作，如何撤销？
git reset HEAD
git reset --soft HEAD^


3）提交时发生冲突，你能解释冲突是如何产生的吗？你是如何解决的？
https://www.php.cn/tool/git/493212.html

4）GitFlow工作流程分支有哪些
主要包含，product(master),develop,feature,hotfix,release

5）GitFlow的好处





### 小程序(5)


App(onLaunch onShow onHide onError)
1）小程序中Page的生命周期有哪些？
onLoad: 页面加载(一个页面只会调用一次，可以在 onLoad 中获取打开当前页面所调用的 query 参数。)

onShow: 页面显示(每次打开页面都会调用一次。)

onReady: 页面初次渲染完成(一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。,对界面的设置如wx.setNavigationBarTitle请在onReady之后设置。详见生命周期)

onHide: 页面隐藏(当navigateTo或底部tab切换时调用。)

onUnload: 页面卸载

2）如何阻止小程序的事件冒泡？
catchtap

3）小程序的双向绑定和Vue哪里不一样？


4）说下小程序常用的几种跳转方式，有什么区别？
wx.switchTab()
wx.reLaunch()
wx.navigateTo()
wx.redirectTo()
wx.navigateBack()


5）小程序的发布流程




### 操作系统，docker部署(6)


1） 什么是docker？什么是docker镜像？
docker是一个容器化平台，它以容器的形式将您的应用程序及其所有依赖项打包在一起，以确保您的应用程序在任何环境中无缝运行。
docker镜像是docker容器的源代码，用于创建容器。使用build命令创建镜像。

2） docker与虚拟机有何不同？
docker：启动速度秒级，体量极小（MB），性能近似物理机，
虚拟机：启动速度分钟级，体量较大（GB），性能损耗大。

3）docker常用命令？
docker pull:拉取或者更新指定镜像； 
docker push:将镜像推送至远程仓库； 
docker images:列出所有镜像； 
docker rmi:删除镜像；   
docker ps:列出所有容器； 
docker rm:删除容器

4）前端项目中，docker如何创建容器的镜像？
a. 创建Dockerfile后，docker build创建容器的镜像； 
b. docker push:将镜像推送至远程仓库；

5）docker容器有几种状态？
4种状态：运行+已暂停+重新启动+已退出

6）前端项目CI(持续集成)制作docker镜像以及推送镜像过程是怎样的？
a.创建Dockerfile后，docker build创建容器的镜像； 
b.docker push:将镜像推送至远程仓库；
CI功能就是在每次提交之后不断地集成所有提交到存储库的代码，并编译检查错误





### http协议，资源加载，调试，性能，跨域请求，避免跨域攻击(7)


1）常见HTTP的状态码有哪些？
200 – 请求成功
301 – 永久重定向
302 - 临时重定向
403 - 禁止访问
404 – 请求的资源(网页等)不存在
500 – 内部服务器错误
502 - 网关无响应

2）HTTP与HTTPS的区别？
a. HTTP 是超文本传输协议，信息是明文传输，HTTPS 则是具有安全性的 SSL 加密传输协议。
b. HTTP和HTTPS 使用完全不同的连接方式，所用的端口不同，前者是80 端口，后者是 443端口。
需要在服务器放校验文件校验，请求响应比较慢

3）请求类型Get与Post之间的区别？
a. get是不安全的，因为URL是可见的，可能会泄露私密信息，如密码等； post较get安全性较高；
b. Get传输的数据量小，因为受URL长度限制，但效率较高；Post可以传输大量数据，所以上传文件时只能用Post方式；
c. get方式只能支持ASCII字符，向服务器传的中文字符可能会乱码。post支持标准字符集，可以正确传递中文字符。

4）TCP和UDP的区别
TCP是基于连接的协议，在正式手法数据前，必须和对方建立可靠的连接。一个TCP连接必须要经过三次“对话”才能建立起来。
UDP是与TCP相对应的协议。它是面向非连接的协议，它不与对方建立连接，而是直接就把数据包发送过去，UDP适用于一次只传送少量数据、对可靠性要求不高的应用环境。

5）资源加载过程发生了什么？
DNS解析、TCP链接、发送http请求、服务器收到、处理请求并返回、浏览器得到返回内容

6）什么是跨域？如何解决跨域？同一域名不同目录算不算跨域？
a. 所谓同源是指"协议+域名+端口"三者相同，即便两个不同的域名指向同一个ip地址，也非同源。
b. 跨域资源共享（CORS）:普通跨域请求只服务端设置Access-Control-Allow-Origin即可，前端无须设置，若要带cookie请求：前后端都需要设置。
c. 不算

7）什么是同源策略？
所谓同源是指"协议+域名+端口"三者相同，即便两个不同的域名指向同一个ip地址，也非同源。





### 算法与数据结构，空间复杂度、时间复杂度的关系，加密算法(5)


1）说一下什么是二分法查找，使用二分法时需要注意什么？
二分法查找（Binary Search）也称折半查找，是指当每次查询时，将数据分为前后两部分，再用中值和待搜索的值进行比较，如果搜索的值大于中值，则使用同样的方式（二分法）向后搜索，反之则向前搜索，直到搜索结束为止。
二分法使用的时候需要注意：二分法只适用于有序的数据，也就是说，数据必须是从小到大，或是从大到小排序的。（也就是乱序的需要先排序后二分那就是瞎搞）


2）介绍下什么是时间复杂度，什么是空间复杂度。
时间复杂度：时间复杂度实际上是一个函数，代表基本操作重复执行的次数。
空间复杂度：是对一个算法在运行过程中临时占用存储空间的度量。


3）递归算法的时间复杂度是多少？
递归算法的时间复杂度本质上是要看: 递归的次数 * 每次递归中的操作次数
O(N)


4）递归算法的空间复杂度是多少？
递归算法的空间复杂度：递归深度N* 每次递归所要的辅助空间,如果每次递归所需的辅助空间是常数，则递归的空间复杂度是 O(N)


5）常见的加密算法有几种？他们在使用上有什么区别？
对称加密：对称加密密钥一样（AES首次还是明文的）
非对称加密: 分公钥和私钥
MD5：加密不能解密。。