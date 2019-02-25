//Colores
const COLORS = {
  white: 0 ,
  black: 1,
  grey: 2,
  blue: 3,
  red: 4,
  orange: 5,
  purple: 6,
  green: 7,
  pink:8,
  yellow: 9,
  violet:10,
  
};

//Figuras
const SHAPES = {
  triangle: 0 ,
  ovall: 1,
  aerosol: 2,
  line: 3,
  polygon:4,
  customeTriangle:5,
  none: 6
};

//Posicion circulos colores
var colorWidth = 40;
var colorHeigth = 40;
var colorXPosition = 30;

// Variable para cambiar tamaños formas
var shapeSize = 10;

//Variable para cambiar opacidad
var colorSize = 255;

// Coordenadas de herramientas linea y bezier
var xposition1;
var yposition1;
var xposition2;
var yposition2;
var controlX1;
var controlY1;
var controlX2;
var controlY2;



// Coordenadas vertices de los poligonos
var xPos1;
var yPos1;
var xPos2;
var yPos2;
var xPos3;
var yPos3;
var xPos4;
var yPos4;
var xPos5;
var yPos5;

//Coordenadas puntos de los vertices triangulos
var xPunto1;
var yPunto1;
var xPunto2;
var yPunto2;
// Contador para los Clicks
var counter = 0;

