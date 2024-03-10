// ejercicio 13
let numero = parseInt(prompt('Ingrese un numero'))
for (let i = 0 ; i <= numero; i++){
    console.log(i);
}

//Ejercicio 14
let numero2= parseInt(prompt('Ingrese un numero'))
for (let i = 0 ; i <= numero2; i+= 2){
     console.log(i);
}

//Ejercicio 15 

let numero3 = parseInt(prompt('Ingrese un numero'));
for (let i = 0 ; numero3 >= i; numero3--){
    console.log(numero3);
}
//ejercicio 16

let numero4 = parseInt(prompt('Ingrese un numero'));
for (let i = 0; i <=12; i++){
     let j = i*numero4;
     console.log(j);
}

//ejercicio 17 

let N =parseInt(prompt('Ingrese el primer numero'))
let M =parseInt(prompt('Ingrese el segundo numero'));
if (M>N){
    let suma=0 
    for(let i=N; i <=M; i++){
        if(i%2 ===0){
            suma+=i
        }
    }
    console.log(`La suma de los numero pares emprando por el numero: ${N}, hasta el numero : ${M}, es de: ${suma}`);
}
else{
    alert ('El numero que ingreso no es valido')
}