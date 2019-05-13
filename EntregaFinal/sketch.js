var x = 0;
var y = 0;
var x1 = 0;
var y1 = 0;
var x2 = -100;
var y2 = -100;
var x3 = -100;
var y3 = -100;
var j = 0;
var j1 = 0;
var j2 = 0;
var j3 = 0;
var k = 0;
var vel1 = 0;
var vel2 = 0;
var vel3 = 0;
var vel = 0;
var morirse=false;
var moverse = false;
var contPinas = 0;
var contAguacate = 0;
var muestraPinas = 0;
var muestraAguacate = 0;

var animacion=false;

var posX = 460;
var posY = 40;
var posXE = 200;
var posYE = 45;
var wE = 80;
var hE = 55;
var posXB = 330;
var posYB = 50;
var wB = 110;
var hB = 50;
var posXT = 600;
var posYT = 50;
var wT = 110;
var hT = 50;
var posXC = 760;
var posYC = 50;
var wC = 80;
var hC = 50;

var tiempo;
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

//fuentes
var fuente1;
var fuente2;

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
  arbolAguacate = loadImage('assets/arbolAguacate.png');
  arbolPina = loadImage('assets/arbolPina.png');
  
  fuente1=loadFont('Pacifico-Regular.ttf');
  fuente2=loadFont('Quicksand-Light.ttf');

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
  var areaTotal=(tablaAreaTotal.getNum(0,4))*10;
  var areaAguacate = tablaAguacate.getNum(0,4);
  var areaCocos = tablaCocos.getNum(0,4);
  var areaFresas = tablaFresas.getNum(0,4);
  var areaNaranjas = tablaNaranjas.getNum(0,4);
  var areaPapayas=tablaPapayas.getNum(0,4);
  var areaPeras=tablaPeras.getNum(0,4);
  var areaPinas=tablaPinas.getNum(0,4);
  var areaTomates=tablaTomates.getNum(0,4);
  var areaUvas=tablaUvas.getNum(0,4);
  
  var areaMock = areaAguacate+areaCocos+areaFresas+areaNaranjas+areaPapayas+areaPeras+areaPinas+areaTomates+areaUvas;
  
  var areaAguacateF = map(areaAguacate,0,areaMock,0,100);
  var areaCocosF=map(areaCocos,0,areaMock,0,100);
  var areaFresasF=map(areaFresas,0,areaMock,0,100);
  var areaNaranjasF=map(areaNaranjas,0,areaMock,0,100);
  var areaPapayasF=map(areaPapayas,0,areaMock,0,100);
  var areaPerasF=map(areaPeras,0,areaMock,0,100);
  var areaPinasF=map(areaPinas,0,areaMock,0,100);
  var areaTomatesF=map(areaTomates,0,areaMock,0,100);
  var areaUvasF=map(areaUvas,0,areaMock,0,100);
  // area total de los datos para poder dividir 
  
  var areaMockF2 =map(areaMock,0,areaTotal,0,100);
  if(animacion==false){
    textFont(fuente2);
    textSize(28);
  text('Toca la pantala para iniciar',width/3,(height/2)-10);
    tiempo=0;
  }
  if(animacion==true){
    tiempo = millis();
  //inicio
      if (tiempo >= 0 && tiempo <= 8000) {
        textFont(fuente1);
        fondoTitulo()
        titulo();
      }
      // mapa
      if (tiempo >= 8000 && tiempo <= 14500) {
        if (tiempo >= 300) {
          for (var i = 0; i < 12; i = i + 1) {
            siembra[i].dibujarse();
          }
          if (tiempo >= 11000 && tiempo <=14500) {
            for (var i = 0; i < 12; i = i + 1) {
              siembra[i].moverse();
              if (siembra[i].y1 >= (height * 0.75)) {
                siembra[i].morirse();
                rect(0,height-30,width,-altSiembra);
              } 
            }
          }
        }
        image(mapa, 0,0, width , height);
        fill(0);
        textFont(fuente2);
        textSize(20);
        text('Area total Colombia: 100 %',width-300,height-100);
        text('Area sembrada: '+round(areaMockF2)+'%',width-300,height-70);
      }
      if (tiempo >= 14500 && tiempo <= 23000) {
         if (tiempo >= 14500 && tiempo <= 17700){
           fill(0);
        rect(0,height-30,width,-altSiembra-crecimiento/1.3);
           fill(186,247,234);
           rect(0,height,width,-50-altSiembra+140-crecimiento/3);
      }else{
        fill(0);
      rect(0,height-30,width,-altSiembra-290);
        stroke(255);
        fill(100);
        rect(0,(height/2)-115,width,50);
        rect(0,(height/2)-65,width,40);
        rect(0,(height/2)-25,width,35);
        rect(0,(height/2)+10,width,30);
        rect(0,(height/2)+40,width,25);
        rect(0,(height/2)+65,width,20);
        rect(0,(height/2)+80,width,16);
        rect(0,(height/2)+96,width,10);
        rect(0,(height/2)+106,width,10);
        image(mapa, - 186, -558, width  + 372, height + 372);
        image(aguacateImg,width-20-width/3,(height/2)-115,25,40);
  image(pinasImg,width-20-width/3,(height/2)-65,25,35);
   image(tomatesImg,width-20-width/3,(height/2)-25,24,23);
  image(naranjasImg ,width-15-width/3,(height/2)+10,20,20);
   image(cocosImg ,width-15-width/3,(height/2)+40,20,15);
  image(papayasImg,width-20-width/3,(height/2)+65,20,15);
  image(uvasImg,width-20-width/3,(height/2)+80,20,15);
  image(fresasImg,width-20-width/3,(height/2)+96,20,15);
  image(perasImg,width-20-width/3,(height/2)+106,20,15);
  fill(255);
  textFont(fuente2);
  textSize(18);
  text(int(areaAguacateF)+'%',width-100-width/3,(height/2)-95);
    text(int(areaPinasF)+'%',width-100-width/3,(height/2)-55,25,35);
   text(int(areaTomatesF)+'%',width-100-width/3,(height/2)-15,24,23);
  text(int(areaNaranjasF)+'%',width-100-width/3,(height/2)+10,20,20);
   text(int(areaCocosF)+'%',width-100-width/3,(height/2)+40,20,15);
 text(int(areaPapayasF)+'%',width-100-width/3,(height/2)+65,20,15);
  text(int(areaUvasF)+'%',width-100-width/3,(height/2)+80,20,15);
  text(int(areaFresasF)+'%',width-100-width/3,(height/2)+96,20,15);
  text(int(areaPerasF)+'%',width-100-width/3,(height/2)+106,20,15);
   
        fill(186,247,234);
        rect(0,height,width,-altSiembra-50);
       
     }
        mapaColombia();
     }
  //comparacion con elefante
        if (tiempo >= 23000 && tiempo <= 27000) {
        fill(0);
        textSize(28);
          textFont(fuente2);
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
        textFont(fuente1);
        fill(0);
    text('vs', width / 5, height / 9);
    text('Toneladas diarias', width / 4, height / 9);
     //aparicion frutas
    frutas();
  frutasElefante();
    }

//comparacion ballena
   if(tiempo>=39000 && tiempo <=43000){  
    fill(0);
     textSize(28);
        textAlign(CENTER);
     textFont(fuente2);
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
     image(ballenas, (width / 9) - (210*0.5), (2*height / 7) - (2 * 210 / 2), 840 - 2.6*210, 300 - 210);
    textAlign(LEFT);
      textFont(fuente1);
      fill(0);
    text('vs', 2*width / 6, height / 9);
    text('Toneladas mensuales', 2*width / 5, height / 9)
    //aparicion frutas
    frutas();
   frutasBallena();
  }

     //titanic
    if(tiempo >= 51000 && tiempo <= 55000) {
        textSize(28);
      textFont(fuente2);
      fill(0);
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
      textFont(fuente1);
      fill(0);
    text('vs', 2*width / 6, height / 9);
    text('Toneladas anuales', 2*width / 5, height / 9);
    frutasTitanic();
         frutas();
    }
  //aguacates vs pinas
    if (tiempo >= 65000 ) {
     fondoDoble();
    }
    if (tiempo >= 65000 && tiempo <= 121000) {
      frutasVersus();
    }
//eleccion de que comparar
   if (tiempo >= 73000 && tiempo <= 96000) {
    push();
    fill(255,255,255,120);
    strokeWeight(2);
      stroke(0);
      rect(posX,posY,110,70,5);
    pop();
      textFont(fuente2);
    textSize(20);
    text('arrastre el cuadro al que quiere observar',(width/2)-160,(height/14)+80);
      elefantes(posXE, posYE, wE, hE);
      ballena(posXB, posYB, wB, hB);
      titanics(posXT, posYT, wT, hT);
      image(chapinero,posXC, posYC, wC, hC);

     if(posX>=180 && posX<=205){
       comparacionElefante();
     }
    else if(posX>=320 && posX<=335){
    comparacionBallena();
     }
     else if(posX>=595 && posX<=610){
     comparacionTitanic();
     }
     else if(posX>=740 && posX<=770){
     comparacionChapinero();
    }

  }
  //comparacion plantas
     if (tiempo >= 96000 && tiempo <= 120000) {
      plantasArbol();

//compracion cantidad producida
  if(tiempo >= 102000 && tiempo <= 114000){
    textFont(fuente2);
    textSize(20);
    text('agite el equipo',(width/2)-70,height/14);
    if(accelerationX>=60 && accelerationY>=60 || accelerationZ>=10){
    moverse=true;
    } 
    if(moverse==true){
        caidaFrutas();
        } 
       }
     }
      if(tiempo>=114000 && tiempo<=120000){
      produccionFrutas();
      }
  //votacion fruta
    if(tiempo>=120000 && tiempo<=140000){
      votacion();
      }
    if(tiempo>=140000){
      animacion=false;
      }
  }
}

