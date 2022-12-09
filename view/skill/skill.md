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
HTTP是超文本传输协议，信息是明文传输；HTTPS则是具有安全性的ssl加密传输协议，多了校验时间。
HTTP和HTTPS用的默认端口不一样，HTTP端口是80，HTTPS是443。
HTTPS协议需要到CA机构申请证书，一般需要一定的费用。
HTTP运行在TCP协议之上；HTTPS运行在SSL协议之上，SSL运行在TCP协议之上。

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








了解Linux等服务器操作系统，掌握常用Linux命令（如vi、ls、mkdir等），掌握计算机硬件相互通信机制，能够对常用硬件指标（如CPU、内存占有率、进程等）进行查看。
熟悉Linux等服务器操作系统，能够进行前端开发和测试环境（如node环境）的安装、配置。
掌握Docker相关的概念和知识，能够使用Docker的常规命令（如docker ps、docker container、 docker build等）。
掌握基于Docker构建前端应用，并能够根据Docker配置对应的参数进行项目部署。
熟练运用Docker技术，能够实施前端应用Docker并能基于常见的容器平台进行应用部署。



了解常见HTTP通信协议原理机制与其请求方式（如GET、POST、PUT等），能够了解常用响应的状态码（如40X、50X）。
了解TCP/IP协议簇，能够列举该协议簇衍生的协议（如HTTP、FTP、HTTPS、UDP)，能够充分了解各类协议其应用场景区别与优劣势。
理解HTTP和HTTPS协议，能够进行完整的页面调试及开发，能够排查常见的资源加载问题和加载性能问题。
深入理解HTTP和HTTPS协议的多种认证方式（如Oauth2），能够完成web认证功能的开发。
懂得跨域请求和跨域攻击的原理，能够使用JSONP或Nginx或CORS解决跨域问题，并懂得如何在开发中避免跨域攻击、伪造请求攻击。







### Webpack(6)

1. webpack loader和plugin

webpack
git
vue2和vue3

http和https（https://www.cnblogs.com/wqhwe/p/5407468.html）



[面试八股文](https://zhuanlan.zhihu.com/p/416984200)





2. 浏览器的渲染过程，DOM 树和渲染树的区别？
 - https://blog.csdn.net/Gbing1228/article/details/103575756





5. 如何封装一个弹窗组件，在以后的项目中都能使用
https://blog.csdn.net/weixin_44340914/article/details/106738672  
首先用组件props控制显隐,固定定位做渐变的半透明背景，中间（flex）做可配置关闭、确定和取消的框，插槽做扩展  


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















