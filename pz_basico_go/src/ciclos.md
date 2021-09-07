```go
package main

import "fmt"

// Ciclos 
func main() {
	// For Conditional
	for i := 0; i <= 10; i++{
		fmt.Println(i)
	}

	fmt.Printf("\n")
	// For While
	counter := 0
	for counter <= 10 {
		fmt.Println(counter)
		counter++
	}

	// For Forever
	counterForever := 0
	for {
		fmt.Println(counterForever)
		counterForever++
	}
}
````