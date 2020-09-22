// 对象解构
let person = {
    names: "wang",
    age: 25
}

let { names, age } = person;
console.log(names + age);

// 对象展开运算符
let personOne = {
    xs: 1,
    b: 2,
    c: 3
}

let personFather = { ...personOne, y: 4 };
let { xs, ...p } = personFather;
console.log(xs);
console.log(p);