//corre solo una vez cuando inicia el programa
function setup(){
    console.log("setup");
    
    //createCanvas: ancho, alto en píxeles
    createCanvas(1500,700);  // 200 anchi  x 200 alto
background(125);        //rango de grises
}
    //background RGB : Define el color del fondo
    // RED --> background(255,0,0);
    // GREEN --> background(0,255, 0);
    // BLUE --> background(0,255, 0);


    //background RGB : Define el color del fondo
    // RED --
//corre continuamente después de la función setup
function draw(){
    clear();
    
 ellipse(mouseX,mouseY,110,110);
if((mouseX<500) &&  (mouseY<500)){
    fill(color("white"));
}else if((mouseX<500) && (mouseY>500)){
    fill(color("black"));
}else if((mouseX>500) && (mouseY<500)){
    fill(color("silver"));
}else if((mouseX>500) && (mouseY>500)){
    fill(color("gold"));
}
    

}