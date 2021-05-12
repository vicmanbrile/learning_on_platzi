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