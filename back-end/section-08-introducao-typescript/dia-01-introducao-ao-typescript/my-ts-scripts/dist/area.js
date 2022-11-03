"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// ./area.ts
const readline_sync_1 = __importDefault(require("readline-sync"));
const aunits = ["km²", "hm²", "dam²", "m²", "dm²", "cm²", "mm²"];
function convertArea(value, fromUnit, toUnit) {
    const fromIndex = aunits.indexOf(fromUnit);
    const toIndex = aunits.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);
    return value * Math.pow(100, exponent);
}
function execA() {
    const value = readline_sync_1.default.questionFloat('Digite o valor a ser convertido: \n');
    const from = readline_sync_1.default.keyInSelect(aunits, 'Escolha a unidade a ser convertida: \n');
    const to = readline_sync_1.default.keyInSelect(aunits, 'Escolha a unidade para converter: \n');
    const fromIndex = aunits[from];
    const toIndex = aunits[to];
    const result = convertArea(value, fromIndex, toIndex);
    console.log(`${value}${fromIndex} é igual a ${result}${toIndex}`);
}
execA();
