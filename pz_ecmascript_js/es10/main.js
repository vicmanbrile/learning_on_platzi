// Array flat --->
let arrayFlat = [1,2,3, [1,2,3, [1,2,3]]]
console.log(arrayFlat.flat(2))

// Array flat map --->
let arrayFlatMap = [1,2,3, [1,2,3, [1,2,3]]]
console.log(arrayFlatMap.flatMap(value => [value, value * 2]))

// TRIM Start --->
let TRIM_START = '           Hello World         '

console.log(TRIM_START)
console.log(TRIM_START.trimStart())

// TRIM End --->
let TRIM_END = '           Hello World         '
console.log(TRIM_END)
console.log(TRIM_END.trimEnd())

// TRY AND CACTH WITHOUT --->
try {

} catch (error) {
    error
} 

//es10
try {

} catch {
    error
} 


// Entries to Objects
let entries = [['Nombre', 'Oscar'], ['age', 32]]

console.log(Object.fromEntries(entries))

// Description in Symbol
let mySymbl = 'My Symbl'
let mysymbl = Symbol(mySymbl)
console.log(mysymbl.description)