let numero1 = parseFloat(prompt('Ingrese el primer numero:  '))
let numero2 = parseFloat(prompt('Ingrese el segundo numero:  '))
let numero3 = parseFloat(prompt('Ingrese el tercer numero:  '))
if (numero3 > numero1 && numero3 > numero2){
console.log(`El numero ${numero3} es mayor que el numero ${numero1}  y el numero ${numero2}`);
}
else if (numero2 > numero1 && numero2 > numero3){
    console.log(`El numero ${numero2} es mayor que el numero ${numero1}  y el numero ${numero3}`);
}
else if (numero1 > numero2 && numero1 > numero3){
    console.log(`El numero ${numero1} es mayor que el numero ${numero2}  y el numero ${numero3}`);
} 
else {
    console.log(`los numeros ${numero1} , ${numero2} y ${numero3} son iguales`);
}