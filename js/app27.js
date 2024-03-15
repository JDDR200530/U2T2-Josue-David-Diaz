function obtenerNumerosPares(arreglo) {
    return arreglo.reduce(function(resultado, numero) {
        if (numero % 2 === 0) { 
            resultado.push(numero);
        }
        return resultado;
    }, []); 
}

let array = [];
while (true){
    let numero = parseInt(prompt("Ingrese un numero"));
    array.push(numero);
    let opcion = prompt("Desea seguir ingresando numeros? (si / no)").toLowerCase();
    if (opcion !== 'si'){
        break;
    }
}

let numerosPares = obtenerNumerosPares(array);
console.log("Los números pares son: ", numerosPares); 
