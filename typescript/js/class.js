"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// TS 类的定义
console.log("-----------------------类的定义-------------------");
//es5
// function Person(name) {
//     this.name = name;
//     this.run = function() {
//         console.log(name);
//     }
// }
// var per = new Person("王");
//  per.run();
// ts 定义类
var Person = /** @class */ (function () {
    function Person(n) {
        this.name = n;
    }
    Person.prototype.run = function () {
        console.log(this.name);
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    return Person;
}());
var per = new Person("王");
per.run();
console.log(per.getName());
per.setName("小");
per.run();
// ts 中实现继承  extends 、 super
console.log("-------------------继承---------------");
var Father = /** @class */ (function () {
    function Father(name, num) {
        this.name = name;
        this.num = num;
    }
    Father.prototype.consologFun = function () {
        console.log(this.name);
    };
    return Father;
}());
var FatherSon = /** @class */ (function (_super) {
    __extends(FatherSon, _super);
    function FatherSon(name, num) {
        return _super.call(this, name, num) || this;
    }
    FatherSon.prototype.work = function () {
        console.log("我可以直接访问父类的属性，因为我继承了,数字为" + this.num);
    };
    FatherSon.prototype.consologFun = function () {
        console.log("当父类和子类方法相同的时候，会先从子类先找方法,没有才去父类找");
    };
    return FatherSon;
}(Father));
var per1 = new FatherSon("继承了点方法", 20);
per1.consologFun();
per1.work();
// 3. 修饰符
/**
 * public  :公有类型  在类里面 、子类、类外面都可以访问
 * protected :保护类型  在类里面、子类里面可以访问，在类外部没法访问
 * private ：私有类型  在类里面可以访问，子类、类外部不能访问
 *
 */
// ------------修饰符 public ------
console.log("--------------修饰符 public protected private--------------");
var Father1 = /** @class */ (function () {
    function Father1(name, num, wo) {
        this.name = name;
        this.num = num;
        this.wo = wo;
    }
    return Father1;
}());
var Son1 = /** @class */ (function (_super) {
    __extends(Son1, _super);
    function Son1(name, num, wo) {
        return _super.call(this, name, num, wo) || this;
    }
    Son1.prototype.run = function () {
        console.log(this.name);
    };
    Son1.prototype.run1 = function () {
        console.log(this.num + "---我可以在子类里面被访问");
    };
    Son1.prototype.run2 = function () {
        // 错误的写法 外部是无法访问，之所有能运行，是因为转化成了ES5
        console.warn(this.wo + "看代码有报错---我可以在子类里面被访问");
    };
    return Son1;
}(Father1));
var per3 = new Son1("我是public", "我是protected", "我是private");
per3.run();
console.log("获取公有属性per3.name--->" + per3.name);
per3.run1();
console.warn("获取公有属性per3.num--->错误的写法--->" + per3.num); // 错误的写法 外部是无法访问，之所有能运行，是因为转化成了ES5
per3.run2();
console.warn("获取公有属性per3.wo--->错误的写法--->" + per3.wo);
