class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura
    }
    saludar(){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
        console.log(`Soy una persona ${this.miAltura()}`);
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
    saludar() {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
    }
}

// var victor = new Personas('Victor', 'Briseno', 1.72);
// var Ericka = new Personas('Ericka', 'Luna', 1.60);
// var Arturo = new Personas('Arturo', 'Martinez', 1.82);


// victor.saludar();
// Ericka.saludar();
// Arturo.saludar();
