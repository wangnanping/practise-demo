// 对象的形状
interface Person {
    name: string;
    age: number;
}

let persons: Person = {
    name: "王",
    age: 3
}

// -----------------
// 可选 和 只读属性
// 只读属性 限制只能在对象刚刚创建的时候修改其值

interface PersonOne {
    readonly name: string;
    age?: number;
}


// -----------------
// 此外 TypeScript 还提供了 ReadonlyArray<T> 类型，
//它与 Array<T> 相似，只是把所有可变方法去掉了，
//因此可以确保数组创建后再也不能被修改。

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error!

// -----------------
// 任意属性 使用 索引签名 的形式来满足
interface PersonType {
    name: string,   // 必填
    readonly age: number, // 只读
    text?: string;  //可选
    [PropName: string]: any; //任意
}

let newPerson: PersonType = {
    name: "王",
    age: 4,
    six: "男"
}
