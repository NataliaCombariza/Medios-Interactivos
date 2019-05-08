var x = 0;
var y = 0;
var x1 = 0;
var y1 = 0;
var x2=-100;
var y2=-100;
var x3=-100;
var y3=-100;
var j = 0;
var j1 = 0;
var j2 = 0;
var j3 = 0;
var k=0;
var vel1 = 0;
var vel2 = 0;
var vel3 = 0;
var vel = 0;
var mouseMov=false;
var contPinas=0;
var contAguacate=0;

var posXE=180;
var posYE=50;
var wE=55;
var hE=30;
var posXB=260;
var posYB=50;
var wB=75;
var hB=30;
var posXT=340;
var posYT=50;
var wT=65;
var hT=30;
var posXC=410;
var posYC=50;
var wC=60;
var hC=30;
var dragging1 = false; 
var dragging2 = false; 
var dragging3 = false; 
var dragging4 = false;
var rollover = false;
var offsetXE;
var offsetYE;  
var offsetXB;
var offsetYB;  
var offsetXT;
var offsetYT;  
var offsetXC;
var offsetYC; 

var tiempo =0;
var crecimiento = 0;
var movX = 0;
var movY = 0;
var siembra = [];
var altSiembra = 0;

var cantElefantes;
var cantBallenas;
var cantTitanic;
var cantChapinero;
var cantPinas;
var cantAguacates;

//imagenes
var mapa;
var elefante;
var ballenas;
var titanic;
var aguacateImg;
var chapinero;
var cocosImg;
var fresasImg;
var naranjasImg;
var papayasImg;
var perasImg;
var pinasImg;
var tomatesImg;
var uvasImg;
var arbolAguacate;
var arbolPina;

//Variables toneladas
var aguacate;
var areaTotal;
var cocos;
var fresas;
var naranjas;
var papayas;
var peras;
var pinas;
var tomates;
var uvas;

//variables para llamar datos
var tablaAguacate;
var tablaAreaTotal;
var tablaCocos;
var tablaFresas;
var tablaNaranjas;
var tablaPapayas;
var tablaPeras;
var tablaPinas;
var tablaTomates;
var tablaUvas;
var tablaAnos;
var tablaFrutas;


function preload() {
  mapa = loadImage('assets/colombia.png');
  elefante = loadImage('assets/elefante.png');
  ballenas = loadImage('assets/ballena.png');
  titanic = loadImage('assets/titanic.png');
  aguacateImg = loadImage('assets/aguacate.png');
  chapinero = loadImage('assets/chapinero.png');
  cocosImg = loadImage('assets/cocos.png');
  fresasImg = loadImage('assets/fresas.png');
  naranjasImg = loadImage('assets/naranja.png');
  papayasImg = loadImage('assets/papaya.png');
  perasImg = loadImage('assets/pera.png');
  pinasImg = loadImage('assets/pina.png');
  tomatesImg = loadImage('assets/tomate.png');
  uvasImg = loadImage('assets/uvas.png');
  arbolAguacate=loadImage('assets/arbolAguacate.png');
  arbolPina=loadImage('assets/arbolPina.png');

  tablaAguacate = loadTable('assets/aguacate.csv', 'csv', 'header');

  tablaAreaTotal = loadTable('assets/areatotal.csv', 'csv', 'header');
  tablaCocos = loadTable('assets/cocos.csv', 'csv', 'header');
  tablaFresas = loadTable('assets/Fresas.csv', 'csv', 'header');
  tablaNaranjas = loadTable('assets/naranjas.csv', 'csv', 'header');
  tablaPapayas = loadTable('assets/papayas.csv', 'csv', 'header');
  tablaPeras = loadTable('assets/Peras.csv', 'csv', 'header');
  tablaPinas = loadTable('assets/piñas.csv', 'csv', 'header');
  tablaTomates = loadTable('assets/tomates.csv', 'csv', 'header');
  tablaUvas = loadTable('assets/uvas.csv', 'csv', 'header');
  tablaAnos = loadTable('assets/anos.csv', 'csv', 'header');
  tablaFrutas = loadTable('assets/frutas.csv', 'csv', 'header');
}

function setup() {
  createCanvas(1024, 768);
  for (var i = 0; i < 12; i = i + 1) {
    siembra[i] = new zonas(random((width / 5.5) + 100, width - 400), random(height / 3, 2 * height / 3));
  }
}

