const mode = require('./promedio').mode
const calcularMediaAritmetica = require('./promedio').calcularMediaAritmetica
const calculadoraMediana = require('./promedio').calculadoraMediana
const calculadoraPromedioPonderado = require('./otrosPromedio').calculadoraPromedioPonderado

//Importar datos
const colombia = require('./src/salario').colombia


//Mediana
const colombia_salary = colombia.map(person => person.salary)

const colombia_salary__sort = colombia_salary.sort((a,b)=> {a - b})

const colombia_mediana = new calculadoraMediana(colombia_salary__sort)

console.log(colombia_mediana.resultado())

//Mediana top 10%
const spreceStart = (colombia_salary__sort.length * 90) / 100
const spliceCount = colombia_salary__sort.length - spreceStart;

const salariosTop10 = colombia_salary__sort.splice(spreceStart, spliceCount)

const colombia_mediana__top10 = new calculadoraMediana(salariosTop10)

console.log(colombia_mediana__top10.resultado())
