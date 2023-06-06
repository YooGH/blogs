 ``sudo`` linux系统管理指令，让普通用户有系统管理员执行一些或者全部的root命令的一个工具

 ``systemctl`` Systemd 的主命令,用于管理系统。

（rm: remove、dir: directory、mk: make、cd: Change Directory切换目录）


#### 目录
 ``mkdir`` 创建目录（mkdir gg）

 ``rmdir`` 删除目录（目录不为空 ``rm -rf`` r是向下递归，f是直接删除）

 ``ls`` 查看当前目录文件

 ``cd`` 进入子目录(Change Directory切换目录)




#### 文件
 ``touch``  创建文件

 ``rm`` 删除文件

 ``vi``    编辑文件（i写入）

 ``:wq!``   保存退出(先按"ESC"键)

 ``:q!``    退出

### 操作文件 
``echo``  写入, echo gg > text.txt
``more``  查看, more /appp/text.txt



#### 启动服务
``systemctl start NetworkManager`` 开启网络


### 操作
poweroff 关闭系统后掉电

halt 关闭系统不掉电(主板是通电的)

shutdown -h now

reboot 重启




export 环境变量 --> 可新增，修改或删除环境变量，供后续执行的程序使用(export 的效力仅限于该次登陆操作。)












window

系统文件修复``sfc /scannow``,需用管理员权限

