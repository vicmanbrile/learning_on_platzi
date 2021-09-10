// Funcion para dibujar
function dibujandoLinea({color, xinicial, yincial, xfinal, yfinal, lienzo}){
    lienzo.beginPath();
    lienzo.strokeStyle = color();
    lienzo.lineWidth = 2;
    lienzo.moveTo(xinicial, yincial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
  