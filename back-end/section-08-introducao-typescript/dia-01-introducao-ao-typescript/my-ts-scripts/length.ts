import readline from 'readline-sync';

type Tunits = 'km' | 'hm' | 'dam' | 'm' | 'dm' | 'cm' | 'mm'; // predefine valores que pode receber

enum mesureUnit {
  km = 1000,
  hm = 100,
  dam = 10,
  m = 1,
  dm = 0.1,
  cm = 0.01,
  mm = 0.001,
}

function convertS<T>(value: number, unitBase: T, unitConvert: T) {
  return (
    (value * mesureUnit[<Tunits>unitBase]) / mesureUnit[<Tunits>unitConvert]
  );
}

function exec() {
  const unitsS = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
  const option = {
    limit: unitsS,
    limitMessage:
      'Sorry, $<lastInput> is not valid unit.\nUnit must be in lowerCase.\n',
    caseSensitive: true,
  };
  const value = readline.questionFloat('Digite o valor a ser convertido: \n');
  const from = readline.question(
    'Digite a unidade a ser convertida: \n',
    option
  );
  const to = readline.question('Digite a unidade para converter: \n', option);

  const result = convertS(value, from, to);

  console.log(`${value}${from} é igual a ${result}${to}`);
}

exec();
