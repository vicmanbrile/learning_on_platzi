class Persona{
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura
    }
    saludar(fn){

        var {nombre, apellido} = this;

        console.log(`Hola me llamo ${nombre} ${apellido}`);
        console.log(`Soy una persona ${this.miAltura()}`);

        if (fn){
            fn(nombre, apellido, null);
        }
    }
    miAltura(){
        const ALTURA_ALTA = altura => altura > 1.8;
        if (ALTURA_ALTA(this.altura)){
            return "Alta"
        } else {
            return "Baja"
        }
    }
}

class Desarrollador extends Persona{
    constructor(nombre, apellido, altura){
        super(nombre,apellido,altura);
    }
    saludar(fn) {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
        if (fn){
            var {nombre, apellido, altura} = this;
            fn(nombre,apellido, true);
        }
    }
}

function responerSaludo(nombre, apellido, esDev){
    console.log(`Buen dia ${nombre} ${apellido}`)
    if (esDev) {
        console.log(`No sabia que eras desarrollador`)
    }
}

var victor = new Persona('Victor', 'Briseno', 1.72);
var Ericka = new Persona('Ericka', 'Luna', 1.60);
var Arturo = new Desarrollador('Arturo', 'Martinez', 1.82);


victor.saludar();
Ericka.saludar(responerSaludo);
Arturo.saludar(responerSaludo);
