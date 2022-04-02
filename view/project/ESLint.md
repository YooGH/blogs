### 1. 项目安装eslint

``npm install eslint -g``

### 2. 各编译器的配置

- [vscode配置](https://zhuanlan.zhihu.com/p/104032620?from_voters_page=true)

​    文件 -- 首选项 -- 设置 -- settings.json（用户 -- 文本编辑器 -- 字体 -- Font Weight入口）

     ```
     "eslint.codeActionsOnSave.rules": [],
     "eslint.autoFixOnSave": true,
     "editor.codeActionsOnSave": {
     	"source.fixAll.eslint": true
     }
     ```

- hbuildX  安装插件 'eslint-plugin-vue'





[ESLint创建规则配置](https://blog.csdn.net/shenxianhui1995/article/details/81213555)

[ESLint规则](https://eslint.bootcss.com/docs/rules/)

代码修复命令``npm run lint --fix``
