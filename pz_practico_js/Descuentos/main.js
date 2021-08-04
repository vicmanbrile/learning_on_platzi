const _cupones = [
    {
        name: "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    }
]

class aplicacionDescuentos{
    constructor(inputs){
        this.precio = inputs.precio
        this.descuento = inputs.descuento
        this.cupon = inputs.cupon
        this.validacionCupones()
        this.restarDescuento()
    }

    validacionCupones() {

        _cupones.find(() => {
            _cupones.name === this.cupon
        })

        if (this.cupon === _cupones.name) {
            this.userCoupon = true
        } else {
            this.userCoupon = false
        }
    }

    restarDescuento(){
        let desc_decimal = this.descuento / 100 
        let precio_desc = 1 - desc_decimal
    
        this.total = this.precio * precio_desc
    }

    

    printResultado(){
        document.getElementById('Resultado_').innerText = this.total
    }
}

function calculadoraDesc(){
    let inputs = {
        precio: Number(document.getElementById('Precio_').value),
        descuento: Number(document.getElementById('Descuento_').value),
        cupon: document.getElementById('Descuento_cupon').value
    }

    let calculo = new aplicacionDescuentos(inputs)

    calculo.printResultado()
}
