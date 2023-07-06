### break

```
a()
function a () {
  console.log('%c ', 'background:#ff0;width:100px;')
  let [father,son] = [7,4];
  one:for(let i=0; i<father; i++){
    console.log('i ', i)
    if(i == 4) {
      two:for(let j=0; j<son; j++){
        console.log('j ',j)
        break one;
      }
    }
  }
  console.log('接着执行')
  console.log('%c ', 'background:#ff0;width:100px;') 
}
```

i 0
i 1
i 2
i 3
i 4
j 0
接着执行

<br/><br/><br/>


### return

```
a()
function a () {
  console.log('%c ', 'background:#ff0;width:100px;')
  let [father,son] = [7,4];
  for(let i=0; i<father; i++){
    console.log('i', i)
    if(i == 4) {
      for(let j=0; j<son; j++){
        console.log('j ',j);
        return;
      }
    }
  }
  console.log('接着执行')
  console.log('%c ', 'background:#ff0;width:100px;')
}
```

i 0
i 1
i 2
i 3
i 4
j 0
(不能打印“接着执行”，也就不能接着执行后面的事件流)

<br/><br/><br/>

[博客](https://www.cnblogs.com/lgyong/p/12493894.html)