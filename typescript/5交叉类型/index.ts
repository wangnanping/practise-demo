// 例子  合并两个类型
type partial = { x: string };
type partialFather = partial & { y: number };

let point: partialFather = {
  x: "王",
  y: 2,
};

// 同名基础类型属性的合并

interface X {
  c: string;
  e: number;
}

interface Y {
  c: number;
  e: number;
}

type XY = X & Y;

// let XYval: XY = {
//   c: 1, // error 报错  c将改为naver 不存在的值  因为不可能存在number | string
//   e: 2,
// };

// 同名非基础类型属性的合并

interface A {
  a: string;
}

interface C {
  b: number;
}

interface D {
  d: number;
}

interface G {
  x: A;
}
interface E {
  x: C;
}

interface F {
  x: D;
}

type point = G & E & F;

let nums: point = {
  x: {
    a: "123",
    b: 12,
    d: 12,
  },
};
