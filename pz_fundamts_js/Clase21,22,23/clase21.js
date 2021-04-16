function Personas(nombre, apellido, alturaMts) {
	this.nombre = nombre;
	this.apellido = apellido;
	this.altura = alturaMts
}

const ALTURA_ALTA = altura => altura > 1.8;

//Estos dos prototipos deben estar el function anonima
//Si se utiliza las Arrow Functions  se pierde el concexto de this y apuntamos a window
Personas.prototype.saludar = function (){
	console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
	console.log(`Soy una persona ${this.miAltura()}`)
}


Personas.prototype.miAltura = function () {
	if (ALTURA_ALTA(this.altura)){
		return "Alta"
	} else {
		return "Baja"
	}
}

var victor = new Personas('Victor', 'Briseno', 1.72);
var Ericka = new Personas('Ericka', 'Luna', 1.60);
var Arturo = new Personas('Arturo', 'Martinez', 1.82);



victor.saludar();
Ericka.saludar();
Arturo.saludar();