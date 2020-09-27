// typeof
// 可以用来获取一个变量声明或对象的类型

interface PersonE {
  name: string;
  ages: number;
}

const sem: PersonE = { name: "王先生", ages: 23 };
type Sem = typeof sem; // type Sem = PersonE

function toArray(x: number): Array<number> {
  return [x];
}

type funC = typeof toArray; //  type funC = (x:number) =>  Array<number>

//keyof
// 可以用来一个对象中的所有key值

interface PersonEE {
  name: string;
  age: number;
}

type L1 = keyof PersonEE; // "number" | "age";
type K2 = keyof PersonEE[]; // "length" | "toString" | "pop" | "push" | "concat" | "join"
type K3 = keyof { [x: string]: PersonEE }; // string | number

// 索引签名

// 数字索引

interface StringArray {
  [index: number]: string;
}

// 字符串索引

interface NumberArrau {
  [index: string]: string;
}

//in
// 遍历枚举类型

enum Types {
  A = "a",
  B = "b",
  C = "c",
}

type Obj = {
  [p in Types]: any;
};

const type: Obj = { a: 1, b: 1, c: 2 };

type Keys = "a" | "b" | "c";

type ObjKeys = {
  [p in Keys]: any;
};

const ObjKeyss: ObjKeys = { a: 1, b: 1, c: 2 };

// infer  
// 在条件类型语句中，可以用infer声明一个类型变量并且对它进行使用
// https://segmentfault.com/a/1190000018514540?utm_source=tag-newest

type ReturnTypes<T> = T extends (...arg: any[]) => infer R ? R : T;

type Aa = ReturnTypes<Array<string>>; //Aa= string[]

// extends 添加泛型约束

interface User {
  name: string;
  age: number;
}

function setUser<T extends User>(val: T): T {
  return val;
}
setUser({ name: "王", age: 123 });
