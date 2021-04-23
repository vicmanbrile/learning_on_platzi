var sacha = {
    nombre: 'sacha',
    apellido: 'Lifszyc',
    edad: 8,
    ingeniero:true,
    cocinero: true,
    dj: false,
    guitarista: false,
    drone: false
}

function imprimirProfeciones(persona) {
    console.log(`${persona.nombre} es:`);

    if (persona.ingeniero){
        console.log('ingeniero');
    } else

    if (persona.cocinero){
        console.log('cocinero');
    }

    if (persona.dj){
        console.log('dj');
    }

    if (persona.guitarista){
        console.log('guitarista');
    }

    if (persona.drone){
        console.log('piloto de drone');
    }

}

imprimirProfeciones(sacha);

function mayorDeEdad(persona) {
    if (persona.edad > 18) {
        console.log(persona.nombre + ' es mayor de edad');
    } else {
        console.log(persona.nombre + ' es menor de edad')
    }
}

mayorDeEdad(sacha);