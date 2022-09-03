export default class App {
    esPar(numero) {
        if(numero % 2 == 0) {
            return true;
        } else {
            return false 
        }
    }

    generarAleatorio(a, b){

        let numero = Math.trunc (Math.random() * (b - a)) + a;

        return numero; 
    }

    generarVectorPar(n, a, b){
        let vector = [];

        let pares = 0;
        while(pares < n) {

            let numero = this.generarAleatorio(a, b);

            if(this.esPar(numero)) {
                vector.push(numero);
                pares++;
            }
        }

        return vector;
    }

    reemplazar(vector, numero1, numero2){
        let reemplazos = 0;

        for(let i = 0; i < vector.length; i++){

            if(vector[i] == numero1) {
                vector[i] = numero2;
                reemplazos++;
            }

            
        }

        return reemplazos;
    }

    invertir(vector){
        let invertido = [];

        for(let i = vector.length -1; i >= 0; i--) {
            invertido.push(vector[i]);
        }

        return invertido;
    }

    generarVector(n){
        let vector = [];

        for(let i = 0; i < n; i++);

        return vector;
    }

    aprobados(alumnos, calificaciones){
        let pasaron =[];

        for(let i = 0; i < calificaciones.length; i++) {
            if(calificaciones[i] >= 8) {
                pasaron.push(alumnos[i]);
            }
        }

        return pasaron;
    }


}

let app = new App();

console.log(app.generarAleatorio(40, 50));
console.log(app.generarVectorPar(10, 100, 110));
console.log(app.generarVector(6));

let v = [1, 2, 3, 4, 5, 6];

console.log(app.reemplazar(v, 3, 100));
console.log(v);
console.log(app.invertir(v));

let vAlumnos = ["Juan", "Pedro", "Rosa", "Maria", "Ramon"];
let vCalificaciones = [10, 7, 7, 8, 9];

