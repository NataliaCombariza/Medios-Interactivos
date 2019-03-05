//variables jugadores
var xJ1=0;
var yJ1;
var xJ2;
var yJ2;
//variables posicion fruta
var xE=0;
var yE=0;
//determinante del estado jugador
var player1State;
var player2State;
var opacity1=250;
var opacity2=250;
// variable fondo
var squareSide= 0;
//Constantes estados de juego
const STATE={
play:0,
pause:1,
initialState:2,
win:3
};
var gameState;
var winningPlayer;


function setup() {
  yJ1=windowHeight/2;
  xJ2=windowWidth-20;
  yJ2=windowHeight/2;
  createCanvas(windowWidth, windowHeight);
  squareSide=windowWidth/15;
  //posicion aleatoria fruta
  xE=random(0,windowWidth);
  yE=random(windowHeight);
}

function draw() {
  //Fondo
  noStroke();
   for(var j=0; j<15; j++){
    for(var i=0; i<15; i++){
    if(i%2==0){
      if(j%2==0){
        fill(252,187,82);
      }else {
        fill(247,145,42);
      }
       rect(i*squareSide,j*squareSide,squareSide,squareSide);
    } else{
      if(j%2==0){
        fill(247,145,42);
      }else {
        fill(252,187,82);
      }
       rect(i*squareSide,j*squareSide,squareSide,squareSide);
    }
   }
  }
  //huevos
  strokeWeight(1);
  stroke(0);
  fill(242,236,220,opacity1);
  ellipse(xJ1,yJ1,25,31);
  fill(80,149,8,opacity1);
  ellipse(xJ1+5,yJ1-6,11,12);
  ellipse(xJ1-3,yJ1+8,12,11);
  fill(242,236,220,opacity2);
  ellipse(xJ2,yJ2,25,31);
  fill(211,13,13,opacity2);
  ellipse(xJ2+5,yJ2-6,11,12);
  ellipse(xJ2-3,yJ2+8,12,11);
  //fruta
  noFill();
  arc(xE+5,yE-10,10,30,PI/2,PI+PI/2);
  fill(255,205,0);
  ellipse(xE,yE, 30,30);
  print(dist(xJ1,yJ1,xE,yE));
  //Definiciones sistema de puntaje
  //Condicion de las distancias de los huevos con las frutas
  //Jugador 1
 if((dist(xJ1,yJ1,xE,yE)<30)){
    xE=random(0,windowWidth);
    yE=random(windowHeight);
    fill(255,0,0);
    ellipse(xE,yE, 30,30);
    if(opacity1>=0 && opacity1<=225){
    opacity1=opacity1+25;
    }
    if(opacity2>=25 && opacity2<=250){
    opacity2=opacity2-25;
        }
  }
  //Jugador 2
   print(dist(xJ2,yJ2,xE,yE));
 if((dist(xJ2,yJ2,xE,yE)<30)){
   xE=random(0,windowWidth);
   yE=random(windowHeight);
    fill(255,0,0);
    ellipse(xE,yE, 30,30);
    if(opacity1>=25 && opacity1<=250){
    opacity1=opacity1-25;
    }
    if(opacity2>=0 && opacity2<=225){
    opacity2=opacity2+25;
    }
  }
  //Condicion de choque entre huevos
  if((dist(xJ2,yJ2,xJ1,yJ1)<20)){
    if (opacity1<=225){
      opacity1=opacity1+25;
    }
    
    if (opacity2<=225){
      opacity2=opacity2+25;
    }
  }
  
     //movimiento de huevos
    xJ1=xJ1+5;
    xJ2=xJ2-5;


     //Estados del juego
     if((opacity1 == 0) || ( opacity2 == 0)){
       gameState = STATE.win;
     }else {
       if( key == ' '){
         gameState = STATE.pause;
       } else {
         gameState = STATE.play;
       }
     }
     
  defineState(gameState);
  

}
//Funcion que determina el movimiento con las flechas
function playerOneMovement(keyPress){
  player1State = keyPress;
  switch(keyPress){
    case RIGHT_ARROW:
      xJ1=xJ1;
      yJ1=yJ1;
      break;
    case LEFT_ARROW:
      xJ1= xJ1-10;
      yJ1=yJ1;
      break;
    case UP_ARROW:
      yJ1= yJ1-5;
      xJ1= xJ1-5;
      break;
    case DOWN_ARROW:
      yJ1=yJ1+5;
      xJ1=xJ1-5;
      break;
  }
  
  if(xJ1>windowWidth){
    xJ1=0;
    yJ1=yJ1;
  }
  if(yJ1>windowHeight){
  yJ1=0;
  xJ1=xJ1;
  }
  if( yJ1<-20){
  yJ1=windowHeight;
  xJ1=xJ1;
  }
  if(xJ1<-20){
   xJ1=windowWidth;
    yJ1=yJ1;
  }
}
//funcion que determina el movimiento con las letras 
function playerTwoMovement(keyPress){
  player2State = keyPress;
  switch(keyPress){
    case 'd':
    xJ2=xJ2+10;
    yJ2=yJ2;
      break;
    case 'a':
      yJ1= yJ1;
      xJ1= xJ1;
      break;
    case 'w':
      yJ2= yJ2-5;
      xJ2= xJ2+5;
      break;
    case 's':
      yJ2=yJ2+5;
      xJ2=xJ2+5;
      break;
  }
  
  if(xJ2>windowWidth){
    xJ2=0;
    yJ2=yJ2;
  }
  if(yJ2>windowHeight){
  yJ2=0;
  xJ2=xJ2;
  }
  if( yJ2<-20){
  yJ2=windowHeight;
  xJ2=xJ2;
  }
  if(xJ2<-20){
   xJ2=windowWidth;
   yJ2=yJ2;
  }
}
//funcion que determina el estado del juego
function defineState(gameState){
  switch(gameState){
    case STATE.play:
  if(keyCode == RIGHT_ARROW || keyCode == LEFT_ARROW || keyCode == DOWN_ARROW || keyCode == UP_ARROW){
    playerOneMovement(keyCode);
  }else {
    playerOneMovement(player1State);
  }
    
  if(key == 'a' || key == 'd' || key == 'w' || key == 's'){
    playerTwoMovement(key);
  }else {
    playerTwoMovement(player2State);
  }
  break;
   // definicion para pausa del jueego
   case STATE.pause:
   xJ1=xJ1-5;
   xJ2=xJ2+5;
   break;
   //definicion imagen ganador
   case STATE.win:
   if(opacity1 == 0){
    //figura serpiente roja
     fill(211,13,13);
   smooth();
beginShape();
  curveVertex((windowWidth/2)+ (2*windowWidth/256), (windowHeight/2)); // the first control point
  curveVertex((windowWidth/2)+ (2*windowWidth/256), (windowHeight/2)); // is also the start point of curve
  curveVertex((windowWidth/2)+(2*windowWidth/256), (windowHeight/2)-(windowHeight/134)); // the first control poin
  curveVertex((windowWidth/2)+(2*windowWidth/256), (windowHeight/2)-(10*windowHeight/134)); // the first control point
  curveVertex((windowWidth/2)+(6*windowWidth/256), (windowHeight/2)-(16*windowHeight/134));
  curveVertex((windowWidth/2)+(2*windowWidth/256), (windowHeight/2)-(16*windowHeight/134));
  curveVertex((windowWidth/2)-(2*windowWidth/256), (windowHeight/2)-(10*windowHeight/134));
  curveVertex((windowWidth/2)-(2*windowWidth/256),(windowHeight/2)-(windowHeight/134));
  curveVertex((windowWidth/2)-(2*windowWidth/256), (windowHeight/2)); // the first control point0
  curveVertex((windowWidth/2)-(2*windowWidth/256), (windowHeight/2)); // is also the last control point
  endShape();
  //figura huevo
  fill(242,236,220);
  arc(windowWidth/2,windowHeight/2,windowWidth/8,windowHeight/3,0,PI,CHORD);
  translate(-windowWidth/16,3*windowHeight/4.2);
  rotate(PI/2 / -2);
  arc(windowWidth/2,windowHeight/2,windowWidth/8,2*windowHeight/5,PI,0,CHORD);
  //figura corona
  fill(247,190,45);
  beginShape();
  vertex((windowWidth/2)-(6*windowWidth/256),(windowHeight/2)-(24*windowHeight/134));
  vertex((windowWidth/2)+(6*windowWidth/256),(windowHeight/2)-(24*windowHeight/134));
  vertex((windowWidth/2)+(4*windowWidth/256),(windowHeight/2)-(28*windowHeight/134));
  vertex((windowWidth/2)+(2*windowWidth/256),(windowHeight/2)-(26*windowHeight/134));
  vertex((windowWidth/2)-(windowWidth/256),(windowHeight/2)-(32*windowHeight/134));
  vertex((windowWidth/2)-(2*windowWidth/256),(windowHeight/2)-(26*windowHeight/134));
  vertex((windowWidth/2)-(4*windowWidth/256),(windowHeight/2)-(28*windowHeight/134));
  vertex((windowWidth/2)-(6*windowWidth/256),(windowHeight/2)-(24*windowHeight/134));
  endShape();
   }else if(opacity2 == 0){
    //figura serpiente verde
   fill(80,149,8);
   smooth();
   beginShape();
  curveVertex((windowWidth/2)+ (2*windowWidth/256), (windowHeight/2)); // the first control point
  curveVertex((windowWidth/2)+ (2*windowWidth/256), (windowHeight/2)); // is also the start point of curve
  curveVertex((windowWidth/2)+(2*windowWidth/256), (windowHeight/2)-(windowHeight/134)); // the first control poin
  curveVertex((windowWidth/2)+(2*windowWidth/256), (windowHeight/2)-(10*windowHeight/134)); // the first control point
  curveVertex((windowWidth/2)+(6*windowWidth/256), (windowHeight/2)-(16*windowHeight/134));
  curveVertex((windowWidth/2)+(2*windowWidth/256), (windowHeight/2)-(16*windowHeight/134));
  curveVertex((windowWidth/2)-(2*windowWidth/256), (windowHeight/2)-(10*windowHeight/134));
  curveVertex((windowWidth/2)-(2*windowWidth/256),(windowHeight/2)-(windowHeight/134));
  curveVertex((windowWidth/2)-(2*windowWidth/256), (windowHeight/2)); // the first control point0
  curveVertex((windowWidth/2)-(2*windowWidth/256), (windowHeight/2)); // is also the last control point
  endShape();
  //figura huevo
  fill(242,236,220);
  arc(windowWidth/2,windowHeight/2,windowWidth/8,windowHeight/3,0,PI,CHORD);
  translate(-windowWidth/16,3*windowHeight/4.2);
  rotate(PI/2 / -2);
  arc(windowWidth/2,windowHeight/2,windowWidth/8,2*windowHeight/5,PI,0,CHORD);
  //figura corona
  fill(247,190,45);
  beginShape();
  vertex((windowWidth/2)-(6*windowWidth/256),(windowHeight/2)-(24*windowHeight/134));
  vertex((windowWidth/2)+(6*windowWidth/256),(windowHeight/2)-(24*windowHeight/134));
  vertex((windowWidth/2)+(4*windowWidth/256),(windowHeight/2)-(28*windowHeight/134));
  vertex((windowWidth/2)+(2*windowWidth/256),(windowHeight/2)-(26*windowHeight/134));
  vertex((windowWidth/2)-(windowWidth/256),(windowHeight/2)-(32*windowHeight/134));
  vertex((windowWidth/2)-(2*windowWidth/256),(windowHeight/2)-(26*windowHeight/134));
  vertex((windowWidth/2)-(4*windowWidth/256),(windowHeight/2)-(28*windowHeight/134));
  vertex((windowWidth/2)-(6*windowWidth/256),(windowHeight/2)-(24*windowHeight/134));
  endShape();
  fill(255);
  ellipse(((windowWidth/2)+(2*windowWidth/256), (windowHeight/2)-(16*windowHeight/134),5,5));

   }
   break;
  }
}