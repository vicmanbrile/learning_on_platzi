``` go
package main

import "fmt"

func main() {
	// Declaracion de Variables
	helloMessange := "Hello"
	worldMessange := "world"

	// Println
	fmt.Println(helloMessange, worldMessange)
	fmt.Println(helloMessange, worldMessange)

	// Printf
	nombre := "Platzi"
	cursos := 500
	fmt.Printf("%s tiene mas de %d cursos\n", nombre, cursos)
	fmt.Printf("%v tiene mas de %v cursos\n", nombre, cursos)

	// Sprintf
	messange := fmt.Sprintf("%s tiene mas de %d cursos", nombre, cursos)

	fmt.Println(messange)

	// Tipo de datos
	fmt.Printf("helloMessange: %T\n", helloMessange)
	fmt.Printf("cursos: %T\n", cursos)

}

```