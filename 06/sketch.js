 // Variables de tiempo
  var myHour;
  var myMinute;
  var mySecond;
  var myHourMod;
  var myMinuteMod;
  var mySecondMod;
  //Constantes botones
  const BUTTONS= {
    work:
  0, 
    mood:
  1, 
    sleepiness:
  2, 
    hunger:
  3, 
    increase:
  4, 
    decrease:
  5
    };
  //Variables contadores
  var counterWork=2;
  var counterMood=2;
  var counterSleep=0;
  var counterHunger=2;
  
  //Otras variables
  var velocidad=1;
  var selectedButton;
  var cnv;
  
  function setup() {
    cnv = createCanvas(800, 600);
    angleMode(DEGREES);
  }
  
  function draw() {
    //Intervalos botones
    var workButtonRange= (mouseX>60)&&(mouseY>height-height/3+50)&&(mouseX<170)&&(mouseY<height-height/3+160);
    var moodButton= (mouseX>210)&&(mouseY>height-height/3+50)&&(mouseX<320)&&(mouseY<height-height/3+160);
    var sleepButton= (mouseX>360)&&(mouseY>height-height/3+50)&&(mouseX<470)&&(mouseY<height-height/3+160);
    var hungerButton= (mouseX>510)&&(mouseY>height-height/3+50)&&(mouseX<620)&&(mouseY<height-height/3+160);
    var increaseButton= (mouseX>650)&&(mouseY>height-height/3+30)&&(mouseX<710)&&(mouseY<height-height/3+90);
    var decreaseButton= (mouseX>650)&&(mouseY>height-90)&&(mouseX<710)&&(mouseY<height-30);
    var restartButton= (mouseX>730)&&(mouseY>height-130)&&(mouseX<790)&&(mouseY<height-70);
  
    //Variables horas
    myHour=hour();
    myMinute=minute();
    mySecond=second();
  
    //Deficiones funciones botones
    if (mouseIsPressed) {
      if (workButtonRange) {
        selectedButton = BUTTONS.work;
      } else if (moodButton) {
        selectedButton = BUTTONS.mood;
      } else if (sleepButton) {
        selectedButton = BUTTONS.sleepiness;
      } else if (hungerButton) {
        selectedButton = BUTTONS.hunger;
      } 
      if (increaseButton) {
        cnv.mouseClicked(increaseAction);
      } else if (decreaseButton) {
        cnv.mouseClicked(decreaseAction);
      } else if (restartButton) {
        cnv.mouseClicked(empty);
        counterWork=2;
        counterMood=2;
        counterSleep=0;
        counterHunger=2;
      } else {
        cnv.mouseClicked(empty);
      }
    }
  
    //Horas modificadas para el movimiento
    myHourMod=map(myHour, 0, 24*velocidad, 0, 360);
    myMinuteMod=map(myMinute, 0, 60*velocidad, 0, 800);
    mySecondMod=map(mySecond, 0, 60*velocidad, 0, 800);
  
    //Cambio en el fondo
    if (myHour>0 && myHour <=12) {
      background(19, 19+(16*myHour), 240);
    } else if (myHour>12 && myHour<=23) {
      background(19, 211-(16*(myHour-11)), 240);
    }
  
    //Nube der.-izq.
    push();
    fill(255);
    noStroke();
    ellipse(width-myMinuteMod, 200, 55, 50);
    ellipse(width-myMinuteMod+35, 200, 55, 50);
    ellipse(width-myMinuteMod+20, 175, 50);
    pop();
  
    //Nube izq.-der.
    push();
    noStroke();
    fill(255);
    ellipse(mySecondMod, 100, 50, 50);
    ellipse(mySecondMod+35, 100, 50, 50);
    ellipse(mySecondMod+20, 75, 55, 50);
    pop();
  
    //Sol
    push();
    fill(230, 230, 0);
    translate(width/2, height-height/3);
    rotate(myHourMod/2);
    ellipse(-width/2, 0, 50, 50);
    pop();
  
    //Pasto
    noStroke();
    fill(50, 210, 60);
    rect(0, height-height/3, width, height-height/3);
  
    //Botones
    stroke(1);
    fill(255);
    rect(60, height-height/3+50, 110, 110, 10);
    rect(210, height-height/3+50, 110, 110, 10);
    rect(360, height-height/3+50, 110, 110, 10);
    rect(510, height-height/3+50, 110, 110, 10);
    rect(650, height-height/3+30, 60, 60, 5);
    rect(650, height-90, 60, 60, 5);
    rect(730, height-130, 60, 60, 5);
  
    //Simbolos sumar,restar, reestablecer
    fill(0);
    rect(655, height-145, 50, 6);
    rect(676, height-165, 6, 50);
    rect(655, height-65, 50, 6);
    noFill();
    arc(760, height-100, 40, 40, 180, 90, OPEN);
    fill(0);
    triangle(760, height-85, 760, height-75, 750, height-80);
  
    workAction();
    moodAction();
    sleepAction();
    hungerAction();
  }
  //Funcion de estres por tareas
  function workAction() {
    if (counterWork==0) {
      fill(250, 0, 0);
      rect(90, height-110, 40, 5);
    } else if (counterWork==1) {
      fill(250, 0, 0);
      rect(90, height-100, 30, 10);
      rect(90, height-105, 40, 5);
    } else if (counterWork==2) {
      fill(250, 0, 0);
      rect(90, height-105, 40, 5);
      rect(90, height-100, 30, 10);
      rect(90, height-90, 40, 5);
    } else if (counterWork==3) {
      fill(250, 0, 0);
      rect(90, height-105, 40, 5);
      rect(90, height-100, 30, 10);
      rect(90, height-90, 40, 5);
      rect(90, height-85, 35, 10);
    } else if (counterWork==4) {
      fill(250, 0, 0);
      rect(90, height-110, 30, 5);
      rect(90, height-105, 40, 5);
      rect(90, height-100, 30, 10);
      rect(90, height-90, 40, 5);
      rect(90, height-85, 35, 10);
    } else if (counterWork==5) {
      fill(250, 0, 0);
      rect(90, height-110, 30, 5);
      rect(90, height-105, 40, 5);
      rect(90, height-100, 30, 10);
      rect(90, height-90, 40, 5);
      rect(90, height-85, 35, 10);
      rect(90, height-120, 35, 10);
    }
  }
  //Funcion de sueño
  function sleepAction() {
    if (counterSleep==0) {
      fill(253, 230, 194);
      ellipse(415, height-95, 60, 60);
      fill(0);
      ellipse(408, height-105, 3, 6);
      ellipse(422, height-105, 3, 6);
      curve(402, height-85, 402, height-85, 428, height-85, 428, height-85);
      noFill();
      beginShape()
        vertex(430, height-130);
      vertex(434, height-134);
      vertex(432, height-126);
      vertex(436, height-130);
      endShape();
      beginShape()
        vertex(438, height-138);
      vertex(442, height-142);
      vertex(440, height-130);
      vertex(446, height-136);
      endShape();
    } else if (counterSleep==1) {
      fill(253, 230, 194);
      ellipse(415, height-95, 60, 60);
      fill(0);
      ellipse(408, height-105, 3, 4);
      ellipse(422, height-105, 3, 4);
      curve(402, height-85, 402, height-85, 428, height-85, 428, height-85);
      noFill();
      beginShape()
        vertex(430, height-130);
      vertex(434, height-134);
      vertex(432, height-126);
      vertex(436, height-130);
      endShape();
      beginShape()
        vertex(438, height-138);
      vertex(442, height-142);
      vertex(440, height-130);
      vertex(446, height-136);
      endShape();
      beginShape()
        vertex(448, height-140);
      vertex(452, height-144);
      vertex(450, height-132);
      vertex(456, height-138);
      endShape();
    } else if (counterSleep==2) {
      fill(253, 230, 194);
      ellipse(415, height-95, 60, 60);
      fill(0);
      ellipse(408, height-105, 4, 2);
      ellipse(422, height-105, 4, 2);
      curve(402, height-85, 402, height-85, 428, height-85, 428, height-85);
      noFill();
      beginShape()
        vertex(430, height-130);
      vertex(434, height-134);
      vertex(432, height-126);
      vertex(436, height-130);
      endShape();
      beginShape()
        vertex(438, height-138);
      vertex(442, height-142);
      vertex(440, height-130);
      vertex(446, height-136);
      endShape();
      beginShape()
        vertex(448, height-140);
      vertex(452, height-144);
      vertex(450, height-132);
      vertex(456, height-138);
      endShape();
    } else if (counterSleep==3) {
      fill(253, 230, 194);
      ellipse(415, height-95, 60, 60);
      fill(0);
      ellipse(408, height-105, 6, 2);
      ellipse(422, height-105, 6, 2);
      ellipse(415, height-85, 12, 8);
      noFill();
      beginShape()
        vertex(430, height-130);
      vertex(434, height-134);
      vertex(432, height-126);
      vertex(436, height-130);
      endShape();
      beginShape()
        vertex(438, height-138);
      vertex(442, height-142);
      vertex(440, height-130);
      vertex(446, height-136);
      endShape();
      beginShape()
        vertex(448, height-140);
      vertex(452, height-144);
      vertex(450, height-132);
      vertex(456, height-138);
      endShape();
    } else if (counterSleep==4) {
      //Cara
      fill(253, 230, 194);
      ellipse(415, height-95, 60, 60);
      //Razgos
      fill(0);
      ellipse(408, height-105, 6, 1);
      ellipse(422, height-105, 6, 1);
      ellipse(415, height-85, 10, 8);
      //Zzz
      noFill();
      beginShape()
        vertex(430, height-130);
      vertex(434, height-134);
      vertex(432, height-126);
      vertex(436, height-130);
      endShape();
      beginShape()
        vertex(438, height-138);
      vertex(442, height-142);
      vertex(440, height-130);
      vertex(446, height-136);
      endShape();
      beginShape()
        vertex(448, height-140);
      vertex(452, height-144);
      vertex(450, height-132);
      vertex(456, height-138);
      endShape();
    } else if (counterSleep==5) {
      fill(253, 230, 194);
      ellipse(415, height-95, 60, 60);
      fill(0);
      ellipse(408, height-105, 6, 1);
      ellipse(422, height-105, 6, 1);
      ellipse(415, height-85, 10, 8);
      fill(50, 200, 250);
      beginShape();
      vertex(420, height-85);
      curveVertex(418, height-80);
      curveVertex(418, height-70);
      curveVertex(422, height-70);
      curveVertex(422, height-80);
      endShape(CLOSE);
      noFill();
      beginShape()
        vertex(430, height-130);
      vertex(434, height-134);
      vertex(432, height-126);
      vertex(436, height-130);
      endShape();
      beginShape()
        vertex(438, height-138);
      vertex(442, height-142);
      vertex(440, height-130);
      vertex(446, height-136);
      endShape();
      beginShape()
        vertex(448, height-140);
      vertex(452, height-144);
      vertex(450, height-132);
      vertex(456, height-138);
      endShape();
    }
  }
  //Funcion estado de animo
  function moodAction() {
    if (counterMood==0) {
      fill(253, 230, 194);
      ellipse(265, height-95, 60, 60);
      fill(0);
      ellipse(258, height-105, 3, 6);
      ellipse(272, height-105, 3, 6);
      curve(252, height-30, 252, height-80, 278, height-80, 278, height-30);
    } else if (counterMood==1) {
      fill(253, 230, 194);
      ellipse(265, height-95, 60, 60);
      fill(0);
      ellipse(258, height-105, 3, 6);
      ellipse(272, height-105, 3, 6);
      curve(252, height-50, 252, height-83, 278, height-83, 278, height-50);
    } else if (counterMood==2) {
      fill(253, 230, 194);
      ellipse(265, height-95, 60, 60);
      fill(0);
      ellipse(258, height-105, 3, 6);
      ellipse(272, height-105, 3, 6);
      curve(252, height-85, 252, height-85, 278, height-85, 278, height-85);
    } else if (counterMood==3) {
      fill(253, 230, 194);
      ellipse(265, height-95, 60, 60);
      fill(0);
      ellipse(258, height-105, 3, 6);
      ellipse(272, height-105, 3, 6);
      curve(252, height-100, 252, height-85, 278, height-85, 278, height-100);
    } else if (counterMood==4) {
      fill(253, 230, 194);
      ellipse(265, height-95, 60, 60);
      fill(0);
      ellipse(258, height-105, 3, 6);
      ellipse(272, height-105, 3, 6);
      curve(252, height-110, 252, height-85, 278, height-85, 278, height-110);
    } else if (counterMood==5) {
      fill(253, 230, 194);
      ellipse(265, height-95, 60, 60);
      fill(0);
      ellipse(258, height-105, 3, 6);
      ellipse(272, height-105, 3, 6);
      fill(255);
      curve(252, height-135, 252, height-85, 278, height-85, 278, height-135);
    }
  }
  //funcion hambre
  function hungerAction() {
    if (counterHunger==0) {
      fill(253, 230, 194);
      ellipse(565, height-82, 65, 85);
      ellipse(565, height-132, 22, 22);
      fill(0);
      ellipse(563, height-135, 2, 4);
      ellipse(567, height-135, 2, 4);
    } else if (counterHunger==1) {
      fill(253, 230, 194);
      ellipse(565, height-82, 65, 85);
      ellipse(565, height-132, 22, 22);
      fill(0);
      ellipse(563, height-135, 2, 4);
      ellipse(567, height-135, 2, 4);
      fill(255);
      beginShape();
      curveVertex(565, height-115);
      curveVertex(565, height-115);
      curveVertex(560, height-105);
      curveVertex(565, height-100);
      curveVertex(580, height-110);
      curveVertex(576, height-120);
      endShape(CLOSE);
      fill(247, 163, 77);
      ellipse(570, height-112, 5, 5);
    } else if (counterHunger==2) {
      fill(253, 230, 194);
      ellipse(565, height-82, 65, 85);
      ellipse(565, height-132, 22, 22);
      fill(0);
      ellipse(563, height-135, 2, 4);
      ellipse(567, height-135, 2, 4);
      fill(255);
      beginShape();
      curveVertex(565, height-115);
      curveVertex(565, height-115);
      curveVertex(560, height-105);
      curveVertex(565, height-100);
      curveVertex(580, height-110);
      curveVertex(576, height-120);
      endShape(CLOSE);
      fill(247, 163, 77);
      ellipse(570, height-112, 5, 5);
      beginShape();
      vertex(564, height-95);
      vertex(566, height-82);
      vertex(586, height-84);
      vertex(584, height-93);
      endShape(CLOSE);
      ellipse(568, height-91, 3, 3);
      ellipse(574, height-86, 3, 3);
      ellipse(580, height-89, 3, 3);
    } else if (counterHunger==3) {
      fill(253, 230, 194);
      ellipse(565, height-82, 65, 85);
      ellipse(565, height-132, 22, 22);
      fill(0);
      ellipse(563, height-135, 2, 4);
      ellipse(567, height-135, 2, 4);
      fill(255);
      beginShape();
      curveVertex(565, height-115);
      curveVertex(565, height-115);
      curveVertex(560, height-105);
      curveVertex(565, height-100);
      curveVertex(580, height-110);
      curveVertex(576, height-120);
      endShape(CLOSE);
      fill(247, 163, 77);
      ellipse(570, height-112, 5, 5);
      beginShape();
      vertex(564, height-95);
      vertex(566, height-82);
      vertex(586, height-84);
      vertex(584, height-93);
      endShape(CLOSE);
      ellipse(568, height-91, 3, 3);
      ellipse(574, height-86, 3, 3);
      ellipse(580, height-89, 3, 3);
  
      push();
      translate(width-230, height-110);
      rotate(20);
      fill(247, 94, 77);
      rect(5, 30, 30, 8, 20);
      pop();
    } else if (counterHunger==4) {
      fill(253, 230, 194);
      ellipse(565, height-82, 65, 85);
      ellipse(565, height-132, 22, 22);
      fill(0);
      ellipse(563, height-135, 2, 4);
      ellipse(567, height-135, 2, 4);
      fill(255);
      beginShape();
      curveVertex(565, height-115);
      curveVertex(565, height-115);
      curveVertex(560, height-105);
      curveVertex(565, height-100);
      curveVertex(580, height-110);
      curveVertex(576, height-120);
      endShape(CLOSE);
      fill(247, 163, 77);
      ellipse(570, height-112, 5, 5);
      beginShape();
      vertex(564, height-95);
      vertex(566, height-82);
      vertex(586, height-84);
      vertex(584, height-93);
      endShape(CLOSE);
      ellipse(568, height-91, 3, 3);
      ellipse(574, height-86, 3, 3);
      ellipse(580, height-89, 3, 3);
      //Salchicha
      push();
      translate(width-230, height-110);
      rotate(20);
      fill(247, 94, 77);
      rect(5, 30, 30, 8, 20);
      pop();
      //Pizza
      triangle(555, height-45, 570, height-50, 555, height-70);
      fill(190, 20, 80);
      ellipse(559, height-50, 4, 4);
      ellipse(563, height-55, 4, 4);
      ellipse(559, height-60, 4, 4);
    } else if (counterHunger==5) {
      fill(253, 230, 194);
      ellipse(565, height-82, 65, 85);
      ellipse(565, height-132, 22, 22);
      fill(255);
      fill(0);
      ellipse(563, height-135, 2, 4);
      ellipse(567, height-135, 2, 4);
      fill(255);
      //Huevo
      beginShape();
      curveVertex(565, height-115);
      curveVertex(565, height-115);
      curveVertex(560, height-105);
      curveVertex(565, height-100);
      curveVertex(580, height-110);
      curveVertex(576, height-120);
      endShape(CLOSE);
      fill(247, 163, 77);
      ellipse(570, height-112, 5, 5);
      //Queso
      beginShape();
      vertex(564, height-95);
      vertex(566, height-82);
      vertex(586, height-84);
      vertex(584, height-93);
      endShape(CLOSE);
      ellipse(568, height-91, 3, 3);
      ellipse(574, height-86, 3, 3);
      ellipse(580, height-89, 3, 3);
      //Salchicha
      push();
      translate(width-230, height-110);
      rotate(20);
      fill(247, 94, 77);
      rect(5, 30, 30, 8, 20);
      pop();
  
      //Pizza
      triangle(555, height-45, 570, height-50, 555, height-70);
      fill(190, 20, 80);
      ellipse(559, height-50, 4, 4);
      ellipse(563, height-55, 4, 4);
      ellipse(559, height-60, 4, 4);
  
      //cupcake
      fill(230, 211, 167);
      curve(540, height-40, 540, height-90, 555, height-90, 555, height-40);
      fill(200, 181, 207);
      beginShape(TRIANGLE_STRIP);
      vertex(539, height-90);
      vertex(542, height-80);
      vertex(545, height-90);
      vertex(547, height-80);
      vertex(550, height-90);
      vertex(553, height-80);
      vertex(556, height-90);
      endShape();
    }
  }
  
  //Funcion disminuir contador
  function decreaseAction() {
    switch(selectedButton) {
    case BUTTONS.work:
      if (counterWork<=5 && counterWork>0) {
        counterWork--;
        velocidad=velocidad+0.2;
      }
      break;
    case BUTTONS.mood:
      if (counterMood<=5 && counterMood>0) {
        counterMood--;
        velocidad=velocidad+0.2;
      }
      break;
    case BUTTONS.sleepiness:
      if (counterSleep<=5 && counterSleep>0) {
        counterSleep--;
        velocidad=velocidad-0.2;
      }
      break;
    case BUTTONS.hunger:
      if (counterHunger<=5 && counterHunger>0) {
        counterHunger--;
        velocidad=velocidad-0.2;
      }
      break;
    }
  }
  
  //Funcion aumentar contador
  function increaseAction() {
    switch(selectedButton) {
    case BUTTONS.work:
      if (counterWork<5 && counterWork>=0) {
        counterWork++;
        velocidad=velocidad-(0.2);
      }
      break;
    case BUTTONS.mood:
      if (counterMood<5 && counterMood>=0) {
        counterMood++;
        velocidad=velocidad-(0.2);
      }
      break;
    case BUTTONS.sleepiness:
      if (counterSleep<5 && counterSleep>=0) {
        counterSleep++;
        velocidad=velocidad+0.2;
      }
      break;
    case BUTTONS.hunger:
      if (counterHunger<5 && counterHunger>=0) {
        counterHunger++;
        velocidad=velocidad+0.2;
      }
      break;
    }
  }
  //Funcion vacia para que no haga ninguna acccion
  function empty() {
  }
