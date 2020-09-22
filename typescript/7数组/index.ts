// 数组解构
let x: number, y: number, c: number;
let arr: number[] = [1, 2, 3, 4, 5];
[x, y, c] = arr;
console.log(x + "-" + y + "-" + c);

// 数组展开扩展运算符
let son_arr: number[] = [1, 2];
let father_arr: number[] = [...son_arr, 3, 4];
console.log(father_arr);

// 数组遍历
// for ... of