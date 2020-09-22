let getName = (name: string | undefined): string | undefined => {
  return name;
};

getName("旺旺");
getName(undefined);

// 联合类型

//称为字面量类型，用来约束取值只能是某几个值中的一个

let num: 1 | 2 = 1;
console.log(num);

type active = "clcik" | "wangasd" | "moer";

// interface 和 type 的区别
//1.type可以声明 基本类型，联合类型，元组 的别名，interface不行

// 基本类型别名
type Name = string;

// 联合类型
interface Dog {
  wong();
}
interface Cat {
  miao();
}

type Pet = Dog | Cat;

// 具体定义数组每个位置的类型
type PetList = [Dog, Pet];

//2.type 语句中可以使用 typeof 获取类型实例
// 当你想获取一个变量的类型时，使用 typeof
let div = document.createElement("div");
type B = typeof div;

//3.type 支持类型映射，interface不支持
type Keys = "firstname" | "surname";

type DudeType = {
  [key in Keys]: string;
};

const test: DudeType = {
  firstname: "Pawel",
  surname: "Grzybek",
};

// 报错
//interface DudeType {
//  [key in keys]: string
//}

// 4. interface能够声明合并，type不能

// =========可辨识联合

// 1.可辨识
enum type {
  name = "旺旺",
  age = 12,
}

interface Names {
  types: "Names";
  text: string;
}

interface Ages {
  types: "Ages";
  text: type;
}
// types 可辨识属性

// 2.类型守卫

//宝马
interface Baoma {
  typeName: "Baoma";
  baomaOilConsumption: number;
}
//奥迪
interface Aodi {
  typeName: "Aodi";
  AodiOilConsumption: number;
}
//奔驰
interface Benchi {
  typeName: "Benchi";
  BenchiOilConsumption: number;
}

type CarType = Baoma | Aodi | Benchi;

let kilometre: number = 20;

const count: any = (val: CarType): number => {
  // return val.BenchiOilConsumption * kilometre; //error 如果使用Aodi Baoma 就没有BenchiOilConsumption属性
  // 类型守卫
  switch (val.typeName) {
    case "Aodi":
      return val.AodiOilConsumption * kilometre;
    case "Baoma":
      return val.baomaOilConsumption * kilometre;
    case "Benchi":
      return val.BenchiOilConsumption * kilometre;
    default:
      return 0;
  }
};

console.log(count({ typeName: "Benchi", BenchiOilConsumption: 10 }));

// 类型别名
type Message = string | string[];
