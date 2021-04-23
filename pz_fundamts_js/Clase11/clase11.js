var sacha = {
    nombre: 'sacha',
    apellido: 'Lifszyc',
    edad: 28
}

var pablo = {
    nombre: 'pablo',
    apellido: 'cabrera',
    edad: 18
}

const MOYORIA_DE_EDAD = 18;

function esMayordeEdad(persona){
    return persona.edad > MOYORIA_DE_EDAD;
}

function imprimirMayorDeEdad(persona) {
    if (esMayordeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`);
    } else {
        console.log(`${persona.nombre} es menor de edad`);
    }
}

imprimirMayorDeEdad(sacha);
imprimirMayorDeEdad(pablo);