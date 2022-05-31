const { filterPeople } = require('./exercicio4');

describe('Testa função filterPeople', () => {
    it('Testa se filterPeople é uma função', () => {
        expect(typeof filterPeople).toBe('function');
    });
    it('Testa se retorna corretanente o filtro para Australianos', () => {
        expect(filterPeople([ { name: 'Bruno', bornIn: 1985, nationality: 'Australian' }, { name: 'Samira', bornIn: 1985, nationality: 'Brazilian', } ] )).toEqual([{ name: 'Bruno', bornIn: 1985, nationality: 'Australian' }]);
    });
    it('Testa se retorna array vazio caso não hajam australianos', () => {
        expect(filterPeople([ { name: 'Bruno', bornIn: 1985, nationality: 'Brazilian' }, { name: 'Samira', bornIn: 1985, nationality: 'Brazilian', } ] )).toEqual([]);
    });
});