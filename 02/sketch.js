function setup() {
  createCanvas(380,350);

}

function draw() {
  noStroke();
  //Arco interseccion morado
  fill(61,51,95,80);
  arc(208,198,110,110,PI+HALF_PI+QUARTER_PI,HALF_PI,CHORD);
  //Figuras principales del Fondo
  //Triagulo amarillo
  fill(235,228,81,90);
  triangle(158,302,35,40,248,242);
  //Figura verde
  fill(115,98,39,90);
  beginShape();
  vertex(100,350);
  vertex(65,305);
  vertex(330,150);
  vertex(380,235);
  vertex(380,350);
  endShape(CLOSE);
  //Cuadrilatero rojo
  fill(147,26,7,90);
  quad(0,245,200,265,110,350,45,350);
  //Figura negra
  fill(21,19,26);
  beginShape();
  vertex(226,350);
  vertex(170,260);
  vertex(158,302);
  vertex(132,282);
  vertex(150,210);
  vertex(260,320);
  vertex(300,290);
  vertex(323,308);
  vertex(350,282);
  vertex(370,282);
  vertex(342,318);
  vertex(361,350);
  endShape(CLOSE);
  quad(380,50,312,120,330,134,380,70);
  //Figura naranja
  fill(199,67,22);
  beginShape();
  vertex(380,65);
  vertex(320,18);
  vertex(260,72);
  vertex(328,55);
  vertex(380,85);
  endShape();
  
  //Figuras intermedias/ Intersecciones
  //Cuadrilatero blanco
  fill(254,253,252);
  quad(382,65,372,58,357,72,372,80);
  //Arco blanco
    fill(254,253,253,98);
  arc(208,198,110,110,PI+HALF_PI+QUARTER_PI,HALF_PI,CHORD);
  
  //Figuras elipticas
  //Circulo vinotinto
  fill(147,56,64);
  ellipse(365,230,100,100);
  //Circulo blanco
  fill(254,253,252);
  ellipse(365,230,90,90);
  //Circulo rojo 1
  fill(161,58,65);
  ellipse(367,229,14,14);
  //Circulo rojo 2
  ellipse(200,70,14,14);
  //Arco rojo chiquito
    noFill();
    stroke(161,58,65);
    strokeWeight(8);
  arc(365,230,85,80,PI,PI+HALF_PI,OPEN);
  //Arco negro 
  stroke(0);
  strokeWeight(14);
  arc(365,230,105,100,0,PI+HALF_PI);
  
  //Figuras decorativas
  //Lineas
  //Linea negra recta gruesa
  strokeWeight(6);
  line(360,220,280,130);
  //Lineas rectas delgadas
  strokeWeight(2);
  line(320,300,380,215);
  line(90,208,62,172);
  line(83,218,45,195);
  line(75,235,35,225);
  //Lineas curvas
  strokeWeight(1);
  curve(140,340,55,254,95,180,200,260);
  curve(140,340,45,250,93,170,240,240);
  curve(230,330,165,210,190,55,300,60);
  curve(230,330,160,210,192,30,340,60);
    //Lineas curvas bezier
  bezier(130,210,170,205,225,70,210,135);
  bezier(210,135,190,145,240,140,210,150);
  bezier(130,200,160,205,220,60,220,110);
  bezier(210,135,190,145,240,140,210,150);
  //Linea naranja recta
  stroke(199,67,22);
  strokeWeight(3);
  line(225,175,245,135);
  curve(350,250,270,138,290,125,330,260);
  
  //Triangulos
  noStroke();
  fill(254,253,253);
  triangle(370,310,360,320,320,296);
  triangle(205,365,200,345,260,330);
  triangle(270,300,260,290,350,250);
  

  
}