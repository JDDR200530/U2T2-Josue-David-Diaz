
let input = prompt("Ingresa los números separados por coma:");

let numerosString = input.split(",");


let numeros = numerosString.map(function(numeroString) {
    return parseInt(numeroString.trim()); 
});

console.log("El array de números es:", numeros);
