<h6>
    
- document
>forms、images、links
- location
>href、reload()
- history
>go(-1)　　==　　back()<br/>go(1)　　==　　forward()

<br/><br/>

- navigator
- screen
  <a href="#demo1">例子1</a>
- frames
- [open()](https://developer.mozilla.org/en-US/docs/Web/API/Window/open)
> url、``target(_self, _blank, _parent, and _top)``、windowFeatures、popup

<br/><br/>

- alert
- confirm
- prompt

<br/><br/>

- setInterval
- clearInterval
- setTimeout
- clearTimeout（用于setTimeout还没执行前调用）

<br/><br/>

- encodeURIComponent 编码
- decodeURIComponent 解码

- e.preventDefault(); 阻止默认行为<a href="#demo2">例子2</a>


<h3>鼠标事件</h3>

```
1.鼠标事件以及clientX、offsetX、screenX、pageX、x的区别
https://blog.csdn.net/weixin_41342585/article/details/80659736

2.touch事件中的touches、targetTouches和changedTouches详解
https://blog.csdn.net/ranran125/article/details/79747290
```


<br/><br/><br/>



<h5 id="demo1">例子1、</h5>

```
浏览器宽高
screen.availWidth,screen.availHeight

（
除window的任务栏: 
底部任务栏: width > availWidth, height=availHeight
左边任务栏: height>availHeigh, width=availWidth
）

电脑宽高
screen.width,screen.height




其他说明：
screen：屏幕。这一类取到的是关于屏幕的宽度和距离，与浏览器无关，应该是获取window对象的属性。
client：使用区、客户区。指的是客户区，当然是指浏览器区域。
offset：偏移。指的是目标甲相对目标乙的距离。
scroll：卷轴、卷动。指的是包含滚动条的的属性。
inner：内部。指的是内部部分，不含滚动条。
avail：可用的。可用区域，不含滚动条，易与inner混淆。
window.innerWidth/innerHeight：浏览器可见区域的内宽度、高度（不含浏览器的边框，但包含滚动条）。兼容：ie9/10、chrome、firefox。
window.screen.availWidth/availHeight:屏幕的可用宽度、高度（通常与屏幕的宽度、高度一致）。兼容性：ie6/7/8/9/10、chrome、firefox。
```

<br/><br/>

<h5 id="demo2">例子2、取消默认的浏览器自带右键 </h5>

```
window.oncontextmenu=function(e){
　　e.preventDefault();
})
```

<br/><br/>

<h5 id="demo3">例子3、获取操作系统名</h5>

```
function getOS() {
    // 苹果系统
    let isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel");
    if (isMac) return "Mac";
    // unix系统
    let isUnix = (navigator.platform == "X11") && !isWin && !isMac;
    if (isUnix) return "Unix";
    // Linux系统
    let isLinux = (String(navigator.platform).indexOf("Linux") > -1);
    if (isLinux) return "Linux";
    // window系统
    let sUserAgent = navigator.userAgent;
    let isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
    if (isWin) {
        let isWin2K = sUserAgent.indexOf("Windows NT 5.0") > -1 || sUserAgent.indexOf("Windows 2000") > -1;
        if (isWin2K) return "Win2000";//win200
        let isWinXP = sUserAgent.indexOf("Windows NT 5.1") > -1 || sUserAgent.indexOf("Windows XP") > -1;
        if (isWinXP) return "WinXP";//winxp
        let isWin2003 = sUserAgent.indexOf("Windows NT 5.2") > -1 || sUserAgent.indexOf("Windows 2003") > -1;
        if (isWin2003) return "Win2003";//win2003
        let isWinVista= sUserAgent.indexOf("Windows NT 6.0") > -1 || sUserAgent.indexOf("Windows Vista") > -1;
        if (isWinVista) return "WinVista";//winVista
        let isWin7 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -1;
        if (isWin7) return "Win7";//win7
        let isWin10 = sUserAgent.indexOf("Windows NT 10") > -1 || sUserAgent.indexOf("Windows 10") > -1;
        if (isWin10) return "Win10";//win10
    }
    return "other";
}
console.log('navigator.platform： ' + navigator.platform);
console.log('navigator.userAgent： ' + navigator.userAgent);
console.log("您的操作系统是：" + getOS());
```

<br/><br/>

<h5 id="demo4">例子4、获取浏览器名</h5>

```
function getBrower () {
  let browser = {};
  let userAgent = navigator.userAgent.toLowerCase();
  let s;
  (s = userAgent.match(/msie ([\d.]+)/)) ? browser.ie = s[1] : (s = userAgent.match(/firefox\/([\d.]+)/)) ? browser.firefox = s[1] : (s = userAgent.match(/chrome\/([\d.]+)/)) ? browser.chrome = s[1] : (s = userAgent.match(/opera.([\d.]+)/)) ? browser.opera = s[1] : (s = userAgent.match(/version\/([\d.]+).*safari/)) ? browser.safari = s[1] : 0;
  let version = "";
  if (browser.ie) {
    version = 'IE ' + browser.ie;
  }
  else {
    if (browser.firefox) {
      version = 'firefox ' + browser.firefox;
    }
    else {
      if (browser.chrome) {
        version = 'chrome ' + browser.chrome;
      }
      else {
        if (browser.opera) {
          version = 'opera ' + browser.opera;
        }
        else {
          if (browser.safari) {
            version = 'safari ' + browser.safari;
          }
          else {
            version = '未知浏览器';
          }
        }
      }
    }
  }
  return version;
}
console.log(getBrower());
```

<h5 id="demo5">例子5、获取ip地址</h5>

```
<script src="http://pv.sohu.com/cityjson?ie=utf-8"></script>
<script>
  console.log(returnCitySN["cip"]+','+returnCitySN["cname"])
</script>
```




<br/><br/><br/>
[博客](https://www.cnblogs.com/lgyong/p/8998944.html)


</h6>