function draw() {
  background(220);
  tiempo=millis();
     //inicio
    if (tiempo >= 0 && tiempo <= 8000) {
      fondoTitulo()
      titulo();
    }
    // mapa
    if (tiempo >= 8000 && tiempo <= 16500) {
      image(mapa, (width / 5.5) + 15, 20, width - 400, height - 50);
      if (tiempo >= 300) {
        for (var i = 0; i < 12; i = i + 1) {
          siembra[i].dibujarse();
        }
        if (tiempo >= 12000 && tiempo <=16500) {
          for (var i = 0; i < 12; i = i + 1) {
            siembra[i].moverse();
            if (siembra[i].y1 >= (3 * height / 4)) {
              siembra[i].morirse();
              if (siembra[i].morirse()) {
                altSiembra = altSiembra + 1;
              }
              print(altSiembra);
            }
          }
        }
      }

    }
    if (tiempo >= 16500 && tiempo <= 23000) {
      mapaColombia();
    }
      if (tiempo >= 23000 && tiempo <= 27000) {
      textSize(28);
      textAlign(CENTER);
      text('1 elefante pesa:', width / 2, height / 8);
      text('8 toneladas', width / 2, height - height / 8);
      image(elefante, width / 4, height / 4, 440, 390);
    }
   if (tiempo >= 27000 && tiempo <= 31560) {
      j = j + 1;
      if (j <= 280) {
        image(elefante, (width / 4) - (j * 0.9), (height / 4) - (2 * j / 3), 440 - j, 390 - j);
      }
    }
    if (tiempo >= 31550 && tiempo <= 39000) {
  image(elefante, (width / 4) - (280 * 0.9), (height / 4) - (2 * 280 / 3), 440 - 280, 390 - 280);
  textAlign(LEFT);
  text('vs', width / 5, height / 9);
  text('Toneladas diarias', width / 4, height / 9)
   //aparicion frutas
  frutas();
  frutasElefante();
  }
 
  
 if(tiempo>=39000 && tiempo <=43000){  
  textSize(28);
      textAlign(CENTER);
      text('1 Ballena azul pesa:', width / 2, height / 8);
      text('200 toneladas', width / 2, height - height / 8);
      image(ballenas, width / 9, 2*height / 7, 840, 300);
  }
  if (tiempo >= 43000 && tiempo <= 46500) {
      j1 = j1 + 1;
      if (j1 <= 210) {
        image(ballenas, (width / 9) - (j1*0.5), (2*height / 7) - (2 * j1 / 2), 840 - 2.6*j1, 300 - j1);
       }
  }
  if (tiempo >= 46490 && tiempo <= 51000) {
  //comparacion ballena
   image(ballenas, (width / 9) - (210*0.5), (2*height / 7) - (2 * 210 / 2), 840 - 2.6*210, 300 - 210);
  textAlign(LEFT);
  text('vs', 2*width / 6, height / 9);
  text('Toneladas mensuales', 2*width / 5, height / 9)
  //aparicion frutas
  frutas();
  frutasBallena();
}
  
   //titanic
  if(tiempo >= 51000 && tiempo <= 55000) {
      textSize(28);
      textAlign(CENTER);
      text('El titanic pesaba:', width / 2, height / 8);
      text('46.000 toneladas', width / 2, height - height / 8);
      image(titanic, width / 9, 2*height / 7, 840, 300);
  }
 if (tiempo >= 55000 && tiempo <= 58480) {
      j2 = j2 + 1;
      if (j2 <= 210) {
        image(titanic, (width / 9) - (j2*0.5), (2*height / 7) - (2 * j2 / 2), 840 - 2.6*j2, 300 - j2);
      }
 }
  //comparacion titanic
  if (tiempo >= 58480 && tiempo <= 65000) {
    image(titanic, (width / 9) - (210*0.5), (2*height / 7) - (2 * 210 / 2), 840 - 2.6*210, 300 - 210);
  textAlign(LEFT);
  text('vs', 2*width / 6, height / 9);
  text('Toneladas anuales', 2*width / 5, height / 9);
  frutasTitanic();
       frutas();
  }
  if (tiempo >= 65000 ) {
   fondoDoble();
  }
  if (tiempo >= 65000 && tiempo <= 125000) {
    frutasVersus();
  }
  
 if (tiempo >= 73000 && tiempo <= 96000) {
  
  moverElefante();
   if(posXE>550){
      comparacionElefante();
      posXB=260;
      posXT=340;
      posXC=410;
   }
   moverBallena();
  if(posXB>630){
   comparacionBallena();
   posXE=200;
   posXT=340;
   posXC=410;
   }
   moverTitanic();
   if(posXT>710){
   comparacionTitanic();
   posXE=200;
   posXB=260;
   posXC=410;
   }
    moverChapinero();
   if(posXC>790){
   comparacionChapinero();
   posXE=200;
   posXB=260;
   posXT=340;
   }
  push();
  tint(255, 127);
  elefantes(550,50,wE,hE);
  ballena(630,50,wB,hB);
  titanics(710,50,wT,hT);
  image(chapinero,790,50,wC,hC);
  pop();
 }
    if (tiempo >= 96000 && tiempo <= 120000) {
     plantasArbol();
      
    var difX = abs(mouseX - pmouseX);

  var difY = abs(mouseY - pmouseY);

  difX = pow(difX, 2);
  difY = pow(difY, 2);

  var vel = floor(sqrt(difX + difY));

if(tiempo >= 102000 && tiempo <= 114000){
  text('agite el mouse',width/3,height/14);
  if (vel !==0 ) {

   mouseMov=true;
  }
      if(mouseMov==true){
      caidaFrutas();
      } 
      }
    }
     if(tiempo>=114000 && tiempo<=120000){
     produccionFrutas();
     }
   if(tiempo>=120000 && tiempo<=140000){
     votacion();
     }

}


