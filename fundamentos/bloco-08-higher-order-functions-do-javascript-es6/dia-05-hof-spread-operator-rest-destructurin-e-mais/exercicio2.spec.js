const { sum } = require('./exercicio2');

describe('Testando a função de soma', () => {
    it('Se a função sum retorna o valor experado para 2 + 2', () => {
        expect(sum(2, 2)).toBe(4);
    });
});