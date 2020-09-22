// 接口和类型别名都可以用来描述对象的形状或函数签名

//接口
interface Point {
    x: number;
    y: number;
}

interface FunType {
    (name: string, age: number): void;
}

// 类型别名

type PointOne = {
    x: number;
    y: number;
}

type FunTypeOne = (name: string, age: number) => void;

// 未完待续 