const BackEndList = [
  {
    id: 1,
    categoryName: '工程',
    children: [
      { id: 0, name: 'webpack1.0~2.0笔记', href: 'https://www.cnblogs.com/lgyong/p/9192650.html'}, 
      { id: 1, name: 'webpack', href: 'https://www.cnblogs.com/lgyong/p/9823545.html'}, 
      { id: 2, name: 'git', href: './view/project/git.md', done: true}, 
      { id: 3, name: 'vite', href: './view/project/vite.md' },
      { id: 4, name: 'ESLint', href: './view/project/ESLint.md' },
      { id: 5, name: 'vue-cli', href: './view/project/vue-cli.md' },
      { id: 5, name: 'docker', href: './view/project/docker.md' },
      
			{ id: 992, name: '————————',},
      { id: 11, name: '算法1 -- 排序', href: 'https://www.cnblogs.com/lgyong/p/10419400.html'}, 
      { id: 12, name: '算法2 -- 字符串', href: 'https://www.cnblogs.com/lgyong/p/10600992.html' },
			{ id: 999, name: '————————',},
      { id: 21, name: 'mockjs', href: 'https://www.cnblogs.com/lgyong/p/12221720.html'}, 
      { id: 22, name: 'md', href: 'https://www.cnblogs.com/lgyong/p/13072516.html' }, 
			{ id: 999, name: '————————',},
      { id: 31, name: 'cent7-搭建', href: './view/project/cent7环境搭建.md' },
      { id: 32, name: 'jenkins', href: './view/project/jenkins.md' },
      { id: 33, name: 'jenkins-github', href: './view/project/jenkins-github.md' },
      
    ]
  },
  {
    id: 2,
    categoryName: '功能和bug',
    children: [
      { id: 0, name: '功能0 -- fullscreen', href: 'https://www.cnblogs.com/lgyong/p/10406197.html'}, 
      { id: 1, name: '功能1 -- 顶部导航栏和返回顶部效果', href: 'https://www.cnblogs.com/lgyong/p/10531979.html'}, 
      { id: 2, name: '功能2 -- hover出现遮照效果', href: 'https://www.cnblogs.com/lgyong/p/10558731.html'}, 
      { id: 3, name: '功能3 -- 基于jquery的load()实现多个.html静态页，引用同一个header.html和footer.html文件', href: 'https://www.cnblogs.com/lgyong/p/10562991.html'}, 
      { id: 4, name: '功能4 -- rem.js', href: 'https://www.cnblogs.com/lgyong/p/11949763.html'}, 
      { id: 5, name: '功能5 -- 圆圈动态加载', href: 'https://www.cnblogs.com/lgyong/p/12691200.html'}, 
      { id: 6, name: '功能6 -- 选项卡数据缓存', href: 'https://www.cnblogs.com/lgyong/p/13226070.html' },
      { id: 7, name: '功能7 -- 全球快递物流查询', href: './view/func/功能7--全球快递物流查询.md', done: true },
      { id: 8, name: '功能8 -- JS实现下拉刷新、上拉加载', href: './view/func/JS实现下拉刷新、上拉加载.md' },
      { id: 9, name: '功能9 -- 腾讯地图map', href: './view/func/map.md', done: true },
      { id: 10, name: '功能10 -- 手机和身份证脱敏', href: './view/func/desensitization.md', done: true },
      { id: 8, name: '_____', href: '' },
      { id: 8, name: 'Ele0 -- form', href: './view/func/ele-form.md'},
      { id: 8, name: 'Ele1 -- table', href: './view/func/ele-table.md', done: true,},
      { id: 8, name: 'Ele2 -- bug', href: './view/func/ele-bug.md', done: true,},
      
      { id: 8, name: '_____', href: '' },
      {id: 110, name: 'bug记录', href: 'https://www.cnblogs.com/lgyong/p/12931035.html'}, 
      {id: 111, name: 'bug1 -- inline-block间隙', href: 'https://www.cnblogs.com/lgyong/p/14149631.html'}, 
      {id: 112, name: 'bug2 -- 小程序ios 密码类型的input焦后再输入丢失内容', href: 'https://www.cnblogs.com/lgyong/p/14557230.html'},
    ]
  },
  { 
    id: 3,
    categoryName: '非逻辑',
    children: [
      {id: 5, name: 'face', href: 'https://www.cnblogs.com/lgyong/p/11604172.html'}, 
      {id: 7, name: 'face', href: './view/face/face.md'}, 
      {id: 0, name: '兼容 yu 比较', href: 'https://www.cnblogs.com/lgyong/p/8881870.html'}, 
      {id: 1, name: '软件 | 网站   (echarts、base64图片、图片压缩、face++、swiper、snipate截图、vue.js和axios.js......)', href: 'https://www.cnblogs.com/lgyong/p/9987256.html'}, 
      {id: 2, name: '杂 (Nuxt.js多页面的vue;  WEEX vue的原生;  Flutter是谷歌的移动UI框架; deno)', href: 'https://www.cnblogs.com/lgyong/p/9845792.html'}, 
      {id: 3, name: '插件 (echarts、swiper)', href: 'https://www.cnblogs.com/lgyong/p/10369544.html'}, 
      {id: 4, name: '优化', href: 'https://www.cnblogs.com/lgyong/p/10005537.html'}, 
      {id: 6, name: '前端', href: 'https://www.cnblogs.com/lgyong/p/8711502.html'}, 
      {id: 7, name: 'CSS2 -- 圣杯布局和双飞翼布局的作用和区别!', href: 'https://www.cnblogs.com/lgyong/p/9134752.html'}, 
    ]
  },
  {
    // id: 4,
    // categoryName: '全栈先忽略',
    // children: [
    //   {id: 9, name: 'python', href: 'https://www.cnblogs.com/lgyong/p/12107943.html'}, 
    //   {id: 8, name: 'cocos', href: 'https://www.cnblogs.com/lgyong/p/9634764.html'}, 
    //   {id: 0, name: '网络0 -- wamp3.0 tracert', href: 'https://www.cnblogs.com/lgyong/p/10365547.html'}, 
    //   {id: 1, name: '网络1 -- 端口、域名与ip', href: 'https://www.cnblogs.com/lgyong/p/10058749.html'}, 
    //   {id: 3, name: '网络3 -- 状态码', href: 'https://www.cnblogs.com/lgyong/p/10422662.html'}, 
    //   {id: 2, name: 'PS', href: 'https://www.cnblogs.com/lgyong/p/10381455.html'}, 
    //   {id: 4, name: '安全1 -- 洪水攻击', href: 'https://www.cnblogs.com/lgyong/p/10460162.html'}, 
    //   {id: 5, name: 'WebAssembly', href: 'https://www.cnblogs.com/lgyong/p/12126344.html'}, 
    //   {id: 6, name: 'wamp', href: 'https://www.cnblogs.com/lgyong/p/12149108.html'}, 
    //   {id: 7, name: 'php', href: 'https://www.cnblogs.com/lgyong/p/12158571.html'}, 
    //   {id: 8, name: 'svga', href: 'https://www.cnblogs.com/lgyong/p/12966492.html'}, 
    //   {id: 9, name: 'mySql笔记', href: 'https://www.cnblogs.com/lgyong/p/13187596.html'}, 
    // ]
  },
  {
    id: 5,
    categoryName: '脑图',
    children: [
      // {id: 0, name: '脑图', href: 'https://naotu.baidu.com/'}, 
      {id: 0, name: '脑图', href: 'https://naotu.baidu.com/file/b2c14b8301fe08e11db283b2b3788935'}, 
      {id: 1, name: '后台资料', href: './view/tools/backstageSystem.md'},
      {id: 2, name: 'px转rpx', href: './view/tools/pxChangeRpx.html'},
      {id: 3, name: 'English', href: './view/window/english.md'},
      {id: 4, name: 'Linux', href: './view/tools/linux.md'},
    ]
  }
];