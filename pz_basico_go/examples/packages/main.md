```go
package main

import (
	"fmt"
	pk "src/mypackage/mypackage.go/src/mypackage"
)

func main() {
	var myCar pk.CarPublic
	myCar.Brand = "Ferrari"
	myCar.Year = 2020
	fmt.Println(myCar)

	// var myOtherCar = pk.carPrivade
	// fmt.Println(myOtherCar)

	pk.PrintMess("Hola Platzi")
}
```