 1. <a href="#h1"> 安装 </a>
 2. <a href="#h2"> vite.config文件  </a>
 3. <a href="#h3">  </a>
 4. <a href="#ck"> 参考 </a>

  

  ###  <h1 id="h1"> 1.安装 </h1>

  > vite需要node版本12及 以上(node -v)

  ```
  npm init vite@latest  / yarn create vite(安装vite包)
  yarn(安装依赖)
  yarn dev(跑起来)
  ```

  ###  <h1 id="h2"> 2.vite.config文件 </h1>

  1. 共享的一堆属性
  2. server：开发服务器选项
  3. build：构建或部署的选项
  4. optimizeDeps：

  公共

  > ```
  > // root: './',
  > // base
  > // mode
  > // define
  > plugins: [vue()],
  > // publicDir
  > // cacheDir
  > // resolve: {}
  > // css: {}
  > // json: {}
  > // esbuild
  > // assetslnclude
  > logLevel: 'info', // 调整控制台输出的级别(string: 'info',('warn' | 'error' | 'silent'))
  > // clearScreen: true,
  > // envDir
  > ```

  server

  > ```
  > server: {
  >  host: '127.0.2.1', // 域名或ip地址(string:127.0.0.1)
  >  port: 8089, // 端口（number: 自动找没被使用的）
  >  strictPort: false, // 端口被使用是否自动找其他的（boolean:false, true则强制设置的端口）
  >  // https: 
  >  open: true, // 是否启动自动打开浏览器(boolean | string: false； (true:打开默认浏览器，字符串：打开到指定路由))
  >  // proxy  // 代理跨域（https://cn.vitejs.dev/config/#server-proxy）
  >  // cors // 代理跨域
  >  // force  // 依赖预构建
  >  // hmr
  >  // watch
  >  // middlewareMode // 中间件模式创建vite服务（'ssr' | 'html'）
  >  fs: { // 文件读写的控制
  >    strict: true, // 限制为工作区 root 路径以外的文件的访问(boolean:false,后续版本true)
  >    // allow
  >  }
  > },
  > ```

  build

  > ```
  > build: {
  >  // target
  >  outDir: 'bbbb', // 指定输出路径（相对于项目根目录)（string: 'dist'）
  >  assetsDir: 'assets', // 指定生成静态资源的存放路径（相对于 build.outDir）(string: 'assets')
  >  // assetsInlineLimit
  >  cssCodeSplit: false, // CSS是否提取到一个文件(boolean:true, (true一个文件，false拆分))
  >  // sourcemap
  >  // rollupOptions
  >  // commonjsOptions
  >  // dynamicImportVarsOptions
  >  // lib
  >  // manifeat
  >  // minify
  >  // terserOptions
  >  // cleanCssOptions
  >  write: true, // 是否构建后写入磁盘，生产文件（boolean: true,(true写入，false不写入，等于没打包)）
  >  // emptyOutDir
  >  // brotliSize
  >  // chunkSizeWarningLimit
  >  // watch
  > },
  > ```

  optimizeDeps

  > ```
  > optimizeDeps: {
  > 	// entries
  >  // exclude
  >  // include
  >  // keepNames
  > },
  > ssr: { // 服务器渲染
  > //   external
  > //   noExternal
  > //   target
  > },
  > ```

  

  ###  <h1 id="ck"> 参考 </h1>

  [vite官方中文文档](https://cn.vitejs.dev/guide/)

  [vite.config](https://cn.vitejs.dev/config/)

  > noeWeb/viteDemo