function titulo() {
  textSize(26);
  if (x < ((width / 2) - 90)) {
    fill(0);
    text('Frutas', x, height / 2);
    text('Colombia', width - x - 50, height / 2);
    text('en', (width / 2) - 5, y);
  }
  if (x >= ((width / 2) - 90)) {
    fill(255);
    text('Frutas', (width / 2) - 90, height / 2);
    text('Colombia', (width / 2) + 30, height / 2);
    text('en', (width / 2) -5, height / 2);
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
    image(mapa, -movX,-movY, width + crecimiento, height + crecimiento);
  } else {
    image(mapa, - 186, -558, width  + 372, height + 372);
  }
}

function zonas(_x, _y) {
  this.x1 = _x;
  this.y1 = _y;
  this.viva = true;
  var status = 0;

  //Habilidades
  this.dibujarse = function() {
    fill(0);
    if (this.viva == true && status == 0) {
      rect(this.x1, this.y1, 20, 20);
    }else if (this.viva == false && status == 0) {
      altSiembra = altSiembra +15;
      status = status + 1;
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

function frutasElefante() {
  //comparacion con elefante
  //elefantes por fruta
fill(0);
  //peras
  cantElefante = (tablaPeras.getNum(38, 4) / 365) / 8;
  text(round(cantElefante).toFixed(2), 100 + (width / 15), (height / 5) + 50);
  for (var i = 0; i < float(cantElefante).toFixed(2) / 2; i++) {
    elefantes((60 * i) + width / 15, (height / 5) + 70, 50, 45);
    elefantes((60 * i) + width / 15, (height / 5) + 120, 50, 45);
  }
  //uvas
  cantElefante = (tablaUvas.getNum(114, 4) / 365) / 8;
  text(int(cantElefante), 100 + (5 * width / 15), (height / 5) + 50);
  for (var i = 0; i < (float(cantElefante).toFixed(2) / 2) - 1; i++) {
    elefantes((60 * i) + (5 * width / 15), (height / 5) + 70, 50, 45);
    elefantes((60 * i) + (5 * width / 15), (height / 5) + 120, 50, 45);
  }
  //fresas
  cantElefante = (tablaFresas.getNum(64, 4) / 365) / 8;
  text(int(cantElefante), 100 + (10 * width / 15), (height / 5) + 50);
  for (var i = 0; i < float(cantElefante).toFixed(2) / 3; i++) {
    elefantes((40 * i) + (10 * width / 15), (height / 5) + 70, 30, 25);
    elefantes((40 * i) + (10 * width / 15), (height / 5) + 110, 30, 25);
    elefantes((40 * i) + (10 * width / 15), (height / 5) + 150, 30, 25);
  }
  //cocos
  cantElefante = (tablaCocos.getNum(66, 4) / 365) / 8;
  text(int(cantElefante), 100 + (width / 15), (2.2 * height / 5) + 50);
  for (var i = 0; i < (int(cantElefante) / 4) ; i++) {
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
  for (var i = 0; i < (int(cantElefante) / 10); i++) {
    fill(150);
   noStroke();
    ellipse((width / 15) + 10 * i, (3.5 * height / 5) + 80, 8, 8);
    ellipse((width / 15) + 10 * i, (3.5 * height / 5) + 95, 8, 8);
    ellipse((width / 15) + 10 * i, (3.5 * height / 5) + 110, 8, 8);
    ellipse((width / 15) + 10 * i, (3.5 * height / 5) + 125, 8, 8);
    ellipse((width / 15) + 10 * i, (3.5 * height / 5) + 140, 8, 8);
    ellipse((width / 15) + 10 * i, (3.5 * height / 5) + 155, 8, 8);
    ellipse((width / 15) + 10 * i, (3.5 * height / 5) + 170, 8, 8);
    ellipse((width / 15) + 10 * i, (3.5 * height / 5) + 185, 8, 8);
    ellipse((width / 15) + 10 * i, (3.5 * height / 5) + 200, 8, 8);
  }
  //aguacate
  fill(0);
  cantElefante = (tablaAguacate.getNum(114, 4) / 365) / 8;
  text(int(cantElefante), 100 + (5 * width / 15), (3.5 * height / 5) + 50);
  for (var i = 0; i < (int(cantElefante) / 6); i++) {
    elefantes(18 * i + (5 * width / 15), (3.5 * height / 5) + 80, 18, 12);
    elefantes(18 * i + (5 * width / 15), (3.5 * height / 5) + 100, 18, 12);
    elefantes(18 * i + (5 * width / 15), (3.5 * height / 5) + 120, 18, 12);
    elefantes(18 * i + (5 * width / 15), (3.5 * height / 5) + 140, 18, 12);
    elefantes(18 * i + (5 * width / 15), (3.5 * height / 5) + 160, 18, 12);
    elefantes(18 * i + (5 * width / 15), (3.5 * height / 5) + 180, 18, 12);
  }
  //pinas
  fill(0);
  cantElefante = (tablaPinas.getNum(114, 4) / 365) / 8;
  text((int(cantElefante)), 100 + (10 * width / 15), (3.5 * height / 5) + 50);
   for (var i = 0; i < (int(cantElefante)/ 10); i++) {
    fill(150);
     noStroke();
    ellipse((10 *width / 15) + 8 * i, (3.5 * height / 5) + 80, 5, 5);
    ellipse((10 *width / 15) + 8 * i, (3.5 * height / 5) + 95, 5, 5);
    ellipse((10 *width / 15) + 8 * i, (3.5 * height / 5) + 110, 5, 5);
    ellipse((10 *width / 15) + 8 * i, (3.5 * height / 5) + 125, 5, 5);
    ellipse((10 *width / 15) + 8 * i, (3.5 * height / 5) + 140, 5, 5);
    ellipse((10 *width / 15) + 8 * i, (3.5 * height / 5) + 155, 5, 5);
    ellipse((10 *width / 15) + 8 * i, (3.5 * height / 5) + 170, 5, 5);
    ellipse((10 *width / 15) + 8 * i, (3.5 * height / 5) + 185, 5, 5);
    ellipse((10 *width / 15) + 8 * i, (3.5 * height / 5) + 200, 5, 5);
  }
}

function frutasBallena() {
  //ballenas por fruta
  //peras
  fill(0);
  noStroke();
  cantBallenas = (tablaPeras.getNum(38, 4) / 12) / 200;
  text(int(cantBallenas), 100 + (width / 15), (height / 5) + 50);
  for (var i = 0; i < (int(cantBallenas) / 3) ; i++) {
    ballena((75 * i) + width / 15, (height / 5) + 70, 70, 25);
    ballena((75 * i) + width / 15, (height / 5) + 105, 70, 25);
    ballena((75 * i) + width / 15, (height / 5) + 140, 70, 25);
  }
  //uvas
  cantBallenas = (tablaUvas.getNum(114, 4) / 12) / 200;
  text(int(cantBallenas), 100 + (5 * width / 15), (height / 5) + 50);
  for (var i = 0; i < (int(cantBallenas) / 3) ; i++) {
    ballena((75 * i) + (5 * width / 15), (height / 5) + 70, 70, 25);
    ballena((75 * i) + (5 * width / 15), (height / 5) + 105, 70, 25);
    ballena((75 * i) + (5 * width / 15), (height / 5) + 140, 70, 25);
  }
  //fresas
  cantBallenas = (tablaFresas.getNum(64, 4) / 12) / 200;
  text(int(cantBallenas), 100 + (10 * width / 15), (height / 5) + 50);
  for (var i = 0; i < (int(cantBallenas) / 4); i++) {
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
   for (var i = 0; i < (int(cantBallenas) / 12) - 1; i++) {
     noStroke();
     fill(120,210,240);
      ellipse((width / 15)+10*i, (3.5 * height / 5) + 80, 5, 5);
      ellipse((width / 15)+10*i, (3.5 * height / 5) + 90, 5, 5);
      ellipse((width / 15)+10*i, (3.5 * height / 5) + 100, 5, 5);
      ellipse((width / 15)+10*i, (3.5 * height / 5) + 110, 5, 5);
      ellipse((width / 15)+10*i, (3.5 * height / 5) + 120, 5, 5);
      ellipse((width / 15)+10*i, (3.5 * height / 5) + 130, 5, 5);
      ellipse((width / 15)+10*i, (3.5 * height / 5) + 140, 5, 5);
      ellipse((width / 15)+10*i, (3.5 * height / 5) + 150, 5, 5);
      ellipse((width / 15)+10*i, (3.5 * height / 5) + 160, 5, 5);
      ellipse((width / 15)+10*i, (3.5 * height / 5) + 170, 5, 5);
      ellipse((width / 15)+10*i, (3.5 * height / 5) + 180, 5, 5);
      ellipse((width / 15)+10*i, (3.5 * height / 5) + 190, 5, 5);
   }
  //aguacate
  fill(0);
  cantBallenas = (tablaAguacate.getNum(114, 4) / 12) / 200;
  text(int(cantBallenas), 100 + (5 * width / 15), (3.5 * height / 5) + 50);
   for (var i = 0; i < (int(cantBallenas) / 8) - 1; i++) {
     noStroke();
     fill(120,210,240);
      ellipse((5*width / 15)+19*i, (3.5 * height / 5) + 80, 10, 10);
      ellipse((5*width / 15)+19*i, (3.5 * height / 5) + 95, 10, 10);
      ellipse((5*width / 15)+19*i, (3.5 * height / 5) + 110, 10, 10);
      ellipse((5*width / 15)+19*i, (3.5 * height / 5) + 125, 10, 10);
      ellipse((5*width / 15)+19*i, (3.5 * height / 5) + 140, 10, 10);
      ellipse((5*width / 15)+19*i, (3.5 * height / 5) + 155, 10, 10);
      ellipse((5*width / 15)+19*i, (3.5 * height / 5) + 170,10, 10);
      ellipse((5*width / 15)+19*i, (3.5 * height / 5) + 185, 10, 10);
   }
 
  //pinas
  fill(0);
  cantBallenas = (tablaPinas.getNum(114, 4) / 12) / 200;
  text(int(cantBallenas), 100 + (10 * width / 15), (3.5 * height / 5) + 50);
  for (var i = 0; i < (int(cantBallenas) / 14) - 1; i++) {
     noStroke();
     fill(120,210,240);
      ellipse((10*width / 15)+10*i, (3.5 * height / 5) + 80, 5, 5);
      ellipse((10*width / 15)+10*i, (3.5 * height / 5) + 88, 5, 5);
      ellipse((10*width / 15)+10*i, (3.5 * height / 5) + 96, 5, 5);
      ellipse((10*width / 15)+10*i, (3.5 * height / 5) + 104, 5, 5);
      ellipse((10*width / 15)+10*i, (3.5 * height / 5) + 112, 5, 5);
      ellipse((10*width / 15)+10*i, (3.5 * height / 5) + 120, 5, 5);
      ellipse((10*width / 15)+10*i, (3.5 * height / 5) + 128,5, 5);
      ellipse((10*width / 15)+10*i, (3.5 * height / 5) + 136, 5, 5);
     ellipse((10*width / 15)+10*i, (3.5 * height / 5) + 144, 5, 5);
     ellipse((10*width / 15)+10*i, (3.5 * height / 5) + 152, 5, 5);
    ellipse((10*width / 15)+10*i, (3.5 * height / 5) + 160, 5, 5);
     ellipse((10*width / 15)+10*i, (3.5 * height / 5) + 168, 5, 5);
    ellipse((10*width / 15)+10*i, (3.5 * height / 5) + 176, 5, 5);
     ellipse((10*width / 15)+10*i, (3.5 * height / 5) + 184, 5, 5);
   }
}

function frutasTitanic() {

  //titanics por fruta
  //peras
  cantTitanics = (tablaPeras.getNum(38, 4)) / 46000;
  text(float(cantTitanics).toFixed(2), 100 + (width / 15), (height / 5) + 50);
  titanics(20 + (width / 15), (height / 5) + 70, 90, 35);
  fill(220);
  noStroke();
  rect(60 + (width / 15), (height / 5) + 70, 50, 50);
  fill(0);
  //uvas
  cantTitanics = (tablaUvas.getNum(114, 4) / 46000);
  text(float(cantTitanics).toFixed(2), 100 + (5 * width / 15), (height / 5) + 50);
  titanics(20 + (5 * width / 15), (height / 5) + 70, 90, 35);
  fill(220);
  noStroke();
  rect(70 + (5 * width / 15), (height / 5) + 70, 50, 50);
  fill(0);

  //fresas
  cantTitanics = (tablaFresas.getNum(64, 4) / 46000);
  text(int(cantTitanics), 100 + (10 * width / 15), (height / 5) + 50);
  for (var i = 0; i < int(cantTitanics); i++) {
    titanics((100 * i) + (10 * width / 15), (height / 5) + 70, 90, 35);
  }
  fill(220);
  noStroke();
  rect(125 + (10 * width / 15), (height / 5) + 70, 70, 50);
  fill(0);
  //cocos
  cantTitanics = (tablaCocos.getNum(66, 4) / 46000);
  text(int(cantTitanics), 100 + (width / 15), (2.2 * height / 5) + 50);
  for (var i = 0; i < int(cantTitanics) - 1; i++) {
    titanics(20 + (100 * i) + (width / 15), (2.2 * height / 5) + 70, 90, 35);
    titanics(20 + (100 * i) + (width / 15), (2.2 * height / 5) + 120, 90, 35);
    fill(220);
    noStroke();
    rect(120 + (width / 15), (2.2 * height / 5) + 120, 90, 50);
    fill(0);
  }
  //papayas
  cantTitanics = (tablaPapayas.getNum(114, 4) / 46000);
  text(round(cantTitanics), 100 + (5 * width / 15), (2.2 * height / 5) + 50);
  for (var i = 0; i < int(cantTitanics) / 2; i++) {
    titanics(20 + (100 * i) + (5 * width / 15), (2.2 * height / 5) + 70, 90, 35);
    titanics(20 + (100 * i) + (5 * width / 15), (2.2 * height / 5) + 120, 90, 35);

  }
  //naranjas
  cantTitanics = (tablaNaranjas.getNum(114, 4) / 46000);
  text(round(cantTitanics), 100 + (10 * width / 15), (2.2 * height / 5) + 50);
  for (var i = 0; i < int(cantTitanics) / 2; i++) {
    titanics((100 * i) + (10 * width / 15), (2.2 * height / 5) + 70, 90, 35);
    titanics((100 * i) + (10 * width / 15), (2.2 * height / 5) + 120, 90, 35);
  }
  //   //tomates
  cantTitanics = (tablaTomates.getNum(114, 4) / 46000);
  text(round(cantTitanics), 100 + (width / 15), (3.5 * height / 5) + 50);
  for (var i = 0; i < (int(cantTitanics) / 4); i++) {
    titanics((70 * i) + (width / 15), 3.5 * height / 5 + 70, 70, 30);
    titanics((70 * i) + (width / 15), (3.5 * height / 5) + 100, 70, 30);
    titanics((70 * i) + (width / 15), (3.5 * height / 5) + 130, 70, 30);
    titanics((70 * i) + (width / 15), (3.5 * height / 5) + 160, 70, 30);
   
  }
  //aguacate
  cantTitanics = (tablaAguacate.getNum(114, 4) / 46000);
  text(int(cantTitanics), 100 + (5 * width / 15), (3.5 * height / 5) + 50);
  for (var i = 0; i < (int(cantTitanics) / 3); i++) {
    titanics(30 + (100 * i) + (5 * width / 15), 3.5 * height / 5 + 70, 90, 35);
    titanics(30 + (100 * i) + (5 * width / 15), (3.5 * height / 5) + 120, 90, 35);
    titanics(30 + (100 * i) + (5 * width / 15), (3.5 * height / 5) + 160, 90, 35);
  }
  //pinas
  cantTitanics = (tablaPinas.getNum(114, 4) / 46000);
  text(round(cantTitanics), 100 + (10 * width / 15), (3.5 * height / 5) + 50);
  for (var i = 0; i < (int(cantTitanics) / 5); i++) {
    titanics((65 * i) + (10 * width / 15), 3.5 * height / 5 + 70, 60, 25);
    titanics((65 * i) + (10 * width / 15), (3.5 * height / 5) + 95, 60, 25);
    titanics((65 * i) + (10 * width / 15), (3.5 * height / 5) + 120, 60, 25);
    titanics((65 * i) + (10 * width / 15), (3.5 * height / 5) + 145, 60, 25);
    titanics((65 * i) + (10 * width / 15), (3.5 * height / 5) + 170, 60, 25);
  }
  fill(220);
  noStroke();
  rect(260 + (10 * width / 15), (3.5 * height / 5) + 170, 60, 30);
  fill(0);
}

function fondoDoble() {
  if (x1 < width / 2) {
    noStroke();
    fill(60, 210, 60);
    rect(-width / 2 + x1, 0, width / 2, height);
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

function frutasVersus() {
  k = k + 4;
  fill(0);
  textSize(24);
  if (k >= width / 2 && k <= (width / 2) + 600) {
    image(aguacateImg, width / 8, height / 4, 300, 350);
    text('Mayor Area', (width / 4) - 40, height - height / 5);
    image(pinasImg, 5 * width / 8, (height / 5) - 25, 300, 400);
    text('Mayor cantidad', (width - width / 3) + 50, height - height / 5);
    text('Vs.', width / 2 - 10, height / 8);
  }
  if (k >= (width / 2) + 600) {
    j3++;
    if (j3 < 200) {
      image(aguacateImg, (width / 8) - j3 * (0.6), (height / 4) - j3 * (0.9), 300 - j3 * (0.6), 350 - j3 * (0.8));
      image(pinasImg, (5 * width / 8) + j3 * (1.2), (height / 4) - 25 - j3 * (0.8), 300 - j3 * (0.8), 400 - j3);
    } else {
      image(aguacateImg, (width / 8) - 200 * (0.6), (height / 4) - 200 * (0.9), 300 - 200 * (0.6), 350 - 200 * (0.8));
      image(pinasImg, (5 * width / 8) + 200 * (1.2), (height / 4) - 25 - 200 * (0.8), 300 - 200 * (0.8), 400 - 200);
    }
  }
}

function touchMoved() {
  if (dist(touches[0].x, touches[0].y, posX, posY) < 60) {
    posX = touches[0].x;

  }
  return false;
}

function comparacionElefante() {
  text('1 elefante equivale a 30 elefantes (240 Ton)', width / 2.5, height - height / 16);
  text('Elefantes diarios en producción', width / 2.5, height / 6);
  elefantes((width / 4), (height - height / 16) - 45, 120, 75);
  //aguacate
  cantElefante = (tablaAguacate.getNum(114, 4) / 365) / 240;
  for (var i = 0; i < int(cantElefante) / 2; i++) {
    elefantes((width / 12) - 40, (height / 2.5) + 170 * i, 200, 155);
    elefantes(80 + (width / 6), (height / 2.5) + 170 * i, 200, 155);
  }
  text(int(cantElefante * 30), 170 + (width / 14), (height / 5) + 50);
  //pinas
  cantElefante = (tablaPinas.getNum(114, 4) / 365) / 240;
  for (var i = 0; i < (int(cantElefante) / 3) - 1; i++) {
    elefantes((8 * width / 15), (height / 3) + 20 + 100 * i, 145, 100);
    elefantes(15 + (10 * width / 15), (height / 3) + 20 + 100 * i, 145, 100);
    elefantes(30 + (12 * width / 15), (height / 3) + 20 + 100 * i, 145, 100);
  }
  text(int(cantElefante * 30), (10 * width / 15)+80, (height / 5) + 50);
}

function comparacionBallena() {
  text('1 ballena equivale a 30 ballenas (6000 Ton)', width / 2.5, height - height / 16);
  text('Ballenas mensuales en producción', width / 2.5, height / 6);
  ballena((width / 4), (height - height / 16) - 30, 130, 50);
  //aguacate
  cantBallenas = (tablaAguacate.getNum(114, 4) / 12) / 6000;
  for (var i = 0; i < (int(cantBallenas) / 2); i++) {
    ballena((width / 12) - 40, (height / 2.5) + 120 * i, 200, 80);
    ballena(80 + (width / 6), (height / 2.5) + 120 * i, 200, 80);
  }
  text(int(cantBallenas * 30), 170 + (width / 14), (height / 5) + 50);
  //pinas
  cantBallenas = (tablaPinas.getNum(114, 4) / 12) / 6000;
  for (var i = 0; i < (int(cantBallenas) / 3) ; i++) {
    ballena((8 * width / 15), (height / 3) + 20 + 80 * i, 145, 60);
    ballena(15 + (10 * width / 15), (height / 3) + 20 + 80 * i, 145, 60);
    ballena(30 + (12 * width / 15), (height / 3) + 20 + 80 * i, 145, 60);
  }
  text(int(cantBallenas * 30), (10 * width / 15)+80, (height / 5) + 50);
}

function comparacionTitanic() {
  text('Equivale a 46000 toneladas', width / 2.5, height - height / 16);
  text('Titanics anuales en producción', width / 2.5, height / 6);
  titanics((width / 4), (height - height / 16) - 30, 130, 50);
  //aguacate
  cantTitanics = (tablaAguacate.getNum(114, 4) / 46000);
  for (var i = 0; i < (int(cantTitanics) / 2) ; i++) {
    titanics((width / 12) - 40, (height / 2.5) + 120 * i, 200, 80);
    titanics(80 + (width / 6), (height / 2.5) + 120 * i, 200, 80);
  }
  text(int(cantTitanics), 170 + (width / 14), (height / 5) + 50);
  //pinas
  cantTitanics = (tablaPinas.getNum(114, 4) / 46000);
  for (var i = 0; i < (int(cantTitanics) / 4); i++) {
    titanics((8 * width / 15), (height / 2.7) + 20 + 60 * i, 100, 40);
    titanics(10 + (9.5 * width / 15), (height / 2.7) + 20 + 60 * i, 100, 40);
    titanics(20 + (11 * width / 15), (height / 2.7) + 20 + 60 * i, 100, 40);
    titanics(30 + (12.5 * width / 15), (height / 2.7) + 20 + 60 * i, 100, 40);
  }
  text(int(cantTitanics), (10 * width / 15)+80, (height / 5) + 50);
}

function comparacionChapinero() {
  text('1 mapa equivale a 3898 hectareas', width / 2.4, height - height / 16);
  text('Chapinero', width / 2.4, height + 20 - height / 16);
  text('Area total en Chapineros', (width / 2.2)-30, height / 6);
  image(chapinero, (width / 3.5), (height - height / 16) - 30, 100, 60);
  //aguacate
  cantChapinero = (tablaAguacate.getNum(1, 4) / 3898);
  for (var i = 0; i < (int(cantChapinero) / 2); i++) {
    image(chapinero, 20 + (width / 12), (height / 3) + 80 * i, 130, 70);
    image(chapinero, 90 + (width / 6), (height / 3) + 80 * i, 130, 70);
  }
  text(int(cantChapinero), 170 + (width / 14), (height / 5) + 50);
  pinas
  cantChapinero = (tablaPinas.getNum(1, 4) / 3898);
  for (var i = 0; i < (cantChapinero / 2) - 1; i++) {
    image(chapinero, (9 * width / 15), (height / 2.7) + 20 + 120 * i, 160, 90);
    image(chapinero, 30 + (11 * width / 15), (height / 2.7) + 20 + 120 * i, 160, 90);
  }
  text(int(cantChapinero), (10 * width / 15)+80, (height / 5) + 50);
}

function plantasArbol() {
  textFont(fuente1);
  textSize(24);
  text('El area que ocupa el arbol es de:', width / 2.8, height / 8);
  image(arbolAguacate, (width / 8) - 100, height / 4, 450, 450);
  image(arbolPina, (width - width / 3) - 80, height / 2, 350, 150);
  //pina
  var area = (tablaFrutas.getNum(1, 1));
  text(area + ' m2', (width - width / 4), height - (height / 8));
  //aguacate
  var area1 = tablaFrutas.getNum(1, 2);
  text(area1 + ' m2', (width / 4) - 20, height - (height / 8));
}

function caidaFrutas() {
  x2 = x2 + random(-4, 4);
  y2 = y2 + (random(-1, 4));
  x3 = x3 + (random(-2, 2));
  y3 = y3 + (random(-1, 4));
  for (var i = 0; i < 20; i++) {
    for (var j = 0; j < 10; j++) {
      image(pinasImg, x2 + 60 * i, 60 * j + y2, 40, 60);
      image(aguacateImg, x3 + 60 * i, 60 * j + y3, 40, 50);
    }
  }

}

function produccionFrutas() {
  textFont(fuente2);
  textSize(24);
  cantPinas = tablaFrutas.getNum(0, 1);
  for (var i = 0; i < cantPinas; i++) {
    image(pinasImg, (width - width / 3) - 50 + 50 * i, height - height / 9, 50, 70);
  }
  text('Antes de morir', width - width / 5, height - (height / 9) + 40);
  cantAguacates = tablaFrutas.getNum(0, 2);
  image(aguacateImg, width / 8, height - height / 9, 50, 65);
  text(cantAguacates, (width / 5) + 20, height - (height / 9) + 40);
  text('Por temporada', (width / 3) - 50, height - (height / 9) + 40);
}

function votacion() {
  fill(0);
  textFont(fuente1);
  textSize(28);
  image(aguacateImg, width / 8, height / 4, 300, 350);
  text('Aguacate', (width / 4) - 40, height - height / 5);
  image(pinasImg, 5 * width / 8, (height / 5) - 25, 300, 400);
  text('Piña', (width - width / 3) + 50, height - height / 5);
  text('¿Cual prefieres?', width / 2 - 80, height / 8);
  text(muestraPinas, (width - width / 3) + 50, (height - height / 5) + 100);
  text(muestraAguacate, (width / 4) - 40, (height - height / 5) + 100);
  if (rotationX >= 15 && rotationY <= 15) {
    contPinas = contPinas + 1;
    if (contPinas >= 20) {
      muestraPina = -200
      muestraPina = muestraPina + 1;
    }
  } else if (rotationX <= -15 && rotationY <= 15) {
    contAguacate = contAguacate + 1;
    if (contAguacate >= 20) {
      contAguacate = -200;
      muestraAguacate = muestraAguacate + 1;
    }
  }
}

function touchStarted() {
  animacion=true;
}
