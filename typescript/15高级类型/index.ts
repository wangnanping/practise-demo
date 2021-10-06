// intersection Type(交叉类型)
type LeftType = {
  id: number
  left: string
}

type RightType = { id: number; right: string }

type intersectionType = LeftType & RightType

function showType (args: intersectionType) {
  console.log(args)
}

showType({ id: 1, left: 'left', right: 'right' })

// union types(联合类型)
type UnionType = number | string

function unionShowType (arg: UnionType) {
  console.log(arg)
}
unionShowType('1')
unionShowType(1)

// Generic Types(泛型)
function genericFun<T> (arg: T) {
  console.log(arg)
}
genericFun<number>(1)
genericFun<string>('2')

interface GenericType<T> {
  id: number
  name: T
}

function interfaceGenericFun (arg: GenericType<number>) {
  console.log(arg)
}
interfaceGenericFun({ id: 1, name: 2 })

interface GenericMoreType<T, U> {
  id: T
  name: U
}

function interfaceGenericMoreFun (arg: GenericMoreType<number, string>) {
  console.log(arg)
}

interfaceGenericMoreFun({ id: 1, name: '1' })

// Utility Types
// TypeScript 内部也提供了很多方便实用的工具，可帮助我们更轻松地操作类型。如果要使用它们，你需要将类型传递给<>

// Partial<T>
// Partial 允许你将T类型的所有属性设为可选。它将在每一个字段后面添加一个?

interface PartialType {
  id: number
  name: string
}

function PartialTypeFun (arg: Partial<PartialType>) {
  console.log(arg)
}

PartialTypeFun({ id: 123 })

// Required<T>
// 与Partial相反  全部为必传

// Readonly<T> 只读 不可重新赋值

interface ReadonlyType {
  id: string
  name: number
}
function ReadonlyTypeFun (ages: Readonly<ReadonlyType>) {
  // ages.id = '123'; // 错误
  console.log(ages)
}
ReadonlyTypeFun({ id: 'qwe', name: 2 })

// Pick<T, K>
// 抽取当前接口某些属性作为一个新的类型

interface PickType {
  id: number
  left: string
  right: string
}

function PickTypeFun (age: Pick<PickType, 'left' | 'right'>) {
  console.log(age)
}

PickTypeFun({ left: '2', right: '3' })

// Omit<T, K>
// 与Pick用法一致，作用为删除属性

// Extract<T, U>
// 提取两个接口属性的交集，作为一个新的类型

interface ExtractOne {
  id: number
  name: string
}

interface ExtractTwo {
  id: number
  age: string
}

type ExtractType = Extract<keyof ExtractOne, keyof ExtractTwo>


