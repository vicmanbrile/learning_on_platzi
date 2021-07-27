//Codigo del cuadrado
class Cuadrado {
    constructor(lado){
        this.lado = lado
    }
    lados(){
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

class Triangulo {
    constructor(lados){
        this.lado_a = lados.lado_a
        this.lado_b = lados.lado_b
        this.lado_c_base = lados.lado_c_base
        this.altura = lados.altura
    }

    lados () {
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

//Código del Circulo
class Circulo{
    constructor(radio){
        this.rad = radio
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


// Inner la respuesta en el HTML
function printRespuesta(respuesta){
    let espacio = document.getElementById('respuesta_inner')

    espacio.innerText = respuesta
}


// Lados
function ladosCudrado(){
    let input= document.getElementById('InputCuadrado')
    let value = Number(input.value)

    let cuadrado = new Cuadrado(value)

    printRespuesta(cuadrado.lados())
}

function ladosTriangulo(){
    let input= {
        lado_a : Number(document.getElementById('A_ladoTriangulo').value),
        lado_b : Number(document.getElementById('B_ladoTriangulo').value),
        lado_c_base : Number(document.getElementById('C_ladoTriangulo').value),
        altura : Number(document.getElementById('alturaTriangulo').value),
    }

    let triangulo = new Triangulo(input)

    printRespuesta(triangulo.lados())
}

function diametroCirculo(){
    let input = Number(document.getElementById('radioCirculo').value)
    let circulo = new Circulo(input) 

    printRespuesta(circulo.diametro_verbal())
}


//Perimetros
function perimetroCuadrado(){
    let input= document.getElementById('InputCuadrado')
    let value = Number(input.value)

    let cuadrado = new Cuadrado(value)

    printRespuesta(cuadrado.perimetro())
}

function perimetroTriangulo(){
    let input= {
        lado_a : Number(document.getElementById('A_ladoTriangulo').value),
        lado_b : Number(document.getElementById('B_ladoTriangulo').value),
        lado_c_base : Number(document.getElementById('C_ladoTriangulo').value),
        altura : Number(document.getElementById('alturaTriangulo').value),
    }

    let triangulo = new Triangulo(input)

    printRespuesta(triangulo.perimetro())
}

function perimetroCirculo(){
    let input = Number(document.getElementById('radioCirculo').value)
    let circulo = new Circulo(input) 

    printRespuesta(circulo.perimetro())
}

//Area
function areaCuadrado(){
    let input= document.getElementById('InputCuadrado')
    let value = Number(input.value)

    let cuadrado = new Cuadrado(value)

    printRespuesta(cuadrado.area())
}

function areaTriangulo(){
    let input= {
        lado_a : Number(document.getElementById('A_ladoTriangulo').value),
        lado_b : Number(document.getElementById('B_ladoTriangulo').value),
        lado_c_base : Number(document.getElementById('C_ladoTriangulo').value),
        altura : Number(document.getElementById('alturaTriangulo').value),
    }

    let triangulo = new Triangulo(input)

    printRespuesta(triangulo.area())
}

function areaCirculo(){
    let input = Number(document.getElementById('radioCirculo').value)
    let circulo = new Circulo(input) 

    printRespuesta(circulo.area())
}