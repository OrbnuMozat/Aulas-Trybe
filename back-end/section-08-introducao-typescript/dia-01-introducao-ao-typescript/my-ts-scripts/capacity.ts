// ./capacity.ts
import readline from 'readline-sync';

const cunits = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];

function convertCapacity(value: number, fromUnit: string, toUnit: string): number {
    const fromIndex = cunits.indexOf(fromUnit);
    const toIndex = cunits.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);

    return value * Math.pow(10, exponent);
}

function execC() {
    const value = readline.questionFloat('Digite o valor a ser convertido: \n');
    const from = readline.keyInSelect(cunits, 'Escolha a unidade a ser convertida: \n');
    const to = readline.keyInSelect(cunits, 'Escolha a unidade para converter: \n');
    const fromIndex = cunits[from];
    const toIndex = cunits[to];
  
    const result = convertCapacity(value, fromIndex, toIndex);
  
    console.log(`${value}${fromIndex} é igual a ${result}${toIndex}`);
  }
  
  execC();