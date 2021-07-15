//Cpodigo del cuadrado
console.group("Codigo del Cuadrado")
const ladaCuadrado = 5
console.log(`Los lados del cuadrado miden: ${ladaCuadrado} cm`)

const perimetroCuadrado = ladaCuadrado * 4
console.log(`El perimetro del cuadrado: ${perimetroCuadrado} cm^2 `)

const areaCuadrado = ladaCuadrado * ladaCuadrado
console.log(`La area del cuadrado: ${areaCuadrado} cm^3`)

console.groupEnd()
//Codigo del triangulo
console.group("Codigo del triangulo")
const ladoTriangulo1 = 6
const ladoTriangulo2 = 6
const baseTriangulo = 4

const alturaTriangulo2 = 5.5

console.log("Los lados del triángulo miden: " + ladoTriangulo1 + " cms, " + ladoTriangulo2 + " cms, " + baseTriangulo + "cms.");

console.log(`La altura del triangulo mide: ${alturaTriangulo2} cm`)


const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
console.log(`El perimetro del triangulo: ${perimetroTriangulo} cm^2 `)

const areaTriangulo = (baseTriangulo * alturaTriangulo2) / 2
console.log(`La area del triangulo: ${areaTriangulo} cm^3`)

console.groupEnd()

//Código del Circulos
console.group("Circulos");
//Radio
const radioCirculo = 4;
console.log("El radio del circulo es " + radioCirculo + " cms.");
//Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es " + diametroCirculo + " cms.");
// PI
const PI = Math.PI;
console.log("PI es " + PI + ".");
// Perimetro
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es " + perimetroCirculo + " cms.");
//Area
const areaCirculo = PI * (radioCirculo**2);
console.log("El area del circulo es " + areaCirculo + " cms.");
console.groupEnd();