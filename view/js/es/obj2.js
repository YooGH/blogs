let obj = {
	a: 1,
	b: '2',
	c: null
}
console.log('obj=>', obj)



// 1.Object.getOwnPropertyDescriptor(obj, key),获取自身的某个属性描述
console.log('\n\n\n1. Object.getOwnPropertyDescriptor')
console.log(Object.getOwnPropertyDescriptor(obj, 'a'))




// 2.Object.getOwnPropertyDescriptor(obj),获取自身的所属性描述
console.log('\n\n\n2. Object.getOwnPropertyDescriptors')
console.log(Object.getOwnPropertyDescriptors(obj))




// 3.Object.getOwnPropertyNames(obj),获取自身的所属性名
Object.defineProperty(obj, 'a', {
	enumerable: false
})
console.log('\n\n\n3.Object.getOwnPropertyNames()')
console.log(Object.getOwnPropertyNames(obj))
console.log('与Object.keys()区别')
console.log(Object.keys(obj))



// 4.Object.getOwnPropertySymbols(obj),获取自身的Symbol类型的属性
obj[Symbol('33')] = 9
console.log('\n\n\n4.Object.getOwnPropertySymbols()')
console.log(Object.getOwnPropertySymbols(obj))



// 5.Object.prototype.hasOwnProperty(key),判断是否是自身的属性
console.log('\n\n\n5.Object.prototype.hasOwnProperty(key)')
console.log(obj.hasOwnProperty('a'))
console.log(obj.hasOwnProperty('toString()'))