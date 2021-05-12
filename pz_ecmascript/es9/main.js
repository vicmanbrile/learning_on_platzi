const obj = {
    name: 'Victor',
    age: 19,
    country: 'Mexico',
}

// Operador de reposo --->
let { country, ...all } = obj;
console.log(all)

// Propagacion de Objetos --->
const obj1 = {
    ...obj,
    country: 'Argentina'
}

console.log(obj1)

// Promise finally
const HelloWorld = () => {
    return new Promise((resolve, reject) => {
        (true) ? setTimeout (() => resolve('Hello World'), 3000) : reject ('Test Error')
    })
}

HelloWorld()
    .then(response => console.log(response))
    .catch(response => console.error(response))
    .finally(() => console.log('Finalizo'))

// Regex --->
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2021-06-11')

const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, year)