function defaultToString(item) {
  if (item === null) {
    return 'NULL';
  } else if (item === undefined) {
    return 'UNDEFINED';
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`;
  }
  return item.toString();
}

class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  toString() {
    return `[#${this.key}: ${this.value}]`;
  }
} 


class hashTable {
	constructor(toStrFn = defaultToString) {  // defaultToString - 8章
		this.toStrFn = toStrFn;
		this.table = {};
	}
	loseloseHashCode(key) { // key转数字key
		if(typeof(key) === 'number') { return key } // 是数据直接返回

		const tableKey = this.toStrFn(key); // 传进来的key转为字符串，数字用charCodeAt转哈希数字
		let hash = 0;
		for(let i = 0; i < tableKey.length; i++) {
			hash += tableKey[i].charCodeAt();
		}
		return hash % 37 // 为了得到比较小的数值，我们会使用 hash 值和一个任意数做除法的余数（%）

	}
	hashCode(key) {
		 return this.loseloseHashCode(key)
	}
	put(key, value) { // 添加或更新
		if(key != null && value != null) {
			const position = this.hashCode(key)
			this.table[position] = new ValuePair(key, value);
			return true
		}
		return false;
	}
	get(key) {
		const valuePair = this.table[this.hashCode(key)]
		return valuePair == null ? undefined : valuePair.value;
	}
	delete(key) {
		const valuePair = this.table[this.hashCode(key)]
		if(valuePair != null) {
			delete this.table[this.hashCode(key)]
			return true
		}
		return false
	}
}




// 二、使用

// put
const hash = new hashTable();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com'); 
console.log(hash)
/*
hashTable {
  toStrFn: [Function: defaultToString],
  table: {
    '16': ValuePair { key: 'Tyrion', value: 'tyrion@email.com' },
    '19': ValuePair { key: 'Gandalf', value: 'gandalf@email.com' },
    '29': ValuePair { key: 'John', value: 'johnsnow@email.com' }
  }
}
*/

// get
console.log(hash.get('Gandalf')) // gandalf@email.com
console.log(hash.get('Tyrion')) // tyrion@email.com

// delete
console.log(hash.get('Gandalf')); // gandalf@email.com
console.log(hash.get('Loiane')); // undefined












// 冲突解决-1. 分离链接
class HashTableSeparateChaining {
	constructor(toStrFn = defaultToString) {
		this.toStrFn = toStrFn;
		this.table = {};
	}
	put(key, value) { // 添加或更新
		if(key != null && value != null) {
			const position = this.hashCode(key)

			// this.table[position] = new ValuePair(key, value); 改写成下面的
			if(this.table[position] == null) {
				this.table[position] = new LinkedList();
			}
			this.table[position].push(new ValuePair(key, value))

			return true
		}
		return false;
	}
	get(key) {
		const position = this.hashCode(key);
		const linkedList = this.table[position];
		if (linkedList != null && !linkedList.isEmpty()) {  // 本身没有这个元素或链表为空
			let current = linkedList.getHead(); // 获取链表的头结点
			while (current != null) {
				if (current.element.key === key) {
					return current.element.value;
				}
				current = current.next;
			}
		}
		return undefined;
	}
	remove(key) {
		const position = this.hashCode(key);
		const linkedList = this.table[position];
		if (linkedList != null && !linkedList.isEmpty()) {
			let current = linkedList.getHead();
			while (current != null) {
				if (current.element.key === key) {
					linkedList.remove(current.element);
					if (linkedList.isEmpty()) {
						delete this.table[position];
					}
					return true;
				}
				current = current.next;
			}
		}
		return false;
	} 

}




// 冲突解决-2. 线性探查
