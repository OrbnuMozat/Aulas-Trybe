// Interpretação
// Usar array numbers
// pecorrer=loop
// imprima=console.log

// Algoritmo
// Adicionar array numbers
// cria loop for para percorrer array
// console.log para imprimir resultado

// Codificação

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);
}

// Interpretação
// soma indica criação de variavel para soma
// todos valores do array indica um loop
// imprima o resultado indica um console.log

// Algoritmo
// usar arrey numbers
// criar variavel sum com valor 0
// criar loop for para percorrer array
// inserir a soma na variavel sum
// console.log para imprimi resultado

// Codificação

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0

for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
}
console.log(sum);

// Interpretação
// calcular indica criação de array para o calculo
// imprimir indica necessidade de console.log
// media indica divisão entre calculo e array.length
// calcular valores do array indica necessidade de loop

// Algoritmo
// usar array numbers
// criar variavel calc com valor 0
// criar loop para somar itens do array
// inserir a soma na variavel calc
// console.log com calc / numbers.length

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let calc = 0

for (let i = 0; i < numbers.length; i += 1) {
    calc += numbers[i];
}
console.log(calc / numbers.length)

// Interpretação
// usar codificação anterior
// caso indica uso de if/else
// imprimir indica console.log
// duas condições, maior ou menor/igual a 20

// Algoritmo
// copia codigo anterior
// insere resultado em uma variável
// insere condição if/else
// condição if > 20
//      console.log "valor maiors que 20"
// condição else
//      console.log "valor menor ou igual a 20"

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let calc = 0

for (let i = 0; i < numbers.length; i += 1) {
    calc += numbers[i];
}
let average = calc / numbers.length;

if (average > 20) {
    console.log('valor maior que 20');
} else {
    console.log('valor menor ou igual a 20');
}

