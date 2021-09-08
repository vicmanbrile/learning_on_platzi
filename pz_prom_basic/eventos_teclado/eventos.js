var cuadro = document.getElementById("area_de_dibujo");
var papel = cuadro.getContext("2d");

function selectDisplay(value){
  const input_teclas = document.getElementById('input_teclas')
  const input_mouse = document.getElementById('input_mouse')

  if (value === "mouse"){
    input_teclas.checked = false
  } else if (value === "teclado"){
    input_mouse.checked = false
  }
  console.log(value)
}

// Funcion para dibujar
function dibujandoLinea(color, xinicial, yincial, xfinal, yfinal, lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 2;
    lienzo.moveTo(xinicial, yincial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

// Numero de las teclas del teclado
var teclas = {
  UP: 38,
  DOWN:40,
  LEFT: 37,
  RIGHT: 39
};

//Funcion para imprimir con el teclado
function dibujarTeclado(evento){
  var colorcito = "red";
  var movimiento = 10;
  switch (evento.keyCode) {
    case teclas.UP:
    dibujandoLinea(colorcito, x, y, x, y - movimiento, papel);
    y = y - movimiento;
    break;
    case teclas.DOWN:
      dibujandoLinea(colorcito, x, y, x, y + movimiento, papel);
      y = y + movimiento;
    break;
    case teclas.LEFT:
      dibujandoLinea(colorcito, x, y, x - movimiento, y, papel);
      x = x - movimiento;
    break;
    case teclas.RIGHT:
    dibujandoLinea(colorcito, x, y, x + movimiento, y, papel);
      x = x + movimiento;
    break;
  }
}


// Logica para dibujo de teclado
var x = 150;
var y = 150;

dibujandoLinea("red", x - 1 , y - 1, x + 1, y + 1, papel); // Punto de inicio
document.addEventListener("keyup", dibujarTeclado); // Listener para las teclados


// Logica para dibujo de mause

function clickend(event) {
  event.type === "mousedown" ? estadoClick = true : estadoClick = false
}

var estadoClick = false 

cuadro.addEventListener("mousedown", clickend, false)
cuadro.addEventListener("mouseup", clickend, false)

function movimientoMouse(evento){
  const values = {
    x: evento.clientX - 10,
    y: evento.clientY - 50
  }

  if (estadoClick) {
    dibujandoLinea("#000", values.x, values.y, values.x + 1, values.y + 1, papel )
  } else {
  }
}


cuadro.addEventListener("mousemove", movimientoMouse) // Listener del movimiento del teclado


