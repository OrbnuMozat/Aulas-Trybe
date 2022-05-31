// loginValidation.test.js
const sum = require('./sum');

it('sums two values', () => {
  expect(sum(2, 3)).toBe(5);
});

const {
    greetingMessage,
    loginErrorMessage,
    verifyCredentials,
  } = require("./loginValidation.js");
  
  describe("a função verifyCredentials()", () => {
  
    it("verifyCredentials() calls the correct function depending on the user and password input", () => {
  
      const user = {
        userName: 'Bob',
        password: 123456,
      };
  
      const { userName, password } = user;
  
      expect(verifyCredentials({ userName, password })).toBe(
        "Pessoa usuária 'Bob' não encontrada, tente novamente!"
      );
    });

    it('verifyCredentials() greeting Message ok', () => {

        const user = {
            userName: 'Joana',
            password: 123456,
        };

        const { userName, password } = user;

        expect(verifyCredentials({ userName, password })).toBe(
            "Hello, Joana! Que bom ter você de volta"
            );
    });
  
    it("greetingMessage() returns a message in the format: `Hello, ${user}! Que bom ter você de volta`", () => {
      expect(greetingMessage("Lucas")).toBe(
        "Hello, Lucas! Que bom ter você de volta"
      );
    });
  
    it("loginErrorMessage() returns a message in the format: `Pessoa usuária '${user}' não encontrada, tente novamente!`", () => {
      expect(loginErrorMessage("Bob")).toBe(
        "Pessoa usuária 'Bob' não encontrada, tente novamente!"
      );
    });
  });

  // Testando mensagens de erro Throw

  const multiplyByTwo = (number) => {
    if (!number) {
      throw new Error('number é indefinido')
    }
    return number * 2;
  };
  multiplyByTwo(4);
  
describe('Confere multiplicação por 2', () => {
  it('testa se multiplyByTwo retorna o resultado da multiplicação', () => {
    expect(multiplyByTwo(4)).toBe(8);
  });
  it('testa se é lançado um erro quando number é indefinido', () => {
    expect(() => { multiplyByTwo() }).toThrow();
  });
  it('testa se a mensagem de erro é "number é indefinido"', () => {
    expect(() => { multiplyByTwo() }).toThrowError(new Error('number é indefinido'));
  });
});