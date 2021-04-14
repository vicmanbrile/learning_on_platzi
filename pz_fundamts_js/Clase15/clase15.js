var contador = 0;

const llueve = () => Math.random() < .25;

do{
    contador++
} while (!llueve());

const freccuencia = ()  => contador === 1 ? console.log(`fui ${contador} vez y estaba lloviendo`) : console.log(`Fui a ver si llovia ${contador} veces, hasta que lo hizo`);

freccuencia();