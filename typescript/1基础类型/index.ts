// boolean 
let isDone: boolean = true;
// Number 
let numberNum: number = 12;
// string 
let stringNum: string = "挖的"
// symblo 唯一不可变得值
// const sym: unique symbol = Symbol(); //unique 必须配const
// let objs = {
//     [sym]: "semlinker"
// }
// console.log(objs[sym]);
// Array
let ArrayListOne: number[] = [12, 3, 4];
let ArrayListTwo: Array<string> = ["1", "2"]
//enum 枚举 默认值下标值
enum Type {
    One = 1, //
    Two,
    Three,
    Four
}
let num: Type = Type.One
console.log(num)
console.log(num[0])
// any 
// unknown 
// any和unknown 赋值给其它类型存在区别， unknown 只能赋值给any和unknown类型

// tuple  元组
let tupleArray: [string, number];
tupleArray = ["1", 1]

// void 表示没有任何类型 函数没有返回值 值只能为null 或undefined
function A(): void {

}
// null undefined

//  object, Object 和 {}（没有成员的对象，增加属性就会报错）
// never 类型 表示永远不存在的类型（抛出异常或者根本不会有返回值的函数表达式）
type Foo = number | string;
function controlFlowAnalysisWithNever(foo: Foo) {
    if (typeof foo === "number") {

    } else if (typeof foo === "string") {

    } else {
        const check: never = foo;
    }
}
// 如果有人修改Foo = number | string | boolean 没有在controlFlowAnalysisWithNever新增判断 那就会报错