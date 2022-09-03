import App from '../src/main';

test('invertir()', () => {
  let myApp = new App();
  let vector = [1, 2, 3, 4, 5, 6];
  let result = [6, 5, 4, 3, 2, 1];

  expect(myApp.invertir(vector)).toEqual(result);
});