function titulo() {
  textSize(20);
  if (x < ((width / 2) - 90)) {
    fill(0);
    text('Frutas', x, height / 2);
    text('Colombia', width - x - 50, height / 2);
    text('en', (width / 2) - 10, y);
  }
  if (x >= ((width / 2) - 90)) {
    fill(0);
    text('Frutas', (width / 2) - 80, height / 2);
    text('Colombia', (width / 2) + 30, height / 2);
    text('en', (width / 2) - 10, height / 2);
  }
  x = x + 1.66;
  y = y + 1.5;
}

function fondoTitulo() {
  if (x < width / 2) {
    noStroke();
    fill(220, 250, 10);
    rect(width - x * 2.4, 0, width, 3 * height / 7);
    fill(20, 20, 240);
    rect(-width + x * 2.4, 3 * height / 7, width, 2 * height / 7);
    fill(240, 20, 60);
    rect(width - x * 2.4, 5 * height / 7, width, 2 * height / 7);
  }
  if (x >= (width / 2) - 90) {
    noStroke();
    fill(220, 250, 10);
    rect(0, 0, width, 3 * height / 7);
    fill(20, 20, 240);
    rect(0, 3 * height / 7, width, 2 * height / 7);
    fill(240, 20, 60);
    rect(0, 5 * height / 7, width, 2 * height / 7);
  }
}

function mapaColombia() {
  crecimiento = crecimiento + 2;
  movX = movX + 1;
  movY = movY + 3;
  if (movX < width / 5.5 && movX > 0) {
    image(mapa, (width / 5.5) + 15 - movX, 20 - movY, width - 400 + crecimiento, height - 50 + crecimiento);
  } else {
    image(mapa, (width / 5.5) + 15 - 186, 20 - 558, width - 400 + 372, height - 50 + 372);
  }
}

function zonas(_x, _y) {
  this.x1 = _x;
  this.y1 = _y;
  this.viva = true;

  //Habilidades
  this.dibujarse = function() {
    if (this.viva == true) {
      rect(this.x1, this.y1, 20, 20);
    }
  }

  this.moverse = function() {
    if (this.y1 < height) {
      this.y1 = this.y1 + random(0, 3);
    }
  }

  this.morirse = function() {
    this.viva = false;
  }
}

function elefantes(x, y, alt, anc) {
  image(elefante, x, y, alt, anc);
}

function ballena(x, y, alt, anc) {
  image(ballenas, x, y, alt, anc);
}

function titanics(x, y, alt, anc) {
  image(titanic, x, y, alt, anc);
}

function frutas() {
  vel1 = vel1 + 1;
  vel2 = vel2 + 2.2;
  vel3 = vel3 + 3.4;
  if (vel3 < (width / 2)) {
    image(perasImg, width / 12, vel1, 50, 55);
    image(uvasImg, 4 * width / 12, vel1, 60, 50);
    image(fresasImg, 8 * width / 12, vel1, 70, 50);
    image(cocosImg, width / 12, vel2, 85, 50);
    image(papayasImg, 4 * width / 12, vel2, 50, 50);
    image(naranjasImg, 8 * width / 12, vel2, 50, 50);
    image(tomatesImg, width / 12, vel3, 50, 50);
    image(aguacateImg, 4 * width / 12, vel3, 50, 55);
    image(pinasImg, 8 * width / 12, vel3, 50, 65);
  } else {
    image(perasImg, width / 12, height / 5, 50, 55);
    image(uvasImg, 4 * width / 12, height / 5, 60, 50);
    image(fresasImg, 8 * width / 12, height / 5, 70, 50);
    image(cocosImg, width / 12, 2.2 * height / 5, 85, 50);
    image(papayasImg, 4 * width / 12, 2.2 * height / 5, 50, 50);
    image(naranjasImg, 8 * width / 12, 2.2 * height / 5, 50, 50);
    image(tomatesImg, width / 12, 3.5 * height / 5, 50, 50);
    image(aguacateImg, 4 * width / 12, 3.5 * height / 5, 50, 55);
    image(pinasImg, 8 * width / 12, 3.5 * height / 5, 50, 65);
  }
}

