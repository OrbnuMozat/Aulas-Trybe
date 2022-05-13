// const sum = (value1, value2) => value1 + value2;

// console.log(sum(5, 8));
// console.log(sum(5, '8'));

// Aqui vemos um problema ao somar o segundo console.log
// ----------------------------------------------------------
// const sum = (value1, value2) => {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//         return 'Os valores devem ser numéricos';
//     }
//     return value1 + value2;
// };

// console.log(sum(5, 8));
// console.log(sum(5, '8'));

// Esta seria uma solução, mas não é o ideal pois retorna uma string como resultado de uma soma
// ----------------------------------------------------------
// const sum = (value1, value2) => {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//         throw new Error('Os valores devem ser numéricos');
//     }
//     return value1 + value2;
// };

// console.log(sum(5, 8));
// console.log(sum(5, '8'));

// Já melhora porque gera um erro. Linha 22 função throw new error
// ----------------------------------------------------------
const verifyIsNumber = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
        throw new Error('Os valores devem ser numéricos');
    }
};

const sum = (value1, value2) => {
    try {
        verifyIsNumber(value1, value2);
        return value1 + value2;
    } catch (error) {
        throw error.message;
    }
};
// console.log(sum(5, '8));

// Neste caso usa try e catch.
// -------------------------------------------------------------
const wife = {
    firstName: 'Samira',
    age: 37
};

let newKey = 'lastName';
const lastName = 'Tomaz';
wife[newKey] = lastName;
newKey = 'fullName';
const fullName = `${wife.firstName} Andrade de Santana Diniz ${wife.lastName}`;
wife[newKey] = fullName;

// console.log(wife);

// Atribuindo novas chaves eu um objeto
//--------------------------------------------------------------
const coolestTvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    createdBy: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
  };
  
//   for (const property in coolestTvShow) {
//     console.log(property);
//   }
  
//   console.log(Object.keys(coolestTvShow));

// Forma mais fácil de obter as chaves sem precisar de um for
// -------------------------------------------------------------
const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };

// const testMyForm = (estudante) => {
//     for (let hability in estudante) {
//     console.log(`${hability}, Nível:${estudante[hability]}`);
//     };
// }
// testMyForm(student1);
// testMyForm(student2);

const listSkills = (student) => {
    const arrayOfSkills = Object.keys(student);
    for (const i in arrayOfSkills) {
        console.log(`${arrayOfSkills[i]}, Nível: ${student[arrayOfSkills[i]]}`);
    }
}

console.log('Estudante 1');
listSkills(student1);

console.log('Estudante 2');
listSkills(student2);

// Para saber se algo está em uma array use .includes. Vai retorna true ou false. Ex.
// console.log(Object.keys(student1).includes('Css'));
