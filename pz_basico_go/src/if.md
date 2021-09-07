```go
package main

import "fmt"

func main() {
	valor := 1
	valor2 := 2
	if valor == 1 {
		fmt.Println("Es igual a 1")
	} else {
		fmt.Println("No es 1")
	}

	// With AND 
	if valor == 1 && valor2 == 2{
		fmt.Println("Es verdad con AND")
	}

	// With OR
	if valor == 0 || valor2 == 2{
		fmt.Println("Es verdad con OR")
	}
}
```