function frutasElefante(){
//comparacion con elefante
  //elefantes por fruta

  //peras
  cantElefante = (tablaPeras.getNum(38, 4) / 365) / 8;
  text(int(cantElefante), 100 + (width / 15), (height / 5) + 50);
  for (var i = 0; i < int(cantElefante) / 2; i++) {
    elefantes((60 * i) + width / 15, (height / 5) + 70, 50, 45);
    elefantes((60 * i) + width / 15, (height / 5) + 120, 50, 45);
  }
  //uvas
  cantElefante = (tablaUvas.getNum(114, 4) / 365) / 8;
  text(int(cantElefante), 100 + (5 * width / 15), (height / 5) + 50);
  for (var i = 0; i < (int(cantElefante)/ 2) - 1; i++) {
    elefantes((60 * i) + (5 * width / 15), (height / 5) + 70, 50, 45);
    elefantes((60 * i) + (5 * width / 15), (height / 5) + 120, 50, 45);
  }
  //fresas
  cantElefante = (tablaFresas.getNum(64, 4) / 365) / 8;
  text(int(cantElefante), 100 + (10 * width / 15), (height / 5) + 50);
  for (var i = 0; i < int(cantElefante) / 3; i++) {
    elefantes((40 * i) + (10 * width / 15), (height / 5) + 70, 30, 25);
    elefantes((40 * i) + (10 * width / 15), (height / 5) + 110, 30, 25);
    elefantes((40 * i) + (10 * width / 15), (height / 5) + 150, 30, 25);
  }
  //cocos
  cantElefante = (tablaCocos.getNum(66, 4) / 365) / 8;
  text(int(cantElefante), 100 + (width / 15), (2.2 * height / 5) + 50);
  for (var i = 0; i < (int(cantElefante) / 4) - 2; i++) {
    elefantes((23 * i) + (width / 15), (2.2 * height / 5) + 70, 25, 20);
    elefantes((23 * i) + (width / 15), (2.2 * height / 5) + 100, 25, 20);
    elefantes((23 * i) + (width / 15), (2.2 * height / 5) + 130, 25, 20);
    elefantes((23 * i) + (width / 15), (2.2 * height / 5) + 160, 25, 20);
  }
  //papayas
  cantElefante = (tablaPapayas.getNum(114, 4) / 365) / 8;
  text(int(cantElefante), 100 + (5 * width / 15), (2.2 * height / 5) + 50);
  for (var i = 0; i < (int(cantElefante) / 4) - 2; i++) {
    elefantes((23 * i) + (5 * width / 15), (2.2 * height / 5) + 70, 25, 20);
    elefantes((23 * i) + (5 * width / 15), (2.2 * height / 5) + 100, 25, 20);
    elefantes((23 * i) + (5 * width / 15), (2.2 * height / 5) + 130, 25, 20);
    elefantes((23 * i) + (5 * width / 15), (2.2 * height / 5) + 160, 25, 20);
  }
  //naranjas
  cantElefante = (tablaNaranjas.getNum(114, 4) / 365) / 8;
  text(int(cantElefante), 100 + (10 * width / 15), (2.2 * height / 5) + 50);
  for (var i = 0; i < (int(cantElefante) / 6) - 1; i++) {
    elefantes((20 * i) + (10 * width / 15), (2.2 * height / 5) + 70, 20, 15);
    elefantes((20 * i) + (10 * width / 15), (2.2 * height / 5) + 90, 20, 15);
    elefantes((20 * i) + (10 * width / 15), (2.2 * height / 5) + 110, 20, 15);
    elefantes((20 * i) + (10 * width / 15), (2.2 * height / 5) + 130, 20, 15);
    elefantes((20 * i) + (10 * width / 15), (2.2 * height / 5) + 150, 20, 15);
    elefantes((20 * i) + (10 * width / 15), (2.2 * height / 5) + 170, 20, 15)
  }
  //tomates
  cantElefante = (tablaTomates.getNum(114, 4) / 365) / 8;
  text(int(cantElefante), 100 + (width / 15), (3.5 * height / 5) + 50);
  elefantes(30 + (width / 15), (3.5 * height / 5) + 70, 190, 135);
  //aguacate
  cantElefante = (tablaAguacate.getNum(114, 4) / 365) / 8;
  text(int(cantElefante), 100 + (5 * width / 15), (3.5 * height / 5) + 50);
  elefantes(50 + (5 * width / 15), (3.5 * height / 5) + 70, 170, 125);
  //pinas
  cantElefante = (tablaPinas.getNum(114, 4) / 365) / 8;
  text(int(cantElefante), 100 + (10 * width / 15), (3.5 * height / 5) + 50);
  elefantes(60 + (10 * width / 15), (3.5 * height / 5) + 65, 210, 155);
}
  
  function frutasBallena(){
  //ballenas por fruta
  //peras
  cantBallenas = (tablaPeras.getNum(38, 4) / 12) / 200;
  text(int(cantBallenas), 100 + (width / 15), (height / 5) + 50);
  for (var i = 0; i < (int(cantBallenas)/ 3)-1; i++) {
    ballena((75 * i) + width / 15, (height / 5) + 70, 70, 25);
    ballena((75 * i) + width / 15, (height / 5) + 105, 70, 25);
    ballena((75 * i) + width / 15, (height / 5) + 140, 70, 25);
  }
   //uvas
  cantBallenas = (tablaUvas.getNum(114, 4) / 12) / 200;
  text(int(cantBallenas), 100 + (5 * width / 15), (height / 5) + 50);
  for (var i = 0; i < (int(cantBallenas) / 3)-1 ; i++) {
    ballena((75 * i) + (5 * width / 15), (height / 5) + 70, 70, 25);
    ballena((75 * i) + (5 * width / 15), (height / 5) + 105, 70, 25);
    ballena((75 * i) + (5 * width / 15), (height / 5) + 140, 70, 25);
  }
  //fresas
  cantBallenas = (tablaFresas.getNum(64, 4) / 12) / 200;
  text(int(cantBallenas), 100 + (10 * width / 15), (height / 5) + 50);
  for (var i = 0; i < (int(cantBallenas)/ 4)-1; i++) {
    ballena((50 * i) + (10 * width / 15), (height / 5) + 65, 45, 15);
    ballena((50 * i) + (10 * width / 15), (height / 5) + 95, 45, 15);
    ballena((50 * i) + (10 * width / 15), (height / 5) + 120, 45, 15);
     ballena((50 * i) + (10 * width / 15), (height / 5) + 150, 45, 15);
  }
  //cocos
  cantBallenas = (tablaCocos.getNum(66, 4) / 12) / 200;
  text(int(cantBallenas), 100 + (width / 15), (2.2 * height / 5) + 50);
  for (var i = 0; i < (int(cantBallenas) / 5) - 2; i++) {
    ballena((28 * i) + (width / 15), (2.2 * height / 5) + 70, 25, 10);
    ballena((28 * i) + (width / 15), (2.2 * height / 5) + 90, 25, 10);
    ballena((28 * i) + (width / 15), (2.2 * height / 5) + 110, 25, 10);
    ballena((28 * i) + (width / 15), (2.2 * height / 5) + 130, 25, 10);
     ballena((28 * i) + (width / 15), (2.2 * height / 5) + 150, 25, 10);
     ballena((28 * i) + (width / 15), (2.2 * height / 5) + 170, 25, 10);
  }
  //papayas
  cantBallenas = (tablaPapayas.getNum(114, 4) / 12) / 200;
  text(int(cantBallenas), 100 + (5 * width / 15), (2.2 * height / 5) + 50);
  for (var i = 0; i < (int(cantBallenas) / 7) - 1; i++) {
    ballena((30 * i) + (5 * width / 15), (2.2 * height / 5) + 70, 25, 10);
    ballena((30 * i) + (5 * width / 15), (2.2 * height / 5) + 86, 25, 10);
    ballena((30 * i) + (5 * width / 15), (2.2 * height / 5) + 102, 25, 10);
    ballena((30 * i) + (5 * width / 15), (2.2 * height / 5) + 118, 25, 10);
    ballena((30 * i) + (5 * width / 15), (2.2 * height / 5) + 134, 25, 10);
    ballena((30 * i) + (5 * width / 15), (2.2 * height / 5) + 150, 25, 10);
    ballena((30 * i) + (5 * width / 15), (2.2 * height / 5) + 170, 25, 10);
  }
  //naranjas
  cantBallenas = (tablaNaranjas.getNum(114, 4) / 12) / 200;
  text(int(cantBallenas), 100 + (10 * width / 15), (2.2 * height / 5) + 50);
  for (var i = 0; i < (int(cantBallenas) / 8) - 1; i++) {
    ballena((22 * i) + (10 * width / 15), (2.2 * height / 5) + 70, 20, 10);
    ballena((22 * i) + (10 * width / 15), (2.2 * height / 5) + 85, 20, 10);
    ballena((22 * i) + (10 * width / 15), (2.2 * height / 5) + 100, 20, 10);
    ballena((22 * i) + (10 * width / 15), (2.2 * height / 5) + 115, 20, 10);
    ballena((22 * i) + (10 * width / 15), (2.2 * height / 5) + 130, 20, 10);
    ballena((22 * i) + (10 * width / 15), (2.2 * height / 5) + 145, 20, 10)
    ballena((22 * i) + (10 * width / 15), (2.2 * height / 5) + 160, 20, 10)
    ballena((22 * i) + (10 * width / 15), (2.2 * height / 5) + 175, 20, 10)
  }
  //tomates
  cantBallenas = (tablaTomates.getNum(114, 4) / 12) / 200;
  text(int(cantBallenas), 100 + (width / 15), (3.5 * height / 5) + 50);
  ballena((width / 15), (3.5 * height / 5) + 80, 260, 110);
  //aguacate
  cantBallenas = (tablaAguacate.getNum(114, 4) / 12) / 200;
  text(int(cantBallenas), 100 + (5 * width / 15), (3.5 * height / 5) + 50);
  ballena(50 + (5 * width / 15), (3.5 * height / 5) + 80, 230, 100);
  //pinas
  cantBallenas = (tablaPinas.getNum(114, 4) / 12) / 200;
  text(int(cantBallenas), 100 + (10 * width / 15), (3.5 * height / 5) + 50);
  ballena(20 + (10 * width / 15), (3.5 * height / 5) + 80, 290, 120);
  
  }
  
