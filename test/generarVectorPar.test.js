import App from '../src/main';

test('generarVectorPar() tamaño', () => {
  let myApp = new App();
  expect(myApp.generarVectorPar(15, 15, 30).length).toBe(15);
});

test('generarVectorPar() contiene pares', () => {
  let myApp = new App();
  let pares = myApp.generarVectorPar(15, 15, 30);

  for (const par of pares) {
    expect(par % 2).toBe(0);
  }
});
