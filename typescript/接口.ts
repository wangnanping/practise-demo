/**
 typeScript中的接口

    5.1 属性类接口
    5.2 函数类型接口
    5.3 可索引接口
    5.4 类类型接口
    5.5 接口扩展


    接口的作用：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范，在程序设计里面，接口起到一种限制和规范的作用。接口定义了某一批类所需要遵守的规范，接口不关心这些类的内部状态数据，也不关心这些类里方法的实现细节，它只规定这批类里必须提供某些方法，提供这些方法的类就可以满足实际需要。 typescrip中的接口类似于java，同时还增加了更灵活的接口类型，包括属性、函数、可索引和类等。

定义标准。
 */

console.log('--------------Ts接口--------------------')
function printName(label: { a: string }): void {
  console.log(label)
}
//  printName({name:'***'}) // 错误的
printName({ a: '****' })

// 接口，行为和动作的规范，对批量方法进行约束
interface FullName {
  age: number
  name: string
}

function printName1(val: FullName) {
  // 必须传入对象 age  name
}

//  传入的参数必须包含 age 和name  两个属性
let printVal = {
  age: 12,
  name: '王先生',
  woi: '123'
}

printName1(printVal)

// 只读属性

interface ReadonlyVal {
  readonly x: number
  readonly y: number
}

let xy: ReadonlyVal = { x: 12, y: 13 }
// 错误
// xy.x = 34; //x为只读属性 一旦定义  不能再做修改

// 类型 返回值
interface TypeArray {
  width: number
  height: number
  [propName: string]: any
}
function planFun(
  label: TypeArray
): { widthProduct: number; heightProduct: number } {
  // 这种写法就是必须要返回这两个参数
  let pageStyle = { widthProduct: 0, heightProduct: 0, color: 'red' }
  if (label.width) {
    pageStyle.widthProduct = label.width * label.width
  }
  if (label.height) {
    pageStyle.heightProduct = label.height * label.height
  }
  return pageStyle
}
let planVal = planFun({ width: 12, height: 18 })
console.log(planVal) //{widthProduct: 144, heightProduct: 324, color: "red"}
// 报错
// let onePlanVal = planFun({ width: 12, option: 18 }) // option不是TypeArray已知属性 可以添加字符串索引签名
let onePlanVal = planFun({ width: 12, height: 12, option: 18 })
// 断言
let AssertionVal: Array<number> = [1, 2, 3, 4, 5] // 简写类型 number<>
let AssertionReadOnly: ReadonlyArray<number> = AssertionVal

// 错误
// AssertionVal = AssertionReadOnly; 将只读数组赋值给一个普通数组会报错
AssertionVal = AssertionReadOnly as number[]
console.log(AssertionVal)
