console.log(document.getElementById('elementoOndeVoceEsta'));

document.getElementById('elementoOndeVoceEsta').parentNode.style.color = 'red';

let textFilhoFilho = document.getElementById('primeiroFilhoDoFilho');

textFilhoFilho.innerText = "Teste";

console.log(document.getElementById('pai').firstElementChild);

console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling);

console.log(document.getElementById('elementoOndeVoceEsta').parentNode.innerText);

console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);

console.log(document.getElementById('pai').firstElementChild.nextElementSibling.nextElementSibling);

let newArticle = document.createElement('section');

newArticle.id = 'brother'

document.getElementById('elementoOndeVoceEsta').parentNode.appendChild(newArticle);

console.log(document.getElementById('brother'));

let neto = document.createElement('section');

neto.id = 'neto';

document.getElementById('elementoOndeVoceEsta').appendChild(neto);

console.log(document.getElementById('neto'));

let bisneto = document.createElement('section');

bisneto.id = 'bisneto';

document.getElementById('primeiroFilhoDoFilho').appendChild(bisneto);

console.log(document.getElementById('bisneto'));

console.log(document.getElementById('bisneto').parentNode.parentNode.nextElementSibling);

let pai = document.getElementById('pai');

pai.removeChild(document.getElementById('brother'));

console.log(pai);

pai.removeChild(document.getElementById('primeiroFilho'));

pai.removeChild(document.getElementById('terceiroFilho'));

pai.removeChild(document.getElementById('quartoEUltimoFilho'));

let ondeVoceEsta = document.getElementById('elementoOndeVoceEsta');

ondeVoceEsta.removeChild(document.getElementById('segundoEUltimoFilhoDoFilho'));

ondeVoceEsta.removeChild(document.getElementById('neto'));