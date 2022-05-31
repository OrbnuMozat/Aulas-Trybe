const { sum } = require('./exercicio2');

describe('Testando a função de soma', () => {
    it('Se a função sum retorna o valor experado para dois parâmetros', () => {
        expect(sum(2, 2)).toBe(4);
    });
    it('Verifica se a função funciona com mais de dois parâmetros', () => {
        expect(sum(2, 2, 2, 2, -5)).toBe(3);
    });
});

