1. <a href="#h1"> 容器container </a>
2. <a href="#h2"> attached 和detached模式 </a>
3. <a href="#h3"> Docker的交互式模式 </a><br/><br/>
4. <a href="#h4"> 镜像 </a>
4. <a href="#h5"> 镜像操作(10、11) </a>
<br/><a href="#ck"> 参考 </a>


  ```
  systemctl start NetworkManager // 启动网络
  sudo systemctl start docker  // 开启docker
  ```


 ## 按照
 
 ```
 su
 curl -fsSL get.docker.com -o get-docker.sh
 sh get-docker.sh
 docker version // 查看版本
 sudo systemctl start docker  // 开启docker
 ```

<br/><br/><br/>


  ### <h1 id="h1"> 1.容器container </h1>

  > 容器和镜像几乎一模一样，唯一的区别是镜像是只读的，而容器上面有一个可读写层。所以容器=镜像+读写层

  容器

  ```
  创建： docker container run < image name >
    docker container run nginx/ubuntu(线上镜像名称)
  查看： docker container ls -a(docker container ps -a旧版)
  停止： docker container stop <name or ID(只输入ID前两位也行)>(<name or ID>通过上面查看得到)
  开始： docker container start/restart <name or ID>
  删除： docker container rm <name or ID>

  查看所有容器的id： docker container ps -aq
  停止所有容器： docker container stop $(docker container ps -aq)
  删除所有容器： docker container rm $(docker container ps -aq)
  强制删除所有容器： docker container rm $(docker container ps -aq) -f    (容器开启正常是不能删除的，需要-f)
  ```
 （container可以省略[container命令](./image/container.png)）


<br/><br/><br/>

  ### <h1 id="h2"> 2. attached 和detached模式 </h1>
  > 容器映射服务器接口访问：``docker container run -p 80:80 nginx``    (第一服务器接口，第二个容器接口)

  - attached(前台, 适合开放环境,ctrl+C就能停止)

  - detached(后台，适合生成环境，需要stop停止):detached模式加参数``-d``或``--detach`` => ``docker container run -d -p 80:80 nginx``<br/>detached转为attached: ``docker  attach <ID or Image Name>``

  - 查看日志 ``docker container logs <ID or Image name>``<br/> 动态一直跟踪加``-f``





<br/><br/><br/>

  ### <h1 id="h3"> 3. Docker的交互式模式 </h1>

  - 一种是创建并直接进入交互模式
  ``docker container run -it ubuntu sh`` 开启交互模式，``-it``代表启用交互模式; ``sh``代表可以使用Shell脚本; ``exit`` 可以退出

  - 另一种是先创建进入detached模式，然后再进入交互模式
  ``docker container run -d -p 80:80 nginx``
  ``docker exec -it <Image or ID> sh``  ``exec``是执行的意思，``-it``交互模式 ， ``sh``交互的方式，用shell脚本进行交互



<br/><br/><br/>

  ### <h1 id="h4"> 4. 镜像 </h1>
  > 三种获取途径
  - 社区 -- [官方社区dockerhbu](https://hub.docker.com/)、红帽旗下的[Quay](https://quay.io/)

  - 制作，拉起基础镜像，自己制作，Dockerfile构建一个镜像

  - 自有文件导入，压缩包

  <br/><br/><br/>

  ### <h1 id="h5"> 5. 镜像操作 </h1>
  - ``docker image`` 查看  镜像操作命令（build(Dockerfile构建)、history、import、inspect、load(加载本地包)、ls、prune(可定时清理不常用数据)、pull、push、rm、save）
  <br/>build、import、prune、push
  ```
  docker image history wordpress(镜像名称) // 查看一个镜像的历史版本

  docker image ls // 查看本地多少个镜像
  docker image inspect <IMAGE ID> // 查看具体镜像信息， inspect(检查)
  ```

  - ``docker image pull <镜像名称>`` 拉取  镜像（如： docker image pull wordpress）
    > 第二行``tag``的意思就是版本; ``latest``代表的是最新版（默认拉取），指定版本``docker image pull wordpress:beta-php8.1-fpm``

  - ``docker image rm <Image ID>`` // 删除  镜像，容器使用镜像时，是不能删除的

  #### 导入导出
  - ``docker image save wordpress:latest -o abc.image`` 导出 镜像（``save``导出/保存的意思; ``wordpress:latest``镜像名称+版本号; ``-o`` 导出文件; ``abc.image`` 导出后镜像名称+.image后缀）

  - ``docker image load -i ./abc.image`` 导入 镜像（``load``加载/导入; ``-i`` install或init吧）
  
<br/><br/><br/>


  ### <h1 id="ck"> 参考 </h1>

  [看技术胖视频22/04/18](https://jspang.com/article/75)
  
  4.20--5章
  4.21--6-7章
  4.22--8章
  4.24--9-11章

  

  

  
