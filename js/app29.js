function calcularPromedio(arreglo) {
    if (arreglo.length === 0) {
        return 0; 
    }
    let suma = arreglo.reduce(function(total, elemento) {
        return total + elemento;
    }, 0);
    let promedio = suma / arreglo.length;

    return promedio;
}
let array = [];
while(true){
    let numero = parseInt(prompt('Ingrese un numero'))
    array.push(numero);
    let opccion = prompt('Si deseea ingresar otro numero si / no ').toLowerCase();
    if (opccion != 'si'){
        break;
    }
}
console.log(calcularPromedio(array));