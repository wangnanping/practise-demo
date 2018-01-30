var a = 1; 
var b = 1; // 全局 var 声明全局
var c = 1;
{  // 区块 表示独立作用域
 
   var b = 2; 
   let a = 2; // 局部声明 只在当前作用域 有用  let 不可声明相同变量名称
   c = 2;
}
console.log(a);  // 1
console.log(b); // 2 全局污染 替换了外层
console.log(c); // 2

{
    var d = 1;
    let f = 1;  // 局部声明 
}
console.log(d); // 1
// console.log(f); // 报错

//   常量申明 const 

const num = "JS"; // const 不可声明相同变量名称  声明 常量 不能发生改变
// num = "王";  // 报错
console.log(num);

// ----------> 解构赋值  
// let num1 = 1;
// let num2 = 2;
// let num3 = 3;
// 简单赋值如下
let [num1, num2, num3] = [1, 2, 3]; // 模式匹配写法
console.log(`${num1}${num2}${num3}`); // 123

let [num4, [num5], [[num6]]] = [1, [2], [[3]]];
console.log(`${num4}${num5}${num6}`); // 123

let [num7, ...num8] = [1, 2, 3]; //  ...
console.log(num7); // 1
console.log(num8); // [2, 3]

// 注意如果解构不成功  则为undefind
// 以下 为不完全解构
let [num9, [num10]] = [1, [2, 3]];
console.log(`${num9}${num10}`); // 12

// 注意 如果 等号 右边不是数组 就会报错
// let [foo] = 1;
// let [foo] = false;
// let [foo] = NaN;
// let [foo] = undefined;
// let [foo] = null;
// let [foo] = {}; // 本身就不具备Iterator 接口
// console.log(foo);

// 解构赋值允许指定默认值
let [num11 = 1] = [];
console.log(num11); // 1