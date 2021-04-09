const victor = {
    nombre: 'Victor',
    apellido: 'Briseño',
    edad: 19
}

function imprimirNombreYEdad(persona) {
    const { nombre } = persona;
    const { edad } = persona;
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`);
}

imprimirNombreYEdad(victor);


function cumpleanos(persona){
    return {
        ...persona,
        edad: persona.edad + 1
    }
}


