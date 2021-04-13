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

const esMayordeEdad = ({ edad }) => edad > MOYORIA_DE_EDAD;

function imprimirMayorDeEdad(persona) {
    if (esMayordeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`);
    } else {
        console.log(`${persona.nombre} es menor de edad`);
    }
}

const permitirAcceso = (persona) => !esMayordeEdad(persona) ? console.log('Acceso denegado') : console.log('Accedo concebido')

imprimirMayorDeEdad(sacha);
imprimirMayorDeEdad(pablo);


permitirAcceso(pablo);
permitirAcceso(sacha);