##### 单例(Singleton)模式

> 保证一个类只有一个实例,并提供一个访问它的全局访问点; <br/>可以利用闭包和判断对象是否创建实现

- 方法1: 利用闭包

  ```
  var Singleton = function(name) {
  	this.name = name;
  }
  
  Singleton.getInstance = (function () {
    var instance = null;
    return function (name) {
      if (!instance) {
        instance = new Singleton(name);
      }
      return instance;
    }
  })()
  
  var single1 = Singleton.getInstance('张三');
  var single2 = Singleton.getInstance('李四');
  
  console.log(single1 === single2); // 输出true
  ```



- 方法2: 利用闭包和new

  ```
  var Singleton = function(name) {
    this.name = name;
  }
  
  var ProxySingleton = (function () {
    var instance = null;
    return function(name) {
      if (!instance) {
        instance = new Singleton(name);
      }
      return instance;
    }
  })()
  
  var single1 = new ProxySingleton('张三');
  var single2 = new ProxySingleton('李四');
  
  console.log(single1 === single2); // 输出true
  ```

  

[参考](https://www.cnblogs.com/niehang/p/10565765.html)