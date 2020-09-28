// 类装饰器
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 例子 用类装饰器重现
// https://www.jianshu.com/p/022988da4dc1?utm_campaign=maleskine&utm_content=note&utm_medium=seo_notes&utm_source=recommendation
// function Greeters(target: Function): void {
//   target.prototype.getText = function (): void {
//     console.log("hello world");
//   };
// }
// @Greeters
// class MyGerrter {
//   consturctor() {}
// }
// let myGerrtering = new MyGerrter();
// myGerrtering.getText();
// 属性装饰器
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
