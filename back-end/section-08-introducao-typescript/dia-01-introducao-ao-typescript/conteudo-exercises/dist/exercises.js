"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DaysOfWeek = exports.circle = exports.trapeze = exports.losangle = exports.rectangle = exports.square = exports.triangle = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
function greeter(name) {
    return `Olá ${name}!`;
}
exports.greeter = greeter;
function personAge(name, age) {
    return `${name} tem ${age} anos!`;
}
exports.personAge = personAge;
function add(x, y) {
    return x + y;
}
exports.add = add;
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
function triangle(base, height) {
    return (base * height) / 2;
}
exports.triangle = triangle;
function square(side) {
    return side ** 2;
}
exports.square = square;
function rectangle(base, height) {
    return base * height;
}
exports.rectangle = rectangle;
function losangle(diagonalLarge, diagonalSmall) {
    return (diagonalLarge * diagonalSmall) / 2;
}
exports.losangle = losangle;
function trapeze(height, largeBase, smallBase) {
    return ((largeBase + smallBase) * 2) / 2;
}
exports.trapeze = trapeze;
function circle(radius) {
    return (radius ** 2) * 3.14;
}
exports.circle = circle;
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["Sunday"] = 1] = "Sunday";
    DaysOfWeek[DaysOfWeek["Monday"] = 2] = "Monday";
    DaysOfWeek[DaysOfWeek["Tuesday"] = 3] = "Tuesday";
    DaysOfWeek[DaysOfWeek["Wednesday"] = 4] = "Wednesday";
    DaysOfWeek[DaysOfWeek["Thursday"] = 5] = "Thursday";
    DaysOfWeek[DaysOfWeek["Friday"] = 6] = "Friday";
    DaysOfWeek[DaysOfWeek["Saturday"] = 7] = "Saturday";
})(DaysOfWeek = exports.DaysOfWeek || (exports.DaysOfWeek = {}));
