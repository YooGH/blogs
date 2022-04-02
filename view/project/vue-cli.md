<a href="#h1"> 安装 </a><br/>
<a href="#h2"> 创建  </a><br/>
<a href="#h3"> 插件和Preset </a><br/>
<a href="#ck"> 服务 </a><br/>

   

<br/><br/><br/>



> （npm run dev一般是1-2, npm run serve一般是3及以上;  [新版@vue/cli官网](https://cli.vuejs.org/zh/guide/creating-a-project.html))

1. vue-cli(版本1-2)
2. @vue/cli(版本3以上)  --  项目AIMDT-HEALTH-FRONT -> scripts就是用这个跑的

<br/>

 - 可升级；
 - 基于 webpack 构建，并带有合理的默认配置；
 - 可以通过项目内的配置文件进行配置；
 - 可以通过插件进行扩展。
 - CLI 服务是构建于 webpack 和 webpack-dev-server（vue-cli-service --老版--> webpack-dev-server）



<br/><br/><br/>




## <h1 id="h1"> 安装 </h1>
先查看<br/>``npm list -g``可查看安装是新版还是老版(vue-cli --新版-->@vue-cli(Vue CLI 4.x需要node8.9))<br/>或者``vue --version``
``npm install -g @vue/cli``或``yarn global add #vue/cli``



<br/><br/><br/>



## <h1 id="h2"> 创建 </h1>

``vue create my-project``



<br/><br/><br/>



## <h1 id="h3"> 插件 </h1>





<br/><br/><br/>

## <h1 id="h4"> [CLI服务](https://cli.vuejs.org/zh/guide/cli-service.html#%E4%BD%BF%E7%94%A8%E5%91%BD%E4%BB%A4) </h1>
``@vue/cli-service``包提供vue-cli-service命令(位置./node_modules/.bin/vue-cli-service)，

- vue-cli-service serve(package.json/scripts.serve => yarn serve)

  `` yarn serve --open --port 8090``


  ```
    用法：vue-cli-service serve [options] [entry]
  
    [options] -- 选项：
  
      --open    在服务器启动时打开浏览器
      --copy    在服务器启动时将 URL 复制到剪切版
      --host    指定 host (默认值：0.0.0.0)
      --port    指定 port (默认值：8080)
      --https   使用 https (默认值：false)
      --mode    指定环境模式 (默认值：development，config/http.js接受参)
      
      
        根目录有
           .env 公共文件(在根目录创建)
           .env.development开发环境下的配置文件(在根目录创建)
           .env.production生产环境下的配置文件(在根目录创建)
           .env.自定义名称(在根目录创建, 如".env.dev2")
        加载.env文件，之后加载各环境文件，重复后面文件覆盖公共文件
        变量已"VUE_APP_"开头，不然变量process.env是获取不到的
        
        [参考](https://www.cnblogs.com/song-zmin/p/11818918.html)
        
        
        例子：生成自定义文件
        .env.dev2
        ``yarn serve --mode dev2``


    [entry] -- 默认入口src/main.js
  ```


- vue-cli-service build

  ```
  用法：vue-cli-service build [options] [entry|pattern]
  
  选项：
  
    --mode        指定环境模式 (默认值：production)
    --dest        指定输出目录 (默认值：dist)
    --modern      面向现代浏览器带自动回退地构建应用
    --target      app | lib | wc | wc-async (默认值：app)
    --name        库或 Web Components 模式下的名字 (默认值：package.json 中的 "name" 字段或入口文件名)
    --no-clean    在构建项目之前不清除目标目录的内容
    --report      生成 report.html 以帮助分析包内容
    --report-json 生成 report.json 以帮助分析包内容
    --watch       监听文件变化
  ```














## 老版
vue-cli(1.x或2.x)
[老版vue-cli](https://github.com/vuejs/vue-cli/tree/v2#vue-cli--)
```
npm install -g vue-cli    // 安装
vue init webpack my-project  // 创建

