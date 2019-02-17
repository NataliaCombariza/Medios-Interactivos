var x=0;
var j=8;
var direccion=1;
var angulo = 90;
var escalar = 230;
var velocidad = 0.02;
function setup() {
  createCanvas(900, 600);
  frameRate(50);
}

function draw() {
   background(6, 0, 60);
   noStroke();
  //Tierra
  x=x+6*direccion;
  if ((x>900)||(x<0)) {
    direccion = direccion * -1;
  }
  fill(76, 190-x/12, 198-x/16);
  ellipse(490, 300, 400, 400);
  
  //Estrellas titilando
  if(((0.2)*x%7==2)||((0.2)*x%7==1)){
    fill(255,255,54);
    ellipse(100, 50, 10, 10);
    ellipse(800,500, 10, 10);
    ellipse(500,550, 10, 10);
    fill(6, 0, 90);
    ellipse(100, 500, 10, 10);
    ellipse(800, 50, 10, 10);
    ellipse(300,100, 10, 10);
  }else if((0.3)*x%7==2){
    fill(6, 0, 90);
    ellipse(100, 50, 10, 10);
    ellipse(800,500, 10, 10);
    ellipse(500,550, 10, 10);
    fill(255,255,54);
    ellipse(100, 500, 10, 10);
    ellipse(800, 50, 10, 10);
    ellipse(300,100, 10, 10);
  }
  
   //Sombra
  j = j+3;
  if((j>width)) {
    j = 2;}
  fill(6,0,60,80);
  ellipse(j, 300, 400, 400);
 
  
  //Sol
  fill(255,192-x/20,54);
  var h = 490 + (4/3)*cos(angulo) * escalar;
  var k = 265 + sin(angulo) * escalar;
  ellipse(h, k, 50+k/4, 50+k/4);
  angulo -= velocidad;
  
  //Estrellas en movimiento
  fill(255);
  var y1 = 205 + sin(angulo) * (escalar-20);
  var y2 = 100 + sin(-angulo + 0.4) * escalar;
  var y3 = 300 - sin(angulo + 0.8) * escalar;
  ellipse( 130+y2, y1, 5,5);
  ellipse(-y2+80, y3, 5,5);
  ellipse(880-y1, y3-200, 5,5);
  
 //Satelite
  var  m= 80 + sin(6*angulo) * 80;
  fill(137,137,137);
  rect(width-50-x,222.5+m,40,5);
  ellipse(width-25-x,225+m,20,20);
  rect(width-10-x,200+m,10,50);
  rect(width-50-x,200+m,10,50);
  fill(88);
  rect(width-10-x,200+m,10,10);
  rect(width-50-x,200+m,10,10);
  rect(width-10-x,240+m,10,10);
  rect(width-50-x,240+m,10,10);
  
if (frameCount < 300) {
    if (frameCount % 3 == 0) {
      //Agreguen esta linea solo cuando el código esté listo: 
      //saveCanvas("miFlipbook"+frameCount, 'jpg');
    }
  }
  print(frameCount);
  
    
}