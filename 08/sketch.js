var bobbys = [];
var cantBobs = 8;

var buzos = [];
var cantBuzos = 15;

var willy = [];
var cantWilly = 5;

var pez = [];
var cantPeces = 15;

var crab = [];
var cantCrabs = 10;

function setup() {
  createCanvas(700, 500);
  for (var i = 0; i < cantBobs; i = i + 1) {
    bobbys[i] = new jellyfish(random(width), random(height));
  }

  for (var i = 0; i < cantBuzos; i = i + 1) {
    buzos[i] = new humano(random(width), random(height));
  }
  
  for (var i = 0; i < cantWilly; i = i + 1) {
    willy[i] = new delfin(random(width), random(height));
  }
  
  for (var i = 0; i < cantPeces; i = i + 1) {
    pez[i] = new peces(random(width), random(height));
  }
  for (var i = 0; i < cantCrabs; i = i + 1) {
    crab[i] = new crangrejo(random(width), random(height));
  }
}

function draw() {
  background(70,140,240);

  for (var i = 0; i < cantBobs; i = i + 1) {
    bobbys[i].dibujarse();
    bobbys[i].moverse();
    if (dist(mouseX, mouseY, bobbys[i].x2, bobbys[i].y2) < 15){         
      bobbys[i].morirse();
    }
    for (var j = 0; j < cantBuzos; j = j + 1) {//medusas matando buzos
      if (dist(bobbys[i].x2, bobbys[i].y2, buzos[j].x3,buzos[j].y3)< 20) {
        buzos[j].morirse();
      } else if( buzos[j].viva== false){//revivir/renacer
    buzos[j].dibujarse();
    buzos[j].moverse();
      }
    }
  }
  for (var i = 0; i < cantBuzos; i = i + 1) {
    buzos[i].dibujarse();
    buzos[i].moverse();
     for (var j = 0; j < cantPeces; j = j + 1) {//buzos pescando peces
      if (dist(pez[j].x4, pez[j].y4, buzos[i].x3,buzos[i].y3)< 20) {
        pez[j].morirse();
      } else if( pez[j].viva== false){//revivir/renacer
        pez[j].dibujarse();
      }
    }
    for (var j = 0; j < cantCrabs; j = j + 1) {
      if (dist(crab[j].x5, crab[j].y5, buzos[i].x3,buzos[i].y3)< 60) {
        crab[j].escapar();
      } 
    }
  }
  for (var i = 0; i < cantWilly; i = i + 1) {
    willy[i].dibujarse();
    willy[i].moverse();
    for (var j = 0; j < cantBobs; j = j + 1) {//medusas asustando delfines/picando
      if (dist(bobbys[j].x2, bobbys[j].y2, willy[i].x1,willy[i].y1)< 100) {
        willy[i].parar();
      } 
    }
  }
  for (var i = 0; i < cantPeces; i = i + 1) {
    pez[i].dibujarse();
    pez[i].moverse();
  }
  
  for (var i = 0; i < cantCrabs; i = i + 1) {
    crab[i].dibujarse();
    crab[i].moverse();
  }
}



