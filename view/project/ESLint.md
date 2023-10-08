1. <a href="#h1"> 安装 </a>
2. <a href="#h2"> 教程 </a>
3. <a href="#h3"> 某文件不进行校验 </a>
4. <a href="#h4"> 编译器插件 </a>
99. <a href="#h99"> 遇到的问题 </a>
********************








<br/><br/><br/>

<h1>ESLint</h1>

[ESLint中文文档](https://eslint.nodejs.cn/docs/latest/)

|工具|描述|主要特点|
|:--|:--|:--|
|JSLint|最早的JavaScript代码检查工具之一 |严格的规则，不可修改|
|JSHint|JSLint的派生项目，提供更多自定义选项 |可配置性高，适应不同的代码风格和项目需求|
|TSLint|为TypeScript代码设计的代码检查工具|专门针对TypeScript语法和规范的规则集|
|ESLint|可插拔、可配置的JavaScript和TypeScript代码检查工具|高度灵活，有丰富的规则和插件生态系统，与多个开发工具和构建工具集成|

|插件|描述|主要特点|
|:--|:--|:--|
|eslint:recommended|ESLint 的官方推荐配置，它包括了一组通用的代码规范规则，其中包括了关于分号的规则。默认情况下，eslint:recommended 配置启用了分号规则，要求在语句末尾使用分号。如果您不想使用分号，您需要在 ESLint 配置中禁用该规则|
|@vue/prettier|是与 Prettier 集成的 Vue.js 官方配置，它主要用于格式化代码以符合 Prettier 的规范。Prettier 通常会自动添加或删除分号，具体取决于您的项目配置和 Prettier 的设置。如果您使用 @vue/prettier 配置，并希望控制分号的使用，您需要调整 Prettier 的配置文件（通常是 .prettierrc）来满足您的需求|
|plugin:vue/strongly-recommended|是 Vue.js 官方 ESLint 插件中的一个配置，用于检查 Vue.js 项目中的代码规范。它可能包括与分号相关的规则，但具体是否包括分号规则取决于该配置的具体设置。您可以查看您的项目中的 ESLint 配置文件，以确定是否启用了与分号相关的规则，并可以相应地进行调整|



<br/><br/><br/>

<h2 id='h1'>1. 安装</h2>

|用途|命令|
|:--|:--|
|全局安装eslint|``npm install eslint -g``|
|项目初始化eslint配置|``npm init @eslint/config``,执行前需要有package.json,否则需要npm init|


<br/>

#### 项目eslint配置<br/>

方法一：目录下创建eslint文件， 以.eslintrc*形式

<small>接触ESLint的配置文件两种不同的格式比较，js(其他的后缀.eslintrc.yaml 或 .eslintrc.json)</small>

|.eslintrc.js|.eslintrc|
|:--|:--|
|module.exports = {<br/>  rules: {semi: ['error', 'always'], // 示例规则: 总是要求使用分号<br/>  'no-console': 'warn', // 示例规则: 警告不允许使用console语句<br/>}, <br/>// ...其他配置选项<br/>};|{<br/>"rules": {<br/>"semi": ["error", "always"], // 示例规则: 总是要求使用分号<br/>"no-console": "warn" // 示例规则: 警告不允许使用console语句<br/>},<br/>// ...其他配置选项<br/>}|

<br/>
方法二: package.json 配置属性 eslintConfig



<br/><br/><br/>

<h2 id='h2'>2. 属性</h2>


|属性键|描述|补充|
|:--|:--|:--|
|root|||
|env|||
|extends|插件|"eslint:recommended" ([eslint推荐](https://eslint.nodejs.cn/docs/latest/rules)的都会开启)|
|parserOptions||
|ignorePatterns|忽略文件，数组形式;也可以独立出个文件|['./page.json']|
|globals|全局允许的变量|``{ wx: true }``|
|rules|这里的规则优先于extends，会覆盖extends|第一个值是错误级别（off/0;warn/1;error/2）<br/>v7支持三个参数，v8支持2个超出会报错[来源](https://eslint.nodejs.cn/docs/latest/use/migrate-to-8.0.0)|

<br/>
(3)、可配置的值（rules）

|属性|值|描述|
|:--|:--|:--|
|semi|off/warn/error; always/never|语句分号|
|comma-dangle|off/never/always/always-multiline|语句逗号|

<br/><br/><br/>

<h2 id='h3'>3. 某文件不进行校验</h2>

- 忽略特定文件
<br/><small>你可以将 eslint-disable 标记添加到冲突的文件中，以忽略 ESLint 对该文件的检查。在文件的适当位置添加以下注释：</small>
```
/* eslint-disable */
// 你的代码
```
- 配置忽略规则
<br/><small>你可以在 ESLint 配置文件中使用 ignorePatterns 来指定忽略某些文件或目录的规则。例如，在 .eslintrc.js（或 .eslintrc.json）文件中添加以下规则：</small>
```
module.exports = {
  // 其他配置规则
  ignorePatterns: ['page.json']
};
```


<br/><br/><br/>

<h2 id='h4'>4. 编译器插件</h2>

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

<br/><br/><br/>

<h2 id='h99'>99. 遇到的问题</h2>

(1).eslintrc.js和package.json都配置了规则，哪个权级更高

.eslintrc.*权级高于package.json,会覆盖package.json; <br/>有多个项目可以把package.json当作基础配置，.eslintrc.*做个性化配置


<br/>

(2)vue-cli-service lint的lint是什么规则
ESLint
