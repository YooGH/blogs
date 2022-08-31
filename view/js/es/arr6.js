let arr = [1,2,3,4,5,6];
// 六、
// forEach
console.log('\nforEach()')


console.log('\nfilter()')
let arr1 = JSON.parse(JSON.stringify(arr));
let newArr1 = arr1.filter(item=>{
	return item > 2;
})
console.log(arr1);
console.log(newArr1);



console.log('\nsome()')
let arr2 = JSON.parse(JSON.stringify(arr));
let newArr2 = arr2.some(item=>{
	return item > 2;
})
console.log(arr2);
console.log(newArr2);



console.log('\nmap()')
let arr3 = JSON.parse(JSON.stringify(arr));
let newArr3 = arr3.map(item=>{
	item * 3;
	// return item * 3;
})
let newArr33 = arr3.map(item=>item * 3)
console.log(arr3);
console.log(newArr3);
console.log(newArr33);



console.log('\ntoString()')
console.log(arr.toString());
console.log(arr)


console.log('\nevery()')
const isBelowThreshold = (currentValue) => currentValue < 40;
const isBelowThreshold2 = (currentValue) => currentValue < 10;
const array4 = [1, 30, 39, 29, 10, 13];
console.log(array4.every(isBelowThreshold));
console.log([].every(isBelowThreshold)); // 空数组返回true
console.log(array4.every(isBelowThreshold2));



console.log('\nfind()') // includes的函数化
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found);