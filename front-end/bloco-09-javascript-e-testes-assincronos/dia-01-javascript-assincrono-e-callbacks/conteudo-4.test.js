// Falso positivo

test('Não deveria passar! - Falso Positivo', () => {
  setTimeout(() => {
    expect(10).toBe(5);
    console.log('Deveria falhar!');
  }, 500);
});

// Falha com mensagem timeout

test('Não deveria passar! - Mensagem Timeout - falso negativo', (done) => { //add parâmetro done (callback da bibiloteca)
  setTimeout(() => {
    expect(10).toBe(5);
    console.log('Deveria falhar!');
    done(); // add
  }, 500);
});

// Falso positivo

test('Não deveria passar! - Outro falso positivo', (done) => {
  setTimeout(() => {
    try { // add
      expect(10).toBe(5);
      console.log('Deveria falhar!');
      done();
    } catch (error) { // add
      done(); // add
    }
  }, 500);
});

// Correto

test('Não deveria passar! - Agora falhou corretamente', (done) => {
    setTimeout(() => {
     try {
      expect(10).toBe(5);
      console.log('Deveria falhar!');
      done();
     } catch (error) {
      done(error); // linha alterada
     }
    }, 500);
  });