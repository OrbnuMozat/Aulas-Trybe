"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
// ./volume.ts
const vunits = ["km³", "hm³", "dam³", "m³", "dm³", "cm³", "mm³"];
function convertVolum(value, fromUnit, toUnit) {
    const fromIndex = vunits.indexOf(fromUnit);
    const toIndex = vunits.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);
    return value * Math.pow(1000, exponent);
}
function execV() {
    const value = readline_sync_1.default.questionFloat('Digite o valor a ser convertido: \n');
    const from = readline_sync_1.default.keyInSelect(vunits, 'Escolha a unidade a ser convertida: \n');
    const to = readline_sync_1.default.keyInSelect(vunits, 'Escolha a unidade para converter: \n');
    const fromIndex = vunits[from];
    const toIndex = vunits[to];
    const result = convertVolum(value, fromIndex, toIndex);
    console.log(`${value}${fromIndex} é igual a ${result}${toIndex}`);
}
execV();
