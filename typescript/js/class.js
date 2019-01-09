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
// -静态属性 静态方法
console.log("----------------------静态属性 静态方法----------------");
// es5 
function fun1() {
    this.name1 = "es5实例属性";
    this.run1 = function () {
        console.log("es5实例方法");
    };
}
fun1.run2 = function () {
    console.log("es5静态方法");
};
// 使用实例属性 和方法 都必须new
var use = new fun1();
use.run1();
fun1.run2();
console.log(use.name1);
//ts
var Father4 = /** @class */ (function () {
    function Father4(name) {
        this.name = name;
    }
    Father4.prototype.run = function () {
        console.log(this.name);
    };
    Father4.run1 = function () {
        console.log("TS方法前加static---静态方法,没法调用类里面的属性");
        console.log(Father4.sex);
    };
    Father4.sex = "ts静态属性";
    return Father4;
}());
var use1 = new Father4("TS实例属性");
use1.run();
Father4.run1();
// 多态  属于继承，父类定义一个方法不去实现，让继承它的子类去实现，每一个子类都会有不同的表现
console.log("-----------------多态------------------");
var Father5 = /** @class */ (function () {
    function Father5(name) {
        this.name = name;
    }
    Father5.prototype.eat = function () {
        console.log("吃的方法");
    };
    return Father5;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        return this.name + "子类1的表现";
    };
    return Dog;
}(Father5));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.eat = function () {
        return this.name + "子类2的表现";
    };
    return Cat;
}(Father5));
var DogFun = new Dog("Dog");
console.log(DogFun.eat());
var CatFun = new Cat("Cat");
console.log(CatFun.eat());
//typescript中的抽象类：它是提供其他类继承的基类，不能直接被实例化。
//用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。
// abstract抽象方法只能放在抽象类里面
// 抽象类和抽象方法用来定义标准 。   标准：Animal 这个类要求它的子类必须包含eat方法
console.log("-------------------抽象类-----------------------------");
var Father6 = /** @class */ (function () {
    function Father6(name) {
        this.name = name;
    }
    return Father6;
}());
console.warn("abstract抽象类不能实例化，抽象类的抽象方法，子类必须要有");
var Dog1 = /** @class */ (function (_super) {
    __extends(Dog1, _super);
    function Dog1(name) {
        return _super.call(this, name) || this;
    }
    Dog1.prototype.eat = function () {
        console.log(this.name);
    };
    return Dog1;
}(Father6));
var Dog2 = new Dog1("抽象类");
Dog2.eat();