//Vairables para definir heramientas y colores selecionados
var selectedColor = COLORS.white;
var selectedShape = SHAPES.none;
//Variable para definir el canvas
var cnv;

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  
  // Intervalos que definen el punto de accion de las herramientas
  var newCavasAction = (mouseX<50) && (mouseX>10) && (mouseY<50) && (mouseY>10);
  var triangleShapeAction = (mouseX<100) && (mouseX>60) && (mouseY<50) && (mouseY>10);
  var ovalShapeAction = (mouseX<150) && (mouseX>110) && (mouseY<50) && (mouseY>10);
  var increaseAction = (mouseX<200) && (mouseX>160) && (mouseY<50) && (mouseY>10);
  var decreaseAction = (mouseX<250) && (mouseX>210) && (mouseY<50) && (mouseY>10);
  var eraserAction = (mouseX<300) && (mouseX>260) && (mouseY<50) && (mouseY>10);
  var aerosolAction = (mouseX<350) && (mouseX>310) && (mouseY<50) && (mouseY>10);
  var dualPointLineAction = (mouseX<400) && (mouseX>360) && (mouseY<50) && (mouseY>10);
  var lineBezier = (mouseX<450) && (mouseX>410) && (mouseY<50) && (mouseY>10);
  var customShapeAction = (mouseX<500) && (mouseX>460) && (mouseY<50) && (mouseY>10);
  var customTriangleAction = (mouseX<550) && (mouseX>510) && (mouseY<50) && (mouseY>10);
  var transparencyIncrease = (mouseX<600) && (mouseX>560) && (mouseY<50) && (mouseY>10);
  var transparencyDecrease = (mouseX<650) && (mouseX>610) && (mouseY<50) && (mouseY>10);
  
  //Intervalos que definen el punto de accion de los colores
  var black= (mouseX<50) && (mouseX>10) && (mouseY<100) && (mouseY>60);
  var grey = (mouseX<50) && (mouseX>10) && (mouseY<150) && (mouseY>110);
  var blue = (mouseX<50) && (mouseX>10) && (mouseY<200) && (mouseY>160);
  var red = (mouseX<50) && (mouseX>10) && (mouseY<250) && (mouseY>210);
  var orange = (mouseX<50) && (mouseX>10) && (mouseY<300) && (mouseY>260);
  var purple = (mouseX<50) && (mouseX>10) && (mouseY<350) && (mouseY>310);
  var green= (mouseX<50) && (mouseX>10) && (mouseY<400) && (mouseY>360);
  var pink = (mouseX<50) && (mouseX>10) && (mouseY<450) && (mouseY>410);
  var yellow = (mouseX<50) && (mouseX>10) && (mouseY<500) && (mouseY>460);
  var violet = (mouseX<50) && (mouseX>10) && (mouseY<550) && (mouseY>510);
 
  noStroke();
  
  // Posicion de los botones de los colores
  fill(0,0,0,colorSize);
  ellipse(colorXPosition,80,colorWidth,colorHeigth);
  fill(100,100,100,colorSize);
  ellipse(colorXPosition,130,colorWidth,colorHeigth);
  fill(78,116,250,colorSize);
  ellipse(colorXPosition,180,colorWidth,colorHeigth);
  fill(255,62,62,colorSize);
  ellipse(colorXPosition,230,colorWidth,colorHeigth);
  fill(255,172,62,colorSize);
  ellipse(colorXPosition,280,colorWidth,colorHeigth);
  fill(200,126,250,colorSize);
  ellipse(colorXPosition,330,colorWidth,colorHeigth);
  fill(30,142,75,colorSize);
  ellipse(colorXPosition,380,colorWidth,colorHeigth);
  fill(247,172,210,colorSize);
  ellipse(colorXPosition,430,colorWidth,colorHeigth);
  fill(252,255,124,colorSize);
  ellipse(colorXPosition,480,colorWidth,colorHeigth);
  fill(122,82,188,colorSize);
  ellipse(colorXPosition,530,colorWidth,colorHeigth);
  
  //Posicion botones de las herramientas
  stroke(80);
  strokeWeight(1.5);
  fill(255);
  rect(10,10,40,40,10);
  fill(250,255,240);
  rect(60,10,40,40,5);
  rect(110,10,40,40,5);
  rect(160,10,40,40,5);
  rect(210,10,40,40,5);
  rect(260,10,40,40,5);
  rect(310,10,40,40,5);
  rect(360,10,40,40,5);
  rect(410,10,40,40,5);
  rect(460,10,40,40,5);
  rect(510,10,40,40,5);
  rect(560,10,40,40,5);
  rect(610,10,40,40,5);
  
  //Funcion definida para mantener el color que se elije
  fillColor(selectedColor);
  
  //Funcion para activar los botones y las herramientas 
  if (mouseIsPressed==true) {
    //Funciones que permiten elegir los Colores
    if (black) {
      counter = 0;
      cnv.mouseClicked(noActionClick);
      selectedColor = COLORS.black;
    }
    if (grey) {
      counter = 0;
      cnv.mouseClicked(noActionClick);
      selectedColor = COLORS.grey;
    }
    if (blue) {
      counter = 0;
      cnv.mouseClicked(noActionClick);
      selectedColor = COLORS.blue;
    }
    if (red) {
      counter = 0;
      cnv.mouseClicked(noActionClick);
      selectedColor = COLORS.red;
    }
    if (orange) {
      counter = 0;
      cnv.mouseClicked(noActionClick);
      selectedColor = COLORS.orange;
    }
    if (purple) {
      counter = 0;
      cnv.mouseClicked(noActionClick);
      selectedColor = COLORS.purple;
    }
    if (green) {
      counter = 0;
      cnv.mouseClicked(noActionClick);
      selectedColor = COLORS.green;
    }
    if (pink) {
      counter = 0;
      cnv.mouseClicked(noActionClick);
      selectedColor = COLORS.pink;
    }
    if (yellow) {
      counter = 0;
      cnv.mouseClicked(noActionClick);
      selectedColor = COLORS.yellow;
    }
    if (violet) {
      counter = 0;
      cnv.mouseClicked(noActionClick);
      selectedColor = COLORS.violet;
    }
    // Funciones que activan los botones de herramientas
    if (newCavasAction){
      counter = 0;
      cnv.mouseClicked(noActionClick);
      background(255);
    } 
    
    else if (triangleShapeAction) {
      counter = 0;
      cnv.mouseClicked(noActionClick);
      selectedShape = SHAPES.triangle;
    }
    
    else if (ovalShapeAction) {
      counter = 0;
      cnv.mouseClicked(noActionClick);
      selectedShape = SHAPES.ovall;
    }
    
    else if (increaseAction) {
      counter = 0;
      cnv.mouseClicked(noActionClick);
      if ((shapeSize >= 10) && (shapeSize<= 100)) {
        shapeSize = shapeSize + 10;
      }
    }
    
    else if (decreaseAction) {
      counter = 0;
      cnv.mouseClicked(noActionClick);
      if (shapeSize > 10) {
         shapeSize = shapeSize - 10;
      }
    }
    
    else if (eraserAction) {
      counter = 0;
      cnv.mouseClicked(noActionClick);
      selectedColor = COLORS.white;
      selectedShape = SHAPES.ovall;
    }
    
    else if (aerosolAction) {
      counter = 0;
      cnv.mouseClicked(noActionClick);
      selectedShape = SHAPES.aerosol;
    }
    
    else if (dualPointLineAction) {
      counter = 0;
      cnv.mouseClicked(noActionClick);
      selectedShape = SHAPES.line;
    }
    
    else if (lineBezier) {
      counter = 0;
      cnv.mouseClicked(noActionClick);
      selectedShape= SHAPES.lineBezier;
    }
    
    else if (customShapeAction) {
      counter = 0;
      cnv.mouseClicked(noActionClick);
      selectedShape = SHAPES.polygon;
    }
    
    else if (customTriangleAction) {
      counter = 0;
      cnv.mouseClicked(noActionClick);
      selectedShape = SHAPES.customeTriangle;
    
    }
    else if (transparencyIncrease) {
      counter = 0;
      cnv.mouseClicked(noActionClick);
      if ((colorSize >= 0) && (colorSize<= 250)) {
        colorSize = colorSize + 5;
      }
    }
    
    else if (transparencyDecrease) {
      counter = 0;
      cnv.mouseClicked(noActionClick);
      if ((colorSize >= 5) && (colorSize<= 255)) {
        colorSize = colorSize - 5;
      }
    }
    
    //Variables para que no se dibujen sobre esas areas las herramientas
    var secureInterval = !newCavasAction && !triangleShapeAction && !ovalShapeAction && !increaseAction 
    && !decreaseAction && !eraserAction && !aerosolAction && !dualPointLineAction && !lineBezier
    && !customShapeAction && !customTriangleAction && !transparencyIncrease && !transparencyDecrease;
    
    var colorSafeArea = !black && !grey && !blue && !red && !orange && !purple && !green
    && !pink && !yellow && !violet;
    
    //Definicion de las funciones de herramientas para llamarlas arriba
    switch(selectedShape){
    case SHAPES.triangle:
      if (secureInterval || colorSafeArea) {
        triangle(mouseX,mouseY,mouseX + shapeSize, mouseY, mouseX, mouseY - shapeSize);
      }
      break;
    case SHAPES.ovall:
      if (secureInterval && colorSafeArea) {
        ellipse(mouseX, mouseY, shapeSize, 2*shapeSize);
      }
      break;
    case SHAPES.aerosol:
    if (secureInterval && colorSafeArea) {
         var xposition = intervalRandom(mouseX - shapeSize, mouseX + shapeSize);
         var yposition = intervalRandom(mouseY - shapeSize, mouseY + shapeSize); 
     
         ellipse(xposition, yposition, 2, 2);
      }
      
      break;
    case SHAPES.line:
    if (secureInterval && colorSafeArea) {
        cnv.mouseClicked(createLine);
    } 
    break;
     case SHAPES.lineBezier:
    if (secureInterval && colorSafeArea) {
        cnv.mouseClicked(createLineBezier);
    } 
    break;
    
    case SHAPES.polygon:
    if(secureInterval && colorSafeArea) {
        cnv.mouseClicked(createPolygon);
    } 
    break;
    
    case SHAPES.customeTriangle:
    if(secureInterval && colorSafeArea) {
        cnv.mouseClicked(createTriangle);
    } 
    break;
    
    case SHAPES.none:
      break;
    }
  }
    //Iconos de los botones de herramientas
    stroke(0);
    triangle(70,20,70,40,90,40);
    ellipse(130,30,10,20);
    rect(178,20,5,20);
    rect(170,27,20,5);
    rect(220,27,20,5);
    quad(282,20,270,35,280,40,292,25);
    line(279,23,289,28);
    rect(320,27,10,13)
    rect(322,25,6,3);
    rect(324,22,2,4);
    line(330,20,337,16);
    line(332,22,340,22);
    line(330,24,337,28);
    line(370,40,390,20);
    ellipse(370,40,2,2);
    ellipse(390,20,2,2);
    ellipse(470,20,2,2);
    ellipse(475,40,2,2);
    ellipse(485,42,2,2)
    ellipse(490,25,2,2);
    ellipse(482,15,2,2);
    beginShape();
    vertex(470,20);
    vertex(475,40);
    vertex(485,42);
    vertex(490,25);
    vertex(482,15);
    endShape(CLOSE);
    noStroke();
    rect(179,21,3,18);
    triangle(520,20,520,40,540,20);
    fill(0,0,0,20);
    ellipse(570,30,12,12);
    fill(0,0,0,50);
    ellipse(575,30,12,12);
    fill(0,0,0,90);
    ellipse(580,30,12,12);
    fill(0,0,0,120);
    ellipse(585,30,12,12);
    fill(0,0,0,180);
    ellipse(590,30,12,12);
    fill(0,0,0,20);
    ellipse(640,30,12,12);
    fill(0,0,0,50);
    ellipse(635,30,12,12);
    fill(0,0,0,90);
    ellipse(630,30,12,12);
    fill(0,0,0,120);
    ellipse(625,30,12,12);
    fill(0,0,0,180);
    ellipse(620,30,12,12);
    stroke(0);
    ellipse(520,20,2,2);
    ellipse(540,20,2,2);
    noFill();
    bezier(420,20,415,35,450,20,440,40);
    ellipse(420,20,2,2);
    ellipse(440,40,2,2);
    

}
//Funcion que permite el aerosol
function intervalRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//Funcion que permite crear la linea
function createLine() {

  if (counter == 0){
        xposition1 = mouseX;
        yposition1 = mouseY;
        fill(selectedColor);
        ellipse(xposition1,yposition1,5,5);
        counter = counter + 1;
  } else if (counter == 1) {
    fillColor(selectedColor);
    line(xposition1,yposition1,mouseX,mouseY);
    counter = 0;
  }
}
//Funcion que permite crear un bezier
function createLineBezier() {

  if (counter == 0){
        xposition1 = mouseX;
        yposition1 = mouseY;
        fill(selectedColor);
        ellipse(xposition1,yposition1,5,5);
        counter = counter + 1;
  } else if (counter == 1) {
        xposition2 = mouseX;
        yposition2 = mouseY;
        fill(selectedColor);
        ellipse(xposition2,yposition2,5,5);
        counter = counter + 1;
  }
  else if (counter == 2) {
        controlX1 = mouseX;
        controlY1 = mouseY;
        fill(selectedColor);
        ellipse(controlX1,controlY1,2,2);
        counter = counter + 1;
  }
  else if (counter == 3) {
        controlX2 = mouseX;
        controlY2 = mouseY;
        fillColor(selectedColor);
        ellipse(controlX2,controlY2,2,2);
        fillColor(selectedColor);
        noFill();
        bezier(xposition1,yposition1,controlX1,controlY1,controlX2,controlY2,xposition2,yposition2);
        counter = 0;
  }
}

