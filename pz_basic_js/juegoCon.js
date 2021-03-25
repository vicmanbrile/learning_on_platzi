const papel = "papel";
const piedra = "piedra";
const tijeras = "tijeras";


function juegoCon(objeto, cpu){
    if (objeto === tijeras && cpu === papel){
        console.log(objeto + " gano");
    } else if (objeto === papel && cpu === piedra){
        console.log(objeto + " gano");
    } else if (objeto === piedra && cpu === tijeras) {
        console.log(objeto + " gano");
    } else {
        console.log("Empate");
    }
}