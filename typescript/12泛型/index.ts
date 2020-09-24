//泛型（Generics）是允许同一个函数接受不同类型参数的一种模板。相比于使用 any 类型，使用泛型来创建可复用的组件要更好，因为泛型会保留参数类型。

function GenericsFun<T>(name: T): T {
  return name;
}

console.log(GenericsFun<number>(2));

// 调用GenericsFun<number>(2)， number就会替换所有T, number只是充当类型  还可以是string等

// 其中 T 代表 Type，在定义泛型时通常用作第一个类型变量名称。但实际上 T 可以用任何有效名称代替。除了 T 之外，以下是常见泛型变量代表的意思：

// K（Key）：表示对象中的键类型；
// V（Value）：表示对象中的值类型；
// E（Element）：表示元素类型。

// 引入新的类型 U
function NewGenericsFun<T, U>(name: T, age: U): T {
  return name;
}

console.log(NewGenericsFun<string, number>("王", 20));

// 泛型接口

interface GenericIdentityFn<T> {
  (arg: T): T;
}

// 泛型类

class GenericNumber<T> {
  value: T;
  add: (x: T, y: T) => T;
}

let newGenericNumber = new GenericNumber<number>();
newGenericNumber.value = 0;
newGenericNumber.add = (x, y) => {
  return x + y;
};


