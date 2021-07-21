//Codigo del cuadrado
class Cuadrado {
    constructor(lado){
        this.lado = lado
    }
    mide(){
        return `Los lados del cuadrado miden: ${this.lado} cms`
    }
    perimetro(){
        let perimetro = this.lado * 4;
        return `El perimetro del cuadrado: ${perimetro} cms^2 `
    }
    area(){
        let area = this.lado * this.lado;
        return `La area del cuadrado: ${area} cms^3`
    }
}
console.group("Codigo del Cuadrado")

const miCuadrado = new Cuadrado(5);

console.log(miCuadrado.mide());
console.log(miCuadrado.perimetro());
console.log(miCuadrado.area());

console.groupEnd()


class Triangulo {
    constructor(lados){
        this.lado_a = lados.lado_a
        this.lado_b = lados.lado_b
        this.lado_c_base = lados.lado_c_base
        this.altura = lados.altura
    }

    ladosTriangulo () {
        return `Los lados del triángulo miden: ${this.lado_a} cms, ${this.lado_b} cms, ${this.lado_c_base} cms.`
    }

    perimetro(){
        let perimetro = this.lado_a + this.lado_b + this.lado_c_base
        return `El perimetro del triangulo: ${perimetro} cms^2  `
    }

    area(){
        let area = this.lado_c_base * this.altura
        return `La area del triangulo: ${area} cms^3`
    }
}

console.group("Codigo del triangulo")

const medidasTriangulo = {
    lado_a: 6,
    lado_b: 6,
    lado_c_base: 4,
    altura: 5.5,
}

const miTriangulo = new Triangulo(medidasTriangulo)

console.log(miTriangulo.ladosTriangulo())
console.log(miTriangulo.perimetro())
console.log(miTriangulo.area())


console.groupEnd()
//Código del Circulo
class Circulo{
    constructor(circulo){
        this.rad = circulo.radio
        this.PI = Math.PI
    }

    diametro(){
        let diametro = this.rad * 2
        return diametro
    }

    radio(){
        return `El radio del circulo es ${this.rad} cms.`
    }

    diametro_verbal(){
        return `El diametro del circulo es ${this.diametro()} cms.`
    }

    perimetro(){
        let perimetro = this.diametro() * this.PI
        return `El perimetro del circulo es ${perimetro.toFixed(2)} cms.`
    }

    area(){
        let area = this.PI * (this.rad ** 2)
        return `El area del circulo es ${area.toFixed(2)} cms.`
    }

}

console.group("Circulos");

const medidasCirculo = {
    radio: 4
}

const miCirculo = new Circulo(medidasCirculo)

console.log(miCirculo.radio())
console.log(miCirculo.diametro_verbal())
console.log(miCirculo.perimetro())
console.log(miCirculo.area())


console.groupEnd();

function calcularPerimetroCuadrado(){

}

function calcularAreaCuadrado(){
    let input= document.getElementById('InputCuadrado')
    let value = input.value

    let area = new Cuadrado(value)

    alert(area.area())
}