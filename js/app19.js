function esPerfecto(numero) {
    let sumaDivisores = 0;
    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            sumaDivisores += i;
        }
    }
    return sumaDivisores === numero;
}

const numero = parseInt(prompt("Ingrese un número:"));

if (esPerfecto(numero)) {
    console.log(`${numero} es un número perfecto.`);
} else {
    console.log(`${numero} no es un número perfecto.`);
}
