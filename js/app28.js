function ContadordeVocales(arreglo){
    function palabrasQueEmpiezanConVocal(palabras) {
        let vocales = new Set(['a', 'e', 'i', 'o', 'u']);
        return palabras.filter(function(palabra) {
            let primeraLetra = palabra.charAt(0).toLowerCase();
            return vocales.has(primeraLetra);
        });
    }
    
    let frase = prompt("Ingrese una frase");
    let arregloPalabras = frase.split(" ");
    return palabrasQueEmpiezanConVocal(arregloPalabras);
}

console.log(ContadordeVocales()); 
