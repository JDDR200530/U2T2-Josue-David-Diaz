let  N = parseInt(prompt('Ingrese el primer numero: '))
let  M = parseInt(prompt('Ingrese el segundo numero: '))
if (M > N){
    let suma= 0;
    let numero= N;
    while (numero <= M){
        if(numero%2 == 0 ){
            suma += numero;
        }
        numero ++;
        }
    console.log(`La suma de los numero pares emprando por el numero: ${N}, hasta el numero : ${M}, es de: ${suma}`);
}
else{
    alert ('El numero que ingreso no es valido')
}