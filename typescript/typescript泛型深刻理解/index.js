// 泛型
var foo = function (arg) { return arg; };
console.log(foo(4));
var Foo = /** @class */ (function () {
    function Foo(arg1, arg2) {
        this.arg1 = arg1;
    }
    Foo.prototype.method = function () {
        return this.arg1;
    };
    return Foo;
}());
var newFoo = new Foo(4, 2);
console.log(newFoo.method());
