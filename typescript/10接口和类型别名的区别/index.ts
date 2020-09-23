// 接口和类型别名都可以用来描述对象的形状或函数签名

//接口
interface Point {
  x: number;
  y: number;
}

interface FunType {
  (name: string, age: number): void;
}

// 类型别名 （可以用于其它类型，原始类型、联合类型、元组类型）

type PointOne = {
  x: number;
  y: number;
};

type FunTypeOne = (name: string, age: number) => void;

type StringType = string; // 原始类型

type SixType = { six: number };

type AgeType = { age: number };

type UserInfo = SixType & AgeType; // 联合类型

type GetUserInfo = SixType | AgeType; // 联合类型

type ArrList = [string, number]; // 元组类型

// 接口和类型别名都能够被扩展，但语法有所不同。此外，接口和类型别名不是互斥的。接口可以扩展类型别名，而反过来是不行的
// ======================================================
//1.interface extends interface
interface PertpointX {
  x: number;
}

interface PertpointY extends PertpointX {
  y: number;
}

let pert: PertpointY = {
  y: 12,
  x: 12,
};

//2. type 交叉类型
type SixType1 = { six: number };

type AgeType1 = { age: number };

type UserInfo1 = SixType1 & AgeType1; // 交叉类型

//3.interface extends type

type PointY = { y: string };
interface PointX extends PointY {
  x: number;
}

let points: PointX = {
  x: 123,
  y: "王",
};

//4. type 联合类型 interface

interface SetNum {
  x: number;
}

type SetUser = SetNum | { name: string };

let setUserMsg: SetUser = {
  x: 123,
  name: "王",
};
// ======================================================
// 类可以以相同的方式实现接口或类型别名，但类不能实现使用类型别名定义的联合类型
// Implements

interface PointP {
  x: number;
  y: number;
}

class SomePoint implements PointP {
  x = 1;
  y = 2;
}

//type 也是同理

// 但是如果是联合类型 就会报错
interface SetNum1 {
  x: number;
}

type SetUser1 = SetNum1 | { name: string };

// class UserSome implements SetUser1 {
//   // error
//   x = 12;
//   name = "123";
// }

// ======================================================

// 与类型别名不同，接口可以定义多次，会被自动合并为单个接口

interface SomeType {
  x: number;
}

interface SomeType {
  Y: number;
}

let someSet: SomeType = {
  x: 12,
  Y: 12,
};
