var x=[];
var y=[];

var x1=[];
var y1=[];

var x2=[];
var y2=[];

var x3=[];
var y3=[];

var x4=[];
var y4=[];

var cant=20;
var dir=[];
function setup() {
  createCanvas(700, 500);
  for(var i=0;i<cant;i=i+1){
   x[i]=random(width);
   y[i]=random(height);
   x1[i]=random(width);
   y1[i]=random(height);
   x2[i]=random(width);
   y2[i]=random(height);
   x3[i]=random(width);
   y3[i]=random(height);
   x4[i]=random(width);
   y4[i]=random(height);
    dir[i]=1;
}
}

function draw() {
  background(70,140,240);
  
  for(var i=0;i<cant;i=i+1){
	//pez
  
  fill(100,150,120);
	beginShape();
	vertex(x[i],y[i]);
	vertex(x[i],y[i]+15);
	curveVertex(x[i]+20,y[i]);
	vertex(x[i]+35,y[i]+10);
	vertex(x[i]+20,y[i]+15);
	endShape(CLOSE);
	
  beginShape();
	vertex(x[i]+40,y[i]);
	vertex(x[i]+40,y[i]+15);
	curveVertex(x[i]+60,y[i]);
	vertex(x[i]+75,y[i]+10);
	vertex(x[i]+60,y[i]+15);
	endShape(CLOSE);
  
   beginShape();
	vertex(x[i]+30,y[i]+15);
	vertex(x[i]+30,y[i]+30);
	curveVertex(x[i]+50,y[i]+15);
	vertex(x[i]+65,y[i]+25);
	vertex(x[i]+50,y[i]+30);
	endShape(CLOSE);
  
  fill(255);
  ellipse(x[i] + 70, y[i] +8, 5,5);
	ellipse(x[i] + 60, y[i] +23, 5,5);
  ellipse(x[i] + 30, y[i] +8, 5,5);
  
    if(x[i]<width){
    x[i]=x[i]+random(0,1);
    }else if(x[i]>width){
    x[i]=0;
    }
  
	// Delfin
  fill(200);
	beginShape();
	curveVertex(x1[i],y1[i]);
	vertex(x1[i]+3,y1[i]+11);
	vertex(x1[i],y1[i]+25);
	vertex(x1[i]+25,y1[i]+2);
	vertex(x1[i]+40,y1[i]-5);
	vertex(x1[i]+42,y1[i]-15)
	vertex(x1[i]+50,y1[i]-5);
	vertex(x1[i]+60,y1[i]);
	vertex(x1[i]+68,y1[i]+10);
	vertex(x1[i]+75,y1[i]+15);
	vertex(x1[i]+63,y1[i]+20);
	curveVertex(x1[i]+50,y1[i]+25);
	vertex(x1[i]+30,y1[i]+20);
	endShape(CLOSE);
  fill(255);
	ellipse(x1[i] + 55, y1[i] +10, 5,5);
  if(x1[i]<width || y1[i]>height){
    x1[i]=x1[i]+random(0,1);
    y1[i]=y1[i]+random(-2,2);
    }else if(x1[i]>width || y1[i]<height){
      x1[i]=0;
      y1[i]=random(0,height);
             }
	//medusa
	noFill();
	beginShape();
	curveVertex(x2[i]+5,y2[i]+5);
	curveVertex(x2[i]+5,y2[i]+5);
	curveVertex(x2[i],y2[i]+10);
	curveVertex(x2[i]+5,y2[i]+15);
	curveVertex(x2[i],y2[i]+20);
	curveVertex(x2[i]+5,y2[i]+25);
	curveVertex(x2[i]+5,y2[i]+25);
	endShape();
	
	beginShape();
	curveVertex(x2[i]+12,y2[i]+5);
	curveVertex(x2[i]+12,y2[i]+5);
	curveVertex(x2[i]+18,y2[i]+10);
	curveVertex(x2[i]+12,y2[i]+15);
	curveVertex(x2[i]+18,y2[i]+20);
	curveVertex(x2[i]+12,y2[i]+25);
	curveVertex(x2[i]+12,y2[i]+25);
	endShape();
	
	beginShape();
	curveVertex(x2[i]+27,y2[i]+5);
	curveVertex(x2[i]+27,y2[i]+5);
	curveVertex(x2[i]+22,y2[i]+10);
	curveVertex(x2[i]+27,y2[i]+15);
	curveVertex(x2[i]+22,y2[i]+20);
	curveVertex(x2[i]+27,y2[i]+25);
	curveVertex(x2[i]+27,y2[i]+25);
	endShape();
	
	beginShape();
	curveVertex(x2[i]+35,y2[i]+5);
	curveVertex(x2[i]+35,y2[i]+5);
	curveVertex(x2[i]+40,y2[i]+10);
	curveVertex(x2[i]+35,y2[i]+15);
	curveVertex(x2[i]+40,y2[i]+20);
	curveVertex(x2[i]+35,y2[i]+25);
	curveVertex(x2[i]+35,y2[i]+25);
	endShape();
	
	fill(240,180,180);
	
	beginShape();
	curveVertex(x2[i],y2[i]);
	curveVertex(x2[i],y2[i]);
	vertex(x2[i]+7,y2[i]-18);
	vertex(x2[i]+20,y2[i]-25);
	vertex(x2[i]+33,y2[i]-18);
	curveVertex(x2[i]+40,y2[i]);
	vertex(x2[i]+40,y2[i]);
	vertex(x2[i]+43,y2[i]+3);
	vertex(x2[i]+40,y2[i]+7);
	vertex(x2[i],y2[i]+7);
	vertex(x2[i]-3,y2[i]+3);
	vertex(x2[i],y2[i]);
	endShape(CLOSE);
  
  fill(240,160,180);
	
	ellipse(x2[i]+9,y2[i],10,10);
	ellipse(x2[i]+20,y2[i]-15,15,15);
	ellipse(x2[i]+33,y2[i]-2,7,7);
    
  if ((x2[i]>width && y2[i]<0 )||(x2[i]<0) && y2[i]>height) {
    dir [i]= dir[i] * -1;
  }
    
    x2[i]=x2[i]+random(0,1)*dir[i];
    y2[i]=y2[i]+random(-2,1)*dir[i];
    
	
	//buceador
  fill(240,180,10);
  triangle(x3[i]+82,y3[i]-12,x3[i]+100,y3[i]-5,x3[i]+96,y3[i]+5);
  triangle(x3[i]+88,y3[i]-2, x3[i]+95,y3[i]+15,x3[i]+100,y3[i]+5);
  
  fill(60,70,105);
  beginShape();
  curveVertex(x3[i],y3[i]);
  vertex(x3[i]-6,y3[i]+6);
  vertex(x3[i]-18,y3[i]+6);
  vertex(x3[i]-20,y3[i]+10);
  vertex(x3[i]-5,y3[i]+12);
  vertex(x3[i]+5,y3[i]+5);
  vertex(x3[i]+15,y3[i]+8);
  vertex(x3[i]+8,y3[i]+15);
  vertex(x3[i]-6,y3[i]+20);
  vertex(x3[i],y3[i]+24);
  vertex(x3[i]+10,y3[i]+22);
  vertex(x3[i]+25,y3[i]+10);
  vertex(x3[i]+50,y3[i]+12);
  vertex(x3[i]+70,y3+10);
  vertex(x3[i]+90,y3[i]);
  vertex(x3[i]+60,y3[i]+5);
  vertex(x3[i]+75,y3[i]-2);
  vertex(x3[i]+85,y3[i]-10);
  vertex(x3[i]+60,y3[i]-3);
  vertex(x3[i]+40,y3[i]-3);
  vertex(x3[i]+10,y3[i]-5);
  endShape(CLOSE);
  
  fill(100);
  ellipse(x3[i]+5,y3[i]-5,25,25);
  fill(240,230,50);
  rect(x3[i]+20,y3[i]-20,35,20,10);
    
    
    if(x3[i]>0){
    x3[i]=x3[i]+random(0,-3);
    y3[i]=y3[i]+random(0,1);
    }else if(x3[i]<0){
    x3[i]=width+100;
    y3[i]=random(0,height);
    }
    
  
  //cangrejo
  fill(240,60,70);
  beginShape();
  vertex(x4[i]-15,y4[i]);
  vertex(x4[i]-25,y4[i]+5);
  vertex(x4[i]-25,y4[i]+20);
  vertex(x4[i]-20,y4[i]+7);
  vertex(x4[i]-10,y4[i]);
  endShape(CLOSE);
  
  beginShape();
  vertex(x4[i]-10,y4[i]+5);
  vertex(x4[i]-20,y4[i]+10);
  vertex(x4[i]-20,y4[i]+25);
  vertex(x4[i]-15,y4[i]+12);
  vertex(x4[i]-5,y4[i]+5);
  endShape(CLOSE);
  
   beginShape();
  vertex(x4[i]+10,y4[i]+5);
  vertex(x4[i]+20,y4[i]+10);
  vertex(x4[i]+20,y4[i]+25);
  vertex(x4[i]+15,y4[i]+12);
  vertex(x4[i]+5,y4[i]+5);
  endShape(CLOSE);
	
	beginShape();
  vertex(x4[i]+15,y4[i]);
  vertex(x4[i]+25,y4[i]+5);
  vertex(x4[i]+25,y4[i]+20);
  vertex(x4[i]+20,y4[i]+7);
  vertex(x4[i]+10,y4[i]);
  endShape(CLOSE);
  
  triangle(x4[i]-10,y4[i]-5,x4[i]-15,y4[i]-20,x4[i],y4[i]);
  triangle(x4[i]+10,y4[i]-5,x4[i]+15,y4[i]-20,x4[i],y4[i]);
	
  arc(x4[i]-15,y4[i]-20,15,15,PI+PI/2,PI+PI/6,PIE);
  arc(x4[i]+15,y4[i]-20,15,15,0-PI/6,PI+PI/2,PIE);
  
  ellipse(x4[i],y4[i],30,20);
  fill(255);
  ellipse(x4[i]-5,y4[i]-5,5,5);
  ellipse(x4[i]+5,y4[i]-5,5,5);
    
    if(y4[i]<height){
    x4[i]=x4[i]+random(-1,1);
    y4[i]=y4[i]+random(0,1);
    }else if(x4[i]>width){
      x4[i]=-20;
      }else{
    x4[i]=x4[i]+random(-1,2);
    }
  
  } 
}