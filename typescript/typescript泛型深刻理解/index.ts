// 泛型

const foo = <T>(arg: T) => arg
console.log(foo(4))

class Foo<T, U> {
  constructor (public arg1: T, arg2: U) {}
  public method (): T {
    return this.arg1
  }
}

let newFoo = new Foo(4, 2)
console.log(newFoo.method())
