1. <a href="#h1"> 安装 </a>
2. <a href="#h2"> 教程 </a>
3. <a href="#h3"> 编译器插件 </a>
********************










<h1>ESLint</h1>

[ESLint中文文档](https://eslint.nodejs.cn/docs/latest/)






<br/><br/><br/>

<h2 id='h1'>1. 安装</h2>
``npm install eslint -g``






<br/><br/><br/>

<h2 id='h2'>2. 教程</h2>

|工具|描述|主要特点|
|:--|:--|:--|
|JSLint|最早的JavaScript代码检查工具之一 |严格的规则，不可修改|
|JSHint|JSLint的派生项目，提供更多自定义选项 |可配置性高，适应不同的代码风格和项目需求|
|TSLint|为TypeScript代码设计的代码检查工具|专门针对TypeScript语法和规范的规则集|
|ESLint|可插拔、可配置的JavaScript和TypeScript代码检查工具|高度灵活，有丰富的规则和插件生态系统，与多个开发工具和构建工具集成|



- ESLint的配置文件可以使用两种不同的格式

|.eslintrc.js|.eslintrc|
|:--|:--|
|module.exports = {<br/>  rules: {semi: ['error', 'always'], // 示例规则: 总是要求使用分号<br/>  'no-console': 'warn', // 示例规则: 警告不允许使用console语句<br/>}, <br/>// ...其他配置选项<br/>};|{<br/>"rules": {<br/>"semi": ["error", "always"], // 示例规则: 总是要求使用分号<br/>"no-console": "warn" // 示例规则: 警告不允许使用console语句<br/>},<br/>// ...其他配置选项<br/>}|




<br/><br/><br/>

<h2 id='h3'>3. 编译器插件</h2>

- [vscode配置](https://zhuanlan.zhihu.com/p/104032620?from_voters_page=true)

文件 -- 首选项 -- 设置 -- settings.json（用户 -- 文本编辑器 -- 字体 -- Font Weight入口）

     ```
     "eslint.codeActionsOnSave.rules": [],
     "eslint.autoFixOnSave": true,
     "editor.codeActionsOnSave": {
     	"source.fixAll.eslint": true
     }
     ```

- hbuildX  安装插件 'eslint-plugin-vue'



说明：
1. 在设置中分为用户和工作区，区别在于在用户中的配置的对改用户的所有项目都有效，工作区的是针对指定项目。

2. 会和veter/Prettier等冲突




<br/><br/><br/>


### 3. vue2的webpack忽略文件
.eslintignore





[ESLint创建规则配置](https://blog.csdn.net/shenxianhui1995/article/details/81213555)



代码修复命令``npm run lint --fix``