function frutasTitanic(){

  //titanics por fruta
  //peras
  cantTitanics = (tablaPeras.getNum(38, 4)) / 46000;
  text(int(cantTitanics), 100 + (width / 15), (height / 5) + 50);
    titanics(20+(width / 15), (height / 5) + 70, 90, 35);
  fill(220);
  noStroke();
    rect(60+(width / 15), (height / 5)+70,50,50);
  fill(0);
   //uvas
  cantTitanics = (tablaUvas.getNum(114, 4) / 46000);
  text(int(cantTitanics), 100 + (5 * width / 15), (height / 5) + 50);
    titanics(20 + (5 * width / 15), (height / 5) + 70, 90, 35);
  fill(220);
  noStroke();
  rect(70+(5*width / 15), (height / 5)+70,50,50);
  fill(0);
 
  //fresas
  cantTitanics = (tablaFresas.getNum(64, 4) / 46000);
  text(int(cantTitanics), 100 + (10 * width / 15), (height / 5) + 50);
  for (var i = 0; i < int(cantTitanics); i++) {
    titanics((100 * i) + (10 * width / 15), (height / 5) + 70, 90, 35);
  }
  fill(220);
  noStroke();
  rect(125+(10*width / 15), (height / 5)+70,70,50);
  fill(0);
  //cocos
  cantTitanics = (tablaCocos.getNum(66, 4) / 46000);
  text(int(cantTitanics), 100 + (width / 15), (2.2 * height / 5) + 50);
  for (var i = 0; i < int(cantTitanics)-1; i++) {
    titanics(20+(100 * i) + (width / 15), (2.2 * height / 5) + 70, 90, 35);
    titanics(20+(100 * i) + (width / 15), (2.2 * height / 5) + 120, 90, 35);
    fill(220);
  noStroke();
  rect(120+(width / 15), (2.2*height / 5)+120,90,50);
  fill(0);
  }
  //papayas
  cantTitanics = (tablaPapayas.getNum(114, 4) /46000);
  text(int(cantTitanics), 100 + (5 * width / 15), (2.2 * height / 5) + 50);
  for (var i = 0; i < int(cantTitanics)/2 ; i++) {
   titanics(20+(100 * i) + (5*width / 15), (2.2 * height / 5) + 70, 90, 35);
   titanics(20+(100 * i) + (5*width / 15), (2.2 * height / 5) + 120, 90, 35);

  }
  //naranjas
  cantTitanics = (tablaNaranjas.getNum(114, 4) / 46000);
  text(int(cantTitanics), 100 + (10 * width / 15), (2.2 * height / 5) + 50);
  for (var i = 0; i < int(cantTitanics)/2; i++) {
    titanics((100 * i) + (10 * width / 15), (2.2 * height / 5) + 70, 90, 35);
    titanics((100 * i) + (10 * width / 15), (2.2 * height / 5) + 120, 90, 35);
  }
//   //tomates
 cantTitanics = (tablaTomates.getNum(114, 4) / 46000);
  text(int(cantTitanics), 100 + ( width / 15), (3.5 * height / 5) + 50);
  for (var i = 0; i < (int(cantTitanics)/4); i++) {
    titanics((70 * i) + (width / 15), 3.5 * height / 5 + 70, 70,30);
    titanics((70 * i) + ( width / 15), (3.5 * height / 5) + 100, 70, 30);
    titanics((70 * i) + ( width / 15), (3.5 * height / 5) + 130, 70, 30);
    titanics((70 * i) + ( width / 15), (3.5 * height / 5) + 160, 70, 30);
  }
  //aguacate
   cantTitanics = (tablaAguacate.getNum(114, 4) / 46000);
  text(int(cantTitanics), 100 + ( 5*width / 15), (3.5 * height / 5) + 50);
  for (var i = 0; i < (int(cantTitanics)/3); i++) {
    titanics(30+(100 * i) + (5*width / 15), 3.5 * height / 5 + 70, 90,35);
    titanics(30+(100 * i) + (5*width / 15), (3.5 * height / 5) + 120, 90, 35);
    titanics(30+(100 * i) + (5*width / 15), (3.5 * height / 5) + 160, 90, 35);
    fill(220);
  noStroke();
  rect(120+(5*width / 15), (3.5*height / 5)+160,200,50);
  fill(0);
  }
  //pinas
  cantTitanics = (tablaPinas.getNum(114, 4) / 46000);
  text(int(cantTitanics), 100 + ( 10*width / 15), (3.5 * height / 5) + 50);
  for (var i = 0; i < (int(cantTitanics)/5); i++) {
    titanics((65 * i) + (10*width / 15), 3.5 * height / 5 + 70, 60,25);
    titanics((65 * i) + (10* width / 15), (3.5 * height / 5) + 95, 60, 25);
    titanics((65 * i) + (10* width / 15), (3.5 * height / 5) + 120, 60, 25);
    titanics((65 * i) + (10* width / 15), (3.5 * height / 5) + 145, 60, 25);
  titanics((65 * i) + (10* width / 15), (3.5 * height / 5) + 170, 60, 25);
}
  fill(220);
  noStroke();
  rect(260+(10*width / 15), (3.5*height / 5)+170,60,30);
  fill(0);
  }

