function Personas(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

Personas.prototype.saludar = function (){
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

var victor = new Personas('Victor', 'Briseno');
var Ericka = new Personas('Ericka', 'Luna');
var Arturo = new Personas('Arturo', 'Martinez');



victor.saludar();
Ericka.saludar();
Arturo.saludar();