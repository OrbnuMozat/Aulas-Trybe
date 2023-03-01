// ./area.ts
import readline from "readline-sync";

const aunits = ["km²", "hm²", "dam²", "m²", "dm²", "cm²", "mm²"];

function convertArea(value: number, fromUnit: string, toUnit: string): number {
    const fromIndex = aunits.indexOf(fromUnit);
    const toIndex = aunits.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);

    return value * Math.pow(100, exponent);
}

function execA() {
    const value = readline.questionFloat('Digite o valor a ser convertido: \n');
    const from = readline.keyInSelect(aunits, 'Escolha a unidade a ser convertida: \n');
    const to = readline.keyInSelect(aunits, 'Escolha a unidade para converter: \n');
    const fromIndex = aunits[from];
    const toIndex = aunits[to];
  
    const result = convertArea(value, fromIndex, toIndex);
  
    console.log(`${value}${fromIndex} é igual a ${result}${toIndex}`);
  }
  
  execA();