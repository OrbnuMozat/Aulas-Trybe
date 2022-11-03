import readline from 'readline-sync';

// ./volume.ts

const vunits = ["km³", "hm³", "dam³", "m³", "dm³", "cm³", "mm³"];

function convertVolum(value: number, fromUnit: string, toUnit: string): number {
    const fromIndex = vunits.indexOf(fromUnit);
    const toIndex = vunits.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);

    return value * Math.pow(1000, exponent);
}

function execV() {
    const value = readline.questionFloat('Digite o valor a ser convertido: \n');
    const from = readline.keyInSelect(vunits, 'Escolha a unidade a ser convertida: \n');
    const to = readline.keyInSelect(vunits, 'Escolha a unidade para converter: \n');
    const fromIndex = vunits[from];
    const toIndex = vunits[to];
  
    const result = convertVolum(value, fromIndex, toIndex);
  
    console.log(`${value}${fromIndex} é igual a ${result}${toIndex}`);
  }
  
  execV();