//Funcion que permite crear poligonos solo poniendo los vertices
function createPolygon() {

  if (counter == 0){
        xPos1 = mouseX;
        yPos1 = mouseY;
        fill(selectedColor);
        ellipse(xPos1,yPos1,5,5);
        counter = counter + 1;
  } else if (counter == 1) {
        xPos2 = mouseX;
        yPos2 = mouseY;
        fill(selectedColor);
        ellipse(xPos2,yPos2,5,5);
        counter = counter + 1;
  }else if (counter == 2) {
        xPos3 = mouseX;
        yPos3 = mouseY;
        fill(selectedColor);
        ellipse(xPos3,yPos3,5,5);
        counter = counter + 1;
    }else if (counter == 3) {
        xPos4 = mouseX;
        yPos4 = mouseY;
        fill(selectedColor);
        ellipse(xPos4,yPos4,5,5);
        counter = counter + 1;
     }else if (counter == 4) {
        xPos5 = mouseX;
        yPos5 = mouseY;
        fill(selectedColor);
        ellipse(xPos5,yPos5,5,5);
        counter = counter + 1;
      } else if (counter == 5) {
       fillColor(selectedColor);
       beginShape();
       vertex(xPos1,yPos1);
       vertex(xPos2,yPos2);
       vertex(xPos3,yPos3);
       vertex(xPos4,yPos4);
       vertex(xPos5,yPos5);
       endShape(CLOSE);
       counter = 0;
  }
}
//Funcion que permite crear los triangulos poniendo solo dos vertices
function createTriangle() {

  if (counter == 0){
        xPunto1 = mouseX;
        yPunto1 = mouseY;
        fill(selectedColor*10);
        ellipse(xPunto1,yPunto1,5,5);
        counter = counter + 1;
  } else if (counter == 1) {
        xPunto2 = mouseX;
        yPunto2 = mouseY;
        fillColor(selectedColor);
        triangle(xPunto1,yPunto1,xPunto1,yPunto1+50,xPunto2,yPunto2);
    counter = 0;
  }
}
//Funcion que define el valor de los colores
function fillColor(selectedColor) {
  switch(selectedColor){
    case COLORS.white:
      fill(255);
      stroke(255);
      break;
    case COLORS.black:
      fill(0,0,0,colorSize);
      stroke(0,0,0);
      break;
    case COLORS.grey:
      fill(100,100,100,colorSize);
      stroke(100,100,100);
      break;
    case COLORS.blue:
      fill(78,116,250,colorSize);
      stroke(78,116,250);
      break;
    case COLORS.red:
      fill(255,62,62,colorSize);
      stroke(255,62,62);
      break;
    case COLORS.orange:
      fill(255,172,62,colorSize);
      stroke(255,172,62);
      break;
    case COLORS.purple:
      fill(200,126,250,colorSize);
      stroke(200,126,250);
      break;
    case COLORS.green:
      fill(30,142,75,colorSize);
      stroke(30,142,75);
      break;
    case COLORS.pink:
      fill(247,172,210,colorSize);
      stroke(247,172,210);
      break;
    case COLORS.yellow:
      fill(252,255,124,colorSize);
      stroke(252,255,124);
      break;
    case COLORS.violet:
      fill(122,82,188,colorSize);
      stroke(122,82,188);
      break;  
  } 
}

function noActionClick() {
  
}