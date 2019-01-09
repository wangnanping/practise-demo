// TS 类的定义
console.log("-----------------------类的定义-------------------")
//es5

// function Person(name) {
//     this.name = name;
//     this.run = function() {
//         console.log(name);
//     }
// }
// var per = new Person("王");
//  per.run();

// ts 定义类

class Person {
    name: string; // 属性 省略public关键字
    constructor(n: string) { // 构造函数 实例化类的时候触发的方法
        this.name = n;
    }
    run(): void {
        console.log(this.name);
    }
    getName(): string {
        return this.name;
    }
    setName(name: string): void {
        this.name = name;
    }
}
let per = new Person("王");
per.run();
console.log(per.getName());
per.setName("小");
per.run();

// ts 中实现继承  extends 、 super

console.log("-------------------继承---------------")

class Father {
    name: string
    num: number
    constructor(name: string, num: number) {
        this.name = name;
        this.num = num;
    }
    consologFun(): void {
        console.log(this.name)
    }
}
class FatherSon extends Father {
    constructor(name: string, num: number) {
        super(name, num); // 初始化父类的构造函数
    }
    work(): void {  // 继承父类方法，也可扩展方法
        console.log("我可以直接访问父类的属性，因为我继承了,数字为" + this.num);
    }
    consologFun(): void {
        console.log("当父类和子类方法相同的时候，会先从子类先找方法,没有才去父类找")
    }
}

let per1 = new FatherSon("继承了点方法", 20);
per1.consologFun();
per1.work();

// 3. 修饰符

/**
 * public  :公有类型  在类里面 、子类、类外面都可以访问
 * protected :保护类型  在类里面、子类里面可以访问，在类外部没法访问
 * private ：私有类型  在类里面可以访问，子类、类外部不能访问
 * 
 */

// ------------修饰符 public ------
console.log("--------------修饰符 public protected private--------------")

class Father1 {
    public name: string
    protected num: string
    private wo:string
    constructor(name: string, num: string, wo:string) {
        this.name = name;
        this.num = num;
        this.wo = wo;
    }

}
class Son1 extends Father1 {
    constructor(name: string, num: string, wo:string) {
        super(name,num,wo);
    }
    run(): void {
        console.log(this.name);
    }
    run1(): void {
        console.log(this.num+"---我可以在子类里面被访问");
    }
    run2(): void{
        // 错误的写法 外部是无法访问，之所有能运行，是因为转化成了ES5
        console.warn(this.wo+"看代码有报错---我可以在子类里面被访问");
    }
}
let per3 = new Son1("我是public", "我是protected","我是private");
per3.run();
console.log("获取公有属性per3.name--->" + per3.name)
per3.run1();
console.warn("获取公有属性per3.num--->错误的写法--->" + per3.num); // 错误的写法 外部是无法访问，之所有能运行，是因为转化成了ES5
per3.run2();
console.warn("获取公有属性per3.wo--->错误的写法--->" + per3.wo);

 