let numeroAleatorio = Math.floor(Math.random()*10)+1;
 let intento = parseInt(prompt('Ingrese un numero del 1 al 10'))

 if (intento == numeroAleatorio){
    console.log('Buen trabajo');
 }
 else {
    console.log('Vuelva a intentarlo');
 }
 