    CICD： jenkins（服务环境）+ gitlab（代码存储库）

>  编码 --> 构建 --> 集成 --> 测试 --> 交付 --> 部署

1. 环境看 “cent7环境搭建”

3. ``yum update``(更新系统,yum 是安装解压工具)

4. ssh(安全协议)

    ```
    ssh root@192.168.x.x
    ```

5. java

   ```
   yum install java
   java -version（查看是否安装，及版本号）
   ```

6. wget  （下载github/gitlab项目）

   ##### 安装wget -- 添加Yum源 -- **导入密钥**

   ```
   yum install wget
   sudo wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo
   sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key
   ```

   

6. jenkins

    ##### 安装jenkins  -- Jenkins站点的默认监听端口是8080 -- 启动

    

    ```
    sudo yum install -y jenkins  （[解决依赖](https://blog.csdn.net/ichen820/article/details/120353829):
       yum -y install epel-release
       yum -y install daemonize
    ）
    
    sudo firewall-cmd --add-port=8080/tcp --permanent
    sudo firewall-cmd --reload
    
    sudo systemctl start jenkins   // 开启jenkins服务
    ```

    打开 http://192.168.73.135:8080/

    ```
    输入密码后，选择第一个“安装推荐的插件”
    ```

    

    

    

8. git

    ### 安装git -- 设置git config -- 生产密钥g

    ```
    yum install git
    
    git config --global user.name "yourname" #引号里面输入你的名字
    git config --global user.email "youremail" #输入邮箱
    
    ssh-keygen -t rsa -C "youremail"
    
    eval `ssh-agent` #启用ssh-agent
    ssh-add ~/.ssh/id_rsa #添加密钥
    ssh-add -l #将它添加到已知的key列表中
    ```

    复制公钥添加到github/gitlab -- 私钥

    ```
    cat ~/.ssh/id_rsa.pub
    
    cat ~/.ssh/id_rsa
    ```

    设置github的token用于授权给jenkins

    https://www.cnblogs.com/wangzhichao/p/12692188.html

9. node











[vm虚拟机安装centOs7系统并安装jenkins自动化部署vue项目](https://dsx2016.com/?p=1405)

1. [虚拟机安装centOS7](https://blog.csdn.net/qq_39135287/article/details/83993574)21.9.24
2. [cent阿里镜像](https://mirrors.aliyun.com/centos/7/isos/x86_64/)

3. https://blog.csdn.net/weixin_43279032/article/details/90675968

4. https://blog.csdn.net/lizhiyuan_eagle/article/details/90692228

5. https://www.cnblogs.com/cangqinglang/p/11100639.html

6. NetworkManaer 未运行。： systemctl start NetworkManager 
   查看ip: ip addr
   启动jenkins: sudo systemctl start jenkins


7. 删除文件夹 https://www.cnblogs.com/maoriaty/p/8922271.html
8. CI全名Continuous Integration，就是我们经常听到的持续集成概念。
   当开发每天会提交多次代码到主干上，会做一些重复性的动作时，就可以用持续集成环境来操作
   有集成了，就肯定少不了它的好基友，没错就是CD。
   CD全名是Continuous Deployment，是持续部署。
   CD还有个小号，交持续交付，英文全称是Continuous delivery，缩写也是CD。
   =======
   启动网络： systemctl start NetworkManager 
   启动jenkins: sudo systemctl start jenkins

    强制重启**reboot -f**
