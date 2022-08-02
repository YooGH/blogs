##### 工厂模式（Factory Pattern）
>创建对象的接口，通过标识指向要实例化哪个工厂类


```
//篮球基类
var Basketball = function() {
    this.intro = '篮球盛行于美国';
}
Basketball.prototype = {
    getMember: function() {
        console.log('每个队伍需要五个队员');
    },
    getBallSize: function() {
        console.log('篮球很大');
    }
}
//足球基类
var Football = function() {
    this.intro = '足球在世界范围内都很流行';
}
Football.prototype = {
    getMember: function() {
        console.log('每个队伍需要11名队员');
    },
    getBallSize: function() {
        console.log('足球很大');
    }
}
//运动工厂
var SportsFactory = function(name) {
    switch (name) {
        case 'NBA':
            return new Basketball();
        case 'worldCup':
            return new Football();
    }
}
```
  

[参考](https://www.cnblogs.com/niehang/p/10565765.html)