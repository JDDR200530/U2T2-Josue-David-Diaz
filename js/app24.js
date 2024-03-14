let hasta = parseInt(prompt("Ingrese hasta cuantos numero quiera que tenga el array"))
let array = [];
for (let i =0 ; i <hasta; i++){
    let numero = Math.floor(Math.random()*1000)+1;
array.push(numero);
}
console.log(array);