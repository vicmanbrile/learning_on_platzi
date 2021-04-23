var nombre = 'Carlos';

var victor = {
    nombre: 'Victor',
    apellido: 'Briseño',
    edad: 19
}

var mario = {
    nombre: 'mario',
    apellido: 'Joan',
    edad: 43
}

function imprimirEnMayus(nombre) {
    var nombre = nombre.toUpperCase();
    console.log(nombre);
}


function imprimirEnMayus2(nombre) {
    var nombre = nombre.nombre.toUpperCase();
    console.log(nombre);
}


function imprimirEnMayus3({nombre}) {
    console.log(nombre.toUpperCase());
}


imprimirEnMayus(nombre);


imprimirEnMayus2(victor);


imprimirEnMayus3(mario);
imprimirEnMayus3({nombre: 'Pepe'});