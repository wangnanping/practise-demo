"use strict";
/**
 * 函数定义
 */
//es5定义函数的方法
//函数声明法
// function run(){
//     return 'run';
// }
//匿名函数
// var run2=function(){
//     return 'run2';
// }
//函数声明法
function run() {
    return 123;
}
//匿名函数
var run1 = function () {
    return 123;
};
// 函数传参
function getVal(name, age) {
    return "" + name + age;
}
// 没有返回值的方法
function run2() {
    console.log("没有返回值");
}
// 方法可选参数 参数后加一个？  
function run3(name, age) {
    // 可选参数 必须配置到传值参数的最后面 
    return "" + name + age;
}
run3("我的名字");
// 设置默认参数
function run4(name, age) {
    if (age === void 0) { age = 20; }
    return "" + name + age;
}
run4("我的名字111");
// 剩余参数
function run5(value1, value2) {
    var result = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        result[_i - 2] = arguments[_i];
    }
    var val = value1 + value2;
    result.forEach(function (item, key) {
        val += item;
    });
    return val;
}
console.log(run5(10, 11, 1, 2, 3, 4));
function getInfo(name, age) {
    if (age) {
        return '我的年龄' + age;
    }
    else {
        return "我叫:" + name;
    }
}
console.log(getInfo("张三"));
console.log(getInfo("张三", 20));
//  console.log(getInfo(11));  // 报错
//  console.log(getInfo(true)); // 报错
// 箭头函数 es6
setTimeout(function () {
    console.log("箭头函数中：this指向上下文");
}, 1000);
