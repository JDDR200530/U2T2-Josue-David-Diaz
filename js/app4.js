let frase = prompt('Escriba una frase: ').toLowerCase();
let contador = 0;
for(let i = 0 ; i < frase.length ; i++) {
    if(frase[i] === 'a'){
        contador++;
    }
}

console.log(`La letra a en la frase aparece : ${contador} en total `);