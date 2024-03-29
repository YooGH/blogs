const jsList = [
  { id: 1, sort: 1, type: 'js', question: '数据类型', answer: '值类型(基本类型)：字符串（String）、数字(Number)、布尔(Boolean)、对空（Null）、未定义（Undefined）、Symbol（独一无二的值）\n引用数据类型：对象(Object)、数组(Array)、函数(Function)'},
  { id: 2, sort: 2, type: 'js', question: '判断 JS 类型的方式', answer: 'typeof\ninstanceof\nObject.prototype.toString.call()--[Object Array]\nconstructor'},
  { id: 3, sort: 3, type: 'js', question: 'switch比if快', answer: '采用branch table索引优化\n使用全等操作符，不会类型转换损耗', details: '[JavaScript的ifelse和switch对比](https://wenku.baidu.com/view/7dfd5b7374232f60ddccda38376baf1ffc4fe3e6.html)'},
  { id: 4, sort: 4, type: 'js', question: '循环有多少种', answer: ''},
  { id: 5, sort: 5, type: 'js', question: '描述一下cookies，sessionStorage和localStorage的区别？', answer: ''},
  { id: 6, sort: 6, type: 'js', question: 'JS 中的主要有哪几类错误', answer: '加载时错误：加载web页面时出现的错误(如语法错误)称为加载时错误，它会动态生成错误\n运行时错误：由于滥用html语言中的命令而导致的错误\n逻辑错误：这些错误是由于对具有不同操作的函数执行了错误的逻辑而导致的'},
  { id: 7, sort: 7, type: 'js', question: '栈和堆的区别？', answer: '栈（stack）：由编译器自动分配释放，存放函数的参数值，局部变量等\n堆（heap）：一般由程序员分配释放，若程序员不释放，程序结束时可能由操作系统释放'},
  { id: 8, sort: 8, type: 'js', question: 'call和apply', answer: '两个都是硬绑定，apply参数是数组，所以多参数传apply,少传call', details: 'let arr = [10, 22, 39, 18]\nMath.max.call(null, arr[0]) // NaN  call不传是就是null环境\nMath.max.apply(null, arr) // 39  apply不传是就是window\n\n1 call的语法：函数名.call(obj,参数1,参数2,参数3……); \n2 apply的语法：函数名.apply(obj,[参数1,参数2,参数3……]); '},
  { id: 9, sort: 9, type: 'js', question: '数组', answer: 'push/unshift\npop/shift\n\nsplice\nslice\nconcat\nsplit\n\nfind()\nfill()\nflat()\nincludes'},
  { id: 10, sort: 10, type: 'js', question: 'ES6', answer: 'new Promise\nlet/const\n模板字面量：后台删除某项\n箭头函数(this永远来自其上下文,普通函数是运行的上下文收隐式和硬绑定影响)\n解构：用于接口返回、表单接受、函数参数\n扩展运算符（扩展方法）\nincludes/for...of/filter/new Set/map/find/\n'},
  { id: 11, sort: 11, type: 'js', question: '闭包', answer: '有权访问另一个函数变量的函数', details: 'vue里面的data）；外部需要访问内部函数的变量\n柯里化(15)'},
  { id: 12, sort: 12, type: 'js', question: '防抖节流', answer: '防抖：任务频繁触发的情况下,只有任务触发的间隔超过指定间隔的时候,任务才会执行（登陆，模糊查询，页面跳转）-- setTiomeout\n节流：当某个操作是连续性执行的时候，我们通过某种方式，降低该操作的执行频率(吸顶(配合transform和transition)，顶部导航栏吸顶) -- setInterval'},
  { id: 13, sort: 13, type: 'js', question: '页面到服务器输入流程', answer: '1.DNS域名解析；\n2.建立TCP连接； \n3.http请求；\n4.服务器处理相关的请求；\n5.返回响应的结果；\n6.关闭TCP连接；\n7.浏览器解析HTML；\n8.浏览器渲染'},
  { id: 14, sort: 14, type: 'js', question: '深浅拷贝方法（深拷贝数据类型是不是一样', answer: '浅拷贝：JSON、Object.assign、concat、slice', details: '深拷贝：\nJSON.parse(JSON.stringify())\n遍历'},
  { id: 15, sort: 15, type: 'js', question: '继承的方法有多少种', answer: 'class\nprototype'},
  { id: 16, sort: 16, type: 'js', question: '原型链', answer: 'https://www.cnblogs.com/manhuai/p/14281967.html'},
  { id: 17, sort: 17, type: 'js', question: 'AMD和CMD的区别', answer: 'https://blog.csdn.net/qq_38912819/article/details/80597101?ivk_sa=1024320u'},
  { id: 18, sort: 18, type: 'js', question: '什么是柯里化？', answer: '接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数(省市区)'},
  { id: 19, sort: 19, type: 'js', question: 'JS怎么实现一个类，怎么实例化这个类', answer: 'Class\n构造函数'},
  { id: 20, sort: 20, type: 'js', question: 'JS为什么要区分微任务和宏任务', answer: '微任务的出现，使得宏任务执行完，到浏览器渲染之前，可以在这个阶段插入任务的能力\nJS把异步分为宏任务和微任务，微任务的优先级要比宏任务的优先级高，同步任务js主线程，异步委托给宿主，主线程执行完会调任务队列', details: '宏任务（macrotask）又称为 task，宏任务是由宿主发起的\n如：异步Ajax请求、setTimeOut、setInterval、文件操作等\n\n微任务（microtask）又称为 jobs，微任务是由 JS 本身发起\n如：Promise.then、Promise.catch、process.nextTick等(Promise是同步，then和catch是异步)'},
  { id: 21, sort: 21, type: 'js', question: 'JS延迟加载的方式有哪些？', answer: ''},
  { id: 22, sort: 22, type: 'js', question: '你如何组织，优化自己的代码？(5分题)', answer: '首先分享有没有可用的组件，有的话就直接引用，减少开发时长和空间也能加快资源加载\n对图片进行压缩，'},
  { id: 23, sort: 23, type: 'js', question: 'prototype', answer: ''},
  { id: 24, sort: 24, type: 'js', question: 'JS为什么万物都是对象', answer: 'null和undefined就不是对象', details: '基本类型可以new出来或constructor，数组是对象继承的；但null和undefined就不是对象'},
  { id: 25, sort: 25, type: 'js', question: '', answer: ''},
  { id: 26, sort: 26, type: 'js', question: '', answer: ''},
  { id: 27, sort: 27, type: 'js', question: '', answer: ''},
  { id: 28, sort: 28, type: 'js', question: '', answer: ''},
  { id: 29, sort: 29, type: 'js', question: '', answer: ''},
  { id: 30, sort: 30, type: 'js', question: '', answer: ''},
]