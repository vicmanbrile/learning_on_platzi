# Aprendiendo Go / Golang

[]()

## Variables, Constantes, 'zero values'

```go
//Variables
var var1 string = "value1"
var2 := "value2"

```
### Tipos de Datos y 'zero values'
```go
__Boolean := true || false // zv = false

__Numeric_uint8     // the set of all unsigned  8-bit integers (0 to 255)
__Numeric_uint16    // the set of all unsigned 16-bit integers (0 to 65535)
__Numeric_uint32    // the set of all unsigned 32-bit integers (0 to 4294967295)
__Numeric_uint64    // the set of all unsigned 64-bit integers (0 to 18446744073709551615)

__Numeric_int8      // the set of all signed  8-bit integers (-128 to 127)
__Numeric_int16     // the set of all signed 16-bit integers (-32768 to 32767)
__Numeric_int32     // the set of all signed 32-bit integers (-2147483648 to 2147483647)
__Numeric_int64     // the set of all signed 64-bit integers (-9223372036854775808 to 9223372036854775807)

__Numeric_float32   // the set of all IEEE-754 32-bit floating-point numbers
__Numeric_float64   // the set of all IEEE-754 64-bit floating-point numbers

__Numeric_complex64     // the set of all complex numbers with float32 real and imaginary parts
__Numeric_complex128    // the set of all complex numbers with float64 real and imaginary parts

__Numeric_byte      // alias for uint8
__Numeric_rune      // alias for int32

```