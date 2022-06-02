const API_CRYPTO = `https://api.coincap.io/v2/assets`;

const insertInHtml = (cryptoMoeda) => {
    const cryptoList = document.getElementById('cryptoList');
    const newLi = document.createElement('li');
    newLi.innerHTML = cryptoMoeda;
    cryptoList.appendChild(newLi);
}

const prepareCryptoList = (dataArrayCrypto) => {
    const filterTenFirstCrypto = dataArrayCrypto.slice(0, 10);
    filterTenFirstCrypto.map((crypto) => {
        const { name, symbol, priceUsd } = crypto;
        const priceUsd2Dec = Number(priceUsd).toFixed(2);
        const text = `${name} (${symbol}) ${priceUsd2Dec}`;
        return insertInHtml(text);
    });
};

const fetchCrypto = () => {
    const objCrypto = {
        method: 'GET',
        headers: { 'Accept-Encoding': 'deflate' }
    };

    fetch(API_CRYPTO, objCrypto)
        .then(response => response.json())
        .then(dataArray => dataArray.data)
        .then(arrayCrypto => prepareCryptoList(arrayCrypto));
};

window.onload = () => fetchCrypto();