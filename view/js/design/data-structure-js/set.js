class Set {
  constructor() {
    this.items = {};
  }
  has(element) {
    //方法一,会得到非当前的属性 return element in this.tiems
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }
  add(element) {
    if(!this.has(element)) {
      this.items[element] = element;
      return true;
    }
    return false;
  }
  delete(element) {
    if(!this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }
  clear() {
    this.items = {};
  }
  size() {
    return Object.keys(this.items).length;
  }
  sizeLegacy() {
   let count = 0;
   for(let key in this.items) {
     if(this.items.hasOwnProperty(key)) {
       count++;
     }
   }
   return count;
  }
  values() {
    return Object.values(this.items)
  }
  valuesLegacy() {
    let values = [];
    for(let key in this.items) {
      if(this.items.hasOwnProperty(key)) {
       values.push(key)
     }
    }
    return values
  }
}










// 扩展

class Set {
  ...
  union(otherSet) { // 并集，创建新的Set见新旧集合推进去(concat)
    const unionSet = new Set();
    this.values.forEach(value => unionSet.add(valuse));
    otherSet.values.forEach(value => unionSet.add(valuse));
    return unionSet;
  }
  intersection(otherSet) { // 交集，可以优化成判断哪个长度小的遍历哪个(127|144)
    const intersectionSet = new Set();
    const values = this.values();
    otherSet.values.forEach(value => {
      if(this.has(value)) {
        intersectionSet.add(value)
      }
    })
    return intersectionSet
  }
  difference(otherSet) { // 差集，不和本集合一样的值
    const differenceSet = new Set();
    this.values().forEach(value => {
      if (!otherSet.has(value)) {
        differenceSet.add(value);
      }
    });
    return differenceSet;
  }
  isSubsetOf(otherSet) {  // 子集
    if (this.size() > otherSet.size()) { // 大于本集合就不是子集合
      return false;
    }
    let isSubset = true;
    this.values().every(value => {
      if (!otherSet.has(value)) {
        isSubset = false;
        return false;
      }
      return true;
    });
    return isSubset;
  } 
}