function fondoDoble() {
  if (x1 < width / 2) {
    noStroke();
    fill(60, 210, 60);
    rect(-width/2 + x1, 0, width / 2, height);
    x1 = x1 + 4;
    fill(220, 250, 10);
    rect(width - x1, 0, width / 2, height);
    y1 = y1 + 1.66;
  }
  if (x1 == width / 2) {
    noStroke();
    fill(20, 210, 60);
    rect(0, 0, width / 2, width);
    fill(220, 250, 10);
    rect(width / 2, 0, width / 2, width);
  }
  }

function frutasVersus(){
 k=k+4;
  fill(0);
  textSize(20);
  if (k >= width / 2 && k<= (width/2)+600) {
   image(aguacateImg,width/8,height/4,300,350);
    text('Mayor Area',(width/4)-40,height-height/5);
   image(pinasImg,5*width/8,(height/5)-25,300,400);
    text('Mayor cantidad',(width-width/3)+50,height-height/5);
    text('Vs.',width/2-50,height/8);
  }
  if(k>= (width/2)+600){
      j3++;
    if(j3<200){
   image(aguacateImg,(width/8)-j3*(0.6),(height/4)-j3*(0.9),300-j3*(0.6),350-j3*(0.8));
   image(pinasImg,(5*width/8)+j3*(1.2),(height/4)-25-j3*(0.8),300-j3*(0.8),400-j3); 
           }else{
image(aguacateImg,(width/8)-200*(0.6),(height/4)-200*(0.9),300-200*(0.6),350-200*(0.8));   
image(pinasImg,(5*width/8)+200*(1.2),(height/4)-25-200*(0.8),300-200*(0.8),400-200);  
           }
  }
}

