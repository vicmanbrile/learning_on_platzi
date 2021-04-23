const victor = {
    nombre: 'Victor',
    apellido: 'Briseño',
    edad: 19
}

const mario = {
    nombre: 'mario',
    apellido: 'Joan',
    edad: 43
}


function imprimirEnMayus(persona) {
    var { nombre } = persona;
    console.log(nombre.toUpperCase());
}

imprimirEnMayus(victor);
imprimirEnMayus(mario);

//Reto de crear una funcion que imprima nombre y edad

function imprimirNombreYEdad(persona) {
    const { nombre } = persona;
    const { edad } = persona;
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`);
}

imprimirNombreYEdad(victor);
