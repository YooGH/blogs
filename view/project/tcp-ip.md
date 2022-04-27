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

