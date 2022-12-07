// 链表

export function defaultEquals(a, b) {
  return a === b;
}
class Node {
  constructor(element) {
    this.element = element;
    this.next = undefined;
  }
} 
export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0; // 数组长度
    this.head = undefined; // 数组头结点(element和next)
    this.equalsFn = equalsFn; // 两元素是否相同
  }
  push(element) {
    const node = new Node(element); // 
    let current; // {2}
    if (this.head == null) { // 空数组
      this.head = node;
    } else {
      current = this.head; //
      while (current.next != null) { //  获得最后一项
        current = current.next;
      }
      // 将其 next 赋为新元素，建立链接
      current.next = node; // {6}
    }
    this.count++; // {7}
  }
  removeAt(index) {
   // 检查越界值
    if (index >= 0 && index < this.count) { // 
      let current = this.head; // 头结点
      // 移除第一项
      if (index === 0) { // 移除头指针只要把第二个结点放头部
        this.head = current.next;
      } else {
        let previous; // {4}
        for (let i = 0; i < index; i++) { // {5}
        previous = current; // {6}
        current = current.next; // {7}
      }
      // 将 previous 与 current 的下一项链接起来：跳过 current，从而移除它
      previous.next = current.next; // {8}
    }
    this.count--; // {9}
    return current.element;
    }
    return undefined; // {10}
  }
  getElementAt(index) {
    if (index >= 0 && index <= this.count) { // {1}
      let node = this.head; // {2}
      for (let i = 0; i < index && node != null; i++) { // {3}
        node = node.next;
      }
      return node; // {4}
    }
    return undefined; // {5}
  }
  removeAt(index) {  // 重构
   // 检查越界值
    if (index >= 0 && index < this.count) { // 
      let current = this.head; // 头结点
      // 移除第一项
      if (index === 0) { // 移除头指针只要把第二个结点放头部
        this.head = current.next;
      } else {
        let previous;
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next; 
      }
    }
    this.count--; // {9}
    return current.element;
    }
    return undefined; // {10}
  }
  indexOf(element) {
    let current = this.head;
    for (let i=0; i < this.count && current != null; i++) {
      if(this.equalsFn(element, current.element)){ // 判断传入元素与当前元素是否一致
        return i
      }
      current = current.next // 循环指向下一个
    }
    return -1
  }
  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }
  isEmpty() {
    return this.size() === 0;
  }
  size() {
    return this.count;
  }
  getHead() {
    return this.head;
  }
  toString() {
    if(this.head == null) {
      return '';
    }
    let objString = `${this.head.element}`;
    let current = this.head.next;
    for(let i=1; i<this.size() && current !=null; i++) {
      objString += current.element;
      current = current.next; // 指针 
    }
    return objString;
  }
}






// 双向链表


class DoublyNode extends Node {
  constructor(element, next, prev) {
    super(element, next);
    this.prev = prev
  }
}

class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
    this.tail = undefined // 最后元素引用
  }
  insert(element, index) {
    if(index >= 0 && index <= this.count) {
      const node new DoublyNode(element);
      let current = this.head;
      // 头插入
      if(index === 0) {
        if(this.head == null) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = this.head;
          current.prev = node;
          this.head = node
        }
      // 尾插入
      } else if (index === this.count) {
        current = this.tail;
        current.next = node
        node.prev = current;
        this.tail = node
      } else {
        const previous = this.getElementAt(index - 1); // 获取插入元素前一个
        current = previous.next;
        node.next = current;
        previous.next = noex;
        current.prev = node;
        node.prev = previous;
      }
      this.count++
      return true
    }
    return false;
  }
  removeAt(index) {
    if(index >= 0 && index <= this.count) {
      let current = this.head;
      if(index === 0) {
        this.head = current.next;
        if(this.count === 1) {
          this.tail = undefined
        } else {
          this.haed.prev = undefined;
        }
      } else if(index === this.count - 1) {
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = undefined;
      } else {
        current = this.getElementAt(index);
        const previous = current.prev;
        previous.next = current.next;

        previous.next = current.next;
        current.next.prev = previous
      }
      this.count--;
      return current.element;
    }
    return undefined; // 与insert返回false有区别
  }
}