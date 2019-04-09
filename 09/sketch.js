var datos;
var west;
var westSize;
var lonI;
var lonF;

var xPos = [332,380,412,411,376,329,274,225,191,192,229,272];
var yPos = [147,173,224,281,320,359,356,334,280,220,174,143];
var emojis = ["💧","🔥","🌪","⛰"];

var xPosEmoji = [330,402,440,438,405,330,252,188,142,145,187,249];
var yPosEmoji = [90,127,199,272,323,383,382,343,278,199,131,95];

var xPosText = [356,457,522,519,446,358,262,146,86,95,147,260];
var yPosText = [60,106,204,298,396,438,430,373,290,199,116,60];

function preload(){
datos=loadJSON("assets/zodiac.json");
}

function setup() {
  createCanvas(600, 500);
  background(0);
  angleMode(DEGREES);
    translate(width / 2, height / 2);
  west=Object.keys(datos.western_zodiac);
  westSize = west.length

  
  for(var i = 0; i< westSize ; i++){
  var keyName = west[i];  
  lonI = datos.western_zodiac[keyName].longitude_start;
  lonF = datos.western_zodiac[keyName].longitude_end;

  strokeWeight(2);
  stroke(random(20,245),random(20,245),random(50,255));
  noFill(0);
  arc(0,0,160,160,lonI,lonF,PIE);
  arc(0,0,265,265,lonI,lonF,PIE);
  arc(0,0,340,340,lonI,lonF,PIE);
    push();
    translate(-width / 2-12, -height / 2 +10);
    textSize(20);
    
    var elementValue = datos.western_zodiac[keyName].element;
    
    if (elementValue == "Air"){
      text(emojis[2],xPosEmoji[i] + 10,yPosEmoji[i] +10);
    }else if (elementValue == "Fire") {
      text(emojis[1],xPosEmoji[i] + 10,yPosEmoji[i] +10);
    }else if (elementValue == "Water") {
      text(emojis[0],xPosEmoji[i] + 10,yPosEmoji[i] +10);
    }else if (elementValue == "Earth") {
      text(emojis[3],xPosEmoji[i] + 10,yPosEmoji[i] +10);
    }
    
    
    text(datos.western_zodiac[keyName].unicode_symbol,xPos[i],yPos[i]);
    noStroke();
    fill(255);
    textFont('Helvetica');
    textStyle(ITALIC);
    textAlign(CENTER);
    text(keyName,xPosText[i],yPosText[i]);
    pop();
  }
}

function draw() {
  translate(width / 2, height / 2);
    if(mouseIsPressed){
    print(mouseX+' x');
    print(mouseY+' y');
  }

  }
  
