let numero = parseInt(prompt('Ingrese un numero'));
function VerificarNumero(numero){
    if (Number.isInteger(numero)){
        console.log(`El numero ${numero} es entero`);
    }
    else {
        console.log(`El numero ${numero} no es entero`);
    }
}
VerificarNumero(numero);