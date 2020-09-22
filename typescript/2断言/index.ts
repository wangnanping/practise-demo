// 尖括号语法 和 as语法
let somevalue: any = "struggle";
let strLength: number = (<string>somevalue).length;
let strLength2: number = (somevalue as string)?.length;
console.log(strLength2)

// 非空断言

function mtFun(val: string | undefined | null) {
    const onlyString: string = val;
    const ignoreUndefinedAndNull: string = val!; // 直接忽略undefined和null 注意编译es5 ！非空符号会被去掉
}

// 确定赋值断言

let x!: number;
initialize();
// Variable 'x' is used before being assigned.(2454)
console.log(2 * x); // Error

function initialize() {
  x = 10;
}