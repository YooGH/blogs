// 父级
function Father(name, sex) {
  this.name = name;
  this.sex = sex;
}

function Son(subname) {
  this.subname = subname;
}
// 原型链接继承
Son.prototype = new Father('bigName', 'man');  // 继承了name和sex

let son1 = new Son('smallName');
console.log(son1.name)
console.log(son1.subname)
console.log(son1.sex)