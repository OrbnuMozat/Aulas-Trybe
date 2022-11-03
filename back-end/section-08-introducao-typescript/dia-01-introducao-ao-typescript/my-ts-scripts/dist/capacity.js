"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// ./capacity.ts
const readline_sync_1 = __importDefault(require("readline-sync"));
const cunits = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];
function convertCapacity(value, fromUnit, toUnit) {
    const fromIndex = cunits.indexOf(fromUnit);
    const toIndex = cunits.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);
    return value * Math.pow(10, exponent);
}
function execC() {
    const value = readline_sync_1.default.questionFloat('Digite o valor a ser convertido: \n');
    const from = readline_sync_1.default.keyInSelect(cunits, 'Escolha a unidade a ser convertida: \n');
    const to = readline_sync_1.default.keyInSelect(cunits, 'Escolha a unidade para converter: \n');
    const fromIndex = cunits[from];
    const toIndex = cunits[to];
    const result = convertCapacity(value, fromIndex, toIndex);
    console.log(`${value}${fromIndex} é igual a ${result}${toIndex}`);
}
execC();
