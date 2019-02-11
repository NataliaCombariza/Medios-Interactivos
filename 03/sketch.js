var x=0;
var j=0;
var direccion=1;
var angulo = 90;
var escalar = 230;
var velocidad = 0.007;
function setup() {
  createCanvas(900, 600);
}

function draw() {
   background(6, 0, 60);
   noStroke();
  //Tierra
   x=x+2*direccion;
  if ((x>450)||(x<0)) {
    direccion = direccion * -1;
  }
  fill(76, 170+x/6, 178+x/8);
  ellipse(450, 300, 400, 400);
  
  //Estrellas titilando
  if(0.2*x%2==0){
    fill(255,255,54);
    ellipse(50, 50, 10, 10);
    ellipse(800,500, 10, 10);
    ellipse(500,550, 10, 10);
    fill(6, 0, 90);
    ellipse(50, 500, 10, 10);
    ellipse(800, 50, 10, 10);
    ellipse(300,100, 10, 10);
  }else if(0.4*(x-1)%2==0){
    fill(6, 0, 90);
    ellipse(50, 50, 10, 10);
    ellipse(800,500, 10, 10);
    ellipse(500,550, 10, 10);
    fill(255,255,54);
    ellipse(50, 500, 10, 10);
    ellipse(800, 50, 10, 10);
    ellipse(300,100, 10, 10);
  }
  
   //Sombra
  j = j+1;
  if((j>width)) {
    j = 2;}
  fill(6,0,60,80);
  ellipse(j, 300, 400, 400);
 
  
  //Sol
  fill(255,192-x/20,54);
  var h = 450 + (4/3)*cos(angulo) * escalar;
  var k = 275 + sin(angulo) * escalar;
  ellipse(h, k, 50+k/4, 50+k/4);
  angulo -= velocidad;
  
  //Estrellas en movimiento
  fill(255);
  var y1 = 205 + sin(angulo) * (escalar-20);
  var y2 = 100 + sin(-angulo + 0.4) * escalar;
  var y3 = 300 - sin(angulo + 0.8) * escalar;
  ellipse( 80+y2, y1, 5,5);
  ellipse(-y2, y3, 5,5);
  ellipse(800-y1, y3-200, 5,5);
  
  
  
  
  
    
}