var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    cantidadDeLibros: 111
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 78
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 132
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 90
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 91
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 182
}

var personas = [sacha, alan, martin, dario, vicky, paula];


const esAlta = ({ altura }) => altura > 1.8;
const esBaja = persona => persona.altura < 1.6;
var personasAltas = personas.filter(esAlta);
var personasBajas = personas.filter(esBaja);
console.log('Las personas altas: ');
console.table(personasAltas);
console.log('Las personas bajas: ');
console.table(personasBajas);
const pasarAlturaACms = persona => ({
    ...persona,
    altura: persona.altura * 100
})

var personaCms = personas.map(pasarAlturaACms);
console.log('Todas las personas en CMs :');
console.table(personaCms);
console.log('Todas las personas en MTs :');
console.table(personas);



const reducer = (acum, persona) => acum + persona.cantidadDeLibros;
var totalDeLibros = personas.reduce(reducer,0);
console.log(`Todos en total tiene ${totalDeLibros} de libros`);