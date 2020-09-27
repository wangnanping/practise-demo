// 泛型工具类型

interface Person {
  name: string;
  age?: number;
}

// --------------------
// Partial

// 源码
// type Partial<T> = {
//   [P in keyof T]?: [P];
// };

type person = Partial<Person>;
// person === {name?: string; age?: number}

// --------------------
// Required

// type Required<T> = {
//     [P in keyof T]-?: T[P];
// };

type persons = Required<Person>;
// persons === {name: string; age: number}

// --------------------
// Readonly

// type Readonly<T> = {
//     readonly [P in keyof T]: T[P];
// };

type personss = Required<Person>;
// personss === {readonly name: string; readonly age?: number}

// --------------------
// Pick

// type Pick<T, K extends keyof T> = {
//     [P in K]:T[P]
// }

type personsss = Pick<Person, "name">;
// personsss === {name: string}

// --------------------
// Record

// type Record<K extends keyof any, T> = {
//   [P in K]: T[P];
// };

type personssss = Record<"name" | "age", string>;
// personssss === {name:string;age:string}
