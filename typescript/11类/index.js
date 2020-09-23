// 类的属性和方法
// 在面向对象语言中，类是一种面向对象计算机编程语言的构造，是创建对象的蓝图，描述了所创建的对象共同的属性和方法。
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
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _name;
// 类的属性和方法
var Greeters = /** @class */ (function () {
    // 构造函数 -执行初始化操作
    function Greeters(message) {
        // 成员属性
        this.age = 26;
        this.message = "";
        this.message = message;
    }
    // 静态方法
    Greeters.getNameVal = function () {
        return this.nameVal;
    };
    // 成员方法
    Greeters.prototype.getAge = function () {
        return this.age;
    };
    // 静态属性
    Greeters.nameVal = "王";
    return Greeters;
}());
var greeterSons = new Greeters("介绍静态方法和成员方法及其属性");
// 由上介绍一下静态属性和方法、成员属性和方法
// 通过编译后的es5代码可以看出
// 静态属性和方法
/**
 * 静态属性
 * 与普通的成员属性不同，静态属性属于类本身而不属于类的任何实例。静态属性可以被看做是存储在类当中的全局变量，可以在任何地方通过类来访问它们。
 * 由于静态属性不受任何具体对象的限制，所以不需要建立类实例，而可以直接引用类中的静态属性
 * Greeters.nameVal;
 *
 * 静态方法
 * 由于静态方法不受任何具体对象的限制，所以不需要建立类实例就可以直接引用类中的方法
 * Greeters.getNameVal()
 */
// 成员属性和方法
/**
 * 需要通过实例化后 访问原型属性和方法
 */
//---------------------------
// 私有字段  #
var Person = /** @class */ (function () {
    function Person(name) {
        _name.set(this, void 0); // 只能在类里面才能使用，外面使用都会报错
        __classPrivateFieldSet(this, _name, name);
    }
    Person.prototype.greet = function () {
        return "\u79C1\u6709\u540D\u79F0\u4E3A: " + __classPrivateFieldGet(this, _name);
    };
    return Person;
}());
_name = new WeakMap();
var personSon = new Person("王先生");
// personSon.#name  // error 属性 "#name" 在类 "Person" 外部不可访问，因为它具有专用标识符。
//与常规属性（甚至使用 private 修饰符声明的属性）不同，私有字段要牢记以下规则：
// 私有字段以 # 字符开头，有时我们称之为私有名称；
// 每个私有字段名称都唯一地限定于其包含的类；
// 不能在私有字段上使用 TypeScript 可访问性修饰符（如 public 或 private）；
// 私有字段不能在包含的类之外访问，甚至不能被检测到。
//---------------------------
// 访问器 getter setter
var Accessor = /** @class */ (function () {
    function Accessor() {
    }
    Object.defineProperty(Accessor.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Accessor.prototype, "setName", {
        set: function (val) {
            if (val) {
                this.name = val;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Accessor;
}());
var example = new Accessor();
example.setName = "王楠楠";
console.log(example.getName);
//---------------------------
// 类继承
//继承（Inheritance）是一种联结类与类的层次模型。
// 指的是一个类（称为子类、子接口）继承另外的一个类（称为父类、父接口）的功能，并可以增加它自己的新功能的能力，继承是类与类或者接口与接口之间最常见的关系。
var Admin = /** @class */ (function () {
    function Admin(val) {
        this.name = val;
    }
    Admin.prototype.getName = function () {
        return "获取到了继承方法";
    };
    return Admin;
}());
var son = /** @class */ (function (_super) {
    __extends(son, _super);
    function son(name) {
        var _this = _super.call(this, name) || this;
        _this.age = 35; // 私有属性 只能在当前类使用
        return _this;
    }
    son.prototype.getAdminFun = function () {
        return _super.prototype.name;
    };
    return son;
}(Admin));
var sonExample = new son("王");
// sonExample.getName();
// sonExample.name;
