// ./mass.ts

import readline from 'readline-sync';

const munits = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];

function convertMass(value: number, fromUnit: string, toUnit: string): number {
    const fromIndex = munits.indexOf(fromUnit);
    const toIndex = munits.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);

    return value * Math.pow(10, exponent);
}

function exeMass() {
    const value = readline.questionFloat('Digite o valor a ser convertido: \n');
    const from = readline.keyInSelect(munits, 'Escolha a unidade a ser convertida: \n');
    const to = readline.keyInSelect(munits, 'Escolha a unidade para converter: \n');
    const fromIndex = munits[from];
    const toIndex = munits[to];
  
    const result = convertMass(value, fromIndex, toIndex);
  
    console.log(`${value}${fromIndex} é igual a ${result}${toIndex}`);
  }
  
  exeMass();