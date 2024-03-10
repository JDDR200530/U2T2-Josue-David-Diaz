let String = prompt("Ingrese un string : ");
 let primer = String.charAt(0);
 if (isNaN(primer)){
    console.log("EL string comienza con una Letra  ");
 }
 else {
    console.log('El string empieza con un Numero ');
 }