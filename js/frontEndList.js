const FrontEndList = [
  { 
    id: 1,
    categoryName: 'HTML',
    href: './view/face/html-face.md', 
    children: [
      { name: 'HTML', href: './view/html/HTML.md'},  
      { name: 'img', href: './view/html/img.md'},
      { name: 'video', href: './view/html/video.md'},
    ],
    itemsChildren: [
      { name: 'shortcuticon和bookmark', href: './view/html/html1--shortcuticon和bookmark.md'},
      { name: '布局的一些小思路', href: './view/html/html2--布局的一些小思路.md'}, 
      { name: '恩，布局', href: './view/html/html3--恩，布局.md' },
      { name: '列表flex布局', href: './view/html/list-flex.md'}, 
    ]
  },


  {
    id: 2,
    categoryName: 'CSS',
    href: './view/face/css-face.md',
    children: [
      { name: 'CSS', href: 'https://www.cnblogs.com/lgyong/p/8617044.html',}, 
      { name: 'SCSS', href: './view/css/scss.md', grade: 1, done: true}, 
      { name: '————————',}, 
      { name: '样式属性', href: 'https://www.cnblogs.com/lgyong/p/8617501.html',}, 
      { name: '选择器', href: 'https://www.cnblogs.com/lgyong/p/8617055.html',}, 
      { name: '————————',}, 
      { name: 'BOOTSTRAP', href: 'https://www.cnblogs.com/lgyong/p/8810832.html',}, 
      { name: 'ELEMENTUI', href: 'https://www.cnblogs.com/lgyong/p/10583988.html',}, 
      { name: 'ColorUI', href: 'https://www.cnblogs.com/lgyong/p/13175511.html',}, 
      { name: '————————',}, 
    ],
    itemsChildren: [
      { name: '浏览器原理与兼容等', href: 'https://www.cnblogs.com/lgyong/p/8617620.html', }, 
      { name: '静态、自适应、流式、响应式', href: 'https://www.cnblogs.com/lgyong/p/8544938.html', }, 
      { name: '整体布局、兼容、移动端的适口viewport @media响应', href: 'https://www.cnblogs.com/lgyong/p/8545134.html', }, 
      { name: '垂直居中', href: 'https://www.cnblogs.com/lgyong/p/9968670.html', }, 
      { name: 'display:flex', href: 'https://www.cnblogs.com/lgyong/p/9231735.html', }, 
      { name: '@font-face', href: 'https://www.cnblogs.com/lgyong/p/9537291.html', }, 
      { name: '颜色', href: 'https://www.cnblogs.com/lgyong/p/10365754.html', }, 
      { name: 'vertical-align', href: 'https://www.cnblogs.com/lgyong/p/10488254.html', }, 
      { name: 'grid', href: 'https://www.cnblogs.com/lgyong/p/13293059.html', }, 
      { name: 'sass和less', href: 'https://www.cnblogs.com/lgyong/p/13724140.html', }, 
      { name: '像素', href: 'https://www.cnblogs.com/lgyong/p/13744011.html', }, 
      { name: 'BFC', href: 'https://www.cnblogs.com/lgyong/p/13807107.html', }, 
      { name: '三角形', href: './view/css/triangle.md', }, 
    ]
  },


  {
    id: 3,
    categoryName: 'JS/jQ',
    children: [
      // {id: 110, name: 'JS (javascript)', href: 'https://www.cnblogs.com/lgyong/p/8711510.html'}, 
      { name: 'ES6(ES2015)', href: './view/js/ES6.md', done: true},
      { name: 'ES5', href: './view/js/ES5.md', done: true},
      { name: 'BOM', href: 'https://www.cnblogs.com/lgyong/p/8998944.html'},
      { name: 'DOM', href: 'https://www.cnblogs.com/lgyong/p/8998967.html'},
      { name: '————————',},
      { name: 'Jquery', href: 'https://www.cnblogs.com/lgyong/p/8810984.html'},
      { name: 'Typescript', href: './view/js/typescript.md'},
      { name: 'Canvas', href: 'https://www.cnblogs.com/lgyong/p/9559821.html'},
      { name: '————————',},
    ],
    itemsChildren: [
      { name: '去重', href: 'https://www.cnblogs.com/lgyong/p/8490610.html', },
      { name: '闭包', href: 'https://www.cnblogs.com/lgyong/p/8559775.html', },
      { name: '继承：（封装、多态、抽象）', href: 'https://www.cnblogs.com/lgyong/p/8566279.html', },
      { name: '模块(cmd amd)', href: 'https://www.cnblogs.com/lgyong/p/8586283.html', },
      { name: '事件流（冒泡和捕获）', href: 'https://www.cnblogs.com/lgyong/p/9521226.html', },

      { name: '回调', href: 'https://www.cnblogs.com/lgyong/p/9695224.html', },
      { name: '请求头', href: 'https://www.cnblogs.com/lgyong/p/10001296.html', },
      { name: '正则', href: 'https://www.cnblogs.com/lgyong/p/9564328.html', },
      { name: '缓存', href: 'https://www.cnblogs.com/lgyong/p/9281353.html', },
      { name: '判断空对象的方法', href: 'https://www.cnblogs.com/lgyong/p/9507031.html', },

      { name: '跨域', href: 'https://www.cnblogs.com/lgyong/p/9928062.html', },
      { name: 'switch', href: 'https://www.cnblogs.com/lgyong/p/10374324.html', },
      { name: 'url问号后的数据', href: 'https://www.cnblogs.com/lgyong/p/10384904.html', },
      { name: 'promise', href: './view/js/promise.md', done: true },
      { name: 'break', href: 'https://www.cnblogs.com/lgyong/p/12493894.html', },

      { name: '小数（保留小数点后几位，小数点失精）', href: 'https://www.cnblogs.com/lgyong/p/11946956.html', },
      { name: 'try...catch throw', href: 'https://www.cnblogs.com/lgyong/p/10579658.html', },
      { name: '时间功能、时间与时间戳', href: 'https://www.cnblogs.com/lgyong/p/11867875.html', },
      { name: '高阶函数', href: 'https://www.cnblogs.com/lgyong/p/12696651.html', },
      { name: '循环和遍历各方法比较', href: 'https://www.cnblogs.com/lgyong/p/12704162.html', },
      
      { name: '深拷贝', href: './view/js/js1.md', done: true},
      { name: '数字转汉数字', href: 'https://www.cnblogs.com/lgyong/p/13921834.html', },
      { name: '计算机', href: './view/js/computed.md', },
      { name: '1. 设计模型--单例', href: './view/js/singleton.md', },
    ]
  },


  // https://vue3js.cn/
  {
    id: 4,
    categoryName: 'Vue',
    href: './view/face/vue-face.md',
    children: [
      {id: 3, name: 'vue2', href: './view/vue/vue2.md'}, 
      {id: 2, name: '2-vuex', href: './view/vue/vuex.md'}, 
      {id: 4, name: '2-组件间的传值 + 路由守卫', href: 'https://www.cnblogs.com/lgyong/p/11570040.html'}, 
      {id: 9910, name: '———',}, 
      {id: 1, name: 'vue开发中遇到的问题', href: 'https://www.cnblogs.com/lgyong/p/8538846.html'}, 
      {id: 0, name: 'vue项目的过程(开始时间大概是2018/2/22)', href: 'https://www.cnblogs.com/lgyong/p/11514598.html'}, 
      {id: 991, name: '————————',}, 
      {id: 3.1, name: 'vue3搭建', href: './view/vue/vue3搭建.md'}, 
      {id: 3.2, name: 'compositionApi', href: './view/vue/compositionApi.md'}, 
      {id: 3.3, name: 'vue3', href: './view/vue/vue3.2.txt'}, 
    ],  
    itemsChildren: []
  },


  {
    id: 5,
    categoryName: '框架',
    children: [
      {name: '微信云开发', href: './view/wx/wxyun.md', done: true, }, 
      {id: 0, name: '微信小程序', href: './view/wx/wx.md', done: true, },  // href: 'https://www.cnblogs.com/lgyong/p/9959023.html'
      {id: 1, name: '————————',}, 
      {id: 1, name: '功能1-map', href: './view/wx/fn-map.md', done: true, }, 
      {id: 2, name: '功能2-h5跳转', href: './view/wx/fn-h5.md', done: true, }, 
      {id: 3, name: '功能3-登录授权', href: './view/wx/fn-login.md', done: true, }, 
      {id: 4, name: '功能4-模板消息接口', href: './view/wx/fn-message.md', done: true, }, 
      {id: 5, name: '功能5-摄像头', href: './view/wx/fn-camera.md', done: true, }, 

      {id: 6, name: '功能6-组件', href: './view/wx/fn-components.md', done: true, }, 
      {id: 7, name: '功能7-其他', href: './view/wx/fn-other.md', done: true, }, 

      {id: 1, name: '————————',}, 
      {id: 3, name: 'uniapp', href: 'https://www.cnblogs.com/lgyong/p/11579340.html'}, 
      {id: 1, name: 'node笔记', href: 'https://www.cnblogs.com/lgyong/p/10421749.html'}, 
      {name: '框架比较', href: './view/frame/frame.html', done: true, }, 
      {id: 2, name: 'nuxt （多页面vue）', href: 'https://www.cnblogs.com/lgyong/p/10608214.html'}, 
    ]
  },
  {
    id: 6,
    categoryName: 'react',
    children: [
      {id: 5, name: 'react/taro', href: './view/other/taro.md', done: true,}, 
    ]
  },
];