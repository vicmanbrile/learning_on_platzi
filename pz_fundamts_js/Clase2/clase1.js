var nombre = "Víctor";
var apellido = "Briseño";
const nombreCompleto = `${nombre} ${apellido}`;


console.log(nombre + " : es el nombre");
console.log(apellido + " : es el apellido");
console.log(nombreCompleto.toLowerCase() + " : es el nombre completo en minusculas");
console.log(nombreCompleto.toUpperCase() + " : es el nombre completo en mayusculas");

var primerCaracter = 4;
var segundoCaracter = 6;

console.log(`El caracter ${primerCaracter} es : ` +  nombreCompleto.charAt(primerCaracter) + " del nombre completo");
console.log(`El caracter ${primerCaracter} a ${segundoCaracter} es : ` +  nombreCompleto.substr(primerCaracter, segundoCaracter) + " del nombre completo");
