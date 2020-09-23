// 类的属性和方法
// 在面向对象语言中，类是一种面向对象计算机编程语言的构造，是创建对象的蓝图，描述了所创建的对象共同的属性和方法。

// 类的属性和方法

class Greeters {
  // 静态属性
  static nameVal: string = "王";
  // 成员属性
  age: number = 26;
  message: string = "";

  // 构造函数 -执行初始化操作
  constructor(message: string) {
    this.message = message;
  }

  // 静态方法
  static getNameVal() {
    return this.nameVal;
  }

  // 成员方法
  getAge() {
    return this.age;
  }
}

let greeterSons = new Greeters("介绍静态方法和成员方法及其属性");

// 由上介绍一下静态属性和方法、成员属性和方法
// 通过编译后的es5代码可以看出

// 静态属性和方法
/**
 * 静态属性
 * 与普通的成员属性不同，静态属性属于类本身而不属于类的任何实例。静态属性可以被看做是存储在类当中的全局变量，可以在任何地方通过类来访问它们。
 * 由于静态属性不受任何具体对象的限制，所以不需要建立类实例，而可以直接引用类中的静态属性
 * Greeters.nameVal;
 *
 * 静态方法
 * 由于静态方法不受任何具体对象的限制，所以不需要建立类实例就可以直接引用类中的方法
 * Greeters.getNameVal()
 */

// 成员属性和方法
/**
 * 需要通过实例化后 访问原型属性和方法
 */

//---------------------------
// 私有字段  #

class Person {
  #name: string; // 只能在类里面才能使用，外面使用都会报错
  constructor(name: string) {
    this.#name = name;
  }
  greet() {
    return `私有名称为: ${this.#name}`;
  }
}

let personSon = new Person("王先生");
// personSon.#name  // error 属性 "#name" 在类 "Person" 外部不可访问，因为它具有专用标识符。

//与常规属性（甚至使用 private 修饰符声明的属性）不同，私有字段要牢记以下规则：

// 私有字段以 # 字符开头，有时我们称之为私有名称；
// 每个私有字段名称都唯一地限定于其包含的类；
// 不能在私有字段上使用 TypeScript 可访问性修饰符（如 public 或 private）；
// 私有字段不能在包含的类之外访问，甚至不能被检测到。

//---------------------------
// 访问器 getter setter
class Accessor {
  private name: string;

  constructor() {}

  get getName() {
    return this.name;
  }

  set setName(val: string) {
    if (val) {
      this.name = val;
    }
  }
}

let example = new Accessor();
example.setName = "王楠楠";
console.log(example.getName);

//---------------------------
// 类继承
// 继承（Inheritance）是一种联结类与类的层次模型。
// 指的是一个类（称为子类、子接口）继承另外的一个类（称为父类、父接口）的功能，并可以增加它自己的新功能的能力，继承是类与类或者接口与接口之间最常见的关系。

class Admin {
  public name: string; // 共有属性 子类通过super也可以使用。
  constructor(val: string) {
    this.name = val;
  }

  getName() {
    return "获取到了继承方法";
  }
}

class son extends Admin {
  private age: number = 35; // 私有属性 只能在当前类使用
  constructor(name: string) {
    super(name);
  }

  getAdminFun() {
    return super.name;
  }
}

let sonExample = new son("王");
// sonExample.getName();
// sonExample.name;

// 未完待续
