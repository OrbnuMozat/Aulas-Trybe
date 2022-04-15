console.log(document.getElementById('elementoOndeVoceEsta'));

document.getElementById('elementoOndeVoceEsta').parentNode.style.color = 'red';

let textFilhoFilho = document.getElementById('primeiroFilhoDoFilho');

textFilhoFilho.innerText = "Teste";

document.getElementById('elementoOndeVoceEsta').appendChild = textFilhoFilho;

console.log(document.getElementById('pai').firstElementChild);

console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling);

console.log(document.getElementById('elementoOndeVoceEsta').parentNode.innerText);

console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);

console.log(document.getElementById('pai').firstElementChild.nextElementSibling.nextElementSibling);
