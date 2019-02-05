function setup() {
  createCanvas(320,320);
  background(0,0,0);
  noStroke(0);

  //Variables cuadrante I (0,0),(320,0),(160,160)
  var i1 = 160;
  var j1 = 0;
  
  var i2 = 160;
  var j2 = 0;
  
  //Variables cuadrante II (160,160)
  
  var i3 = 160;
  var j3 = 0;
  
  var i4 = 160;
  var j4 = 0;
  
  //Variables cuadrante III (0,320),(160,160)
  
  var i5 = 0;
  var j5 = 160;
  
  var i6 = 0;
  var j6 = 160;
  
  //Variables cuadrante IV  (320,320),(160,160) (amarillo)
  
  var i7 = 320;
  var j7 = 160;
  
  var i8 = 320;
  var j8 = 160;
  
  var i9=320;
  var j9=160;
  
  var i10=320;
  var j10=160;
 
  

  //Cuandrante I
  //Triangulos base arriba
  
  for(i2; i2 < 320; i2 = i2 + 20) {
    triangle(i2,j2,i2 + 20,j2 ,i2 , j2 + 20);
    triangle(i2+20,j2,i2 + 40,j2 ,i2+20 , j2 + 20);
    triangle(i2+80,j2,i2 + 100,j2 ,i2+80 , j2 + 20);
    triangle(i2+100,j2,i2 + 120,j2 ,i2+100 , j2 + 20);
    triangle(i2,j2+80,i2 + 20,j2+80 ,i2 , j2 + 100);
    triangle(i2,j2+60,i2 + 20,j2+60 ,i2 , j2 + 80);
    j2 = j2 + 20;
  }
  triangle(160,160,160,140,180,140);
  
  //triangulos base abajo
  
   for(i1; i1 < 320; i1 = i1 + 20) {
    triangle(i1,j1+40,i1 + 20,j1 +20,i1+20 , j1 + 40);
    triangle(i1,j1+60,i1 + 20,j1+40 ,i1+20 , j1 + 60);
    triangle(i1+40,j1+20,i1 + 60,j1 ,i1+ 60, j1 + 20);
    triangle(i1+60,j1+20,i1 + 80 ,j1 ,i1+80 , j1 + 20);
    triangle(i1,j1+120,i1 + 20,j1+120 ,i1+20 , j1 + 100);
    triangle(i1,j1+140,i1 + 20,j1+140 ,i1+20 , j1 + 120);
    triangle(i1+120,j1+20,i1 + 140,j1+20,i1+140 , j1);
    triangle(i1+140,j1+20,i1 +160,j1 ,i1+160 , j1 + 20);
    j1 = j1 + 20;
  }
  //Cuadrante II
  //triangulos base abajo
  
  for(i1=i3; i1 > 0; i1 = i1 - 20) {
    j1=j3;
    triangle(i1,j1+20,i1 - 20,j1 ,i1 - 20 , j1 + 20);
    triangle(i1-20,j1+20,i1- 40,j1 ,i1-40 , j1 + 20);
    triangle(i1-80,j1+20,i1 - 100,j1 ,i1-100 , j1 + 20);
    triangle(i1-100,j1+20,i1 - 120,j1 ,i1-120 , j1 + 20);
    triangle(i1,j1+80,i1 - 20,j1+80 ,i1-20 , j1 + 60);
    triangle(i1,j1+100,i1 - 20,j1+80 ,i1-20 , j1 + 100);
    j3 = j3 + 20;
  }
   //Triangulos base arriba
  
 for(i4; i4 >0 ; i4 = i4 - 20) {
    triangle(i4-40,j4,i4 - 40,j4+20 ,i4 - 60 , j4);
    triangle(i4-60,j4,i4- 60,j4+20 ,i4-80 , j4 );
    triangle(i4,j4+20,i4 - 20,j4+20 ,i4 , j4 + 40);
    triangle(i4,j4+40,i4 - 20,j4+40 ,i4 , j4 + 60);
    triangle(i4,j4+100,i4 - 20,j4+100 ,i4 , j4 + 120);
    triangle(i4,j4+120,i4 - 20,j4+120 ,i4 , j4 + 140);
    triangle(i4-120,j4,i4 - 120,j4+20 ,i4-140 , j4);
    triangle(i4-140,j4,i4 -160,j4 ,i4-140 , j4 + 20);
    
   j4 = j4 + 20;
  }

  triangle(160,160,140,160,140,140);
  
  fill(0,0,0);
  rect(0,160,160,160);
   fill(255,255,255);
  
  //Cuandrante III
  //Triangulos base arriba
  
  for(i5; i5 < 160; i5 = i5 + 20) {
 
    triangle(i5+20,j5,i5 + 40,j5,i5+20 , j5 + 20);
    triangle(i5+40,j5,i5 + 60,j5 ,i5+40 , j5 + 20);
    triangle(i5+100,j5,i5 + 120,j5 ,i5+100 , j5 + 20);
    triangle(i5+120,j5,i5 + 140,j5 ,i5+120 , j5 + 20);
    triangle(i5,j5+40,i5 + 20,j5+40 ,i5, j5 + 60);
    triangle(i5,j5+60,i5 + 20,j5+60 ,i5 , j5 + 80);
    triangle(i5,j5+120,i5 + 20,j5+120 ,i5, j5 + 140);
    triangle(i5,j5+140,i5 + 20,j5+140 ,i5 , j5 + 160);
    
    j5 = j5 + 20;
  }
  
  //triangulos base abajo
  
   for(i6; i6 < 160; i6 = i6 + 20) {
    triangle(i6,j6+20,i6 + 20,j6 +20,i6+20 , j6);
    triangle(i6,j6+40,i6 + 20,j6+40 ,i6+20 , j6 + 20);
    triangle(i6,j6+100,i6 + 20,j6+100 ,i6+ 20, j6 + 80);
    triangle(i6,j6+120,i6 + 20 ,j6+120 ,i6+20 , j6 + 100);
    triangle(i6+60,j6+20,i6 + 80,j6+20 ,i6+80 , j6);
    triangle(i6+80,j6+20,i6 + 100,j6+20 ,i6+100 , j6);
 
    j6 = j6 + 20;
  }
  
  triangle(140,180,160,160,160,180);
    
 
  //Cuadrante IV (amarillo)
  fill(255,225,0);
  rect(160,160,160,160)
  fill(255,255,255);
  
  //triangulos base abajo
  for(i7; i7 > 200; i7 = i7 - 20) {
    triangle(i7-20,j7+20,i7 - 40,j7 ,i7 - 40 , j7 + 20);
    triangle(i7-40,j7+20,i7- 60,j7 ,i7-60 , j7 + 20);
    triangle(i7,j7+60,i7 - 20,j7+60 ,i7-20 , j7 + 40);
    triangle(i7,j7+80,i7 - 20,j7+80 ,i7-20 , j7 + 60);
    triangle(i7,j7+140,i7 - 20,j7+140 ,i7-20 , j7 + 120);
    triangle(i7,j7+160,i7 - 20,j7+160 ,i7-20 , j7 + 140);
    
    j7 = j7 + 20;
  }
  
  //Triangulos base arriba
  for(i8; i8 >160 ; i8 = i8 - 20) {
    triangle(i8,j8,i8 - 20,j8 ,i8 , j8+20);
    triangle(i8,j8+20,i8- 20,j8+20 ,i8 , j8+40 );
    triangle(i8,j8+80,i8 - 20,j8+80 ,i8 , j8 + 100);
    triangle(i8,j8+100,i8 - 20,j8+100 ,i8 , j8 + 120);
    
   j8 = j8 + 20;
  }
  // Hilera superior triangulos base arriba
   for( i9; i9 >240 ; i9 = i9 - 20) {
   triangle(i9-60,j9,i9 - 80,j9 ,i9 -60, j9 + 20);
    triangle(i9-80,j9,i9 - 100,j9 ,i9-80 , j9 + 20);
   j9 = j9 + 20;
}
// Hilera superior triangulos base abajo
  for( i10; i10 >280 ; i10 = i10 - 20) {
    triangle(i10-100,j10+20,i10 - 120,j10 ,i10-120 , j10 + 20);
    triangle(i10-120,j10+20,i10 - 140,j10 ,i10-140 , j10 + 20);
   j10 = j10 + 20;
}
//Triangulos faltantes
   triangle(160,160,180,160,180,180);
   triangle(160,200,160,220,180,220);
   triangle(160,240,180,240,180,260);
   triangle(160,280,160,300,180,300);
  

}
