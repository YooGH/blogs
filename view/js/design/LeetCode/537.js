// 复数乘法(https://mp.weixin.qq.com/s/UmjPm-MoMxhpeMmbud2t8w)
// 1+1i * 1+1i


/*
题目描述

复数 可以用字符串表示，遵循 "实部+虚部 i" 的形式，并满足下述条件：
 - 实部 是一个整数，取值范围是 [-100, 100]
 - 虚部 也是一个整数，取值范围是 [-100, 100]
 - i2 == -1
给你两个字符串表示的复数 num1 和 num2 ，请你遵循复数表示形式，返回表示它们乘积的字符串。
*/



/*
示例 1：

输入：num1 = "1+1i", num2 = "1+1i"
输出："0+2i"
解释：(1 + i) * (1 + i) = 1 + i2 + 2 * i = 2i ，你需要将它转换为 0+2i 的形式。
*/

/*
解决方案


方法一：模拟


思路

复数可以写成 a + bi 的形式，其中 a,b ∈ R，a 是实部，b 是虚部，i 是虚数单位，i2 = −1。
对于给定的两个复数 num1 和 num2 ，首先分别得到两个复数的实部和虚部，然后计算两个复数的乘法。用 real1 和 imag1 分别表示 num1 的实部和虚部，用 real2 和 imag2 分别表示 num2 的实部和虚部，则两个复数的乘法计算如下：

(real1 + imag1 × i) × (real2 + imag2 × i)
= real1 × real2 + real1 × imag2 × i + imag1 × real2 × i + imag1 × imag2 × i2
= real1 × real2 + real1 × imag2 × i + imag1 × real2 × i − imag1 × imag2
= (real1 × real2 − imag1 × imag2 ) + (real1 × imag2 + imag1 × real2) × i

得到两个复数的乘积之后，将乘积转换成复数格式的字符串并返回。

*/

/*
两实部相乘 + 两虚部虚数单位相乘 + 实部虚部虚数单位相乘后相加
因为i2==-1   =>   - imag1 * imag2 * i2  =>   - imag1 * imag2
所有两实部相乘 - 两虚部相乘 + 实部虚部虚数单位相乘后相加
*/

/*

var complexNumberMultiply = function(num1, num2) {
  const complex1 = [num1.split("+")[0], num1.split("+")[1].split("i")[0]];
  const complex2 = [num2.split("+")[0], num2.split("+")[1].split("i")[0]];
  const real1 = parseInt(complex1[0]);
  const imag1 = parseInt(complex1[1]);
  const real2 = parseInt(complex2[0]);
  const imag2 = parseInt(complex2[1]);
  return '' + real1 * real2 - imag1 * imag2 + '+' + (real1 * imag2 + imag1 * real2) + 'i';
};
*/



 