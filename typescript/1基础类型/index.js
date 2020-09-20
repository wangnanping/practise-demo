// boolean 
var isDone = true;
// Number 
var numberNum = 12;
// string 
var stringNum = "挖的";
// symblo 唯一不可变得值
// const sym: unique symbol = Symbol(); //unique 必须配const
// let objs = {
//     [sym]: "semlinker"
// }
// console.log(objs[sym]);
// Array
var ArrayListOne = [12, 3, 4];
var ArrayListTwo = ["1", "2"];
//enum 枚举 初始值0开始
var Type;
(function (Type) {
    Type[Type["One"] = 1] = "One";
    Type[Type["Two"] = 2] = "Two";
    Type[Type["Three"] = 3] = "Three";
    Type[Type["Four"] = 4] = "Four";
})(Type || (Type = {}));
var num = Type.One;
console.log(num);
