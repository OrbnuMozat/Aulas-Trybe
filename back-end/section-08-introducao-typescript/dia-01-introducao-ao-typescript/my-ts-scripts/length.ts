type Tunits = "km" | "hm" | "dam" | "m" | "dm" | "cm" | "mm"; // predefine valores que pode receber

enum mesureUnit {
  km = 1000,
  hm = 100,
  dam = 10,
  m = 1,
  dm = 0.1,
  cm = 0.01,
  mm = 0.001,
}

function convertS(value: number, unitBase: Tunits, unitConvert: Tunits) {
  
  return (value * mesureUnit[unitBase]) / mesureUnit[unitConvert];
};

console.log(`Conversão de 10000m para km: ${convertS(10000, 'm', 'km')}km`);