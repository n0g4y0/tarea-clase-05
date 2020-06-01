const todosLosNumeros = document.querySelectorAll('li');
const valoresACalcular = [];

for(let i = 0 ; i < todosLosNumeros.length; i++ ){
    valoresACalcular.push(Number(todosLosNumeros[i].innerText));
}

console.log(valoresACalcular);

function calculoDePromedio(valoresACalcular){

    let sumatoria = 0;

    for(let i = 0 ; i < valoresACalcular.length; i++ ){
        sumatoria += valoresACalcular[i];
    }

    return sumatoria / valoresACalcular.length;


}

function calculoDelMayorValor(valoresACalcular){

     
    let numeroMayor = -100000;

    for(let i = 0 ; i < valoresACalcular.length; i++ ){
        
                if(valoresACalcular[i] > numeroMayor){
                    numeroMayor = valoresACalcular[i];
                }
        

    }

    return numeroMayor;


}

function calculoDelMenorValor(valoresACalcular){

     
    let numeroMenor = 1000000;

    for(let i = 0 ; i < valoresACalcular.length; i++ ){
        
                if(valoresACalcular[i] < numeroMenor){
                    numeroMenor = valoresACalcular[i];
                }
    }

    return numeroMenor;


}

function calculoDelMasFrecuente(valoresACalcular){

     
    let numeroFrecuente = -1;
    let contador = 1;
    let contadorTemporal = 1;

    for(let i = 0 ; i < valoresACalcular.length; i++ ){

        let numeroFrecuenteTemporal = valoresACalcular[i];
        
        for(let j = 0; j < valoresACalcular.length; j++){
                if(numeroFrecuenteTemporal === valoresACalcular[j] && i !== j){
                    contadorTemporal++
                }
        }
        if(contadorTemporal > contador){

            numeroFrecuente = numeroFrecuenteTemporal
            contador = contadorTemporal;

        }
        contadorTemporal = 1;

    }

    return numeroFrecuente;


}

console.log(calculoDelMayorValor(valoresACalcular));
console.log(calculoDelMenorValor(valoresACalcular));
console.log(calculoDelMasFrecuente(valoresACalcular));


document.querySelector("#label-promedio").textContent = `El promedio es: ${calculoDePromedio(valoresACalcular)}`;
document.querySelector("#label-pequenio").textContent = `El Numero mas Pequeño es : ${calculoDelMenorValor(valoresACalcular)}`;
document.querySelector("#label-mayor").textContent = `El Numero mas grande es : ${calculoDelMayorValor(valoresACalcular)}`;
document.querySelector("#label-frecuente").textContent = `El Numero mas frecuente es : ${calculoDelMasFrecuente(valoresACalcular)}`;
