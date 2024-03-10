let Frase = prompt('Ingrese una frase ').toLowerCase();
let contadoA = 0;
let contadoE = 0;
let contadoI = 0;
let contadoO = 0;
let contadoU = 0;
for (let i = 0 ; i<Frase.length ;i++ ){
    if(Frase[i]=== 'a'){
        contadoA ++;
    }

    if (Frase[i]=== 'e'){
        contadoE ++;
    }

    if (Frase[i]=== 'i'){
        contadoI ++;
    }
   
    if (Frase[i]=== 'o'){
        contadoO ++;
    }

    if (Frase[i]=== 'u'){
        contadoU ++;
    }
}

console.log(`La letra a aparece : ${contadoA}\nLa letra e aparece: ${contadoE}\nLa letra i aparece: ${contadoI}\nLa letra o aparece: ${contadoO}\nLa letra u aparece: ${contadoU}`);