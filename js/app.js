let numero1 = parseFloat(prompt('Ingrese el primer numero'));
let numero2 = parseFloat(prompt('Ingrese el segundo numero '));
if(numero1 > numero2){
    console.log(`El numero ${numero1} es mayor que el numero ${numero2} `);
}
else if (numero1 < numero2){
    console.log(`El numero ${numero2} es mayor que el numero ${numero1} `);
}
else {
    console.log(`EL numero ${numero1} es igual al numero ${numero2}`);
}