function moverElefante(){
 if (mouseX > posXE && mouseX < posXE + wE && mouseY > posYE && mouseY < posYE + hE) {
    rollover = true;
  } 
  else {
    rollover = false;
  }
  
   if (dragging1) {
    posXE = mouseX + offsetXE;
  }
  


  stroke(0);
  // Different fill based on state
  if (dragging1) {
    fill (50);
  } else if (rollover) {
    fill(100);
  } else {
    fill(175, 200);
  }
 elefantes(posXE, posYE, wE, hE);
}

function moverBallena(){
if (mouseX > posXB && mouseX < posXB + wB && mouseY > posYB && mouseY < posYB + hB) {
    rollover = true;
  } 
  else {
    rollover = false;
  }
  
   if (dragging2) {
    posXB = mouseX + offsetXB;
  }
  
  stroke(0);
  // Different fill based on state
  if (dragging2) {
    fill (50);
  } else if (rollover) {
    fill(100);
  } else {
    fill(175, 200);
  }
  ballena(posXB, posYB, wB, hB);
}

function moverTitanic(){
  
  if (mouseX > posXT && mouseX < posXT + wT && mouseY > posYT && mouseY < posYT + hT) {
    rollover = true;
  } 
  else {
    rollover = false;
  }
 
   if (dragging3) {
    posXT = mouseX + offsetXT;
  }
  
  stroke(0);
  // Different fill based on state
  if (dragging3) {
    fill (50);
  } else if (rollover) {
    fill(100);
  } else {
    fill(175, 200);
  }
 titanics(posXT, posYT, wT, hT);
}
function moverChapinero(){
  
  if (mouseX > posXC && mouseX < posXC + wC && mouseY > posYC && mouseY < posYC + hC) {
    rollover = true;
  } 
  else {
    rollover = false;
  }
 
   if (dragging4) {
    posXC = mouseX + offsetXC;
  }
  
  stroke(0);
  // Different fill based on state
  if (dragging4) {
    fill (50);
  } else if (rollover) {
    fill(100);
  } else {
    fill(175, 200);
  }
 image(chapinero,posXC, posYC, wC, hC);
}

function mousePressed() {
  if (mouseX > posXE && mouseX < posXE + wE && mouseY > posYE && mouseY < posYE + hE) {
    dragging1 = true;
    offsetXE = posXE-mouseX;
  }
  if (mouseX > posXB && mouseX < posXB + wB && mouseY > posYB && mouseY < posYB + hB) {
    dragging2 = true;
    offsetXB = posXB-mouseX;
  }
  if (mouseX > posXT && mouseX < posXT + wT && mouseY > posYT && mouseY < posYT + hT) {
    dragging3 = true;
    offsetXT = posXT-mouseX;
  }
   if (mouseX > posXC && mouseX < posXC + wC && mouseY > posYC && mouseY < posYC + hC) {
    dragging4 = true;
    offsetXC = posXC-mouseX;
  }
}

function mouseReleased() {
  dragging1 = false;
  dragging2 = false;
  dragging3 = false;
  dragging4 = false;
}

function comparacionElefante(){
  text('Equivale a 30 elefantes (240 Ton)',width/2.5,height-height/16);
  text('Produccion diaria',width/2.5,height/6);
  elefantes((width/4), (height-height/16)-45, 120, 75);
   //aguacate
  cantElefante = (tablaAguacate.getNum(114, 4) / 365) / 240;
  for(var i=0; i <int(cantElefante)/2;i++){
  elefantes( (width/12)-40, ( height / 2.5) + 170*i, 200, 155);
  elefantes(80+ (width/6), ( height / 2.5) + 170*i, 200, 155);
  }
  text(int(cantElefante*30), 100 + (width/14), ( height / 5) + 50);
  //pinas
  cantElefante = (tablaPinas.getNum(114, 4) / 365) / 240;
  for(var i=0; i <(int(cantElefante)/3)-1;i++){
  elefantes((8 * width / 15), ( height / 3)+20 + 100*i, 145, 100);
    elefantes(15 + (10 * width / 15), ( height / 3)+20 + 100*i, 145, 100);
  elefantes(30 + (12 * width / 15), ( height / 3) +20+ 100*i, 145, 100);
  }
  text(int(cantElefante*30), (10 * width / 15), ( height / 5) + 50);
}

function comparacionBallena(){
  text('Equivale a 30 ballenas (6000 Ton)',width/2.5,height-height/16);
  text('Produccion mensual',width/2.5,height/6);
  ballena((width/4), (height-height/16)-30, 130, 50);
   //aguacate
  cantBallenas = (tablaAguacate.getNum(114, 4) / 12) / 6000;
  for(var i=0; i <(int(cantBallenas)/2)-1;i++){
  ballena( (width/12)-40, ( height / 2.5) + 120*i, 200, 80);
  ballena(80+ (width/6), ( height / 2.5) + 120*i, 200, 80);
  }
  text(int(cantBallenas*30), 100 + (width/14), ( height / 5) + 50);
  //pinas
  cantBallenas = (tablaPinas.getNum(114, 4) / 12) / 6000;
  for(var i=0; i <(int(cantBallenas)/3)-1;i++){
  ballena((8 * width / 15), ( height / 3)+20 + 80*i, 145, 60);
    ballena(15 + (10 * width / 15), ( height / 3)+20 + 80*i, 145, 60);
  ballena(30 + (12 * width / 15), ( height / 3) +20+ 80*i, 145, 60);
  }
  text(int(cantBallenas*30), (10 * width / 15), ( height / 5) + 50);
}

