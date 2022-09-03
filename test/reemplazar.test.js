import App from '../src/main';

test('reemplazar() veces reemplazado', () => {
  let myApp = new App();
  let vector = [1, 2, 3, 1, 4, 5, 6, 1];
  expect(myApp.reemplazar(vector, 1, 99)).toBe(3);
});

test('reemplazar() sin reemplazo', () => {
  let myApp = new App();
  let vector = [1, 2, 3, 1, 4, 5, 6, 1];
  expect(myApp.reemplazar(vector, 99, 99)).toBe(0);
});

test('reemplazar() contenido reemplazado', () => {
  let myApp = new App();
  let vector = [1, 2, 3, 1, 4, 5, 6, 1];
  let result = myApp.reemplazar(vector, 1, 99);
  let reemplazos = 0;

  for (const valor of vector) {
    if (valor === 99) {
      reemplazos++;
    }
  }

  expect(result).toBe(reemplazos);
});
