"use strict";
/*
* 1.tsc --init
* 修改  "outDir": "./js",
* 2.任务 -运行任务 监视tsconfig.json
*/
/*typeScript中的数据类型

    typescript中为了使编写的代码更规范，更有利于维护，增加了类型校验，在typescript中主要给我们提供了以下数据类型


        布尔类型（boolean）
        数字类型（number）
        字符串类型(string)
        数组类型（array）
        元组类型（tuple）
        枚举类型（enum）
        任意类型（any）
        null 和 undefined
        void类型
        never类型

*/
/* 定义数组得两种方式 */
var arr = ["123", "123"];
console.log(arr);
var arrNumber = [1, 2, 3, 4, 5];
console.log(arrNumber);
/**
 * 元组类型（tuple）属于数组得一种
 */
var arrArray = ["123", "123"];
var arrNumbers = [1, 2];
var arrNS = [1, "2"]; // 每一个位置定义一个类型
/**
 * 枚举类型(enum) 如果标识符没有赋值 就是下标 如下面得success f就是0
 */
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 0] = "success";
    Flag[Flag["error"] = 1] = "error";
})(Flag || (Flag = {}));
;
var f = Flag.success;
console.log(f);
// 如 接口返回code就可以设置
var code;
(function (code) {
    code[code["success"] = 200] = "success";
    code[code["error"] = 404] = "error";
})(code || (code = {}));
/**
 * any 任意类型
 */
var OK = "王";
OK = 123;
console.log(OK);
/**
 * null undefind
 */
// null 和 undefined  其他（never类型）数据类型的子类型
// var num:number;
// console.log(num)  //输出：undefined   报错
// var num:undefined;
// console.log(num)  //输出：undefined  //正确
// var num:number | undefined;
// num=123;
// console.log(num);
//定义没有赋值就是undefined
// var num:number | undefined;
// console.log(num);
// var num:null;
// num=null;
//一个元素可能是 number类型 可能是null 可能是undefined
var num;
num = 1234;
console.log(num);
/**
 * void类型 :typescript中的void表示没有任何类型，一般用于定义方法的时候方法没有返回值。
 */
function run() {
    console.log("没有返回值 没有任何类型");
}
run();
function runs() {
    return 123;
}
console.log(runs());
/**
 * never类型:是其他类型 （包括 null 和 undefined）的子类型，代表从不会出现的值。
 * 这意味着声明never的变量只能被never类型所赋值。
 */
var val;
//   val = null; //报错
//   val = 123  // 报错
val = undefined;
var val1;
// val1 = 123;  // 报错
val1 = (function () {
    throw new Error("错误");
})();
