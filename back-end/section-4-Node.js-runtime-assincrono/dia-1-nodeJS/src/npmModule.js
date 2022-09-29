const fetch = require('node-fetch');

const getPackegeNpm = async (name) => {
  const url = `https://registry.npmjs.org/${name}`;
  const response = await fetch(url);
  if(!response.ok) {
    return false;
  }
  const data = response.json();
  return data;
}

module.exports = getPackegeNpm;