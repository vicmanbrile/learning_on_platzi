const piedra = "piedra ";
const tijeras = "tijeras ";
const papel = "papel ";

const usuario = piedra;

const options = [piedra, papel, tijeras];
const cpu = options[1];


switch (true){
    case (usuario === tijeras && cpu === papel):
        console.log(tijeras + 'gano');
        break;
    case (usuario === tijeras && cpu === piedra):
        console.log(piedra + 'gano');
        break;
    case (usuario === piedra && cpu === tijeras):
        console.log(piedra + 'gano');
        break;
    case (usuario === piedra && cpu === papel):
        console.log(papel + 'gano');
        break;
    case (usuario === papel && cpu === tijeras):
        console.log(tijeras + 'gano');
        break;
    case (usuario === papel && cpu === piedra):
        console.log(papel + 'gano');
        break;

    default: console.log('empate');
}