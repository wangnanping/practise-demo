//泛型（Generics）是允许同一个函数接受不同类型参数的一种模板。相比于使用 any 类型，使用泛型来创建可复用的组件要更好，因为泛型会保留参数类型。
function GenericsFun(name) {
    return name;
}
console.log(GenericsFun(2));