function jellyfish(_x, _y) {
  //medusa

  //Caracteristicas 
  this.x2 = _x;
  this.y2 = _y;
  this.dir = 1;
  this.viva = true;

 
  //forma
  this.dibujarse = function() {
    if (this.viva == true) {
      noFill();
      beginShape();
      curveVertex(this.x2 + 5, this.y2 + 5);
      curveVertex(this.x2 + 5, this.y2 + 5);
      curveVertex(this.x2, this.y2 + 10);
      curveVertex(this.x2 + 5, this.y2 + 15);
      curveVertex(this.x2, this.y2 + 20);
      curveVertex(this.x2 + 5, this.y2 + 25);
      curveVertex(this.x2 + 5, this.y2 + 25);
      endShape();

      beginShape();
      curveVertex(this.x2 + 12, this.y2 + 5);
      curveVertex(this.x2 + 12, this.y2 + 5);
      curveVertex(this.x2 + 18, this.y2 + 10);
      curveVertex(this.x2 + 12, this.y2 + 15);
      curveVertex(this.x2 + 18, this.y2 + 20);
      curveVertex(this.x2 + 12, this.y2 + 25);
      curveVertex(this.x2 + 12, this.y2 + 25);
      endShape();

      beginShape();
      curveVertex(this.x2 + 27, this.y2 + 5);
      curveVertex(this.x2 + 27, this.y2 + 5);
      curveVertex(this.x2 + 22, this.y2 + 10);
      curveVertex(this.x2 + 27, this.y2 + 15);
      curveVertex(this.x2 + 22, this.y2 + 20);
      curveVertex(this.x2 + 27, this.y2 + 25);
      curveVertex(this.x2 + 27, this.y2 + 25);
      endShape();

      beginShape();
      curveVertex(this.x2 + 35, this.y2 + 5);
      curveVertex(this.x2 + 35, this.y2 + 5);
      curveVertex(this.x2 + 40, this.y2 + 10);
      curveVertex(this.x2 + 35, this.y2 + 15);
      curveVertex(this.x2 + 40, this.y2 + 20);
      curveVertex(this.x2 + 35, this.y2 + 25);
      curveVertex(this.x2 + 35, this.y2 + 25);
      endShape();

      fill(240, 180, 180);

      beginShape();
      curveVertex(this.x2, this.y2);
      curveVertex(this.x2, this.y2);
      vertex(this.x2 + 7, this.y2 - 18);
      vertex(this.x2 + 20, this.y2 - 25);
      vertex(this.x2 + 33, this.y2 - 18);
      curveVertex(this.x2 + 40, this.y2);
      vertex(this.x2 + 40, this.y2);
      vertex(this.x2 + 43, this.y2 + 3);
      vertex(this.x2 + 40, this.y2 + 7);
      vertex(this.x2, this.y2 + 7);
      vertex(this.x2 - 3, this.y2 + 3);
      vertex(this.x2, this.y2);
      endShape(CLOSE);

      fill(240, 160, 180);

      ellipse(this.x2 + 9, this.y2, 10, 10);
      ellipse(this.x2 + 20, this.y2 - 15, 15, 15);
      ellipse(this.x2 + 33, this.y2 - 2, 7, 7);
    }
  }

  //movimiento

  this.moverse = function() {
    if ((this.x2 > width && this.y2 < 0) || (this.x2 < 0) && this.y2 > height) {
      this.dir = this.dir * -1;
    }

    this.x2 = this.x2 + random(0, 1) * this.dir;
    this.y2 = this.y2 + random(-2, 1) * this.dir;

  }

  // morir
  this.morirse = function() {
    this.viva = false;
  }
}

