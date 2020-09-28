// 类装饰器

// 例子 用类装饰器重现
// https://www.jianshu.com/p/022988da4dc1?utm_campaign=maleskine&utm_content=note&utm_medium=seo_notes&utm_source=recommendation

// 类装饰器声明：

// declare type ClassDecorators = <TFunction extends Function>(
//   target: TFunction
// ) => TFunction | void;

// 类装饰器顾名思义，就是用来装饰类的。它接收一个参数：

// target: TFunction - 被装饰的类

function Greeter(target: Function) {
  console.log(target);
  target.prototype.greet = function () {
    console.log("Hello Semlinker!");
  };
}

@Greeter
class Greetings {
  constructor() {
    // 内部实现
  }
}

let myGreeting = new Greetings();
myGreeting.greet();

// -------------------------------------------------------------------------------------------------------------
// 属性装饰器
// 属性装饰器声明：

// declare type PropertyDecorators = (
//   target: Object,
//   propertyKey: string | symbol
// ) => void;

// 属性装饰器顾名思义，用来装饰类的属性。它接收两个参数：

// target: Object - 被装饰的类
// propertyKey: string | symbol - 被装饰类的属性名

function logPrototype(target: any, key: string) {
  delete target[key];

  const backingFirld = "_" + key;

  Object.defineProperty(target, backingFirld, {
    writable: true,
    enumerable: true,
    configurable: true,
  });

  const geeter = function (this: any) {
    const val = this[backingFirld];
    console.log(`Get: ${key} => ${val}`);
    return val;
  };

  const seeter = function (this: any, newVal: any) {
    this[backingFirld] = newVal;
    console.log(`Set: ${key} => ${newVal}`);
  };

  Object.defineProperty(target, key, {
    get: geeter,
    set: seeter,
    enumerable: true,
    configurable: true,
  });
}

class Person {
  @logPrototype
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const p1 = new Person("semlinker");
p1.name = "kakuqo";
console.log(p1.name);

// -------------------------------------------------------------------------------------------------------------
// 方法装饰器

// 方法装饰器声明：

// declare type MethodDecoratorA = <T>(target:Object, propertyKey: string | symbol,
//   descriptor: TypePropertyDescript<T>) => TypedPropertyDescriptor<T> | void;

// 方法装饰器顾名思义，用来装饰类的方法。它接收三个参数：

// target: Object - 被装饰的类
// propertyKey: string | symbol - 方法名
// descriptor: TypePropertyDescript - 属性描述符

function LogOutputs(tarage: any, key: string, descriptor: any) {
  let originalMethod = descriptor.value;
  let newMethod = function (...args: any[]): any {
    let result: any = originalMethod.apply(this, args);
    if (!this.loggedOutput) {
      this.loggedOutput = new Array<any>();
    }
    this.loggedOutput.push({
      method: key,
      parameters: args,
      output: result,
      timestamp: new Date(),
    });
    return result;
  };
  descriptor.value = newMethod;
}

class Calculator {
  loggedOutput: number = 4;
  constructor() {}
  @LogOutputs
  double(num: number): number {
    return num * 2;
  }
}

let calc = new Calculator();
calc.double(11);
// console ouput: [{method: "double", output: 22, ...}]
console.log(calc.loggedOutput);

// -------------------------------------------------------------------------------------------------------------
// 参数装饰器

// 参数装饰器声明：

// declare type ParameterDecorator = (target: Object, propertyKey: string | symbol,
//   parameterIndex: number ) => void
// 参数装饰器顾名思义，是用来装饰函数参数，它接收三个参数：

// target: Object - 被装饰的类
// propertyKey: string | symbol - 方法名
// parameterIndex: number - 方法中参数的索引值
function Log(target: Function, key: string, parameterIndex: number) {
  let functionLogged = key || target.prototype.constructor.name;
  console.log(`The parameter in position ${parameterIndex} at ${functionLogged} has
 been decorated`);
}

class Greeters {
  greeting: string;
  constructor(@Log phrase: string) {
    this.greeting = phrase;
  }
}

// console output: The parameter in position 0
// at Greeter has been decorated
