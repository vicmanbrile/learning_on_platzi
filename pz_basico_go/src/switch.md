```go
package main

import "fmt"

func main() {
	modulo := 20 % 2
	switch modulo {
	case 0:
		fmt.Println("Es par")
	default:
		fmt.Println("Es impar")
	}

	// Switch sin condicion
	value := 50
	switch {
	case value > 100:
		fmt.Println("Es mayor a 100")
	case value < 0:
		fmt.Println("Es menor a 0")
	default:
		fmt.Println("Condicion default")
	}
}

```