const gitList = [
  { id: 1, sort: 1, type: 'git', question: '列举工作中常用的几个git命令？', answer: 'git init（初始化本地仓库）\ngit clone\ngit add(加到git暂存区; git reset HEAD)\ngit pull\ngit commit（提交到本地分支）\ngit push\n\ngit merge\ngit diff\n\ngit chechout\ngit branch'},
  { id: 2, sort: 2, type: 'git', question: '回退：如果本次提交误操作，如何撤销？', answer: 'git reset HEAD(从缓冲区撤销下来)\ngit reset --soft HEAD^（从分支拉到缓冲区）'},
  { id: 3, sort: 3, type: 'git', question: '冲突: 常见产生冲突操作', answer: '1.两分支合并\n2.远程仓库代码拉取（pull）到本地', },
  { id: 4, sort: 4, type: 'git', question: '冲突: 你能解释冲突是如何产生的吗？', answer: '1.合并文件时，同一个文件的同一个位置都修改了，且内容不同，会产生冲突\n两个已经提交的分支的相同文件相同位置的的不同操作进行了合并.\nhttps://www.php.cn/tool/git/493212.html'},
  { id: 5, sort: 5, type: 'git', question: '冲突: 你是如何解决的？', answer: '1. git status 查看冲突文件\n2.vim src/main/java/a.txt (假设a.txt为冲突文件，这里需要为文件的全路径)，手动修改冲突部分\n3.git add src/main/java/a.txt 告诉Git冲突解决了\n4.git commit -m ‘解决冲突’ （解决冲突为注释，可自定义）'},
  { id: 6, sort: 6, type: 'git', question: '合并', answer: 'git checkout 两个分支名\ngit pull拉取更新\ngit merge 合过来的分支名'},
  { id: 7, sort: 7, type: 'git', question: '创建分支', answer: 'git checkout -b 分支名(创建并切换)\ngit branch 分支名(切换分支，没有就创建，但不切到当前分支)'},
  { id: 8, sort: 8, type: 'git', question: 'GitFlow工作流程分支有哪些', answer: 'product(master)\nrelease\ndevelop\nfeature\nhotfix'},
  { id: 9, sort: 9, type: 'git', question: 'GitFlow的好处', answer: '一种代码开发合并管理流程的思维模式或者是管理方法；\n1.适应场景多\n2.不影响开发进度\n3.分支使用相对有条理\n4.确保线上的版本稳定'},
]








