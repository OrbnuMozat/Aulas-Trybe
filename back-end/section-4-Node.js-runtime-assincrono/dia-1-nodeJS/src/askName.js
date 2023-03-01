const readline = require('readline-sync');

const askName = () => {
  const name = readline.question('Digite um nome: ');
  return name;
}

module.exports = askName;