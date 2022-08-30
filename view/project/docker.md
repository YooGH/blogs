1. <a href="#h1"> 容器container </a>
2. <a href="#h2"> attached 和detached模式 </a>
3. <a href="#h3"> Docker的交互式模式 </a><br/><br/>
4. <a href="#h4"> 镜像 </a>
5. <a href="#h5"> 镜像操作(10-14) </a>
6. <a href="#h6"> 镜像命令(15) </a>
7. <a href="#h7"> 数据持久化 - VOLUME </a>
8. <a href="#h8"> 端口转发 </a>
9. <a href="#h9"> docker-compose </a>
10. <a href="#h10"> 网络 </a>
11. <a href="#h99"> face </a>
<br/><a href="#ck"> 参考 </a>




  ```
  systemctl start NetworkManager // 启动网络
  sudo systemctl start docker  // 开启docker
  ```


-d // 后台运行
-p // 接口映射

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
  创建： docker container run < image name > (如：docker container run nginx/ubuntu(线上镜像名称)
  查看： docker container ls -a(docker container ps -a旧版;  -a是包括exit和up，不加就是up)
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

  - attached(前台, 适合开放环境,ctrl+C就能停止)<br/>``docker container run -p 80:80 nginx`` 

  - detached(后台，适合生成环境，需要stop停止):detached模式加参数``-d``或``--detach`` =><br/> ``docker container run -d -p 80:80 nginx``<br/><br/>detached转为attached: ``docker  attach <ID or Image Name>``

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
  - ``docker image`` 查看<br/>
  镜像操作命令

  ```
    build(Dockerfile构建)、
    history、
    import、
    inspect、
    load(加载本地包)、
    ls、
    prune(可定时清理不常用数据)、
    pull、
    push、
    rm、
    save
  ```

  <br/>import、prune、push
  ```
  docker image history wordpress(镜像名称) // 查看一个镜像的历史版本

  docker image ls // 查看本地多少个镜像
  docker image inspect <IMAGE ID> // 查看具体镜像信息， inspect(检查)
  ```

  - ``docker image pull <镜像名称>`` 拉取  镜像（如： docker image pull wordpress）
    > 第二行``tag``的意思就是版本; ``latest``代表的是最新版（默认拉取），指定版本``docker image pull wordpress:beta-php8.1-fpm``

  - ``docker image rm <Image ID>`` // 删除  镜像，容器使用镜像时，是不能删除的
<br/><br/>
  #### 导入导出(三种获取途径之一)
  - ``docker image save wordpress:latest -o abc.image`` 导出 镜像（``save``导出/保存的意思; ``wordpress:latest``镜像名称+版本号; ``-o`` 导出文件; ``abc.image`` 导出后镜像名称+.image后缀）

  - ``docker image load -i ./abc.image`` 导入 镜像（``load``加载/导入; ``-i`` install或init吧）
<br/><br/>
  #### Dockerfile(三种获取途径之一)
  > -- 集成脚本生成自定义的镜像包<br/> -- Dockerfile是一个包含用于组合映像的命令的文本文档。可以使用在命令行中调用任何命令。 Docker通过读取Dockerfile中的指令自动生成映像。<br/>--简单总结: ①、Dockerfile是用于构建docker镜像的文件; ②、Dockerfile里包含了构建镜像所需的”指令“; ③、Dockerfile有其特定的语法规则（重要学习）


  Dockerfile(准备文件)
  ```
  FROM ubuntu:latest    // 引入docker环境
  RUN apt-get update && \ 
        DEBIAN_FRONTEND=noninteractive apt-get install --no-install-recommends -y python3.9 python3-pip python3.9-dev   // 安装python
  ADD gg.py  // 添加脚本
  CMD ["python3","gg.py"]  // 执行
  ```

  gg.py
  ```
  print('hi gg')
  ```

  **开始构建**<br/>
  ``docker image build -t <Name:tay> <file path>`` (-t：指定镜像名称, 如跑上边文件: docker image build -t gg .)

  [dockerfile拉取python3.7镜像](https://blog.csdn.net/stay_foolish12/article/details/123710558)

  **选择原则**<br/>
  - 官方镜像优于非官方的镜像；（选择基予官方的镜像安全）
  - 固定版本的Tag，而不是每次都使用latest;（选择固定稳定的版本）
  - 功能满足，选择体积小的镜像（包小打包也小）
<br/><br/><br/>

<br/><br/><br/>

  ### <h1 id="h6"> 6. 镜像命令 </h1>
 - **FROM** 相对于require或import引入环境(如node,nginx)

 - **RUN** 可以执行Shell指令 (如: RUN ping www.baidu.com； 多个RUN用"&& \"连接;  用“docker image history ID”查看分层)

 - **COPY** 和 **ADD** 本地文件复制到镜像里（ADD命令可以直接解压gzip压缩文件）

 - **WOKDIR** 镜像目前切换，类Linux的cd
 ```
 FROM node:alpine3.14
 WORKDIR /app                    (切到镜像环境的二级目录app)
 ADD index.tar index.js          (复制linux环境index.tar到镜像环境的/app/index.js)
 ```

 - **ENV** (environment)


<br/><br/><br/>

  ### <h1 id="h7"> 7. 数据持久化 - VOLUME </h1>
  - Data Volume
  > 正常容器删除，数据也会删除，数据持久化就是容器之外的硬盘等<br/>
  在WIndows环境中很难使用，因为路径是虚拟机的路径，不容易找到

  指定持久化的硬盘空间如，/appp文件,没有文件自动创建

  ```
  FROM nginx
  VOLUME ["/appp"]
  ```


  - Bind Mount
  > 设置更简单，可以和开发环境更好的融合<br/>
  执行代码: app为持久化本地的目录
  ``docker container run -it -v ${pwd}:/app node``





<br/><br/><br/>

  ### <h1 id="h9"> 9. docker-compose </h1>
  - 1. 安装
  > https://docs.docker.com/desktop/   =>   Product Manuals —>Docker compose—>Liunx   =>   执行三条命令 

①、image: 指定镜像
②、variables: 变量声明
③、stages: 执行阶段


命令
docker compose up // 执行yml文件
docker compose up -d // 执行yml文件，并可以执行后台命令

docker compose ps // 查看yml文件状态

docker compose stop // 停止yml文件执行
docker compose rm // 删除yml文件执行

docker compose 


<br/><br/><br/>

  ### <h1 id="h10"> 10. 网络 </h1>
- 桥接（Bridging）
  ``docker container run -d -p 80:80 nginx``<br/>
  ``--name``重命名
- host网络模式
> 使用宿主的IP和端口，关键词``--network host/-- net host``
``docker run -it --name nginxNo1 --network host nginx``
- none
> 无网络，做扩展用
``docker run -it --name nginxNo1 --network none nginx``
  

<br/><br/><br/>

  ### <h1 id="ck"> 参考 </h1>

  [看技术胖视频22/04/18](https://jspang.com/article/75)
  [面试题目](https://www.jianshu.com/p/76ee1565b4e2)
  1. 什么是docker: 
  2. 什么是docker镜像：安装包，用于创建容器
  3. 什么是docker容器
  [参考](https://blog.csdn.net/u014265398/article/details/105636193)
  2022
  4.20--5章<br/>
  4.21--6-7章<br/>
  4.22--8章<br/>
  4.24--9-11章<br/>
  4.26--12-13章<br/>
  4.27--14章<br/>
  15章<br/>
  5.09--17章<br/>


  7.4--27章<br/>
  7.6--29-30章<br/>
  7.8--回归<br/>

  


  

<br/><br/><br/>

  ### <h1 id="99"> face </h1>


Docker是⼀个使⽤Go语⾔开发的开源的应⽤容器引擎，想必绝⼤部分java程序员都知道Docker现在有多⽕爆，因为Docker让开发者可以
打包他们的应⽤以及依赖到⼀个可移植的容器中，然后发布到任何流⾏的机器上。有想⾯试java⼯程师岗位的朋友们，Docker⾯试题是必
做的准备之⼀，下⾯整理了常考Docker⾯试题，⼀起来学习吧。

1、什么Docker？<br />
答：Docker是⼀个容器化平台，它以容器的形式将您的应⽤程序及其所有依赖项打包在⼀起，以确保您的应⽤程序在任何环境中⽆缝运⾏。

2、Docker与虚拟机的不同点在哪⾥？<br />
答：Docker不是虚拟化⽅法。它依赖于实际实现基于容器的虚拟化或操作系统级虚拟化的其他⼯具。为此，Docker最初使⽤LXC驱动程
序，然后移动到libcontainer现在重命名为runc。Docker主要专注于在应⽤程序容器内⾃动部署应⽤程序。应⽤程序容器旨在打包和运⾏
单个服务，⽽系统容器则设计为运⾏多个进程，如虚拟机。因此，Docker被视为容器化系统上的容器管理或应⽤程序部署⼯具。

3、Docker容器有⼏种状态？<br />
答：有四种状态：运⾏、已暂停、重新启动、已退出。

4、Dockerfile中最常见的指令是什么？<br />
答：FROM：指定基础镜像；LABEL：功能是为镜像指定标签；RUN：运⾏指定的命令；CMD：容器启动时要运⾏的命令。

5、Dockerfile中的命令COPY和ADD命令有什么区别？<br />
答：⼀般⽽⾔，虽然ADD并且COPY在功能上类似，但是⾸选COPY。
那是因为它⽐ADD更易懂。COPY仅⽀持将本地⽂件复制到容器中，⽽ADD具有⼀些功能（如仅限本地的tar提取和远程URL⽀持），这些
功能并不是很明显。因此，ADD的最佳⽤途是将本地tar⽂件⾃动提取到镜像中，比如ADD rootfs.tar。xz/

6、什么是Docker镜像？<br />
答：Docker镜像是Docker容器的源代码。换句话说，Docker镜像⽤于创建容器。使⽤build命令创建镜像，并且在使⽤run启动时它们将
⽣成容器。镜像存储在Docker注册表中，registry.hub.docker.com因为它们可能变得⾮常⼤，镜像被设计为由其他镜像层组成，允许在
通过⽹络传输镜像时发送最少量的数据。

7、解释基本的Docker使⽤⼯作流程是怎样的？<br />
答：（1）从Dockerfile开始，Dockerfile是镜像的源代码；（2）创建Dockerfile后，可以构建它以创建容器的镜像。图像只是“源代
码”的“编译版本”，即Dockerfile；（3）获得容器的镜像后，应使⽤注册表重新分发容器。注册表就像⼀个git存储库，可以推送和拉取
镜像；接下来，可以使⽤该图像来运⾏容器。在许多⽅⾯，正在运⾏的容器与虚拟机（但没有虚拟机管理程序）⾮常相似。

8、如何在⽣产中监控Docker？<br />
答：Docker提供docker stats和docker事件等⼯具来监控⽣产中的Docker。我们可以使⽤这些命令获取重要统计数据的报告。
Docker统计数据：当我们使⽤容器ID调⽤docker stats时，我们获得容器的CPU，内存使⽤情况等。它类似于Linux中的top命令。
Docker事件：Docker事件是⼀个命令，⽤于查看Docker守护程序中正在进⾏的活动流。⼀些常见的Docker事件是：
attach，commit，die，detach，rename，destroy等。

9、Docker如何在⾮Linux系统中运⾏容器？<br />
答：通过添加到Linux内核版本2.6.24的名称空间功能，可以实现容器的概念。容器将其ID添加到每个进程，并向每个系统调⽤添加新的访
问控制检查。它由clone（）系统调⽤访问，该调⽤允许创建先前全局命名空间的单独实例。

10、什么类型的应⽤程序⽆状态或有状态更适合Docker容器？<br />
答：最好为Docker Container创建⽆状态应⽤程序。我们可以从应⽤程序中创建⼀个容器，并从应⽤程序中取出可配置的状态参数。现在
我们可以在⽣产环境和具有不同参数的QA环境中运⾏相同的容器。这有助于在不同场景中重⽤相同的镜像。另外，⽆状态应⽤程序⽐有状
态应⽤程序更容易使⽤Docker容器进⾏扩展。
有⾯试需要的朋友们可以好好学习上⾯整理的10道Docker⾯试题，因为涉及到的都是Docker核⼼知识点，所以只要⾯试官考察到你的
Docker⽅⾯的知识，上述题⽬会有很⼤的⼏率出现。有想再学习Docker的朋友们，可以通过“带你轻松玩转Docker技术”这⼀课程学
习，可以带你⼀步⼀步从基础到实践学习Docker，快速掌握云时代的容器技术解决⽅案Docker，轻松玩转Docker，提升⾃⼰的技术能⼒
及价值。

  
