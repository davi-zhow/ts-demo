interface Alarm {
    alert(): void;
    stop(): void;
    voice: string;
}

interface Light {
    lightOn(): void;
    lightOff(): void;
}
interface signalLamp extends Light {
    color: string;
}
//接口继承类时会继承类定义的属性和实例方法，构造函数和静态属性和方法除外
interface SercuityBox extends Door {
    alert(status: boolean): void;
}

class Door {
    constructor(public key: string = "key", public materials: string = "woodiness") {

    }
    open(key: string): boolean {
        if (key === this.key) {
            return true;
        }
        return false;
    }
}

class SercuityBox implements SercuityBox {
    public key: string = 'key';
    public materials: string = "woodiness"
    alert(status: boolean): void {
        if (status) {
            console.log("密码输入正确")
        }
        console.log('密码输入错误')
    }
    open(key: string): boolean {
        if (key === this.key) {
            this.alert(true);
            return true;
        }
        this.alert(false);
        return false;
    }
}
let sercuityBox = new SercuityBox()
console.log(sercuityBox);
class SecurityDoor extends Door implements Alarm {
    private alarmId;
    public voice = 'SercurityDoor alert';
    alert() {
        this.alarmId = setTimeout(() => {
            console.log(this.voice)
        }, 1000)
    }
    //如果一个类对一个接口进行了实现，必须对接口定义的方法和属性进行全部实现
    stop() {
        if (this.alarmId) {
            clearTimeout(this.alarmId);
        }
    }
}

class Car implements Alarm, Light { //类可以实现多个
    private alarmId;
    public voice = 'car alert';
    alert() {
        this.alarmId = setTimeout(() => {
            console.log(this.voice)
        }, 1000)
    }
    //如果一个类对一个接口进行了实现，必须对接口定义的方法和属性进行全部实现
    stop() {
        if (this.alarmId) {
            clearTimeout(this.alarmId);
        }
    }
    lightOff() {
        console.log('Car light off');
    }
    lightOn() {
        console.log('Car light on')
    }
}

class Point {
    constructor(public x: number, public y: number) {
        this.x = x;
        this.y = y;
    }
    getDistanceTo(point: Point): number {
        return Math.sqrt((point.x - this.x) * (point.x - this.x) + (point.y - this.y) * (point.y - this.y))
    }
}
interface PointInstanceType {
    x: number;
    y: number;
    getDistanceTo(point: Point): number;
}

function printPoint(p: PointInstanceType) {
    console.log(p.x, p.y)
}


// let point_1: PointInstanceType = {
//     x: 1,
//     y: 3,
//     getDistanceTo(point: Point) {
//         return Math.sqrt((point.x - this.x) * (point.x - this.x) + (point.y - this.y) * (point.y - this.y))
//     }
// }

let point_2: PointInstanceType = new Point(1, 2);
console.log(point_2)
printPoint(point_2);
interface Test {
    name: string;
    [index: string]: string;

}
let test: Test = {
    name: 'java',
};
test[1] = 'ee';