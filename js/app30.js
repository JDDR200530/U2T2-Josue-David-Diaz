function encontrarNumeroMenor(arreglo) {
    if (arreglo.length === 0) {
        return undefined; // Devuelve undefined si el arreglo está vacío
    }

    let menor = arreglo[0]; // Suponemos que el primer elemento es el menor

    // Iteramos sobre el arreglo para encontrar el número menor
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] < menor) {
            menor = arreglo[i];
        }
    }
    if (menor < 0) {
        return Math.abs(menor);
    }

    return menor;
}

let array = [];
while (true){
    let numeros = parseInt(prompt("Ingrese un numero"))
    array.push(numeros);
    let opccion = prompt("Desea continuar si/no").toLowerCase();
    if (opccion != 'si'){
        break;
    }
}
console.log(encontrarNumeroMenor(array));

