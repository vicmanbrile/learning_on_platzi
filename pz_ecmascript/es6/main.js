// Params --->

function informacion(name, age, country) {
    var name = name || 20
    var age = age || 'Victor'
    var country = country || 'Mexico'
    console.log(name, age, country)
}

informacion();

//es6

function informacion2 (name = 'Victor', age = 19, country = 'Mexico') {
    console.log(name, age, country)
}

informacion2();
informacion2("Manuel", 21, 'Argentina');




//Template literals --->

let Hello = 'Hello'
let World = 'World'
let epicPhrase = Hello  + ' ' + World;

console.log(epicPhrase)

//es6
let epicPhrase2 = `${Hello} ${World}`
console.log(epicPhrase2)


//Multilinea --->
let lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum soluta perspiciatis, \n' + 
'in, quo dolores illo totam quod, officiis minima consectetur debitis minus voluptatem eaque reprehenderit \n' +
'animi doloribus veniam! Ipsum, iure?'

console.log(lorem)

//es6 => No es necesario el \n
let lorem2 = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum soluta perspiciatis,
in, quo dolores illo totam quod, officiis minima consectetur debitis minus voluptatem eaque reprehenderit
animi doloribus veniam! Ipsum, iure?`

console.log(lorem2)

//Spread Operator --->
let person = {
    'name': 'Victor',
    'age': 19,
    'country' : 'Mexico'
}

console.log(person.name, person.age, person.country)

//es6
let { name, age, country} = person;

console.log(name, age, country)

//Destructuracion --->

let team1 = ['Oscar', 'Julian', 'Ricardo']
let tema2 = ['Valeria', 'Yesica', 'Camila']

let educacion = ['David','Oscar', 'Julian', 'Ricardo','Valeria', 'Yesica', 'Camila']
console.log(educacion)

//es6
let educacion1 = ['David', ...team1, ...tema2]

console.log(educacion1)

//LET CONST VAR--->
/*
var esta disponible en el scope global.

//es6

let esta en el scope de bloque de codigo.
Conts es constante con su valor.
*/