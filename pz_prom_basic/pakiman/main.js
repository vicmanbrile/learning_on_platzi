var imagenes = [];
imagenes["Cauchin"] = "src/vaca.png";
imagenes["Pokacho"] = "src/pollo.png";
imagenes["Tocinauro"] = "src/cerdo.png";

coleccion = [];
coleccion.push(new pakiman("Cauchin", 100, 30));
coleccion.push(new pakiman("Pokacho", 80, 50));
coleccion.push(new pakiman("Tocinauro",  120, 40))

for(var paki of coleccion){
  paki.mostrar();
}
