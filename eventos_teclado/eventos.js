var teclas = {
  UP: 38,
  DOWN:40,
  LEFT: 37,
  RIGHT: 39
};

var cuadro = document.getElementById("area_de_dibujo");
var papel = cuadro.getContext("2d");
var x = 150;
var y = 150;

dibujandoLinea("red", x - 1 , y - 1, x + 1, y + 1, papel);

function dibujandoLinea(color, xinicial, yincial, xfinal, yfinal, lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 2;
    lienzo.moveTo(xinicial, yincial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

document.addEventListener("keydown", dibujarTeclado);


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
