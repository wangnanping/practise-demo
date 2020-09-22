// 箭头函数
// 参数类型和返回类型  注意可选参数要放在最后面
function created(name, age) {
    return "\u8FD4\u56DE\u4E86:" + name + age;
}
// 函数类型
var IdGenerator;
function createUserId(name, id) {
    return name + id;
}
IdGenerator = createUserId;
console.log(IdGenerator("wang", 2));
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(add("wann", "nanping"));
// 类 方法重载
var createdFather = /** @class */ (function () {
    function createdFather() {
    }
    createdFather.prototype.add = function (a, b) {
        if (typeof a === 'string' || typeof b === 'string') {
            return a.toString() + b.toString();
        }
        return a + b;
    };
    return createdFather;
}());
var createdSon = new createdFather();
console.log(createdSon.add("儿子", "父亲"));