function humano(_x, _y) {
  //buceador
  //Caracteristicas
  this.x3 = _x;
  this.y3 = _y;
  this.viva = true;

  //Habilidades
  this.dibujarse = function() {
    if (this.viva == true) {
      fill(240, 180, 10);
      triangle(this.x3 + 82, this.y3 - 12, this.x3 + 100, this.y3 - 5, this.x3 + 96, this.y3 + 5);
      triangle(this.x3 + 88, this.y3 - 2, this.x3 + 95, this.y3 + 15, this.x3 + 100, this.y3 + 5);

      fill(60, 70, 105);
      beginShape();
      curveVertex(this.x3, this.y3);
      vertex(this.x3 - 6, this.y3 + 6);
      vertex(this.x3 - 18, this.y3 + 6);
      vertex(this.x3 - 20, this.y3 + 10);
      vertex(this.x3 - 5, this.y3 + 12);
      vertex(this.x3 + 5, this.y3 + 5);
      vertex(this.x3 + 15, this.y3 + 8);
      vertex(this.x3 + 8, this.y3 + 15);
      vertex(this.x3 - 6, this.y3 + 20);
      vertex(this.x3, this.y3 + 24);
      vertex(this.x3 + 10, this.y3 + 22);
      vertex(this.x3 + 25, this.y3 + 10);
      vertex(this.x3 + 50, this.y3 + 12);
      vertex(this.x3 + 70, this.y3 + 10);
      vertex(this.x3 + 90, this.y3);
      vertex(this.x3 + 60, this.y3 + 5);
      vertex(this.x3 + 75, this.y3 - 2);
      vertex(this.x3 + 85, this.y3 - 10);
      vertex(this.x3 + 60, this.y3 - 3);
      vertex(this.x3 + 40, this.y3 - 3);
      vertex(this.x3 + 10, this.y3 - 5);
      endShape(CLOSE);

      fill(100);
      ellipse(this.x3 + 5, this.y3 - 5, 25, 25);
      fill(240, 230, 50);
      rect(this.x3 + 20, this.y3 - 20, 35, 20, 10);
    }
  }
//morirse
  this.moverse = function() {
    if (this.x3 > 0) {
      this.x3 = this.x3 + random(0, -3);
      this.y3 = this.y3 + random(0, 1);
    } else if (this.x3 < 0) {
      this.x3 = width + 100;
      this.y3 = random(0, height);
    }
  }

  // morir
  this.morirse = function() {
    this.viva = false;
  }
}

function delfin(_x, _y) {
  //delfin
  //Caracteristicas
  this.x1 = _x;
  this.y1 = _y;
  this.viva = true;

  //Habilidades
  this.dibujarse = function() {
    if (this.viva == true) {
      fill(200);
      beginShape();
      curveVertex(this.x1, this.y1);
      vertex(this.x1 + 3, this.y1 + 11);
      vertex(this.x1, this.y1 + 25);
      vertex(this.x1 + 25, this.y1 + 2);
      vertex(this.x1 + 40, this.y1 - 5);
      vertex(this.x1 + 42, this.y1 - 15)
      vertex(this.x1 + 50, this.y1 - 5);
      vertex(this.x1 + 60, this.y1);
      vertex(this.x1 + 68, this.y1 + 10);
      vertex(this.x1 + 75, this.y1 + 15);
      vertex(this.x1 + 63, this.y1 + 20);
      curveVertex(this.x1 + 50, this.y1 + 25);
      vertex(this.x1 + 30, this.y1 + 20);
      endShape(CLOSE);
      fill(255);
      ellipse(this.x1 + 55, this.y1 + 10, 5, 5);
    }
  }

  this.moverse = function() {
    if (this.x1 < width || this.y1 > height) {
      this.x1 = this.x1 + random(0, 1);
      this.y1 = this.y1 + random(-2, 2);
    } else if (this.x1 > width || this.y1 < height) {
      this.x1 = 0;
      this.y1 = random(0, height);
    }
  }
  this.parar= function() {
      this.x1 = this.x1 + random(-1, 0);;
      this.y1 = this.y1 + random(-1, 1);
  }
 
  // morir
  this.morirse = function() {
    this.viva = false;
  }
}

