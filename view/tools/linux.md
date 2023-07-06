 ``sudo`` linux系统管理指令，让普通用户有系统管理员执行一些或者全部的root命令的一个工具

 ``systemctl`` Systemd 的主命令,用于管理系统。

（rm: remove、dir: directory、mk: make、cd: Change Directory切换目录）

<br/>



pwd： 当前目录


<br/>
<br/>
<br/>

#### 目录

|名称|linux|window|例子等
|:--|:--|:--|:--|
|创建|mkdir|mkdir|mkdir gg; linux: mkdir -p a/b/c; window: mkdir a/b/c|
|删除|rmdir|rmdir|目录不为空 ``rm -rf`` r是向下递归，f是直接删除|
|查看|dir|dir|查看目录下的所有文件夹和文件|
|查看|ls|ls|查看目录下的所有文件夹和文件|
|重命名||ren|ren a b(a目录改成b目录)|
|移动|mv|mv|mv a b(a目录的所有文件移动b目录下)|
|进入子目录|cd|cd|Change Directory切换目录|



linux: ls 
 -d:只看当前目录的信息
 -1: 看详细信息
 -a: 显示所有 任何一个文件前面加上“.”，表示隐藏文件
 -h: 显示文件大小



<br/>

#### 文件

|名称|linux|window|例子等
|:--|:--|:--|:--|
|创建|touch和echo|echo|echo >a.txt;echo 我是文本>a.txt; touch cc.txt(win不支持) |
|删除|rm|rm和del||
|编辑|:wq!保存退出(先按"ESC"键)和:q!(退出)||win： notepad aa.txt(可视化打开)|
|复制|cp|copy和cp|linux: cp -r a b(包含文件夹下所有文件)；win: cp a b（只是复制文件夹不复制包含）,需要xcopy /s /e /y a b|
|多个|可用于空格创建删除多个问卷|window不行|

<br/>


### 操作文件 
``echo``  写入, echo gg > text.txt
``more``  查看, more /appp/text.txt


<br/>


#### 启动服务
``systemctl start NetworkManager`` 开启网络

<br/>

### 操作

|linux|window|
|:--|:--|
|poweroff 关闭系统后掉电|shutdown -s -t 秒数（shutdown -a取消命令; s=shutdown, t=time）|
|halt 关闭系统不掉电(主板是通电的)||
|shutdown -h now(休眠)|shotdown -h|
|reboot 重启|shutdown -r -t 秒数(r == restart)|


[win:shutdown](https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/shutdown)







<br/><br/>




export 环境变量 --> 可新增，修改或删除环境变量，供后续执行的程序使用(export 的效力仅限于该次登陆操作。)






[linux centOS 7虚拟机忘记密码](https://blog.csdn.net/qq_40683456/article/details/109602912)












window

系统文件修复``sfc /scannow``,需用管理员权限

