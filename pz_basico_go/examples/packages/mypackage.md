```go
package mypackage

import "fmt"

// CarPublic Car con acceso publico
type CarPublic struct {
	Brand string
	Year  int
}

//PrintMess imprimir un mensaje
type carPrivade struct {
	brand string
	year  int
}

func PrintMess(text string) {
	fmt.Println(text)
}
```