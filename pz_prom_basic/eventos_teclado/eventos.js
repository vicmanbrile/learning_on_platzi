var cuadro = document.getElementById("area_de_dibujo");
var papel = cuadro.getContext("2d");

var USER_CONFIG = {
  color: () => {
    return document.getElementById('selec_color').value
  },
  xinicial: -1,
  yincial: -1,
  xfinal: +1,
  yfinal: +1,
  lienzo: papel,

  // movimiento: 
}



// Logica para dibujo de teclado
var x = 150;
var y = 150;

//Funcion para imprimir con el teclado
function dibujarTeclado(evento){
  // Numero de las teclas del teclado
  const teclas = {
    UP: 38,
    DOWN:40,
    LEFT: 37,
    RIGHT: 39
  };
  var movimiento = 10;

  switch (evento.keyCode) {
    case teclas.UP:
      dibujandoLinea({
        ...USER_CONFIG,
        xinicial: x,
        xfinal: x, 
        yincial: y, 
        yfinal: y - movimiento, 
      });

      y = y - movimiento;
    break;
    case teclas.DOWN:
      dibujandoLinea({
        ...USER_CONFIG,
        xinicial: x,
        xfinal: x, 
        yincial: y, 
        yfinal: y + movimiento,
      });
      y = y + movimiento;
    break;
    case teclas.LEFT:
      dibujandoLinea({
        ...USER_CONFIG,
        xinicial: x,
        xfinal: x - movimiento, 
        yincial: y, 
        yfinal: y,
      });
      x = x - movimiento;
    break;
    case teclas.RIGHT:
      dibujandoLinea({
        ...USER_CONFIG,
        xinicial: x,
        xfinal: x + movimiento, 
        yincial: y, 
        yfinal: y,
      });
      x = x + movimiento;
    break;
  }
}



function clickend(event) {
  event.type === "mousedown" ? estadoClick = true : estadoClick = false
}

var estadoClick = false 

function movimientoMouse(evento){
  const values = {
    x: evento.clientX,
    y: evento.clientY
  }
  
  if (estadoClick) {
    document.getElementById('positionXY').innerText = `X = ${values.x}, Y = ${values.y}`
    //dibujandoLinea("red", values.x, values.y, values.x + 1, values.y + 1, papel )
  } else {
    return
  }
}


function selectDisplay(value){
  const input_teclas = document.getElementById('input_teclas')
  const input_mouse = document.getElementById('input_mouse')
  
  if (value === "mouse"){
    // Desactivar Listeners
    document.removeEventListener("keyup", dibujarTeclado); // Listener para las teclados
    // Activar Listeners
    cuadro.addEventListener("mousemove", movimientoMouse) // Listener del movimiento del teclado
    cuadro.addEventListener("mousedown", clickend, false) 
    cuadro.addEventListener("mouseup", clickend, false)
    
    document.getElementById("indicacion").innerText = "Dibuja con mouse y click"
    input_teclas.checked = false
  } else if (value === "teclado"){
    // Desactivar Listeners
    cuadro.removeEventListener("mousemove", movimientoMouse) // Listener del movimiento del teclado
    cuadro.removeEventListener("mousedown", clickend, false) 
    cuadro.removeEventListener("mouseup", clickend, false)
    // Activar Listeners
    document.addEventListener("keyup", dibujarTeclado); // Listener para las teclados
    dibujandoLinea({...USER_CONFIG}); // Punto de inicio

    document.getElementById("indicacion").innerText = "Dibuja con las flechas del teclado"
    input_mouse.checked = false
  }

  console.log(value)
}