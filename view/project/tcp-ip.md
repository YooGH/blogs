图解http

### 第二章
HTTP 协议能够明确区分哪端是客户端，哪端是服务器端
HTTP/1.1 是一种不保存状态，即无状态（stateless）协议，请求或响应都不做持久化处理，后面引入cookie可以管理状态
PUT 方法用来传输文件/DELETE删除文件,TTP/1.1自身不带验证机制有安全性问题，一般web网站不使用改方法
（使PUT安全校验： 配合 Web 应用程序的验证机制、架构设计采用 REST（REpresentational State Transfer，表征状态转移）标准的同类 Web 网站）
（使DETELE安全校验： 配合 Web 应用程序的验证机制、遵守 REST 标准时）
HTTP/1.0 和 HTTP/1.1 支持的方法

方法说明支持的 HTTP 协议版本
**GET**获取资源1.0、1.1
**POST**传输实体主体1.0、1.1
**PUT**传输文件1.0、1.1
**HEAD**获得报文首部1.0、1.1
**DELETE**删除文件1.0、1.1
**OPTIONS**询问支持的方法1.1
**TRACE**追踪路径1.1
**CONNECT**要求用隧道协议连接代理1.1
**LINK**建立和资源之间的联系1.0
**UNLINE**断开连接关系1.0
在这里列举的众多方法中，LINK 和 UNLINK 已被 HTTP/1.1 废弃，不再支持

- 2.7

HTTP/1.0: 
建立TCP链接（SYN,SYN/ACK,ACK）、
HTTP请求、
HTTP相应、
断开TCP连接(FIN,ACK,FIN,ACK)
建立TCP链接（SYN,SYN/ACK,ACK）、
HTTP请求、
HTTP相应、
断开TCP连接(FIN,ACK,FIN,ACK)
建立TCP链接（SYN,SYN/ACK,ACK）、
HTTP请求、
HTTP相应、
断开TCP连接(FIN,ACK,FIN,ACK)



HTTP/1.1: 持久连接, HTTP keep-alive或 HTTP connection reuse
建立TCP链接（SYN,SYN/ACK,ACK）、
HTTP请求①、
HTTP相应①、
HTTP请求②、
HTTP相应②、
HTTP请求③、
HTTP相应③、
断开TCP连接(FIN,ACK,FIN,ACK)


### 三章
HTTP报文是HTTP协议交互的信息（客户端叫请求报文, 服务端叫响应报文)
HTTP报文由两块组成，报文首部和报文主体，由回车符（CR）+换行符(LF)区分

后面部分为看完


### 四章
1XXInformational（信息性状态码）接收的请求正在处理

2XXSuccess（成功状态码）请求正常处理完毕
（200和201:请求别接受，但未处理，异步后也可能不返回）
3XXRedirection（重定向状态码）需要进行附加操作以完成请求

4XXClient Error（客户端错误状态码）服务器无法处理请求

5XXServer Error（服务器错误状态码）服务器处理请求出错

##### RFC2616代表性的 14 个状态码

 - 200 请求被正常处理（OK）

 - 204 成功处理请求，但没资源返回（响应报文不包含实体的主体部分）（No Content）

 - 206 客户端范围请求，服务器执行这部分的GET请求（Partial Content）

 - 301 永久性重定向(后端资源URL变动) （Moved Permanently）

 - 302 临时性重定向（Found，仅限这次）

 - 303 临时性重定向, 用GET方式获取（See Other）

 - 304 和上次请求资源一样，不返回实体 （Not Modified）

 - 307 临时性重定向，POST请求用POST在来一遍，区别与303（Temporary Redirect）

 - 400 客户端请求报文中存在语法错误（Bad Request）

 - 401 请求未认证（Unauthorized）

 - 403 服务器拒绝访问(权限不够，文件系统权限限制等)（Forbidden）

 - 404 服务器上无法找到请求的资源（客户端接口写错，或服务端改接口未部署）（Not Found）

 - 500 服务器未知错误（也有可能是 Web 应用存在的 bug 或某些临时的故障）（Internal Server Error）

 - 503 服务器超载宕机或停机维护（Service Unavailable）



[更多状态码](https://zhidao.baidu.com/question/2207425608262873868.html)









TCP 点对点连接，需3次握手实现连接，效率低，对系统资源要求多
UDP 无状态的传输协议,发送消息比较快,容易丢包(如视频，音频掉帧也不影响)




四章 4.27