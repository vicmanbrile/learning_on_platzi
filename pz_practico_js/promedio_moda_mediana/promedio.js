/* 

    Calculado la Media Aritmetica --->

*/
function calcularMediaAritmetica(list){
    reducionSumar = (accumulator, currentValue) => {
        return accumulator + currentValue
    }

    const listaSumada = list.reduce(reducionSumar)

    return listaSumada / list.length
}
/*

    Calculando la Mediana Aritmetica --->

*/
class calculadoraMediana{
    constructor(list){
        this.list = list.sort((a,b) => a - b)
        this.mitad = this.verificarPar(this.list.length)
        this.calcularMediana()
    }

    verificarPar(numero){
        if(numero % 0 !== 0) { return  true } else { return false}  
    }

    calcularMediana(){
        let list_mediana = parseInt(this.list.length / 2)

        if(this.mitad){
            let element_1 = this.list[list_mediana -1]
            let element_2 = this.list[list_mediana]
                
            this.mediana = calcularMediaAritmetica([element_1, element_2])
        } else {
            this.mediana = this.list[list_mediana]
        }
    }

    resultado(){
        return this.mediana
    }
}
/*

    Calculando la Moda Aritmetica --->

*/
const mode = (list) => list.sort((a,b) => list.filter(v => v===a).length - list.filter(v => v===b).length).pop()

//Exportacion de modulos
module.exports =  { mode, calculadoraMediana,  calcularMediaAritmetica}