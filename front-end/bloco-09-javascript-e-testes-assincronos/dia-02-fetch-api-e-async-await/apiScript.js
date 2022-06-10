// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const insertJoke = (joke) => {
    const jokeContainer = document.getElementById('jokeContainer');
    jokeContainer.innerHTML = joke;
}

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
      method: 'GET',
      headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => data.joke)
    .then(joke => insertJoke(joke));
};

window.onload = () => fetchJoke();