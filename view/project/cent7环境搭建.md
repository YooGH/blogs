1. vmware(百度下载，并找码注册)

2. centOS 7 ([清华大学开源软件镜像站](https://mirrors.tuna.tsinghua.edu.cn/centos/7/isos/x86_64/))([超详细的CentOS7.4下载与图文安装](https://blog.csdn.net/qq_39135287/article/details/83993574))

   - 选install CentOS7（软件 --> 选图形化）

   - 配置网络

     ```
     su (最该权限)
     cd /etc/sysconfig/network-scripts
     vi ifcfg-ens33        // 进入网络配置文件（按i编辑 | 保存并退出： ESC  -> :wq!）
     
     BOOTPROTO=static      // 启动静态IP地址
     ONBOOT=yes            // 自动启动网络连接
     IPADDR=192.168.x.x    // 设置IP地址
     NETMASK=255.255.255.0 // 子网掩码
     GATWAY=192.168.x.2    // 设置网关
     ESC   -> :wq!    // 保存并退出强制
     ```

   - 配置网络图像化版本

     ```
     nmtui
     
     Edit a connection (编辑网络) -> ens33 -> 回车
     ipv4 右边的show(显示)
     IPADDR=192.168.x.x    // 设置IP地址
     NETMASK=255.255.255.0 // 子网掩码
     GATWAY=192.168.x.2    // 设置网关
     右下角确认（Ok）  -> 退出
     
     activate connection  // 开启网络
     ens33 - 点右边 activate (激活)
     
     ping 8.8.8.8
     ```

     

   - DNS

     ```
     vi /etc/resolv.conf
     
     nameserver 114.114.114.114 // 添加域名解析（三大运营商的通用DNS）
     nameserver1 223.5.5.5 // 多添加几个（阿里）或223.6.6.6
     nameserver2 8.8.8.8 // 谷歌
     
      ESC   -> :wq!    // 保存并退出强制
     ```

   - systemctl start NetworkManager 

   - service network restart (重启)   ->   ip addr（查看当前ip）

