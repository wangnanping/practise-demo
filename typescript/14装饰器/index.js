// 类装饰器
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// 例子 用类装饰器重现
// https://www.jianshu.com/p/022988da4dc1?utm_campaign=maleskine&utm_content=note&utm_medium=seo_notes&utm_source=recommendation
// 类装饰器声明：
// declare type ClassDecorators = <TFunction extends Function>(
//   target: TFunction
// ) => TFunction | void;
// 类装饰器顾名思义，就是用来装饰类的。它接收一个参数：
// target: TFunction - 被装饰的类
function Greeter(target) {
    console.log(target);
    target.prototype.greet = function () {
        console.log("Hello Semlinker!");
    };
}
var Greetings = /** @class */ (function () {
    function Greetings() {
        // 内部实现
    }
    Greetings = __decorate([
        Greeter
    ], Greetings);
    return Greetings;
}());
var myGreeting = new Greetings();
myGreeting.greet();
// -------------------------------------------------------------------------------------------------------------
// 属性装饰器
// 属性装饰器声明：
// declare type PropertyDecorators = (
//   target: Object,
//   propertyKey: string | symbol
// ) => void;
// 属性装饰器顾名思义，用来装饰类的属性。它接收两个参数：
// target: Object - 被装饰的类
// propertyKey: string | symbol - 被装饰类的属性名
function logPrototype(target, key) {
    delete target[key];
    var backingFirld = "_" + key;
    Object.defineProperty(target, backingFirld, {
        writable: true,
        enumerable: true,
        configurable: true,
    });
    var geeter = function () {
        var val = this[backingFirld];
        console.log("Get: " + key + " => " + val);
        return val;
    };
    var seeter = function (newVal) {
        this[backingFirld] = newVal;
        console.log("Set: " + key + " => " + newVal);
    };
    Object.defineProperty(target, key, {
        get: geeter,
        set: seeter,
        enumerable: true,
        configurable: true,
    });
}
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    __decorate([
        logPrototype
    ], Person.prototype, "name", void 0);
    return Person;
}());
var p1 = new Person("semlinker");
p1.name = "kakuqo";
console.log(p1.name);
// -------------------------------------------------------------------------------------------------------------
// 方法装饰器
// 方法装饰器声明：
// declare type MethodDecoratorA = <T>(target:Object, propertyKey: string | symbol,
//   descriptor: TypePropertyDescript<T>) => TypedPropertyDescriptor<T> | void;
// 方法装饰器顾名思义，用来装饰类的方法。它接收三个参数：
// target: Object - 被装饰的类
// propertyKey: string | symbol - 方法名
// descriptor: TypePropertyDescript - 属性描述符
function LogOutputs(tarage, key, descriptor) {
    var originalMethod = descriptor.value;
    var newMethod = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var result = originalMethod.apply(this, args);
        if (!this.loggedOutput) {
            this.loggedOutput = new Array();
        }
        this.loggedOutput.push({
            method: key,
            parameters: args,
            output: result,
            timestamp: new Date(),
        });
        return result;
    };
    descriptor.value = newMethod;
}
var Calculator = /** @class */ (function () {
    function Calculator() {
        this.loggedOutput = 4;
    }
    Calculator.prototype.double = function (num) {
        return num * 2;
    };
    __decorate([
        LogOutputs
    ], Calculator.prototype, "double", null);
    return Calculator;
}());
var calc = new Calculator();
calc.double(11);
// console ouput: [{method: "double", output: 22, ...}]
console.log(calc.loggedOutput);
// -------------------------------------------------------------------------------------------------------------
// 参数装饰器
// 参数装饰器声明：
// declare type ParameterDecorator = (target: Object, propertyKey: string | symbol,
//   parameterIndex: number ) => void
// 参数装饰器顾名思义，是用来装饰函数参数，它接收三个参数：
// target: Object - 被装饰的类
// propertyKey: string | symbol - 方法名
// parameterIndex: number - 方法中参数的索引值
function Log(target, key, parameterIndex) {
    var functionLogged = key || target.prototype.constructor.name;
    console.log("The parameter in position " + parameterIndex + " at " + functionLogged + " has\n been decorated");
}
var Greeters = /** @class */ (function () {
    function Greeters(phrase) {
        this.greeting = phrase;
    }
    Greeters = __decorate([
        __param(0, Log)
    ], Greeters);
    return Greeters;
}());
// console output: The parameter in position 0
// at Greeter has been decorated
