// typeof
// 可以用来获取一个变量声明或对象的类型

interface PersonE {
  name: string;
  ages: number;
}

const sem: PersonE = { name: "王先生", ages: 23 };
type Sem = typeof sem; // type Sem = PersonE

function toArray(x: number): Array<number> {
  return [x];
}

type funC = typeof toArray; //  type funC = (x:number) =>  Array<number>
