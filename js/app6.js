const numero = parseInt(prompt('Ingrese el numero'));
let contador = 0;
console.log(`El numero : ${numero} es divisible entre: `);
for(let i =0; i<=numero; i++){
    if (numero%i === 0 ){
        contador++;
        console.log(i);
    }
}
