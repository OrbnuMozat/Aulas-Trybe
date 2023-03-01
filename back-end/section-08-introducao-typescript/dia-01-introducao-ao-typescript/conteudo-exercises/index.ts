import * as Exercise from './exercises';

console.log(Exercise.greeter('Maria'));
console.log(Exercise.personAge('Maria', 40));
console.log(`A soma do array é igual a ${Exercise.sumArray([3, 6, 9])}`);

console.log(`Triângulo de base 10cm e altura 25cm: ${Exercise.triangle(10, 25)}cm²`);
console.log(`Triângulo de base 5cm e altura 30cm: ${Exercise.triangle(5, 30)}cm²`);
console.log(`Triângulo de base 100cm e altura 200cm: ${Exercise.triangle(100, 200)}cm²`);

console.log(`Quadrado de lado 10cm: ${Exercise.square(10)}cm²`);
console.log(`Quadrado de lado 5cm: ${Exercise.square(5)}cm²`);
console.log(`Quadrado de lado 100cm: ${Exercise.square(100)}cm²`);

console.log(`Retângulo de base 10cm e altura 25cm: ${Exercise.rectangle(10, 25)}cm²`);
console.log(`Retângulo de base 5cm e altura 30cm: ${Exercise.rectangle(5, 30)}cm²`);
console.log(`Retângulo de base 100cm e altura 200cm: ${Exercise.rectangle(100, 200)}cm²`);

console.log(`Losango de Diagonal Maior 32cm e diagonal menor 18cm: ${Exercise.losangle(32, 18)}cm²`);
console.log(`Losango de Diagonal Maior 200cm e diagonal menor 50cm: ${Exercise.losangle(200, 50)}cm²`);
console.log(`Losango de Diagonal Maior 75cm e diagonal menor 25cm: ${Exercise.losangle(75, 25)}cm²`);

console.log(`Trapézio com altura de 50cm, base maior 100cm e base menor 70cm: ${Exercise.trapeze(50, 100, 70)}cm²`)
console.log(`Trapézio com altura de 35cm, base maior 75cm e base menor 50cm: ${Exercise.trapeze(35, 75, 50)}cm²`)
console.log(`Trapézio com altura de 80cm, base maior 150cm e base menor 120cm: ${Exercise.trapeze(80, 150, 120)}cm²`)

console.log(`Circulo de Raio 25cm: ${Exercise.circle(25)}cm²`)
console.log(`Circulo de Raio 100cm: ${Exercise.circle(100)}cm²`)
console.log(`Circulo de Raio 12,5cm: ${Exercise.circle(12.5)}cm²`)

console.log(`Segunda-feira: ${Exercise.DaysOfWeek.Monday}º dia da semana`);
console.log(`Terceiro dia da Semana: ${Exercise.DaysOfWeek[3]}`);