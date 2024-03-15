function invertirArreglo(arreglo) {
    let nuevoArreglo = [];
    for (let i = arreglo.length - 1; i >= 0; i--) {
        nuevoArreglo.push(arreglo[i]);
    }

    return nuevoArreglo;
}

let array = [];
while (true){
    let numero = parseInt(prompt("Ingres un numero"))
    array.push(numero);
    let opccion = prompt("Desea continuar si / no").toLowerCase()
    if (opccion != 'si'){
        break;
    }
}
console.log(invertirArreglo(array));