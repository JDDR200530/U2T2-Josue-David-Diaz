const angulo1 = parseInt(prompt('Ingrese el primer angulo '));
const angulo2 = parseInt(prompt('Ingrese el segundo angulo'));
const angulo3 = parseInt(prompt('Ingrese el tercer angulo '));
let sumadeAngulos = angulo1+angulo2+angulo3;
if (sumadeAngulos >= 180){
    console.log('El triangulo si exite');
}
else {
    console.log('El triangulo no existe');
}