let array = [1,2,3,4,5,6];
let i = 0 ; 
while (i <array.length) {
    console.log(array[i])
    i++;
}
console.log('\nb)');

for( let j of array){
    console.log(j);
}

console.log('\nc)');

array.forEach((elemento) => console.log(elemento));
 console.log('\nd)');

 for(let k of array){
    k+=1;
    console.log(k);
 }

 console.log('\ne)'); 
  let array1=[];
    for (let k of array){
        k+=1;
        array1.push(k);   ;
    }      
    console.log(array1)

console.log('\nf)');
let sumaarray = 0;
let contador=0;
for(let j of array){
    sumaarray+=j;
    contador ++;
}
let promedio = (sumaarray/contador)
console.log(promedio);

