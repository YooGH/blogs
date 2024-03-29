const FrontEndList = [
  {
    id: 1,
    categoryName: 'HTML',
    href: './view/face/html-face.md',
    show: false,
    children: [
      { name: 'HTML', href: './view/html/HTML.md', grade: 1},
      { name: 'img', href: './view/html/img.md'},
      { name: 'video', href: './view/html/video.md'},
      { name: '1. shortcuticon和bookmark', href: './view/html/html1--shortcuticon和bookmark.md'},
      { name: '2. 布局的一些小思路', href: './view/html/html2--布局的一些小思路.md'},
      { name: '3. 恩，布局', href: './view/html/html3--恩，布局.md' },
      { name: '4. 列表flex布局', href: './view/html/list-flex.md'},
    ]
  },
  {
    id: 2,
    categoryName: 'CSS',
    href: './view/face/css-face.md',
    children: [
      { name: '选择器', href: 'https://www.cnblogs.com/lgyong/p/8617055.html', grade: 1},
      { name: '样式属性', href: 'https://www.cnblogs.com/lgyong/p/8617501.html', grade: 1},
      { name: '————————',},
      { name: 'CSS', href: 'https://www.cnblogs.com/lgyong/p/8617044.html', grade: 1},
      { name: 'SCSS', href: './view/css/scss.md', grade: 1, done: true},
      { name: '————————',},
      { name: 'BOOTSTRAP', href: 'https://www.cnblogs.com/lgyong/p/8810832.html', grade: 1},
      { name: 'ELEMENTUI', href: 'https://www.cnblogs.com/lgyong/p/10583988.html', grade: 1},
      { name: 'ColorUI', href: 'https://www.cnblogs.com/lgyong/p/13175511.html', grade: 1},
      { name: '————————',},
      
      {id: 13, name: '4.css浏览器原理与兼容等', href: 'https://www.cnblogs.com/lgyong/p/8617620.html'}, 
      {id: 0, name: '静态、自适应、流式、响应式', href: 'https://www.cnblogs.com/lgyong/p/8544938.html', showId: true, }, 
      {id: 1, name: '整体布局、兼容、移动端的适口viewport @media响应', href: 'https://www.cnblogs.com/lgyong/p/8545134.html', showId: true,}, 
      {id: 2, name: '垂直居中', href: 'https://www.cnblogs.com/lgyong/p/9968670.html', showId: true,}, 
      {id: 3, name: 'display:flex', href: 'https://www.cnblogs.com/lgyong/p/9231735.html', showId: true,}, 
      {id: 4, name: '@font-face', href: 'https://www.cnblogs.com/lgyong/p/9537291.html', showId: true,}, 
      {id: 5, name: '颜色', href: 'https://www.cnblogs.com/lgyong/p/10365754.html', showId: true,}, 
      {id: 6, name: 'vertical-align', href: 'https://www.cnblogs.com/lgyong/p/10488254.html', showId: true,}, 
      {id: 7, name: 'grid', href: 'https://www.cnblogs.com/lgyong/p/13293059.html', showId: true,}, 
      {id: 8, name: 'sass和less', href: 'https://www.cnblogs.com/lgyong/p/13724140.html', showId: true,}, 
      {id: 9, name: '像素', href: 'https://www.cnblogs.com/lgyong/p/13744011.html', showId: true,}, 
      {id: 10, name: 'BFC', href: 'https://www.cnblogs.com/lgyong/p/13807107.html', showId: true,}, 
      {id: 10, name: '三角形', href: './view/css/triangle.md', showId: true,}, 

    ]
  },
  {id: 3, categoryName: 'JS/jQ', children: [
    // {id: 110, name: 'JS (javascript)', href: 'https://www.cnblogs.com/lgyong/p/8711510.html'}, 
    {id: 111, name: 'ES6~(ES2015)', href: './view/js/ES6.md', grade: 1, done: true}, 
    {id: 112, name: 'ECMAScript', href: 'https://www.cnblogs.com/lgyong/p/8711614.html', grade: 1}, 
    {id: 115, name: 'BOM', href: 'https://www.cnblogs.com/lgyong/p/8998944.html', grade: 1}, 
    {id: 116, name: 'DOM', href: 'https://www.cnblogs.com/lgyong/p/8998967.html', grade: 1}, 
    { id: 114, name: 'Jquery', href: 'https://www.cnblogs.com/lgyong/p/8810984.html', grade: 1},
    { id: 110, name: 'Typescript', href: './view/js/typescript.md', grade: 1},
    {id: 1111, name: 'Canvas', href: 'https://www.cnblogs.com/lgyong/p/9559821.html', grade: 1}, 
    {id: 991, name: '————————',}, 


    {id: 0, name: 'JS0 -- 去重', href: 'https://www.cnblogs.com/lgyong/p/8490610.html'}, 
    {id: 1, name: 'JS1 -- 闭包', href: 'https://www.cnblogs.com/lgyong/p/8559775.html'}, 
    {id: 2, name: 'JS2 -- 继承：（封装、多态、抽象）', href: 'https://www.cnblogs.com/lgyong/p/8566279.html'}, 
    {id: 2.2, name: 'JS2 -- 构造函数', href: './view/js/构造函数.md'}, 
    {id: 3, name: 'JS3 -- 模块(cmd amd)', href: 'https://www.cnblogs.com/lgyong/p/8586283.html'}, 
    {id: 4, name: 'JS4 -- 事件流（冒泡和捕获）', href: 'https://www.cnblogs.com/lgyong/p/9521226.html'}, 
    {id: 5, name: 'JS5 -- 回调', href: 'https://www.cnblogs.com/lgyong/p/9695224.html'}, 
    {id: 6, name: 'JS6 -- 请求头', href: 'https://www.cnblogs.com/lgyong/p/10001296.html'}, 
    {id: 7, name: 'JS7 -- 正则', href: 'https://www.cnblogs.com/lgyong/p/9564328.html'}, 
    {id: 8, name: 'JS8 -- 缓存', href: 'https://www.cnblogs.com/lgyong/p/9281353.html'}, 
    {id: 12, name: 'JS9 -- 判断空对象的方法', href: 'https://www.cnblogs.com/lgyong/p/9507031.html'}, 
    {id: 13, name: 'JS10 -- 跨域', href: 'https://www.cnblogs.com/lgyong/p/9928062.html'}, 
    {id: 14, name: 'JS11 -- switch', href: 'https://www.cnblogs.com/lgyong/p/10374324.html'}, 
    {id: 15, name: 'JS12 -- url问号后的数据', href: 'https://www.cnblogs.com/lgyong/p/10384904.html'}, 
    {id: 16, name: 'JS13 -- 同步异步', href: 'https://www.cnblogs.com/lgyong/p/12095137.html'}, 
    {id: 17, name: 'JS14 -- break', href: 'https://www.cnblogs.com/lgyong/p/12493894.html'}, 
    {id: 18, name: 'JS15 -- 小数（保留小数点后几位，小数点失精）', href: 'https://www.cnblogs.com/lgyong/p/11946956.html'}, 
    {id: 19, name: 'JS16 -- try...catch throw', href: 'https://www.cnblogs.com/lgyong/p/10579658.html'}, 
    {id: 20, name: 'JS17 -- 时间功能、时间与时间戳', href: 'https://www.cnblogs.com/lgyong/p/11867875.html'}, 
    {id: 21, name: 'JS18 -- 高阶函数', href: 'https://www.cnblogs.com/lgyong/p/12696651.html'}, 
    {id: 22, name: 'JS19 -- 循环和遍历各方法比较', href: 'https://www.cnblogs.com/lgyong/p/12704162.html'}, 
    {id: 23, name: 'JS20 -- 深拷贝', href: 'https://www.cnblogs.com/lgyong/p/12710862.html'}, 
    {id: 25, name: 'JS20 -- 数字转汉数字', href: 'https://www.cnblogs.com/lgyong/p/13921834.html'}, 

  ]
  },
  // https://vue3js.cn/
  {id: 3, categoryName: 'vue', href: './view/face/vue-face.md', children: [
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
  ]},
  {id: 5, categoryName: '框架', children: [
    {id: 0, name: '微信小程序', href: 'https://www.cnblogs.com/lgyong/p/9959023.html'}, 
    {id: 1, name: 'node笔记', href: 'https://www.cnblogs.com/lgyong/p/10421749.html'}, 
    {id: 2, name: 'nuxt （多页面vue）', href: 'https://www.cnblogs.com/lgyong/p/10608214.html'}, 
    {id: 3, name: 'uniapp', href: 'https://www.cnblogs.com/lgyong/p/11579340.html'}, 
    {id: 4, name: '微信云开发', href: 'https://www.cnblogs.com/lgyong/p/13152133.html'}, 
  ]},
  {id: 4, categoryName: 'react', children: [
    {id: 5, name: 'react/taro', href: 'https://www.cnblogs.com/lgyong/p/13220525.html'}, 
  ]},
  
];

