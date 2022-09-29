const askName = require('./askName');
const getPackegeNpm = require('./npmModule')

async function main() {
  const name  = askName();
  const response = await getPackegeNpm(name);
  if (response) {
    console.log(`${name} é um pacote npm!`)
  } else {
    console.log(`${name} não é um pacote npm!`);
  }
}

main();