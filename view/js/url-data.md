
```
www.xiaoheikeji.net?open_id=12

function GetQueryString(name)
{
　　let reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
　　let r = window.location.search.substr(1).match(reg);
　　if(r!=null)return unescape(r[2]); return null;
}

GetQueryString('open_id')          // 12
```

[博客](https://www.cnblogs.com/lgyong/p/10384904.html)



