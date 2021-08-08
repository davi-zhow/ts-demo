// class Animal {
abstract class Animal {
    // public name; // 访问不受限制
    // private name; // 仅在类内部可以访问
    // protected name; // 仅在类和子类内可以访问

    // protected constructor(name) {
    // public constructor(public name) {
    // public constructor(public readonly name) {
    //     //设置成只读后构造函数内是可以初始化的，其他成员函数就不能进行复重新赋值了
    //     this.name = name;
    //     this.name = "test";
    public constructor(public name) {
        //设置成只读后构造函数内是可以初始化的，其他成员函数就不能进行复重新赋值了
        this.name = name;
    }
    public abstract setName(name);
}

// let a = new Animal("Jack");
// console.log(a.name);
// a.name = "Tom";
// console.log(a.name);

class Cat extends Animal {
    constructor(name) {
        super(name);
        console.log(this.name);
    }
    public setName(name) {
        this.name = name;
    }
}

let cat = new Cat("Tom");
cat.setName("Big Tom");
console.log(cat.name);
