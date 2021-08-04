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
        this.restarDescuentos()
    }

    validacionCupones() {
        _cupones.find(item => {
            if (item.name === this.cupon) {
				this.userCoupon = {
					verified: true,
					valor: item.discount
				}
			} else {
				this.userCoupon = {
					verified: false,
				}
			}
        })
    }

    restarDescuentos(){
		let descuento_sin_cupon = this.descontar(this.precio, this.descuento)
		
		let descuento_con_cupon = this.userCoupon.verified ? this.descontar(descuento_sin_cupon,this.userCoupon.valor) : 0
		
		this.total = descuento_sin_cupon + descuento_con_cupon
    }
	
	descontar(valor, descuento){
		let desc_decimal = 1  - (descuento / 100)	
		return valor * desc_decimal
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
