let testScope = escopo => {
    if (escopo === true) {
      var ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      var elseScope = `Não devo ser utilizada fora meu escopo (else)`;
      console.log(elseScope);
    }
}

testScope(true);

// Faça uma função que retorne o array oddsAndEvens em ordem crescente. Use template literals e arrow functions.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordena = () => {oddsAndEvens.sort((a, b) => a - b); return oddsAndEvens}

const order = ordena();

console.log(`"Os números ${order} se encontram ordenadas de forma crescente`);