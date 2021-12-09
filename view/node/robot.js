/* https://blog.csdn.net/qq_34995862/article/details/106501587
安装
1. npm install --global --production windows-build-tools
2. npm install robotjs 
*/
// const opn = require('opn');
var robot = require('robotjs');
var screenSize = robot.getScreenSize();
console.log(screenSize);

