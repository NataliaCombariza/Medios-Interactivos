var cnv;

var img1;
var img2;
var img3;
var img4;
var img5;
var img6;

  const SONGS= {
    song1:0, 
    song2:1, 
    song3:2
  };

var selectedSong;

var cancion1;
var cancion2;
var cancion3;

var fuente1;
var fuente2;

var panSlider1;
var volSlider1;
var rateSlider1;

var panSlider2;
var volSlider2;
var rateSlider2;

var panSlider3;
var volSlider3;
var rateSlider3;

var pan1SliderValue;
var vol1SliderValue;
var rate1SliderValue;

var pan2SliderValue;
var vol2SliderValue;
var rate2SliderValue;

var pan3SliderValue;
var vol3SliderValue;
var rate3SliderValue;

var pan1Map;
var pan2Map;
var pan3Map;

var vol1Map;
var vol2Map;
var vol3Map;

var rate1Map;
var rate2Map;
var rate3Map;

var actual1;
var actual2;
var actual3;

var playingAll = true;

var amplitude;
var fft1;
var fft2;
var fft3;

function preload(){
cancion1=loadSound('assets/GladYouCame.mp3');
cancion2=loadSound('assets/TakeMeOut.mp3');
cancion3=loadSound('assets/AllAboutThatBass.mp3');
fuente1=loadFont('assets/FjallaOne-Regular.ttf');
fuente2=loadFont('assets/Raleway-ExtraLightItalic.ttf');
img1=loadImage('assets/p5js-01.png');
img2=loadImage('assets/p5js-02.png');
img3=loadImage('assets/p5js-03.png');
img4=loadImage('assets/p5js-04.png');
img5=loadImage('assets/p5js-05.png');
img6=loadImage('assets/p5js-06.png');
}
function setup() {
  cnv = createCanvas(600, 400);
  background(228,190,113);
  //Opciones mezclador
  //rate
  fill(128,95,76);
  rect(32,95,140,18,5);
  rect(32,190,140,18,5);
  rect(32,285,140,18,5);
  rateSlider1=createSlider(0,20,10);
  rateSlider1.position(45,95);
  rateSlider1.style('width', '110px');
  rateSlider2=createSlider(0,20,10);
  rateSlider2.position(45,190);
  rateSlider2.style('width', '110px');
  rateSlider3=createSlider(0,20,10);
  rateSlider3.position(45,285);
  rateSlider3.style('width', '110px');
  
  //volumen
  rect(186,95,140,18,5);
  rect(186,190,140,18,5);
  rect(186,285,140,18,5);
  volSlider1=createSlider(0,11,5);
  volSlider1.position(200,95);
  volSlider1.style('width', '110px');
  volSlider2=createSlider(0,11,5);
  volSlider2.position(200,190);
  volSlider2.style('width', '110px');
  volSlider3=createSlider(0,11,5);
  volSlider3.position(200,285);
  volSlider3.style('width', '110px');
  
  //paneo
  rect(342,95,140,18,5);
  rect(342,190,140,18,5);
  rect(342,285,140,18,5);
  panSlider1=createSlider(-10,10,0);
  panSlider1.position(355,95);
  panSlider1.style('width', '110px');
  panSlider2=createSlider(-10,10,0);
  panSlider2.position(355,190);
  panSlider2.style('width', '110px');
  panSlider3=createSlider(-10,10,0);
  panSlider3.position(355,285);
  panSlider3.style('width', '110px');
  
    fft1 = new p5.FFT();
  	fft2 = new p5.FFT();
  	fft3 = new p5.FFT();
  amplitude = new p5.Amplitude();
  
  textFont(fuente1);
  textAlign(CENTER);
  textSize(30);
  text("DENVERT",260,365);
  noFill();
  stroke(148,108,88); 
  strokeWeight(5);
  rect(160,320,200,60,10);

}

