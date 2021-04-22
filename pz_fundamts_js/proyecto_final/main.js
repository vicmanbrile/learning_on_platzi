const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')

const ULTIMO_NIVEL = 10;

class Juego {
    constructor() {
        this.inicializar()
        this.generarSecuencia()
        this.siguienteNivel()
    }

    inicializar() {
        this.elegirColor = this.elegirColor.bind(this);
        this.siguienteNivel.bind(this);
        btnEmpezar.classList.add('hide');
        this.nivel = 1;
        this.colores = {
            celeste,
            violeta,
            naranja,
            verde
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
                return 'naranja'
            case 2:
                return 'verde'
            case 3:
                return 'violeta'
        }
    }
    transformarColorToNumero(color){
        switch (color){
            case 'celeste':
                return 0
            case 'naranja':
                return 1
            case 'verde':
                return 2
            case 'violeta':
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
        if (numeroColor === this.secuencia[this.nivel]) {
            console.log('Correcto')
            this.subnivel++
            if(this.subnivel === this.nivel){
                this.nivel++;
                this.elimnarEventosClick()
                if(this.nivel === ULTIMO_NIVEL + 1){
                    // Gano
                } else {
                    setTimeout(this.siguienteNivel, 2000);
                }
            }
        } else {
            // Perdio
        }
    }

}

function empezarJuego() {
    window.juego = new Juego()
}
