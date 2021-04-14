var victor = {
    nombre: "Victor",
    apellido: 'Leon',
    edad: 19,
    peso: 75
}


console.log(`Al inicio del anio ${victor.nombre} pesa ${victor.peso} Kg`);


const DIAS_DEL_ANIO = 365;


for (var i = 1; i <= DIAS_DEL_ANIO; i++){

    var random = Math.random();
    const DIFERENCIA_PESO = 0.2;

    const incrementaDePeso = persona => persona.peso += DIFERENCIA_PESO;
    const disminuyeDePeso = persona => persona.peso -= DIFERENCIA_PESO;


    if (random < 0.25){
        incrementaDePeso(victor);
    } else if(random < 0.5) {
        disminuyeDePeso(victor);
    }
}



console.log(`Al final del anio ${victor.nombre} pesa ${victor.peso.toFixed(2)} Kg`);


//GENERAR NUMENOS ENTEROS DE MANERA ALEATORIA
const numMax = 10;
const numMin = 1;
const numRandom = () => Math.round(Math.random() * (numMax - numMin) + numMin);

console.log(numRandom());