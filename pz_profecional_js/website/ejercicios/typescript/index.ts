// // Interfaces
// enum Color {
//   Rojo = 'Rojo',
//   Verde = 'Verde',
// }

import { EMULTIHOP } from "constants";

// interface Rectangulo {
//   ancho: number;
//   alto: number;
//   color?: Color;
// }

// let rect: Rectangulo = {
//   ancho: 4,
//   alto: 6,
//   // color: Color.Rojo,
// };

// function area(r: Rectangulo): number {
//   return r.alto * r.ancho;
// }

// const areaRect = area(rect);
// console.log(areaRect);

// rect.toString = function() {
//   return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
// };

// console.log(rect.toString());


console.log('Hello TypeScript')

function add(a : number, b : number) {
  return a + b
}

const summ = add(2,3)


//Bulean -->
let muted: boolean = true;
muted = false

// Numeros -->
let age : number = 6
let numerador : number = 42
let denominador : number = age;
let resultado : number= numerador / denominador

//string -->
let nombre : string = 'Victor'
let saludo = `Me llamo ${nombre}`

//Arrays -->
 let people: string[] = [];
 people = ['Isabel', 'Nicole', 'Raul']
 //people.push(12)
let peopleNumber: Array < string | number > = []
peopleNumber.push(212, "Hola")

// Enum
enum Color {
  Rojo = 'Rojo',
  Verde = 'Verde',
  Azul = 'Azul'
}

let colorFavorito : Color = Color.Azul

console.log(`Mi color favorito es ${colorFavorito}`)


//Any
let comodin : any ='Joker'
comodin = {type: "Wildcard"}


//Object 

let someObject : object = {type: "Wildcard"}