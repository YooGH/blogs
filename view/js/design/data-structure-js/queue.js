// 队列

class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
  enqueue(element) {
    this.items[this.count] = element;
    this.count++
  }
  dequeue() {
    if(this.isEmpty()) { return undefined; };
    const result = this.items{this.lowestCount};
    delete this.items{this.lowestCount}
    this.lowestCount++;
    return result
  }
  peek() {
    if(this.isEmpty()) { return undefined; };
    return this.items{this.lowestCount}
  }
  isEmpty() {
    return this.count - this.lowestCount === 0;
  }
  size() {
    return this.count - this.lowestCount
  }
  clear() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
  toString() {
    if(this.isEmpty()) { return ''; };
    let objString = `${this.items{this.lowestCount}}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}





class Deque{
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
  addFront(element) {
    if (this.isEmpty()) { // 队列空
      this.addBack(element);
    } else if (this.lowestCount > 0) { // 队列被删除
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {  // 先把之前的移动后一位，在塞进第一位置
      for (let i = this.count; i > 0; i--) { // {3}
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.lowestCount = 0;
      this.items[0] = element; // {4}
    }
  } 
}