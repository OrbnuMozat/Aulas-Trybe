const sum = (...rest) => rest.reduce((acc, curr) => acc + curr);

module.exports = { sum };