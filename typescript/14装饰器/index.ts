// 类装饰器

// 例子 用类装饰器重现
// https://www.jianshu.com/p/022988da4dc1?utm_campaign=maleskine&utm_content=note&utm_medium=seo_notes&utm_source=recommendation

// function Greeters(target: Function): void {
//   target.prototype.getText = function (): void {
//     console.log("hello world");
//   };
// }

// @Greeters
// class MyGerrter {
//   consturctor() {}
// }

// let myGerrtering = new MyGerrter();
// myGerrtering.getText();

// 属性装饰器

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
console.log(p1.name)
