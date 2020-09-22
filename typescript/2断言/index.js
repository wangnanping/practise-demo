var _a;
// 尖括号语法 和 as语法
var somevalue = "struggle";
var strLength = somevalue.length;
var strLength2 = (_a = somevalue) === null || _a === void 0 ? void 0 : _a.length;
console.log(strLength2);
// 非空断言
function mtFun(val) {
    var onlyString = val;
    var ignoreUndefinedAndNull = val; // 直接忽略undefined和null 注意编译es5 ！非空符号会被去掉
}
// 确定赋值断言
var x;
initialize();
// Variable 'x' is used before being assigned.(2454)
console.log(2 * x); // Error
function initialize() {
    x = 10;
}
