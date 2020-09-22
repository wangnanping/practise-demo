// 箭头函数
// 参数类型和返回类型  注意可选参数要放在最后面
function created(name: string, age?: number): string {
    return `返回了:${name}${age}`
}

// 函数类型
let IdGenerator: (chars: string, nums: number) => string;
function createUserId(name: string, id: number): string {
    return name + id
}
IdGenerator = createUserId;
console.log(IdGenerator("wang", 2))

// 函数重载 
// 函数重载或方法重载是使用相同名称和不同参数数量或类型创建多个方法的一种能力
type Combinable = string | number;
function add(a: number, b: string): number;
function add(a: string, b: string): number;
function add(a: string, b: number): number;
function add(a: number, b: number): number;
function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(add("wann", "nanping"));

// 类 方法重载 最精确的定义放在最前面
class createdFather {
    add(a: number, b: string): number;
    add(a: string, b: string): number;
    add(a: string, b: number): number;
    add(a: number, b: number): number;
    add(a: Combinable, b: Combinable) {
        if (typeof a === 'string' || typeof b === 'string') {
            return a.toString() + b.toString();
        }
        return a + b;
    }
}

let createdSon = new createdFather();
console.log(createdSon.add("儿子", "父亲"))