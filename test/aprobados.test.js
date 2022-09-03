import App from '../src/main';

test('aprobados()', () => {
  let myApp = new App();
  let alumnos = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
  let calificacion = [10, 9, 8, 7, 6, 7, 8];
  let aprobados = ['a', 'b', 'c', 'g'];
  expect(myApp.aprobados(alumnos, calificacion)).toEqual(aprobados);
});
