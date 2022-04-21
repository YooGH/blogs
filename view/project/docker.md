1. <a href="#h1"> 容器container </a>
2. <a href="#h2"> attached 和detached模式 </a>
3. <a href="#h3">  </a>
    <a href="#ck"> 参考 </a>



 ## 按照
 
 ```
 su
 curl -fsSL get.docker.com -o get-docker.sh
 sh get-docker.sh
 docker version // 查看版本
 sudo systemctl start docker  // 开启docker
 ```


  ### <h1 id="h1"> 1.容器container </h1>

  > 容器和镜像几乎一模一样，唯一的区别是镜像是只读的，而容器上面有一个可读写层。所以容器=镜像+读写层

  容器

  ```
  创建： docker container run < image name >
    docker container run nginx/ubuntu(线上镜像名称)
  查看： docker container ls -a(docker container ps -a旧版)
  停止： docker container stop <name or ID(只输入ID前两位也行)>(<name or ID>通过上面查看得到)
  开始： docker container start/restart <name or ID>
  删除： docker container rm  <name or ID>

  查看所有容器的id： docker container ps -aq
  停止所有容器： docker container stop $(docker container ps -aq)
  删除所有容器： docker container rm $(docker container ps -aq)
  强制删除所有容器： docker container rm $(docker container ps -aq) -f    (容器开启正常是不能删除的，需要-f)
  ```
 （container可以省略[container命令](./image/container.png)）


  ### <h1 id="h2"> 2. attached 和detached模式</h1>
  > 容器映射服务器接口访问：``docker container run -p 80:80 nginx``    (第一服务器接口，第二个容器接口)

  - attached(前台, 适合开放环境,ctrl+C就能停止)

  - detached(后台，适合生成环境，需要stop停止):detached模式加参数``-d``或``--detach`` => ``docker container run -d -p 80:80 nginx``<br/>detached转为attached: ``docker  attach <ID or Image Name>``

  - 查看日志 ``docker container logs <ID or Image name>``<br/> 动态一直跟踪加``-f``


  ### <h1 id="ck"> 参考 </h1>

  [看技术胖视频22/04/18](https://jspang.com/article/75)
  
  4.20--5章

  

  

  
