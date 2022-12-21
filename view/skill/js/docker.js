const dockerList = [
  { id: 1, sort: 1, type: 'docker', question: '什么是docker？什么是docker镜像？', answer: '一种内核轻量级的操作系统层虚拟化技术', details: 'docker是一个容器化平台，它以容器的形式将您的应用程序及其所有依赖项打包在一起，以确保您的应用程序在任何环境中无缝运行。（客观）\ndocker镜像是docker容器的源代码，用于创建容器。使用build命令创建镜像。'},
  { id: 2, sort: 2, type: 'docker', question: 'docker三大核心概念', answer: '容器（Container）、镜像（Image）和仓库（Repository）'},
  { id: 3, sort: 3, type: 'docker', question: 'docker与虚拟机有何不同？', answer: 'docker：启动速度秒级，体量极小（MB），性能近似物理机；\n虚拟机：启动速度分钟级，体量较大（GB），性能损耗大；'},
  { id: 4, sort: 4, type: 'docker', question: 'docker常用命令？', answer: 'docker pull:拉取或者更新指定镜像； \ndocker push:将镜像推送至远程仓库； \ndocker images:列出所有镜像； \ndocker rmi:删除镜像；\ndocker ps:列出所有容器； \ndocker rm:删除容器;'},
  { id: 5, sort: 5, type: 'docker', question: 'docker容器有几种状态？', answer: '运行、已暂停、重新启动、已退出', details: 'created（已创建）\nrestarting（重启中）\nrunning（运行中）\nremoving（迁移中）\npaused（暂停）\nexited（停止）\ndead（死亡）'},
  { id: 6, sort: 6, type: 'docker', question: '前端项目中，docker如何创建容器的镜像？', answer: '1.创建Dockerfile后，docker build创建容器的镜像； \n2. docker push:将镜像推送至远程仓库；'},
  { id: 7, sort: 7, type: 'docker', question: '前端项目CI(持续集成)制作docker镜像以及推送镜像过程是怎样的？', answer: '1.创建Dockerfile后，docker build创建容器的镜像； \n2.docker push:将镜像推送至远程仓库；\n3.CI功能就是在每次提交之后不断地集成所有提交到存储库的代码，并编译检查错误'},
]

