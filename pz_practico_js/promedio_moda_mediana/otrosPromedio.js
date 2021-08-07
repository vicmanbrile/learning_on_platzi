class calculadoraPromedioPonderado{
    constructor(list){
        this.courseNoteCredit = list.map( course => course.note * course.credit )
        this.courseNoteCredit__sum = this.suma(this.courseNoteCredit)
        this.credits = list.map(note => note.credit)
        this.credits__sum = this.suma(this.credits)

        this.promedio_ponderado = this.courseNoteCredit__sum / this.credits__sum
    }

    suma(values){
        return values.reduce((prev, current) => prev + current)
    }
}
//Exportacion de modulos
module.exports =  { calculadoraPromedioPonderado }