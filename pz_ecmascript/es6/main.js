// Params

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




//Template literals 

let Hello = 'Hello'
let World = 'World'
let epicPhrase = Hello  + ' ' + World;

console.log(epicPhrase)

//es6
let epicPhrase2 = `${Hello} ${World}`
console.log(epicPhrase2)