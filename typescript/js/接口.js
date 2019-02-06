"use strict";
/**
 typeScript中的接口

    5.1 属性类接口
    5.2 函数类型接口
    5.3 可索引接口
    5.4 类类型接口
    5.5 接口扩展


    接口的作用：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范，在程序设计里面，接口起到一种限制和规范的作用。接口定义了某一批类所需要遵守的规范，接口不关心这些类的内部状态数据，也不关心这些类里方法的实现细节，它只规定这批类里必须提供某些方法，提供这些方法的类就可以满足实际需要。 typescrip中的接口类似于java，同时还增加了更灵活的接口类型，包括属性、函数、可索引和类等。

定义标准。
 */
console.log("--------------Ts接口--------------------");
function printName(label) {
    console.log(label);
}
//  printName({name:'***'}) // 错误的
printName({ a: '****' });
function printName1(val) {
    // 必须传入对象 age  name
}
//  传入的参数必须包含 age 和name  两个属性
var printVal = {
    age: 12,
    name: "王先生",
    woi: "123"
};
printName1(printVal);
