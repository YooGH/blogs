1. **双重for**

  ```
    function dr( arr ){　　　　　　　　　　　　// Duplicate removal
    　　let aNews = arr;
    　　for(let i = 0; i < arr.length; i++){
    　　　　for(let j = i+1; j < arr.length; j++){
    　　　　　　if( arr[i] == arr[j] && i!=j){　　
    　　　　　　　　arr.splice(j,1)
                 j--
    　　　　　　}
    　　　　}
    　　}
    　　return aNews;
    }
  ```

<br/><br/>

2. **set**数组对象，array.from数组对象转数组
  > new Set()能保证值的唯一性，Array.from是将类数组的new Set()转为数组类型

  ```
    function dr (arr) {
      return Array.from(new Set(arr))    //  
      return [...new Set(arr)]           //  简化版
    }
  ```

<br/><br/>

3. **indexof**/**includes**

  ```
    function dr(arr) {
      let newArr = [];
      for(let item of arr) {
        if(newArr.indexOf(item) == -1) {
          newArr.push(item)  
        }
      }
      return newArr;    
    }
  ```


  ```
    function dr(arr) {
      let newArr = [];
      for(let item of arr) {
        if(newArr.includes(item)) {
          newArr.push(item)  
        }
      }
      return newArr;    
    }
  ```

 


<br/><br/>

[参考](https://segmentfault.com/a/1190000016418021?utm_source=tag-newest)