function restarDescuento(precio, descuento){
    let desc_decimal = descuento / 100 
    let precio_desc = 1 - desc_decimal

    return precio * precio_desc
}

console.log(restarDescuento(120, 15))