function peces(_x, _y) {
  //pez
  //Caracteristicas
  this.x4 = _x;
  this.y4 = _y;
  this.viva = true;

  //Habilidades
  this.dibujarse = function() {
    if (this.viva == true) {
      fill(100, 150, 120);
      beginShape();
      vertex(this.x4, this.y4);
      vertex(this.x4, this.y4 + 15);
      curveVertex(this.x4 + 20, this.y4);
      vertex(this.x4 + 35, this.y4 + 10);
      vertex(this.x4 + 20, this.y4 + 15);
      endShape(CLOSE);

      beginShape();
      vertex(this.x4 + 40, this.y4);
      vertex(this.x4 + 40, this.y4 + 15);
      curveVertex(this.x4 + 60, this.y4);
      vertex(this.x4 + 75, this.y4 + 10);
      vertex(this.x4 + 60, this.y4 + 15);
      endShape(CLOSE);

      beginShape();
      vertex(this.x4 + 30, this.y4 + 15);
      vertex(this.x4 + 30, this.y4 + 30);
      curveVertex(this.x4 + 50, this.y4 + 15);
      vertex(this.x4 + 65, this.y4 + 25);
      vertex(this.x4 + 50, this.y4 + 30);
      endShape(CLOSE);

      fill(255);
      ellipse(this.x4 + 70, this.y4 + 8, 5, 5);
      ellipse(this.x4 + 60, this.y4 + 23, 5, 5);
      ellipse(this.x4 + 30, this.y4 + 8, 5, 5);
    }
  }

  this.moverse = function() {
    if (this.x4 < width) {
      this.x4 = this.x4 + random(0, 1);
    } else if (this.x4 > width) {
      this.x4 = 0;
    }
  }

  // morir
  this.morirse = function() {
    this.viva = false;
  }
}

function crangrejo(_x, _y) {
  //cangrejo
  //Caracteristicas
  this.x5 = _x;
  this.y5 = _y;
  this.viva = true;
  this.dir2 = 1;

  //Habilidades
  this.dibujarse = function() {
    if (this.viva == true) {
      fill(240,60,70);
  beginShape();
  vertex(this.x5-15,this.y5);
  vertex(this.x5-25,this.y5+5);
  vertex(this.x5-25,this.y5+20);
  vertex(this.x5-20,this.y5+7);
  vertex(this.x5-10,this.y5);
  endShape(CLOSE);
  
  beginShape();
  vertex(this.x5-10,this.y5+5);
  vertex(this.x5-20,this.y5+10);
  vertex(this.x5-20,this.y5+25);
  vertex(this.x5-15,this.y5+12);
  vertex(this.x5-5,this.y5+5);
  endShape(CLOSE);
  
   beginShape();
  vertex(this.x5+10,this.y5+5);
  vertex(this.x5+20,this.y5+10);
  vertex(this.x5+20,this.y5+25);
  vertex(this.x5+15,this.y5+12);
  vertex(this.x5+5,this.y5+5);
  endShape(CLOSE);
	
	beginShape();
  vertex(this.x5+15,this.y5);
  vertex(this.x5+25,this.y5+5);
  vertex(this.x5+25,this.y5+20);
  vertex(this.x5+20,this.y5+7);
  vertex(this.x5+10,this.y5);
  endShape(CLOSE);
  
  triangle(this.x5-10,this.y5-5,this.x5-15,this.y5-20,this.x5,this.y5);
  triangle(this.x5+10,this.y5-5,this.x5+15,this.y5-20,this.x5,this.y5);
	
  arc(this.x5-15,this.y5-20,15,15,PI+PI/2,PI+PI/6,PIE);
  arc(this.x5+15,this.y5-20,15,15,0-PI/6,PI+PI/2,PIE);
  
  ellipse(this.x5,this.y5,30,20);
  fill(255);
  ellipse(this.x5-5,this.y5-5,5,5);
  ellipse(this.x5+5,this.y5-5,5,5);
    }
  }
//movimiento
  this.moverse = function() {
    if(this.y5<480){
    this.x5=this.x5+random(-1,1);
    this.y5=this.y5+random(0,1);
    }else if(this.x5>width){
      this.x5=-20;
      }else{
    this.x5=this.x5+random(-1,2)*this.dir2;
    }
  }
  //escaparse
   this.escapar = function() {
    if(this.x5<width){
    this.dir2 = this.dir2 * -1;
    }else if(this.x5<=0){
    this.dir2 = this.dir2 * -1;
    }
  }

  // morir
  this.morirse = function() {
    this.viva = false;
  }
}