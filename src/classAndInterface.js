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
var Door = /** @class */ (function () {
    function Door(key, materials) {
        if (key === void 0) { key = "key"; }
        if (materials === void 0) { materials = "woodiness"; }
        this.key = key;
        this.materials = materials;
    }
    Door.prototype.open = function (key) {
        if (key === this.key) {
            return true;
        }
        return false;
    };
    return Door;
}());
var SercuityBox = /** @class */ (function () {
    function SercuityBox() {
        this.key = 'key';
        this.materials = "woodiness";
    }
    SercuityBox.prototype.alert = function (status) {
        if (status) {
            console.log("密码输入正确");
        }
        console.log('密码输入错误');
    };
    SercuityBox.prototype.open = function (key) {
        if (key === this.key) {
            this.alert(true);
            return true;
        }
        this.alert(false);
        return false;
    };
    return SercuityBox;
}());
var sercuityBox = new SercuityBox();
console.log(sercuityBox);
var SecurityDoor = /** @class */ (function (_super) {
    __extends(SecurityDoor, _super);
    function SecurityDoor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.voice = 'SercurityDoor alert';
        return _this;
    }
    SecurityDoor.prototype.alert = function () {
        var _this = this;
        this.alarmId = setTimeout(function () {
            console.log(_this.voice);
        }, 1000);
    };
    //如果一个类对一个接口进行了实现，必须对接口定义的方法和属性进行全部实现
    SecurityDoor.prototype.stop = function () {
        if (this.alarmId) {
            clearTimeout(this.alarmId);
        }
    };
    return SecurityDoor;
}(Door));
var Car = /** @class */ (function () {
    function Car() {
        this.voice = 'car alert';
    }
    Car.prototype.alert = function () {
        var _this = this;
        this.alarmId = setTimeout(function () {
            console.log(_this.voice);
        }, 1000);
    };
    //如果一个类对一个接口进行了实现，必须对接口定义的方法和属性进行全部实现
    Car.prototype.stop = function () {
        if (this.alarmId) {
            clearTimeout(this.alarmId);
        }
    };
    Car.prototype.lightOff = function () {
        console.log('Car light off');
    };
    Car.prototype.lightOn = function () {
        console.log('Car light on');
    };
    return Car;
}());
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
        this.x = x;
        this.y = y;
    }
    Point.prototype.getDistanceTo = function (point) {
        return Math.sqrt((point.x - this.x) * (point.x - this.x) + (point.y - this.y) * (point.y - this.y));
    };
    return Point;
}());
function printPoint(p) {
    console.log(p.x, p.y);
}
// let point_1: PointInstanceType = {
//     x: 1,
//     y: 3,
//     getDistanceTo(point: Point) {
//         return Math.sqrt((point.x - this.x) * (point.x - this.x) + (point.y - this.y) * (point.y - this.y))
//     }
// }
var point_2 = new Point(1, 2);
console.log(point_2);
printPoint(point_2);
var test = {
    name: 'java'
};
test[1] = 'ee';
