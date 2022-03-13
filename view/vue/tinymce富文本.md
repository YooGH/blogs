1. 把[Tinymce组件](https://github.com/PanJiaChen/vue-element-admin/blob/master/src/components/Tinymce)放进全局组件里，

2. 引入页面代码

   ```
   import TinyMCE from '@/components/TinyMCE';a
   <TinyMCE
       menubar=""
       v-model="goodsDetails"
       :height="300"
   />
   ```

   

tinymce.min.js慢问题

   > Tinymce/index.vue 下的tinymceCDN包默认[地址](https://cdn.jsdelivr.net/npm/tinymce-all-in-one@4.9.3/tinymce.min.js) 对应[ip](151.101.109.229)是美国的CDN,请求老慢要好几十秒
   >
   > 改用[bootcdn](https://cdn.bootcdn.net/ajax/libs/tinymce/4.9.3/tinymce.min.js), 但CDN没有中文包
   >
   > 后通过tinymce.init下的language_url，指定中文包
   >
   > 中文包可以用美国CDN或上传到自己服务器 
   >
   > (如果包tinymce.min.js上传的公司的CDN，就要上传一坨依赖插件，所以用中文的CDN)
   >
   > 片段代码如下

   ```
   const tinymceCDN = 'https://cdn.bootcdn.net/ajax/libs/tinymce/4.9.3/tinymce.min.js';
   window.tinymce.init({
     language_url: 'https://cdn.jsdelivr.net/npm/tinymce-all-in-one@4.9.3/langs/zh_CN.js' // 433ms
     language: 'zh_CN', // en  zh_CN
     // 
   })
   ```

 







  

### 参考

﻿[vue-element-admin: Tinymce](https://panjiachen.github.io/vue-element-admin-site/feature/component/rich-editor.html#tinymce)

[Tinymce 组件](https://github.com/PanJiaChen/vue-element-admin/blob/master/src/views/components-demo/tinymce.vue)

[Tinymce 引入项目](https://www.jianshu.com/p/ad02e71a4fae)

[中文文档](http://tinymce.ax-z.cn/)



### 其他富文本编辑器
[vue-quill-editor](https://www.cnblogs.com/zly430/p/10895307.html)
[github官网](https://github.com/surmon-china/vue-quill-editor)
[options全解析](https://blog.csdn.net/div_ma/article/details/79536634)
[光标位置插入图片](http://www.yuepc.com/a/1722.html)
```
// 1.获取容器（ref="myQuillEditor"）
let selection = this.$refs.myQuillEditor.quill.getSelection();
// 2. 上传回来的图片地址
let imgUrl = 'https://...'; 
// 3.获取quill的光标，插入图片
selection.insertEmbed(selection != null ? selection.index : 0, 'image', imgUrl)   
// 4.插入完成后，光标往后移动一位 
selection.setSelection(selection.index + 1);
```



[Vue-Quill-Editor](https://www.cnblogs.com/wjlbk/p/12884661.html)
[mavon-editor](https://www.cnblogs.com/hermit-gyqy/p/12101324.html)
