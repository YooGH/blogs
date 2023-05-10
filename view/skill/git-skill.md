1.<a href="h1">  开发工具(5)  </a>
2.<a href="h2">  回退：如果本次提交误操作，如何撤销？  </a>
3.<a href="h3">  冲突: 提交时发生冲突，你能解释冲突是如何产生的吗？你是如何解决的？  </a>
4.<a href="h4">  合并  </a>
5.<a href="h5">  创建分支  </a>
6.<a href="h6">  GitFlow工作流程分支有哪些  </a>
7.<a href="h7">  GitFlow的好处  </a>
********************









<br/><br/><br/>

### <h1 id="h1"> 1. 开发工具(5) </h1>
1）列举工作中常用的几个git命令？
git init（初始化本地仓库）
git clone（git clone -b 分支名称 git地址）
git add(加到git暂存区; git reset HEAD)
git pull
git commit（提交到本地分支）
git push

git merge
git diff

git chechout
git branch





<br/><br/><br/>

### <h1 id="h2"> 2. 回退：如果本次提交误操作，如何撤销？ </h1>
git reset HEAD(从缓冲区撤销下来)
git reset --soft HEAD^（从分支拉到缓冲区）





<br/><br/><br/>

### <h1 id="h3"> 3. 冲突: 提交时发生冲突，你能解释冲突是如何产生的吗？你是如何解决的？ </h1>
一、常见产生冲突操作：

两分支合并

远程仓库代码拉取（pull）到本地

二。冲突产生原因：

合并文件时，同一个文件的同一个位置都修改了，且内容不同，会产生冲突

三。解决步骤：

1. git status 查看冲突文件

2.vim src/main/java/a.txt (假设a.txt为冲突文件，这里需要为文件的全路径)，手动修改冲突部分

3.git add src/main/java/a.txt 告诉Git冲突解决了

4.git commit -m ‘解决冲突’ （解决冲突为注释，可自定义）

两个已经提交的分支的相同文件相同位置的的不同操作进行了合并.
https://www.php.cn/tool/git/493212.html





<br/><br/><br/>

### <h1 id="h4"> 4. 合并 </h1>
git checkout 分支名
git pull
git merge 合过来的分支名





<br/><br/><br/>

### <h1 id="h5"> 5. 创建分支 </h1>
git checkout -b 分支名(创建并切换)
git branch 分支名(切换分支，没有就创建，但不切到当前分支)





<br/><br/><br/>

### <h1 id="h6"> 6. GitFlow工作流程分支有哪些 </h1>
product(master),
release
develop,
feature,
hotfix,





<br/><br/><br/>

### <h1 id="h7"> 7. GitFlow的好处 </h1>
一种代码开发合并管理流程的思维模式或者是管理方法；
1.适应场景多
2.不影响开发进度
3.分支使用相对有条理
4.确保线上的版本稳定





掌握代码和包管理工具（git、npm），了解git基本命令，能够进行代码拉取，提交等操作。*
掌握前端IDE开发工具，（如VSCode、WebStorm、小程序开发工具等），能够熟练应用开发工具快捷键和功能插件。*
熟练掌握git、npm常用命令常用命令，能够集中式权限分配，代码冲突处理，代码质量与安全管理。*
熟悉运用工具格式化代码，配置代码格式规则，根据不同框架制定开发规范，并且有较强的开发文档编辑能力。（esLint）
精通git版本管理，能够处理代码冲突、合并、回退等功能。*