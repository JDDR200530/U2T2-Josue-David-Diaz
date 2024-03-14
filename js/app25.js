let color = prompt("Ingrese el color").toLocaleLowerCase();
let array = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];
if (color.includes(color)){
    console.log(`el color: ${color}, Si esta dentro del array`);  
}
else {
    console.log(`el color: ${color}, No esta dentro del array`);
}