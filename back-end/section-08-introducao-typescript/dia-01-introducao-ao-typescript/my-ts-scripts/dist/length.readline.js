"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];
function convert(value, fromUnit, toUnit) {
    const fromIndex = units.indexOf(fromUnit); // pegamos o index da unidade base no array
    const toIndex = units.indexOf(toUnit); // pegamos o index da unidade para a conversão
    const exponent = (toIndex - fromIndex); // calculamos o expoente a partir da diferença dos index
    return value * Math.pow(10, exponent);
}
function exec() {
    const value = readline_sync_1.default.questionFloat('Digite o valor a ser convertido: \n');
    const from = readline_sync_1.default.keyInSelect(units, 'Escolha a unidade a ser convertida: \n');
    const to = readline_sync_1.default.keyInSelect(units, 'Escolha a unidade para converter: \n');
    const fromIndex = units[from];
    const toIndex = units[to];
    const result = convert(value, fromIndex, toIndex);
    console.log(`${value}${fromIndex} é igual a ${result}${toIndex}`);
}
exec();
