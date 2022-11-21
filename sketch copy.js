//corre solo una vez cuando inicia el programa
function setp(){
    console.log("setup");
    
    //createCanvas: ancho, alto en píxeles
    createCanvas(200,200);  // 200 anchi  x 200 alto
background(225);        //rango de grises
}
    //background RGB : Define el color del fondo
    // RED --> background(255,0,0);
    // GREEN --> background(0,255, 0);
    // BLUE --> background(0,255, 0);


    //background RGB : Define el color del fondo
    // RED --
//corre continuamente después de la función setup
function draw(){
    beginShape();
    vertex(100,30);
    vertex(50,100);
    vertex(50,150);
    vertex(150,150);
    vertex(150,100);

endShape(close);


}


  
      //instrucciones a ejecutar en bucle


