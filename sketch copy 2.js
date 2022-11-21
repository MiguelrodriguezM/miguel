//corre solo una vez cuando inicia el programa
function setup(){
    console.log("setup");
    
    //createCanvas: ancho, alto en píxeles
    createCanvas(300,300);  // 200 anchi  x 200 alto
background(180);        //rango de grises
}
    //background RGB : Define el color del fondo
    // RED --> background(255,0,0);
    // GREEN --> background(0,255, 0);
    // BLUE --> background(0,255, 0);


    //background RGB : Define el color del fondo
    // RED --
//corre continuamente después de la función setup
function draw(){
    Fill("red");

    var texto = "VIVA MARIO";
    textSize(60);
    text(texto, 10, 10, 300,300);


}


  
      //instrucciones a ejecutar en bucle