function comparacionTitanic(){
  text('Equivale a 46000 toneladas',width/2.5,height-height/16);
  text('Produccion anual',width/2.5,height/6);
  titanics((width/4), (height-height/16)-30, 130, 50);
   //aguacate
  cantTitanics = (tablaAguacate.getNum(114, 4) / 46000);
  for(var i=0; i <(int(cantTitanics)/2)-1;i++){
  titanics( (width/12)-40, ( height / 2.5) + 120*i, 200, 80);
  titanics(80+ (width/6), ( height / 2.5) + 120*i, 200, 80);
  }
  text(int(cantTitanics), 100 + (width/14), ( height / 5) + 50);
  //pinas
  cantTitanics = (tablaPinas.getNum(114, 4) /46000);
  for(var i=0; i <(int(cantTitanics)/4);i++){
  titanics((8 * width / 15), ( height / 2.7)+20 + 60*i, 100, 40);
    titanics(10 + (9.5 * width / 15), ( height / 2.7)+20 + 60*i, 100, 40);
  titanics(20 + (11 * width / 15), ( height / 2.7) +20+ 60*i, 100, 40);
    titanics(30 + (12.5 * width / 15), ( height / 2.7) +20+ 60*i, 100, 40);
  }
  text(int(cantTitanics), (10 * width / 15), ( height / 5) + 50);
}

function comparacionChapinero(){
  text('Equivale a 3898 hectareas',width/2.4,height-height/16);
  text('Chapinero',width/2.4,height+20-height/16);
  text('Area total',width/2.2,height/6);
  image( chapinero,(width/3.5), (height-height/16)-30, 100, 60);
   //aguacate
  cantChapinero = (tablaAguacate.getNum(1, 4) / 3898);
  for(var i=0; i <(int(cantChapinero)/2)-1;i++){
  image( chapinero,20+(width/12), ( height / 3) + 80*i, 130, 70);
  image( chapinero,90+ (width/6), ( height / 3) + 80*i, 130, 70);
  }
  text(int(cantChapinero), 100 + (width/14), ( height / 5) + 50);
  //pinas
  cantChapinero = (tablaPinas.getNum(1, 4) /3898);
  for(var i=0; i <(cantChapinero/2)-1;i++){
  image( chapinero,(9 * width / 15), ( height / 2.7)+20 + 120*i, 160, 90);
   image( chapinero,30+(11 * width / 15), ( height / 2.7)+20 + 120*i, 160, 90);
  }
  text(int(cantChapinero), (10 * width / 15), ( height / 5) + 50);
}

function plantasArbol(){
 text('El area que ocupa el arbol es de:',width/2.8,height/8); 
image(arbolAguacate,(width/8)-100,height/4,450,450);
image(arbolPina,(width-width/3)-80,height/2,350,150);
  //pina
  var area=(tablaFrutas.getNum(1,1));
text(area+' m2',(width-width/4),height-(height/8));
  //aguacate
  var area1=tablaFrutas.getNum(1,2);
text(area1+ ' m2',(width/4)-20,height-(height/8));
}

function caidaFrutas(){
x2=x2+random(-4,4);
y2=y2+(random(-1,4));
x3=x3+(random(-2,2));
y3=y3+(random(-1,4));
  for(var i=0;i<20;i++){
    for(var j=0;j<10;j++){
image(pinasImg,x2+60*i,60*j+y2,40,60);
image(aguacateImg,x3+60*i,60*j+y3,40,50);
    }
  }

}

function produccionFrutas(){
  cantPinas=tablaFrutas.getNum(0,1);
for(var i=0;i<cantPinas;i++){
  image(pinasImg,(width-width/3)-50+50*i,height-height/9,50,70);
}
  text('Antes de morir',width-width/5,height-(height/9)+40);
  cantAguacates=tablaFrutas.getNum(0,2);
  image(aguacateImg,width/8,height-height/9,50,65);
  text(cantAguacates,(width/5)+20,height-(height/9)+40);
  text('Por temporada',(width/3)-50,height-(height/9)+40);

}
function mouseClicked(){
 if(mouseX<150){
    contAguacate++;
  }
  if(mouseX>width-150){
    contPinas++;
  }
}
function votacion(){
  fill(0);
   image(aguacateImg,width/8,height/4,300,350);
    text('Aguacate',(width/4)-40,height-height/5);
   image(pinasImg,5*width/8,(height/5)-25,300,400);
    text('Piña',(width-width/3)+50,height-height/5);
    text('¿Cual prefieres?',width/2-80,height/8);
  text(contPinas,(width-width/3)+50,(height-height/5)+100);
  text(contAguacate,(width/4)-40,(height-height/5)+100);
  
}