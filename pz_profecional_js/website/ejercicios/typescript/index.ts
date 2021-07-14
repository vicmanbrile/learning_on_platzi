console.log('Hello Typescripts')

//Tipos de Datos

//Boolean --->
let muted : boolean = true

//Numeros ---->
let numerador : number = 42
let denominador : number = 6
let resultyado = numerador / denominador

//Strings ---> 
let nombre : string = 'Victor'
let saludo : string = `${nombre}`


///Arrays ---> 
let people : string[] = []

people = ['Isabel', 'Nicole', 'Rauls']

let peopleAndNumbers : Array<string | number> = []

peopleAndNumbers = ['Isabel', 'Nicole', 'Rauls']
peopleAndNumbers.push(8900)


//Enum --->
enum Color{
  rojo ='Rojo', 
  verde = 'Verde',
  azul = 'Azul'
}

let colorFavorito : Color = Color.rojo

console.log(`Mi color favorito es ${colorFavorito}`)


//Anny
let comodin : any = 'Joker'
comodin = {type: 'Wildcard'}

//Object
let someObject : object = {type: 'Wildcard'}


/*
  Funciones
*/

function adde(a: number, b: number) : number {
  return a + b
}

const summs = adde(1,2)

function createAdder(a: number) : (number) => number {
  return function (b: number) {
    return a + b
  }
}

const addFour = createAdder(4)
const forPlus6 = addFour(6)


function FullName(firstName : string, lastName: string = 'brisenio') : string{
  return `${firstName} ${lastName}`
}

const victor = FullName('Victor')

// Interfaces ---> \
enum Color2{
  Rojo = 'Rojo',
  Verde= 'Verde'
}

interface Rectangulo {
  ancho: number,
  alto: number,
  color ? : Color2,
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 6,
  color: Color2.Verde
}

function area(r: Rectangulo){
  return r.alto * r.ancho
}

const AreaRect = area(rect)

rect.toString = function () {
  return this.color ?  `Un rectangulo ${this.color}` : 'Un rectangulo'
} 

console.log(rect.toString())