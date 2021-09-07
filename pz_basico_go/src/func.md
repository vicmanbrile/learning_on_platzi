```go
package main

import "fmt"

func normalFunction(message string){
	fmt.Println(message)
}

func tripleArgument(a,b int, c string){
	fmt.Println(a,b,c)
}

func returnValue(a int) int {
	return a * 2
}

func dubleReturn(a int) (c,d int) {
	return a, a*2
}


func main() {
	normalFunction("Hello World")
	tripleArgument(1,2,"Hola")
	value := returnValue(2)
	fmt.Println(value)

	value1, _ := dubleReturn(2)

	fmt.Println("Value1:", value1)
}

```