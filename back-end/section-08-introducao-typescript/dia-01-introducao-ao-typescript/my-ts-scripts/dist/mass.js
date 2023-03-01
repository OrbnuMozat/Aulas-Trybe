"use strict";
// ./mass.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const munits = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];
function convertMass(value, fromUnit, toUnit) {
    const fromIndex = munits.indexOf(fromUnit);
    const toIndex = munits.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);
    return value * Math.pow(10, exponent);
}
function exeMass() {
    const value = readline_sync_1.default.questionFloat('Digite o valor a ser convertido: \n');
    const from = readline_sync_1.default.keyInSelect(munits, 'Escolha a unidade a ser convertida: \n');
    const to = readline_sync_1.default.keyInSelect(munits, 'Escolha a unidade para converter: \n');
    const fromIndex = munits[from];
    const toIndex = munits[to];
    const result = convertMass(value, fromIndex, toIndex);
    console.log(`${value}${fromIndex} é igual a ${result}${toIndex}`);
}
exeMass();
