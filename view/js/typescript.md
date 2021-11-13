> 1. <a href="#h1"> 声明 </a>
> 2. <a href="#h2"> 类型 </a>
> 3. <a href="#h3"> 接口 </a>
> 4. <a href="#h4"> 函数 </a>
> 5. <a href="#h5"> 类 </a>
> 0. <a href="#ck"> 参考 </a>


 - [ ] [Typescript](整合这里的)还有类没整理
<br/><br/><br/><br/>
### 介绍
> TS趋势:
> 静态类型和面向对象、
> 应用程序、
> JS超集 类sass和css、
> 跨平台且开源、
> 开源引入js流行库、
> TS好处：
> 1.后期开发、
> 2.类型确定逻辑判断更快，减少弱转化，提升页面响应 a == 'a'

###  <h1 id="h1"> 1.声明 </h1>
> 区别：变量名**加类型**

```
let name = 'hello world' // js
let name: string = 'hello word' // ts
```
<br/><br/>




### <h1 id="h2"> 2.类型 </h1>

> 1/2. JS有的**7种**类型(boolean、number、string、null、undefined、array、object(等同于接口))

```
let name: string = 'Tom';     // 1.字符串
let age: number = 18;         // 2.数字
let sex: boolean = true;      // 3.布尔
let u: undefined = undefined; // 4.undefined
let n: null = null;           // 5.unll

let list: number[] = [1, 2, 3]; // 6.数组(元素类型[])
let list: Array<number> = [1,2,3]; // 数组泛型(Array<元素类型>)
```

> 2/2. TS特有**5种**类型：元组、枚举、任意值、Never、类型断言

1. 元组: 数组的一种,数组可以多类型([元素类型,元素类型,元素类型]) ``let x: [string, number] = ['hello', 10]``

2. 枚举: **enum**关键词

3. 任意值： **any**和JS不声明类型一样 ``let bookname:any = 'hi'; bookname = 1``

4. never: 未知类型``function error(message: string): never { throw new Error(message)}``
5. 类型断言

> 扩展 Date/RegExp ``let d:Date =new Date();let reg:RegExp = /hai/``

<br/><br/>


### <h1 id="h3"> 3.接口 </h1>
> ``interface``关键字,对对象的属性提前预判就是接口

```
interface Apidata {
  code?: number;
  data?: any;
  msg?: string;
}
```

> 继承



<br/><br/>

### <h1 id="h4"> 4.函数 </h1>
> 1/4. 返回可**多种类型**
```
function fn(age:any):string/void {return '括号后面的两种类型'}
```
> 2/4. 可选参数的函数 (**?**)
```
function fn(age:number, status?:string):void {return ''}
```
> 3/4. 有默认参数的函数
```
function fn(age:number=13, status:string=true):void {return ''}
```


###  <h1 id="ck"> 参考 </h1>
[TS中文手册](https://typescript.bootcss.com/)

[TS](https://www.tslang.cn/docs/home.html/)

[jspang的Ts](http://jspang.com/detailed?id=38#toc244)

```

```