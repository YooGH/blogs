 1. <a href="#h1"> 安装 </a>
 2. <a href="#h2"> node </a>
 3. <a href="#h3"> npm </a>

###  <h1 id="h1"> 安装 </h1>
- [官网](https://nodejs.org/en/download/) - 下载安装后可能需要重启



<br/><br/><br/><br/><br/>

###  <h1 id="h2"> node </h1>

- 查看版本  ``node -v / node -- version``

- 版本管理 node版本管理nvm (nvm use 版本号）[博客](https://www.cnblogs.com/hjson/p/10276532.html)

- 第一个服务器 -- <strong>http</strong>

```
const http = require("http");
 
http.createServer(function (request,response) {
 
    // 服务器对访问浏览器的响应头
    response.writeHead(200, {'Content-Type': 'text/plain'});
 
    // 服务器对访问浏览器的响应数据
    response.end('Hi World\n');
}).listen(8888);
 
console.log('Server running at http://127.0.0.1:8888/');  //在浏览器访问127.0.0.1:8888
```

- 镜像

```
npm config set registry https://registry.npm.taobao.org　　　　　　　　　　// 切换淘宝
cnpm/npm config get registry　　　　　　　　　　　　　　　　　　　　　　　　　　// 查看是否配置成功，成功后即可直接使用cnpm命令
npm config set registry https://registry.npmjs.org　　　　　　　　　　　　　// 还原回npm命令（原镜像）
```

<br/><br/><br/><br/><br/>

###  <h1 id="h3"> npm </h1>


- npm-check(全局安装 npm install npm-check -g)













[博客](https://www.cnblogs.com/lgyong/p/10421749.html)