function draw() {
  
  var song1Range= (mouseX>32)&&(mouseY>25)&&(mouseX<482)&&(mouseY<95);
  var song2Range= (mouseX>32)&&(mouseY>120)&&(mouseX<482)&&(mouseY<190);
  var song3Range= (mouseX>32)&&(mouseY>215)&&(mouseX<482)&&(mouseY<285);
  var playRange= (mouseX>513)&&(mouseX<568)&&(mouseY>55)&&(mouseY<80);
  var stopRange= (mouseX>513)&&(mouseX<568)&&(mouseY>98)&&(mouseY<153);
  var jumpFrontRange= (mouseX>513)&&(mouseX<568)&&(mouseY>172)&&(mouseY<227);
  var jumpBackRange= (mouseX>513)&&(mouseX<568)&&(mouseY>246)&&(mouseY<301);
  var playAllRange= (mouseX>513)&&(mouseX<568)&&(mouseY>320)&&(mouseY<375);

  fill(245);
  
  //Vizualizacion canciones
  stroke(128,95,76); 
  strokeWeight(1);
  rect(32,25,450,70);
  rect(32,120,450,70);
  rect(32,215,450,70);
  
  // texto canciones
  noStroke();
  fill(0);
  textFont(fuente2);
  textAlign(CENTER);
  textSize(14);
  text("Glad you came - The wanted",125,38);
  text("Take me out - Franz Ferdinand",128,134);
  text("All about that bass - Meghan Trainor",148,229);
  //Amplitud canciones
  fill(200);
  strokeWeight(2);
  ellipse(60,350,80,80);
  ellipse(450,350,80,80);
  //figuras estereos
  for(var e=70;e>0;e=e-10){
    noFill();
    stroke(0,0,0,100);
  ellipse(60,350,e,e);
  ellipse(450,350,e,e);
	 }
  strokeWeight(4);
  line(60,350,90,375);
  line(60,350,30,375);
  line(60,350,90,325);
  line(60,350,30,325);
  line(450,350,480,375);
  line(450,350,420,375);
  line(450,350,480,325);
  line(450,350,420,325);
  
  //indicadores sliders
  //iconos volumen
  image(img1,314,95,16,16);
  image(img2,188,95,16,16);
  image(img1,314,190,16,16);
  image(img2,188,190,16,16);
  image(img1,314,285,16,16);
  image(img2,188,285,16,16);
  //inconos velocidad
  image(img6,148,88,28,28);
  image(img3,30,92,23,23);
  image(img6,148,182,28,28);
  image(img3,30,185,23,23);
  image(img6,148,278,28,28);
  image(img3,30,282,23,23);
  //iconos pan
  image(img5,464,95,16,16);
  image(img4,342,95,16,16);
  image(img5,464,190,16,16);
  image(img4,342,190,16,16);
  image(img5,464,285,16,16);
  image(img4,342,285,16,16);

  

  //Opciones reproductor
  fill(245);
  rect(513,25,55,55,5);
  rect(513,98,55,55,5);
  rect(513,172,55,55,5);
  rect(513,246,55,55,5);
  rect(513,320,55,55,5);
  fill(0);
  noStroke();
  //figuras botones
  triangle(535,32,535,74,560,53);
  rect(528,112,10,30);
  rect(545,112,10,30);
  triangle(525,190,525,210,540,200);
  triangle(545,190,545,210,560,200);
  triangle(538,265,538,285,523,275);
  triangle(558,265,558,285,543,275);
  triangle(533,335,533,365,555,350);
  
  //Varibles para el tiempo actual, para poder adelantar o atrasar
  actual1 = cancion1.currentTime();
  actual2 = cancion2.currentTime();
  actual3 = cancion3.currentTime();
  
  //Acciones sliders y botoner
  if(mouseIsPressed){
    if(song1Range){
      cnv.mouseClicked(song1Action);
    }else if(song2Range){
      cnv.mouseClicked(song2Action);
    }else if(song3Range){
      cnv.mouseClicked(song3Action);
    }
    
    if(playRange){
      cnv.mouseClicked(empty);
      switch(selectedSong){
        case SONGS.song1:
          cancion1.rate(rate1Map);
          cancion1.setVolume(vol1Map);
          cancion1.pan(pan1Map);
          if(cancion1.isPlaying()) {
			    cancion1.stop();
  	      }
          cancion1.play();
          break;
       case SONGS.song2:
          cancion2.rate(rate2Map);
          cancion2.setVolume(vol2Map);
          cancion2.pan(pan2Map);
          if(cancion2.isPlaying()) {
			    cancion2.stop();
  	      }
          cancion2.play();
          break;
       case SONGS.song3:
          cancion3.rate(rate3Map);
          cancion3.setVolume(vol3Map);
          cancion3.pan(pan3Map);
          if(cancion3.isPlaying()) {
			    cancion3.stop();
  	      }
          cancion3.play();
          break;
      }
    }else if(stopRange){
      cnv.mouseClicked(empty);
      switch(selectedSong){
        case SONGS.song1:
          if(cancion1.isPlaying()) {
						cancion1.stop();
  				}
          break;
       case SONGS.song2:
          if(cancion2.isPlaying()) {
						cancion2.stop();
  				}
          break;
       case SONGS.song3:
          if(cancion3.isPlaying()) {
						cancion3.stop();
  				}
          break;
      }
    } else if(jumpFrontRange){
      cnv.mouseClicked(empty);
    	if(cancion1.isPlaying()) {
        cancion1.jump(actual1 + 10);
    	} else if(cancion2.isPlaying()){
        cancion2.jump(actual2 + 10);
    	}else if(cancion3.isPlaying()){
        cancion3.jump(actual3 + 10);
    	}
    }else if(jumpBackRange){
      cnv.mouseClicked(empty);
    	if (cancion1.isPlaying()) {
        cancion1.jump(actual1 - 10);
    	} else if(cancion2.isPlaying()){
        cancion2.jump(actual2 - 10);
    	}else if(cancion3.isPlaying()){
        cancion3.jump(actual3 - 10);
    	}
    } else if(playAllRange){
				cnv.mouseClicked(playAllAction);
    } 
  }
  
  
  
  //Formas de onda canciones
  noFill();
  
  if(cancion1.isPlaying()){
  var waveform1 = fft1.waveform();
  beginShape();
  stroke(255,0,0); 
  strokeWeight(1);
  for (var i1 = 0; i1< waveform1.length; i1++){
    var x1 = map(i1, 0, waveform1.length, 32, 482);
    var y1 = map( waveform1[i1], -1, 1, 25, 95);
    vertex(x1,y1);
  }
  endShape();
  }
   if(cancion2.isPlaying()){
    var waveform2 = fft2.waveform();
    beginShape();
  stroke(255,0,0); 
  strokeWeight(1);
  for (var i2 = 0; i2< waveform2.length; i2++){
    var x2 = map(i2, 0, waveform2.length, 32, 482);
    var y2 = map( waveform2[i2], -1, 1, 120, 190);
    vertex(x2,y2);
  }
  endShape();
   }
   if(cancion3.isPlaying()){
    var waveform3 = fft3.waveform();
    beginShape();
  stroke(255,0,0); 
  strokeWeight(1);
  for (var i3 = 0; i3< waveform3.length; i3++){
    var x3 = map(i3, 0, waveform3.length, 32, 482);
    var y3 = map( waveform3[i3], -1, 1, 215, 285);
    vertex(x3,y3);
    }
  endShape();
   }
   
  //Amplitud
  stroke(0);
  var level = amplitude.getLevel();
  var size = map(level, 0, 1, 0, 120);
  fill(7*size,2*size-60,80+size,size+150);
  if(size>20){
  size=size-30;
  }
  ellipse(60,350, 3*size, 3*size);
  ellipse(450,350, 3*size, 3*size);
}

  //funciones cancion 1 y slider 1
  function song1Action() {
    selectedSong = SONGS.song1;
    pan1SliderValue = panSlider1.value();
    rate1SliderValue = rateSlider1.value();
    vol1SliderValue = volSlider1.value();
    
   
    
  	pan1Map=map(pan1SliderValue,-10,10,-1,1);
    rate1Map=map(rate1SliderValue,-10,20,-1,2);
    vol1Map=map(vol1SliderValue,0,11,0,1.1);
    
  }

  //funciones cancion 2 y slider 2
  function song2Action() {
     selectedSong = SONGS.song2;
    
    pan2SliderValue = panSlider2.value();
    rate2SliderValue = rateSlider2.value();
    vol2SliderValue = volSlider2.value();
    
    
    
  	pan2Map=map(pan2SliderValue,-10,10,-1,1);
    rate2Map=map(rate2SliderValue,-10,20,-1,2);
    vol2Map=map(vol2SliderValue,0,11,0,1.1);
      
  }

  //funciones cancion 3 y slider 3
  function song3Action() {
     selectedSong = SONGS.song3;
    
    pan3SliderValue = panSlider3.value();
    rate3SliderValue = rateSlider3.value();
    vol3SliderValue = volSlider3.value();
    
   
    
  	pan3Map=map(pan3SliderValue,-10,10,-1,1);
    rate3Map=map(rate3SliderValue,-10,20,-1,2);
    vol3Map=map(vol3SliderValue,0,11,0,1.1);
      
  }

//funcion para tocar todas
function playAllAction() {
	if (playingAll) {
    cancion1.play();
    cancion2.play();
    cancion3.play();
        
    playingAll = false;
    
  } else {
      if(cancion1.isPlaying()) {
        cancion1.stop();
    	}
    	if(cancion2.isPlaying()){
        cancion2.stop();
    	}
    	if(cancion3.isPlaying()){
        cancion3.stop();
    	}
        playingAll = true;
      }
  
  
}

function empty() {}