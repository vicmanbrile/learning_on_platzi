var d = document.getElementById("dibujo_prueba");
var lienzo = d.getContext("2d");
var ancho = d.width;

var l_cantidad = document.getElementById("eleccion_lineas");
var l_color = document.getElementById("eleccion_color");

var btt_envio = document.getElementById("envio");


btt_envio.addEventListener("click", dibujoforClick);





function dibujoforClick(){
  var can_l_final = 0;
  var can_l_final = parseInt(l_cantidad.value);
  var color_final = l_color.value;
  var l = 0;
  var yi, xf;
  var espacio = ancho / can_l_final;


  for (l = 0; l < can_l_final;  l++) {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujandoLinea(color_final, 0, yi, xf, 300);
  }

}


function dibujandoLinea(color, xinicial, yincial, xfinal, yfinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yincial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
