const xyList = [
  { id: 1, sort: 1, type: 'xy', question: '常见HTTP的状态码有哪些？', answer: '200 – 请求成功；\n301 – 永久重定向；\n302 – 临时重定向；\n403 – 禁止访问(禁止某些资源访问，如游客不能访问高清图片视频，或禁止某些ip的访问)；\n404 – 请求的资源(网页等)不存在（后端没有对应的接口。开发环境后端接口还没推上测试，前端调用）；\n500 – 内部服务器错误；\n502 – 网关无响应；', details: '1XX    100-101    信息提示；\n2XX    200-206    成功；\n3XX    300-305    重定向；\n4XX    400-415    客户端错误；\n5XX    500-505    服务端错误；\n https://tool.oschina.net/commons?type=5'},
  { id: 2, sort: 2, type: 'xy', question: 'HTTP与HTTPS的区别？', answer: '1. HTTPS比HTTP多了一个S(Secure)，多了SSL协议,也就是说HTTPS是安全版的HTTP；\n2. 默认端口不一样，HTTP使用80端口，HTTPS使用443端口;；\n3. HTTPS用的是非对称加密算法，HTTPS协议需要到CA机构申请证书，一般需要一定的费用;；\n4. HTTP运行在TCP协议之上；HTTPS运行在SSL之上的TCP协议;', details: '补充：\nssl全称是Secure Sockets Layer，即安全接层，是一种标准协议，用于加密浏览器和服务器之间的数据传输，确保隐私数据的安全性和完整性。\nhttps全称是Hypertext Transfer Protocol Secure 或Hyper Text Transfer Protocol over Secure Socket Layer  ，即超文本传输安全协议，简单说来，它是http的安全版，保护在线传输的任何通信\nhttp的全称 Hypertext Transfer Protocol \n[参考](https://mp.weixin.qq.com/s/q_NF79cF0I5lV7d6PnUs5w)'},
  { id: 3, sort: 3, type: 'xy', question: '请求类型Get与Post之间的区别？', answer: '1. get是不安全的，因为URL是可见的，可能会泄露私密信息，如密码等； post较get安全性较高；\n2. Get传输的数据量小，因为受URL长度限制，但效率较高；Post可以传输大量数据，所以上传文件时只能用Post方式；\n3. get方式只能支持ASCII字符，向服务器传的中文字符可能会乱码。post支持标准字符集，可以正确传递中文字符；', },
  { id: 4, sort: 4, type: 'xy', question: 'TCP和UDP的区别', answer: 'TCP是基于连接的协议，在正式手法数据前，必须和对方建立可靠的连接。一个TCP连接必须要经过三次“对话”才能建立起来；\nUDP是与TCP相对应的协议。它是面向非连接的协议，它不与对方建立连接，而是直接就把数据包发送过去，UDP适用于一次只传送少量数据、对可靠性要求不高的应用环境。'},
  { id: 5, sort: 5, type: 'xy', question: '资源加载过程发生了什么？', answer: 'DNS解析、TCP链接、发送http请求、服务器收到、处理请求并返回、浏览器得到返回内容'},
  { id: 6, sort: 6, type: 'xy', question: '什么是同源策略？', answer: '所谓同源是指"协议+域名+端口"三者相同，即便两个不同的域名指向同一个ip地址，也非同源。'},
  { id: 7, sort: 7, type: 'xy', question: '什么是跨域？如何解决跨域？同一域名不同目录算不算跨域？', answer: '1. 所谓同源是指"协议+域名+端口"三者相同，即便两个不同的域名指向同一个ip地址，也非同源；\n2. 跨域资源共享（CORS）:普通跨域请求只服务端设置Access-Control-Allow-Origin即可，前端无须设置，若要带cookie请求：前后端都需要设置。', details: '前端解决跨域问题的8种方案：https://blog.csdn.net/joyhen/article/details/21631833'},
]