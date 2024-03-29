const FrontEndList = [
  { 
    id: 1,
    categoryName: 'HTML',
    href: './view/skill/html-skill.md', 
    show: true,
    children: [
      { name: 'HTML', href: './view/html/HTML.md', done: true, },
      { name: 'img', href: './view/html/img.md', done: true, },
      { name: 'video', href: './view/html/video.md', done: true, },
      { name: '————————',  done: true, showSort: false},
    ],
    itemsChildren: [
      { name: 'shortcuticon和bookmark', href: './view/html/html1--shortcuticon和bookmark.md', done: true, },
      { name: '布局的一些小思路', href: './view/html/html2--布局的一些小思路.md', done: true, },
      { name: '恩，布局', href: './view/html/html3--恩，布局.md', done: true, },
      { name: '列表flex布局', href: './view/html/list-flex.md', done: true, },
      { name: '商品布局', href: './view/layout/index.html', done: true, },

      { name: '————————',  done: true, showSort: false},
      
      { name: '数据结构和算法1', href: './view/js/design/数据结构和算法1.md', done: true, showSort: false},
      { name: '数据结构和算法2', href: './view/js/design/数据结构和算法2.md', done: true,  showSort: false},
      { name: '1. 设计模型--单例', href: './view/js/design/singleton.md', done: true, showSort: false},
      { name: '2. 设计模型--工厂', href: './view/js/design/factory.md', done: true,  showSort: false},
      { name: '3. 设计模型--builder', href: './view/js/design/builder.md', done: true,  showSort: false},
    ]
  },

  {
    id: 2,
    categoryName: 'CSS',
    href: './view/skill/css-skill.md',
    show: true,
    children: [
      { name: 'CSS', href: './view/css/css.md', grade: 1, done: true, beforeHref:'https://www.cnblogs.com/lgyong/p/8617044.html'},
      { name: '选择器', href: './view/css/selector.md', grade: 1, done: true, },
      { name: '样式属性', href: 'https://www.cnblogs.com/lgyong/p/8617501.html',},
      { name: '样式属性',  href: './view/css/style.md', grade: 1, done: false, },
      { name: '————————',  done: true},
      { name: 'SCSS', href: './view/css/scss.md', grade: 1, done: true},
      { name: 'BOOTSTRAP', href: 'https://www.cnblogs.com/lgyong/p/8810832.html',},
      { name: 'ELEMENTUI', href: 'https://www.cnblogs.com/lgyong/p/10583988.html',},
      { name: 'ColorUI', href: 'https://www.cnblogs.com/lgyong/p/13175511.html',},
      { name: '————————',  done: true},
    ],
    itemsChildren: [
      { name: '浏览器原理与兼容等', href: './view/css/compatibility.md', done: true, },
      { name: '静态、自适应、流式、响应式', href: './view/css/css1.md', done: true, },
      { name: '整体布局、兼容、移动端的适口viewport @media响应', href: 'https://www.cnblogs.com/lgyong/p/8545134.html', },
      { name: '@font-face', href: './view/css/font-face.md', done: true, },
      { name: '像素', href: './view/css/pixel.md', done: true, },

      { name: '垂直居中', href: './view/css/vertical-center.md', done: true, },
      { name: 'vertical-align', href: './view/css/vertical-align.md', done: true, },
      { name: 'display-flex', href: './view/css/display-flex.md', done: true, },
      { name: 'display-grid', href: './view/css/display-grid.md', done: true, },
      { name: 'sass和less', href: './view/css/cssPlus.md', done: true, },
      { name: 'BFC', href: './view/css/bfc.md', done: true, },
      { name: '三角形', href: './view/css/triangle.md', done: true, },
      { name: '颜色', href: 'https://www.cnblogs.com/lgyong/p/10365754.html', },
    ]
  },


  {
    id: 3,
    categoryName: 'JS/jQ',
    href: './view/skill/js-skill.md',
    show: true,
    children: [
      // {id: 110, name: 'JS (javascript)', href: 'https://www.cnblogs.com/lgyong/p/8711510.html'}, 
      { name: 'ES6(ES2015)', href: './view/js/ES6.md', done: true},
      { name: 'ES5', href: './view/js/ES5.md', done: true},
      { name: 'DOM', href: './view/js/dom.md', done: true},
      { name: 'BOM', href: './view/js/bom.md', done: true},
      { name: '————————',  done: true},
      { name: 'Jquery', href: 'https://www.cnblogs.com/lgyong/p/8810984.html'},
      { name: 'Typescript', href: './view/js/typescript.md'},
      { name: 'Canvas', href: 'https://www.cnblogs.com/lgyong/p/9559821.html'},
      { name: '————————',  done: true},
    ],
    itemsChildren: [
      { name: '去重', href: './view/js/js-去重.md', done: true, before: 'https://www.cnblogs.com/lgyong/p/8490610.html'},
      { name: '闭包', href: './view/js/js-closure.md', done: true, before: 'https://www.cnblogs.com/lgyong/p/8559775.html'},
      { name: '继承：（封装、多态、抽象）', href: 'https://www.cnblogs.com/lgyong/p/8566279.html', done: false, },
      { name: '模块(cmd amd)', href: './view/js/modularity.md', done: true, },
      { name: '事件流（冒泡和捕获）', href: 'https://www.cnblogs.com/lgyong/p/9521226.html', done: false, },

      { name: '回调', href: 'https://www.cnblogs.com/lgyong/p/9695224.html', done: false, },
      { name: '请求头', href: './view/js/header.md', done: true, },
      { name: '正则', href: './view/js/regular.md', done: true, },
      { name: '缓存', href: './view/js/cache.md', done: true, },
      { name: '判断空对象的方法', href: './view/js/null.md', done: true, },


      { name: '跨域', href: 'https://www.cnblogs.com/lgyong/p/9928062.html', done: false, },
      { name: 'switch', href: './view/js/switch.md', done: true, },
      { name: 'url问号后的数据', href: './view/js/url-data.md', done: true, },
      { name: 'promise', href: './view/js/promise.md', done: true },
      { name: 'break', href: './view/js/break.md', done: true },

      { name: '小数（保留小数点后几位，小数点失精）', href: 'https://www.cnblogs.com/lgyong/p/11946956.html', done: false, },
      { name: 'try...catch throw', href: './view/js/trycatchthrow.md', done: true },
      { name: '时间功能、时间与时间戳', href: 'https://www.cnblogs.com/lgyong/p/11867875.html', done: false, },
      { name: '高阶函数', href: 'https://www.cnblogs.com/lgyong/p/12696651.html', done: false, },
      { name: '循环和遍历各方法比较', href: 'https://www.cnblogs.com/lgyong/p/12704162.html', done: false, },
      
      { name: '深拷贝', href: './view/js/js1.md', done: true },
      { name: '数字转汉数字', href: 'https://www.cnblogs.com/lgyong/p/13921834.html', done: false, },
      { name: '计算机', href: './view/js/computed.md', done: true, },
      
    ]
  },


  // https://vue3js.cn/
  {
    id: 4,
    categoryName: 'Vue',
    href: './view/skill/vue-skill.md',
    show: true,
    children: [
      {id: 3, name: 'vue2', href: './view/vue/vue2.md'}, 
      {id: 2, name: '2-vuex', href: './view/vue/vuex.md'}, 
      {id: 4, name: '2-组件间的传值 + 路由守卫', href: 'https://www.cnblogs.com/lgyong/p/11570040.html'}, 
      {id: 5, name: '插件', href: './view/vue/vuePlug.md'}, 
      {id: 9910, name: '———',}, 
      {id: 1, name: 'vue开发中遇到的问题', href: 'https://www.cnblogs.com/lgyong/p/8538846.html'}, 
      {id: 0, name: 'vue项目的过程(开始时间大概是2018/2/22)', href: 'https://www.cnblogs.com/lgyong/p/11514598.html'}, 
      {id: 991, name: '————————',  done: true}, 
      {id: 3.1, name: 'vue3搭建', href: './view/vue/vue3搭建.md'}, 
      {id: 3.2, name: 'compositionApi', href: './view/vue/compositionApi.md'}, 
      {id: 3.3, name: 'vue3', href: './view/vue/vue3.2.txt'}, 
    ],  
    itemsChildren: []
  },


  {
    id: 5,
    categoryName: 'wx',
    show: true,
    children: [
      { name: '微信小程序', href: './view/wx/wx.md', done: true, },  // href: 'https://www.cnblogs.com/lgyong/p/9959023.html'
      { name: '微信云开发', href: './view/wx/wxyun.md', done: true, }, 
      { name: '微信公众号', href: './view/wx/official-account.md', done: true, }, 
      { name: '————————',  done: true}, 
      { name: '功能1-map', href: './view/wx/fn-map.md', done: true, }, 
      { name: '功能2-h5跳转', href: './view/wx/fn-h5.md', done: true, }, 
      { name: '功能3-登录授权和手机', href: './view/wx/fn-login.md', done: true, }, 
      { name: '功能4-模板消息接口', href: './view/wx/fn-message.md', done: true, }, 
      { name: '功能5-摄像头', href: './view/wx/fn-camera.md', done: true, }, 

      { name: '功能6-组件', href: './view/wx/fn-components.md', done: true, }, 
      { name: '功能7-滚动到指定位置', href: './view/wx/fn-scroll.md', done: true, }, 
      { name: '功能8-其他', href: './view/wx/fn-other.md', done: true, }, 

      
    ]
  },
  {
    id: 6,
    categoryName: '其他框架',
    show: true,
    children: [
      { name: '————————',  done: true}, 
      { name: 'uniapp', href: 'https://www.cnblogs.com/lgyong/p/11579340.html'}, 
      { name: '————————',  done: true}, 
      { name: 'node笔记', href: './view/project/node.md', done: false}, 
      { name: '————————',  done: true}, 
      {name: '框架比较', href: './view/frame/frame.html', done: true, }, 
      { name: '————————',  done: true}, 
      { name: 'react/taro', href: './view/other/taro.md', done: true,}, 
// 
      { name: 'nuxt （多页面vue）', href: 'https://www.cnblogs.com/lgyong/p/10608214.html'}, 

    ]
  },
];