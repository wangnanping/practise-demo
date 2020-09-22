var getName = function (name) {
    return name;
};
getName("旺旺");
getName(undefined);
// 联合类型
//称为字面量类型，用来约束取值只能是某几个值中的一个
var num = 1;
console.log(num);
//2.type 语句中可以使用 typeof 获取类型实例
// 当你想获取一个变量的类型时，使用 typeof
var div = document.createElement("div");
var test = {
    firstname: "Pawel",
    surname: "Grzybek"
};
// 报错
//interface DudeType {
//  [key in keys]: string
//}
// 4. interface能够声明合并，type不能
// =========可辨识联合
// 1.可辨识
var type;
(function (type) {
    type["name"] = "\u65FA\u65FA";
    type[type["age"] = 12] = "age";
})(type || (type = {}));
var kilometre = 20;
var count = function (val) {
    // return val.BenchiOilConsumption * kilometre; //error 如果使用Aodi Baoma 就没有BenchiOilConsumption属性
    // 类型守卫
    switch (val.typeName) {
        case "Aodi":
            return val.AodiOilConsumption * kilometre;
        case "Baoma":
            return val.baomaOilConsumption * kilometre;
        case "Benchi":
            return val.BenchiOilConsumption * kilometre;
        default:
            return 0;
    }
};
console.log(count({ typeName: "Benchi", BenchiOilConsumption: 10 }));
