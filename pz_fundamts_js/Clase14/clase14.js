var victor = {
    nombre: "Victor",
    apellido: 'Leon',
    edad: 19,
    peso: 75
}


console.log(`Al inicio del anio ${victor.nombre} pesa ${victor.peso} Kg`);


const DIFERENCIA_PESO = 0.3;


const incrementaDePeso = persona => persona.peso += DIFERENCIA_PESO;
const disminuyeDePeso = persona => persona.peso -= DIFERENCIA_PESO;

const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;


const META = victor.peso - 3;
var dias = 0;

while (victor.peso > META){
    if (comeMucho()){
        incrementaDePeso(victor);
    }
    if (realizaDeporte()){
        disminuyeDePeso(victor);
    }

    dias += 1;
}


console.log(`Pasaron ${dias} dias hasta que ${victor.nombre} adelgazo 3 Kg`);