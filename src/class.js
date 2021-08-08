var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class Animal {
var Animal = /** @class */ (function () {
    // public name; // 访问不受限制
    // private name; // 仅在类内部可以访问
    // protected name; // 仅在类和子类内可以访问
    // protected constructor(name) {
    // public constructor(public name) {
    // public constructor(public readonly name) {
    //     //设置成只读后构造函数内是可以初始化的，其他成员函数就不能进行复重新赋值了
    //     this.name = name;
    //     this.name = "test";
    function Animal(name) {
        this.name = name;
        //设置成只读后构造函数内是可以初始化的，其他成员函数就不能进行复重新赋值了
        this.name = name;
    }
    Animal.prototype.setName = function (name) {
        this.name = name;
    };
    return Animal;
}());
var a = new Animal("Jack");
// console.log(a.name);
// a.name = "Tom";
// console.log(a.name);
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        var _this = _super.call(this, name) || this;
        console.log(_this.name);
        return _this;
    }
    return Cat;
}(Animal));
var cat = new Cat("Tom");
cat.setName("Big Tom");
console.log(cat.name);
