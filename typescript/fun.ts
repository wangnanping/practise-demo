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
function run(): number {
    return 123;
}
//匿名函数
let run1 = function (): number {
    return 123;
}
// 函数传参
function getVal(name: string, age: number): string {
    return `${name}${age}`;
}

// 没有返回值的方法
function run2(): void {
    console.log("没有返回值")
}
// 方法可选参数 参数后加一个？  

function run3(name: string, age?: number): string {
    // 可选参数 必须配置到传值参数的最后面 
    return `${name}${age}`;
}
run3("我的名字")

// 设置默认参数

function run4(name: string, age:number = 20):string{
    return `${name}${age}`;
}
run4("我的名字111")

// 剩余参数
