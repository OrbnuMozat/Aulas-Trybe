const createUl = (id) => {
    const container = document.getElementById('cryptoContainer')
    const ul = document.createElement('ul');
    ul.id = id;
    container.appendChild(ul);
};

const insertCryptoInUl = (cryptoMoeda) => {
    const cryptoList = document.getElementById('cryptoList');
    const newLi = document.createElement('li');
    newLi.innerHTML = cryptoMoeda;
    cryptoList.appendChild(newLi);
};


const fetchCrypto = async () => {
    const url = `https://api.coincap.io/v2/assets`;
    
    const crypto = await fetch(url)
    .then(response => response.json())
    .then(dataArray => dataArray.data)
    .then(arrayCrypto => prepareCryptoList(arrayCrypto))
    .catch((error) => error.toString());
    return crypto;
};

const fetchCurrencies = async () => {
    const url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json';

    const brlCurrencies = await fetch(url)
        .then(response => response.json())
        .then(data => data.usd)
        .then(currencies => currencies.brl)
        .catch((error) => error.toString());
    return brlCurrencies;
};

const prepareCryptoList = async (dataArrayCrypto) => {
    const filterTenFirstCrypto = dataArrayCrypto.slice(0, 10);
    const currencies = await fetchCurrencies();
    createUl('cryptoList');
    filterTenFirstCrypto.map((crypto) => {
        const { name, symbol, priceUsd } = crypto;
        const priceUsdNumber = Number(priceUsd);
        const priceBrlNumber = Number(currencies);
        const priceBrl = priceUsdNumber * priceBrlNumber;
        const priceBrl2Dec = priceBrl.toFixed(2);
        const text = `${name} (${symbol}) - R$ ${priceBrl2Dec}`;
        return insertCryptoInUl(text);
    });
};

window.onload = () => fetchCrypto();