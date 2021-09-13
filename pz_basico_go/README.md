# Aprendiendo Go / Golang

Estos conocimientos vienen del "[Curso Básico de Programación en GO](https://platzi.com/clases/programacion-golang/)"

---
## Language
|Concepto|Ejemplo|
|:--:|:---:|
| functions | [ functions ](examples/func.md)|
| defer continue break | [ defer continue break ](examples/defer_continue_break.md)|
|  If |[ If ](examples/if.md)|
| cycles | [ cycles ](examples/ciclos.md)|
| switch | [ switch ](examples/switch.md)|
| class | [ class ](examples/classes.md)|
| strucs and pointers | [ strucs and pointers ](examples/estructuras_punteros.md)|
| array | [ array ](examples/array_slices.md)|
| maps | [ maps ](examples/maps.md)|
| packages | [ packages ](examples/packages/README.md)|


---


## Variables, Constantes, 'zero values'

```go
//Variables
var var1 string = "value1"
var2 := "value2"

const const2 string = "const2"
```
__Tipos and 'zero values'__

Las declaraciones definidas con tipo de dato numerico su valor default son 0
```go
__Boolean__bool // zv = false
__String__string // zv = 

__Numeric_uint8     //  8-bit integers (0 to 255)
__Numeric_uint16    // 16-bit integers (0 to 65535)
__Numeric_uint32    // 32-bit integers (0 to 4294967295)
__Numeric_uint64    // 64-bit integers (0 to 18446744073709551615)

__Numeric_int8      // 8-bit integers (-128 to 127)
__Numeric_int16     // 16-bit integers (-32768 to 32767)
__Numeric_int32     // 32-bit integers (-2147483648 to 2147483647)
__Numeric_int64     // 64-bit integers (-9223372036854775808 to 9223372036854775807)

__Numeric_float32   // the set of all IEEE-754 32-bit floating-point numbers
__Numeric_float64   // the set of all IEEE-754 64-bit floating-point numbers

__Numeric_complex64     // the set of all complex numbers with float32 real and imaginary parts
__Numeric_complex128    // the set of all complex numbers with float64 real and imaginary parts

__Numeric_byte      // alias for uint8
__Numeric_rune      // alias for int32

```

---


## Packages
Esta es la libreria estandar de las dependencias de Go/Golang

### [fmt](https://pkg.go.dev/fmt)
Esta libreria nos ayuda a imprimir en consola.

```go
	// Declaracion de Variables
	helloMessange := "Hello"
	worldMessange := "world"
```

- __Println__
```go
    fmt.Println(helloMessange, worldMessange)
    // Ouput: Hello World
```
- __Printf__
```go
	nombre := "Platzi"
	cursos := 500
	fmt.Printf("%s tiene mas de %d cursos\n", nombre, cursos) //Ouput: Platzi tiene mas de 500 cursos
	fmt.Printf("%v tiene mas de %v cursos\n", nombre, cursos) //Platzi tiene mas de 500 cursos
```

La diferencia entre la primera impresion y la segunda, es que el %v es un comodin cuando no sabes que tipo de dato debe de imprimir.

- __Sprintf__
``` go
	messange := fmt.Sprintf("%s tiene mas de %d cursos", nombre, cursos)

	fmt.Println(messange) //Ouput 
```
Le podemos pasar lo mismo que a __Printf__ pero esto nos va a retornar el output que deberemos de llamar despues en __Println__

### Nota:
si necesitas el valor del dato es "%T"

```go
	// Tipo de datos
	fmt.Printf("helloMessange: %T\n", helloMessange)
	fmt.Printf("cursos: %T\n", cursos)
```