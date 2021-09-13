```go
type car struct {
	brand string
	year  int
}

myCar := car{
	brand: "Ford",
	year:  2020,
}

fmt.Println(myCar)

// Otra manera
var otherCar car
otherCar.brand = "Ferrari"

fmt.Println(otherCar)
```