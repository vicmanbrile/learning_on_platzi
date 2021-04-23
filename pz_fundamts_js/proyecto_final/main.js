const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')

const ULTIMO_NIVEL = 10;

class Juego {
    constructor() {
        this.inicializar = this.inicializar.bind(this)
        this.inicializar()
        this.generarSecuencia()
        setTimeout(this.siguienteNivel,500)
    }

    inicializar() {
        this.elegirColor = this.elegirColor.bind(this);
        this.siguienteNivel = this.siguienteNivel.bind(this);
        // this.iluminarSecuencia = this.iluminarSecuencia.bind(this);
        this.toggleBtnEmpezar()
        this.nivel = 1;
        this.colores = {
            celeste,
            violeta,
            naranja,
            verde
        }
    }
    toggleBtnEmpezar(){
        if (btnEmpezar.classList.contains('hide')){
            btnEmpezar.classList.remove('hide');
        } else {
            btnEmpezar.classList.add('hide');
        }
    }

    generarSecuencia(){
        this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 4))
    }

    transformarNumeroToColor(numero){
        switch (numero){
            case 0:
                return 'celeste'
            case 1:
                return 'violeta'
            case 2:
                return 'naranja'
            case 3:
                return 'verde'
        }
    }
    transformarColorToNumero(color){
        switch (color){
            case 'celeste':
                return 0
            case 'violeta':
                return 1
            case 'naranja':
                return 2
            case 'verde':
                return 3
        }
    }

    siguienteNivel(){
        this.subnivel = 0;
        this.iluminarSecuencia();
        this.agregarEventosClick();
    }

    iluminarSecuencia(){
        for(let i = 0; i < this.nivel; i++ ){
            let color = this.transformarNumeroToColor(this.secuencia[i])
            setTimeout(() => this.iluminarColor(color), 1000 * i)
        }
    }

    iluminarColor(color){
        this.colores[color].classList.add('light');
        setTimeout(() => this.apagarColor(color), 350)
    }

    apagarColor(color){
        this.colores[color].classList.remove('light');
    }

    agregarEventosClick() {
        this.colores.celeste.addEventListener('click', this.elegirColor);
        this.colores.violeta.addEventListener('click', this.elegirColor);
        this.colores.naranja.addEventListener('click', this.elegirColor);
        this.colores.verde.addEventListener('click', this.elegirColor);
    }
    elimnarEventosClick(){
        this.colores.celeste.removeEventListener('click', this.elegirColor);
        this.colores.violeta.removeEventListener('click', this.elegirColor);
        this.colores.naranja.removeEventListener('click', this.elegirColor);
        this.colores.verde.removeEventListener('click', this.elegirColor);
    }

    elegirColor(x){
        const nombreColor = x.target.dataset.color
        const numeroColor = this.transformarColorToNumero(nombreColor);
        this.iluminarColor(nombreColor);
        if (numeroColor === this.secuencia[this.subnivel]) {
            console.log('Correcto')
            this.subnivel++
            if(this.subnivel === this.nivel){
                this.nivel++;
                this.elimnarEventosClick()
                if(this.nivel === ULTIMO_NIVEL + 1){
                    this.ganoJuego()
                } else {
                    setTimeout(this.siguienteNivel, 1000);
                }
            }
        } else {
            this.perdioJuego()
        }
    }
    ganoJuego(){
        swal('vicmanbrile', 'Ganaste el juego', 'success')
            .then(this.inicializar)
    }

    perdioJuego(){
        swal('vicmanbrile', 'Perdiste el juego', 'error')
            .then(() => {
                this.elimnarEventosClick()
                this.inicializar()
            })
    }

}

function empezarJuego() {
    window.juego = new Juego()
}
