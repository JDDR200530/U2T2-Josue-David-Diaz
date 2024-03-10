let frase = prompt("Ingrese una string ");
let primerCaracter = frase.charAt(0);
if (primerCaracter === primerCaracter.toUpperCase()){
    console.log('El string comienza con Mayuscula ');
}
else {
    console.log('El string comienza con minuscula ');
}