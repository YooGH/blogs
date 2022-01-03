[Jenkins+Github实现前端自动化构建-Centos虚拟机](https://www.jianshu.com/p/91893b5807db)

## jenkins环境安装
1. 安装完jenkins后

     ```
     systemctl start NetworkManager // 启动网络
     systemctl start jenkins   // 启动jenkins
     浏览器访问：192.168.x.x:8080/
     ```

2. jenkins安装(Manage Jenkins -- Manage Plugins)

```
Nodejs plugin
Github plugin
```



## jenkins系统配置

> Manage Jenkins  -->  configure System
1. 管理员邮箱地址（Jenkins Location）

   ```
   http://192.168.x.x:8080/
   104xx65xxx@qq.com
   ```

   

2. 邮件通知（Extended E-mail Notification）

>  页面滚到最下面（用于打包后的通知）
> 发送邮件协议一般都是采用smtp协议
> [获取QQ的STMP](https://zhidao.baidu.com/question/1669923691341017507.html)

```
SMTP服务：smtp.qq.com(qq邮箱固定写法)
用户默认邮箱后缀(Default user e-mail suffix)：@qq.com(qq邮箱固定写法)
勾选"使用SMTP认证“ - 输入邮箱和qq邮箱拿到的STMP码
勾选"使用SSL协议" - 465(SMTP端口)
勾选”通过发送测试邮件测试配置“ - 输入邮箱  -> 点击"Test configuration"（保存成功就邮箱可以收到信息）

```

3. Github

   ```
   点击“添加Github服务器”
   凭据 -> 添加 -> 类型选“Secret text” -> Secret输入Github网站的token
   ```

   

4. Git plugin

   ```
   输入名称
   输入github的邮箱
   ```

5. 保存

   

   



## 配置

> Manage Jenkins  -->  Global Tool Configuration(全局工具配置)

1. Git

   ```
   Git installations   ->  勾选”自动安装“(Install automatically)
   ```

2. NodeJS

   ```
   点击“新增NodeJS”
   选择版本
   ```

3. 保存



## 创建项目

1. 新建Item -> 输入项目名称 -> Freestyle project(自由风格) -> 确定

2. 源码管理

   **选'Git' -> 添加git地址 -> 添加凭证 -> 选择“Username with password”后输入用户名(输入邮箱)和密码**
   
3. 构建触发器
   
   **勾选“GitHub hook trigger for GITScm polling”**
   
4. 构建环境

   **勾选“Provide Node & npm bin/ folder to PATH”**
   
5. 构建
   **选择“添加构建步骤”：execute shell**
   
   ```
   node --version
   npm i
   npm run build
   ```
   
   
