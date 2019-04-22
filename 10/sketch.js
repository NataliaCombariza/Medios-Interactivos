//Variables toneladas
var aguacate;
var areaTotal;
var bananos;
var cocos;
var fresas;
var naranjas;
var papayas;
var peras;
var pinas;
var tomates;
var uvas;
// variables finales areas
var aguacateF;
var areaTotalF;
var bananosF;
var cocosF;
var fresasF;
var naranjasF;
var papayasF;
var perasF;
var pinasF;
var tomatesF;
var uvasF;

//variables para llamar datos
var tablaAguacate;
var tablaAreaTotal;
var tablaBananos;
var tablaCocos;
var tablaFresas;
var tablaNaranjas;
var tablaPapayas;
var tablaPeras;
var tablaPinas;
var tablaTomates;
var tablaUvas;

// variables para darle forma a los datos
var angle = 0;
var hi = 0;

function preload() {
  tablaAguacate = loadTable('assets/aguacate.csv', 'csv', 'header');
  
  tablaAreaTotal = loadTable('assets/areatotal.csv', 'csv', 'header');
  tablaBananos = loadTable('assets/bananos.csv', 'csv', 'header');
  tablaCocos = loadTable('assets/cocos.csv', 'csv', 'header');
  tablaFresas = loadTable('assets/Fresas.csv', 'csv', 'header');
  tablaNaranjas = loadTable('assets/naranjas.csv', 'csv', 'header');
  tablaPapayas = loadTable('assets/papayas.csv', 'csv', 'header');
  tablaPeras = loadTable('assets/Peras.csv', 'csv', 'header');
  tablaPinas = loadTable('assets/piñas.csv', 'csv', 'header');
  tablaTomates = loadTable('assets/tomates.csv', 'csv', 'header');
  tablaUvas = loadTable('assets/uvas.csv', 'csv', 'header');
}
function setup() {
  createCanvas(1000, 650);
  background(228,238,246);
  angleMode(DEGREES);
  
  hi = -100;
  // llamar el area de cada fruta
  var areaTotal=(tablaAreaTotal.getNum(0,4));
  var areaAguacate = tablaAguacate.getNum(0,4);
  var areaCocos = tablaCocos.getNum(0,4);
  var areaFresas = tablaFresas.getNum(0,4);
  var areaNaranjas = tablaNaranjas.getNum(0,4);
  var areaPapayas=tablaPapayas.getNum(0,4);
  var areaPeras=tablaPeras.getNum(0,4);
  var areaPinas=tablaPinas.getNum(0,4);
  var areaTomates=tablaTomates.getNum(0,4);
  var areaUvas=tablaUvas.getNum(0,4);
  
  // area total de los datos para poder dividir 
  var areaMock = areaAguacate+areaCocos+areaFresas+areaNaranjas+areaPapayas+areaPeras+areaPinas+areaTomates+areaUvas;
  
 // maps para pasarlos a angulos 
  var areaTotalF=map(areaTotal,0,areaTotal,0,359);
  var areaAguacateF = map(areaAguacate,0,areaMock,0,359);
  var areaCocosF=map(areaCocos,0,areaMock,0,359);
  var areaFresasF=map(areaFresas,0,areaMock,0,359);
  var areaNaranjasF=map(areaNaranjas,0,areaMock,0,359);
  var areaPapayasF=map(areaPapayas,0,areaMock,0,359);
  var areaPerasF=map(areaPeras,0,areaMock,0,359);
  var areaPinasF=map(areaPinas,0,areaMock,0,359);
  var areaTomatesF=map(areaTomates,0,areaMock,0,359);
  var areaUvasF=map(areaUvas,0,areaMock,0,359);
  
  // valores totales apra poder dibujar
  var areaMockF = areaAguacateF+areaCocosF+areaFresasF+areaNaranjasF+areaPapayasF+areaPerasF+areaPinasF+areaTomatesF+areaUvasF;
  var areaMockF2 =map(areaMock,0,areaTotal,0,359);
  
 
  noFill();
   
  // dibujo de area 
  push();
  translate(width / 9, height / 2);
  drawArc(areaAguacateF,'aguacates');
  drawArc(areaCocosF,'cocos');
  drawArc(areaFresasF,'fresas');
  drawArc(areaNaranjasF,'naranjas');
  drawArc(areaPapayasF,'papayas');
  drawArc(areaPerasF,'peras');
  drawArc(areaPinasF,'pinas');
  drawArc(areaTomatesF,'tomates');
  drawArc(areaUvasF,'uvas');
  pop();
  hi = -30;
  
  //dibujo de de compraracion entre area total colombia y lo que se siembra
  push();
  translate((width / 9), (height / 6)+30);
  drawArc(areaTotalF,'total colombia');
  drawArc(areaMockF2,'sembrado');
  pop();
  
  // valores de toneladas por frutas
  bananos=tablaBananos.getNum(0,4);
  aguacate = tablaAguacate.getNum(114,4);
  cocos=tablaCocos.getNum(66,4);
  fresas=tablaFresas.getNum(64,4);
  naranjas=tablaNaranjas.getNum(114,4);
  papayas=tablaPapayas.getNum(114,4);
  peras=tablaPeras.getNum(38,4);
  pinas=tablaPinas.getNum(114,4);
  tomates=tablaTomates.getNum(114,4);
  uvas=tablaUvas.getNum(114,4);
  
  var tonTotal= bananos+aguacate+cocos+fresas+naranjas+papayas+peras+pinas+tomates+uvas;

  // map para pasarlo a angulos
  bananosF=map(bananos,0,tonTotal,0,359);
  aguacateF = map(aguacate,0,tonTotal,0,359);
  cocosF=map(cocos,0,tonTotal,0,359);
  fresasF=map(fresas,0,tonTotal,0,359);
  naranjasF=map(naranjas,0,tonTotal,0,359);
  papayasF=map(papayas,0,tonTotal,0,359);
  perasF=map(peras,0,tonTotal,0,359);
  pinasF=map(pinas,0,tonTotal,0,359);
  tomatesF=map(tomates,0,tonTotal,0,359);
  uvasF=map(uvas,0,tonTotal,0,359);
  
  hi = -110;
  
  //dibujo por toneladas
  push();
  translate(width/9, height-height /6);
  drawArc(bananosF,'bananos');
  drawArc(aguacateF,'aguacates');
  drawArc(cocosF,'cocos');
  drawArc(fresasF,'fresas');
  drawArc(naranjasF,'naranjas');
  drawArc(papayasF,'papayas');
  drawArc(perasF,'peras');
  drawArc(pinasF,'pinas');
  drawArc(tomatesF,'tomates');
  drawArc(uvasF,'uvas');
  pop();
  
  // tabla de area por anos de aguacates
  for (var i = 0; i < 32; i = i + 1) {
    var area = tablaAguacate.getNum(i, 4);
    var ano = tablaAguacate.getString(i, 2);

    var alto = map(area, 0, areaAguacate, 0, ((height-100)/2));
    var ancho = 10;
    var posX = width-(42+i) * (ancho);
    var posY = (height/2) - alto-10;
    
    fill(236,251,232);
    rect(posX, posY, ancho - 1, alto - 1);
    
    push();
    translate(posX+9,((height-22)/2));
    rotate(-90);
    fill(0);
    textSize(10);
    text(ano, 0, 0);
    pop();
    
    push();
    translate(posX+9,posY);
    rotate(-90);
    fill(0);
    textSize(10);
    text(area, 0, 0);
    pop();
  }
  
  // tabla de toneladas por ano de aguacates
  for (var j = 114; j < 144; j = j + 1) {
    var toneladas = tablaAguacate.getNum(j, 4);
    var ano1 = tablaAguacate.getString(j, 2);

    var alto1 = map(toneladas, 0, aguacate, 0, ((height-100)/2));
    var ancho1 = 10;
    var posX1 = width-(42+j-114)* (ancho1);
    var posY1 = (height) - alto1-20;

    rect(posX1, posY1, ancho1 - 1, alto1 - 1);
    push();
    translate(posX1+9,((height-22)));
    rotate(-90);
    fill(0);
    textSize(10);
    text(ano1, 0, 0);
    pop();
    
    push();
    translate(posX1+9,posY1);
    rotate(-90);
    fill(0);
    textSize(10);
    text(toneladas, 0, 0);
    pop();
  }
    
  // tabla de area por ano pinas
    for (var i = 0; i < 32; i = i + 1) {
    var area = tablaPinas.getNum(i, 4);
    var ano = tablaPinas.getString(i, 2);

    var alto = map(area, 0, areaPinas, 0, ((height-100)/2));
    var ancho = 10;
    var posX = width-(4+i) * (ancho);
    var posY = (height/2) - alto-10;
    fill(255,253,220);
    rect(posX, posY, ancho - 1, alto - 1);
    
    push();
    translate(posX+9,((height-22)/2));
    rotate(-90);
    fill(0)
    textSize(10);
    text(ano, 0, 0);
    pop();
    
    push();
    translate(posX+9,posY);
    rotate(-90);
    fill(0);
    textSize(10);
    text(area, 0, 0);
    pop();
  }
  
  // tabla toneladas por ano pinas
  for (var j = 114; j < 144; j = j + 1) {
    var toneladas = tablaPinas.getNum(j, 4);
    var ano1 = tablaPinas.getString(j, 2);

    var alto1 = map(toneladas, 0, pinas, 0, ((height-100)/2));
    var ancho1 = 10;
    var posX1 = width-(4+j-114)* (ancho1);
    var posY1 = (height) - alto1-20;

    rect(posX1, posY1, ancho1 - 1, alto1 - 1);
    
    push();
    translate( posX1+9,height-22);
    rotate(-90);
    fill(0);
    textSize(10);
    text(ano1, 0, 0);
    pop();
    
    push();
    translate( posX1+9,posY1);
    rotate(-90);
    fill(0);
    textSize(10);
    text(toneladas, 0, 0);
    pop();
  }
  //titulo
  fill(0);
  textAlign(LEFT);
  textSize(22);
  textStyle(BOLDITALIC);
  text('Frutas en Colombia',20,30);
  
  //titulos pie
  textAlign(LEFT);
  textSize(14);
  textStyle(ITALIC);
  text('Uso suelo Colombia',50,70);
  text('Area Sembrada',60,250);
  text('Toneladas Sembradas',30,470);
  
  // valores mayores
  textSize(12);
  textStyle(NORMAL);
  text('Mayor = Aguacates',60,395);
  text('Mayor = Piñas',75,615);
  
  //titulos graficas
  textSize(16);
  textStyle(BOLD);
  text('Area aguacates (ha)',270,50);
  text('Toneladas aguacates (ton)',270,360);
  text('Area piñas (ha)',650,50);
  text('Toneladas piñas (ton)',650,360);
  
}


function draw() {
    // ubicacion texto
    if(mouseIsPressed){
    print(mouseX+' x');
    print(mouseY+' y');
  }

  }
// funcion para dibujar cada arco con un color diferente
function drawArc(areaAngle, tableName) {
  var previousAngle = angle;
  angle = angle + areaAngle;
  var previousH = hi; 
  hi = hi + width / 50;
  var red = random(20,245);
  var green = random(20,245);
  var blue = random(50,255);
  fill(red,green,blue);
  arc(0,0,100,100,previousAngle,angle,PIE);
  fill(red,green,blue);
  textAlign(CENTER);
  text(tableName,100, hi);
}

