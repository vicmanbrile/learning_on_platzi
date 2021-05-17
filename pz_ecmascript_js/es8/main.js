const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}

 // Object entries--->
const entries = Object.entries(data)
console.log(entries)

// Object values ---->
const values = Object.values(data)
console.log(values)

// Padding ---->
const string = 'Hello'
console.log(string.padStart(7, 'hi'))
console.log(string.padEnd(12, ' -----'))

// Async Await --->
const HelloWorld = () => {
    return new Promise((resolve, reject ) => {
        (true) ? setTimeout (() => resolve('Hello World'), 3000) : reject( new Error('Test Error'))
    })
}

const helloAsync = async () => {
    let hello = await HelloWorld()
    console.log(hello)
}

helloAsync()

// Propuesta para hacerlo correctamente
const otraFunction = async () => {
    try {
        let hello = await HelloWorld()
        console.log(hello)
    } catch (error) {
        console.log(error);
    }
}

otraFunction()