const BackEndList = [
  {
    id: 1, categoryName: '工程', children: [
      {id: 0, name: 'webpack1.0~2.0笔记', href: 'https://www.cnblogs.com/lgyong/p/9192650.html'}, 
      {id: 1, name: 'webpack', href: 'https://www.cnblogs.com/lgyong/p/9823545.html'}, 
      {id: 2, name: 'git', href: 'https://www.cnblogs.com/lgyong/p/11577904.html'}, 
      { id: 7, name: 'vite', href: './view/project/vite.md' },
			{id: 992, name: '————————',},
      {id: 5, name: '算法1 -- 排序', href: 'https://www.cnblogs.com/lgyong/p/10419400.html'}, 
      { id: 6, name: '算法2 -- 字符串', href: 'https://www.cnblogs.com/lgyong/p/10600992.html' },
			{id: 999, name: '————————',},
      {id: 3, name: 'mockjs', href: 'https://www.cnblogs.com/lgyong/p/12221720.html'}, 
      {id: 4, name: 'md', href: 'https://www.cnblogs.com/lgyong/p/13072516.html'}, 
    ]
  },
  {id: 2, categoryName: '功能和bug', children: [
    {id: 0, name: '功能0 -- fullscreen', href: 'https://www.cnblogs.com/lgyong/p/10406197.html'}, 
    {id: 1, name: '功能1 -- 顶部导航栏和返回顶部效果', href: 'https://www.cnblogs.com/lgyong/p/10531979.html'}, 
    {id: 2, name: '功能2 -- hover出现遮照效果', href: 'https://www.cnblogs.com/lgyong/p/10558731.html'}, 
    {id: 3, name: '功能3 -- 基于jquery的load()实现多个.html静态页，引用同一个header.html和footer.html文件', href: 'https://www.cnblogs.com/lgyong/p/10562991.html'}, 
    {id: 4, name: '功能4 -- rem.js', href: 'https://www.cnblogs.com/lgyong/p/11949763.html'}, 
    {id: 5, name: '功能5 -- 圆圈动态加载', href: 'https://www.cnblogs.com/lgyong/p/12691200.html'}, 
    { id: 6, name: '功能6 -- 选项卡数据缓存', href: 'https://www.cnblogs.com/lgyong/p/13226070.html' },
    { id: 7, name: '功能7 -- 全球快递物流查询', href: './view/func/功能7--全球快递物流查询.md' },
    { id: 8, name: '功能8 -- JS实现下拉刷新、上拉加载', href: './view/func/JS实现下拉刷新、上拉加载.md' },


    {id: 110, name: 'bug记录', href: 'https://www.cnblogs.com/lgyong/p/12931035.html'}, 
    {id: 111, name: 'bug1 -- inline-block间隙', href: 'https://www.cnblogs.com/lgyong/p/14149631.html'}, 
    {id: 112, name: 'bug2 -- 小程序ios 密码类型的input焦后再输入丢失内容', href: 'https://www.cnblogs.com/lgyong/p/14557230.html'},
  ]},
  {id: 3, categoryName: '非逻辑', children: [
    {id: 5, name: 'face', href: 'https://www.cnblogs.com/lgyong/p/11604172.html'}, 
    {id: 7, name: 'face', href: './view/face/face.md'}, 
    {id: 0, name: '兼容 yu 比较', href: 'https://www.cnblogs.com/lgyong/p/8881870.html'}, 
    {id: 1, name: '软件 | 网站   (echarts、base64图片、图片压缩、face++、swiper、snipate截图、vue.js和axios.js......)', href: 'https://www.cnblogs.com/lgyong/p/9987256.html'}, 
    {id: 2, name: '杂 (Nuxt.js多页面的vue;  WEEX vue的原生;  Flutter是谷歌的移动UI框架; deno)', href: 'https://www.cnblogs.com/lgyong/p/9845792.html'}, 
    {id: 3, name: '插件 (echarts、swiper)', href: 'https://www.cnblogs.com/lgyong/p/10369544.html'}, 
    {id: 4, name: '优化', href: 'https://www.cnblogs.com/lgyong/p/10005537.html'}, 
    {id: 6, name: '前端', href: 'https://www.cnblogs.com/lgyong/p/8711502.html'}, 
    {id: 7, name: 'CSS2 -- 圣杯布局和双飞翼布局的作用和区别!', href: 'https://www.cnblogs.com/lgyong/p/9134752.html'}, 
  ]},
  {id: 4, categoryName: '', children: [
  // {id: 4, categoryName: '全栈先忽略', children: [
    // {id: 9, name: 'python', href: 'https://www.cnblogs.com/lgyong/p/12107943.html'}, 
    // {id: 8, name: 'cocos', href: 'https://www.cnblogs.com/lgyong/p/9634764.html'}, 
    // {id: 0, name: '网络0 -- wamp3.0 tracert', href: 'https://www.cnblogs.com/lgyong/p/10365547.html'}, 
    // {id: 1, name: '网络1 -- 端口、域名与ip', href: 'https://www.cnblogs.com/lgyong/p/10058749.html'}, 
    // {id: 3, name: '网络3 -- 状态码', href: 'https://www.cnblogs.com/lgyong/p/10422662.html'}, 
    // {id: 2, name: 'PS', href: 'https://www.cnblogs.com/lgyong/p/10381455.html'}, 
    // {id: 4, name: '安全1 -- 洪水攻击', href: 'https://www.cnblogs.com/lgyong/p/10460162.html'}, 
    // {id: 5, name: 'WebAssembly', href: 'https://www.cnblogs.com/lgyong/p/12126344.html'}, 
    // {id: 6, name: 'wamp', href: 'https://www.cnblogs.com/lgyong/p/12149108.html'}, 
    // {id: 7, name: 'php', href: 'https://www.cnblogs.com/lgyong/p/12158571.html'}, 
    // {id: 8, name: 'svga', href: 'https://www.cnblogs.com/lgyong/p/12966492.html'}, 
    // {id: 9, name: 'mySql笔记', href: 'https://www.cnblogs.com/lgyong/p/13187596.html'}, 
  ]},
  {id: 5, categoryName: '脑图', children: [
    // {id: 0, name: '脑图', href: 'https://naotu.baidu.com/'}, 
    {id: 0, name: '脑图', href: 'https://naotu.baidu.com/file/b2c14b8301fe08e11db283b2b3788935'}, 
    {id: 1, name: '后台资料', href: './view/tools/backstageSystem.md'},
    {id: 2, name: 'px转rpx', href: './view/tools/pxChangeRpx.html'},
    
    
  ]},
  
];