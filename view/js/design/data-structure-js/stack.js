// 栈

class Stack {
  constructor() {
    this._count = 0;
    this._items = [];
  }
  push(element) {
    this._items[this._count] = element;
    this._count++
  }
  pop() {
    if(this.isEmpty()) { return undefined; };
    this._count--
    const result = this._items[this._count];
    delete this._items[this._count]
    return result
  }
  peek() {  // 栈顶元素、
    if(this.isEmpty()) { return undefined; };
    console.log(this._items)
    console.log(this._count)
    return this._items[this._count - 1]
  }
  isEmpty() {
    return this._count === 0
  }
  size() {
    return this._count
  }
  clear() {
    this._count = 0;
    this._items = [];
  }
  toString() {
    if(this.isEmpty()) { return '' }
    let objString = '';
    for(let i=0; i<this._count; i++) {
      objString += `${this._items[i]}`
    }
    return objString
  }
}