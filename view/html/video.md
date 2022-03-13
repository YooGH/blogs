video

#### 方法

**load()**  (window.load,无参数)

**play()**  (需要触发按钮才能有效)

**pause()**  (暂停视频，需要触发)

#### 事件

**onended**  (视频播放完后，发生的事件，如可以做跳转到下一页)




### 问题
1. 在Windows服务器【IIS】网页无法播放MP4视频

 [https(iis服务部署ssl证书)](https://jingyan.baidu.com/article/76a7e4090bed63fc3b6e15c5.html)

 打开IIS---在网站的文件夹上面右击---属性---HTTP头--MIME类型---新建---扩展名 MP4 MIME类型为： application/octet-stream---完成--覆盖你无法播放视频的网站