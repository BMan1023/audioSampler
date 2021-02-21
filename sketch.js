var player1, player2, player3, player4;
var distort;
var distLevel = 0.0;
var sliderX = 120, sliderY = 610;
var onoff = 0;

function preload(){

  distort = new Tone.Distortion(distLevel).toDestination();
  player1 = new Tone.Player("Savannah.mp3").connect(distort);
  player2 = new Tone.Player("Tropic Love.mp3").connect(distort);
  player3 = new Tone.Player("Disfigure.mp3").connect(distort);
  player4 = new Tone.Player("Lost Sky.mp3").connect(distort);
}

function setup() {
  createCanvas(750, 750);

  playButton1 = createButton('Play');
  playButton2 = createButton('Play');
  playButton3 = createButton('Play');
  playButton4 = createButton('Play');

  playButton1.position(125, 350);
  playButton2.position(275, 350);
  playButton3.position(425, 350);
  playButton4.position(575, 350);

  playButton1.mousePressed(play1);
  playButton2.mousePressed(play2);
  playButton3.mousePressed(play3);
  playButton4.mousePressed(play4);

  stopButton1 = createButton('Stop');
  stopButton2 = createButton('Stop');
  stopButton3 = createButton('Stop');
  stopButton4 = createButton('Stop');

  stopButton1.position(125, 380);
  stopButton2.position(275, 380);
  stopButton3.position(425, 380);
  stopButton4.position(575,380);

  stopButton1.mousePressed(stop1);
  stopButton2.mousePressed(stop2);
  stopButton3.mousePressed(stop3);
  stopButton4.mousePressed(stop4);

  toggleButton = createButton('Toggle');
  toggleButton.position(350, 700);
  toggleButton.mousePressed(tog);
}


function draw() {

  background(100);

  fill(175);
  rect(100, 300, 100, 200);
  rect(250, 300, 100, 200);
  rect(400, 300, 100, 200);
  rect(550, 300, 100, 200);
  fill(0);
  if(onoff == 1){
    textSize(36);
    fill(0,255,0);
    text("ON", 30, 620);
    fill(0);
    textSize(12);
  }
  if(onoff == 0){
    textSize(36);
    fill(255,0,0);
    text("OFF", 20, 620);
    fill(0);
    textSize(12);
  }

  textSize(48);
  text('Audio Sampler', 225, 100);
  textSize(32);
  text('Press "Play" under a track to start playback', 90, 150);
  text('Press "Stop" under a track to stop playback', 90, 195);
  text('Press "Toggle" to activate or deactivate distortion', 45, 240);

  textSize(18);
  text('*Use slider to adjust distortion level*', 235, 560);

  textSize(12);
  text('Savannah', 120, 320);
  text('Tropic Love', 270, 320);
  text('Disfigure', 420, 320);
  text('Lost Sky', 570, 320);

  rect(100, 580, 5, 60);
  rect(640, 580, 5, 60);
  line(100, 610, 640, 610);

  ellipse(sliderX, sliderY, 30, 30);

  if(mouseIsPressed){

    if(mouseY < sliderY + 60 && mouseY > sliderY - 60
    && mouseX < 625 && mouseX > 120){
      sliderX = mouseX;
    }
    else if(mouseY < sliderY + 60 && mouseY > sliderY - 60
      && mouseX > 625){
        sliderX =  625;
    }
    else if(mouseY < sliderY + 60 && mouseY > sliderY - 60
      && mouseX < 120){
        sliderX =  120;
    }

    distortionManager();
  }
}

function distortionManager(){

    if(sliderX >= 115 && sliderX <= 166){
      distLevel = 0.0;
      distort.distortion = distLevel;
    }
    if(sliderX > 166  && sliderX <= 217){
      distLevel = 0.1;
      distort.distortion = distLevel;
    }
    if(sliderX > 217 && sliderX <= 268){
      distLevel = 0.2;
      distort.distortion = distLevel;
    }
    if(sliderX > 268 && sliderX <= 319){
      distLevel = 0.3;
      distort.distortion = distLevel;
    }
    if(sliderX > 319 && sliderX <= 370){
      distLevel = 0.4;
      distort.distortion = distLevel;
    }
    if(sliderX > 370 && sliderX <= 421){
      distLevel = 0.5;
      distort.distortion = distLevel;
    }
    if(sliderX > 421 && sliderX <= 472){
      distLevel = 0.6;
      distort.distortion = distLevel;
    }
    if(sliderX > 472 && sliderX <= 523){
      distLevel = 0.7;
      distort.distortion = distLevel;
    }
    if(sliderX > 523 && sliderX <= 574){
      distLevel = 0.8;
      distort.distortion = distLevel;
    }
    if(sliderX > 574 && sliderX <= 625){
      distLevel = 0.9;
      distort.distortion = distLevel;
    } 
}

function play1(){
  player1.start();
}

function stop1(){
  player1.stop();
}

function play2(){
  player2.start();
}

function stop2(){
  player2.stop();
}

function play3(){
  player3.start();
}

function stop3(){
  player3.stop();
}

function play4(){
  player4.start();
}

function stop4(){
  player4.stop();
}
function tog(){
  if(onoff == 1){
    onoff = 0;
  }
  else if(onoff == 0){
    onoff = 1;
  }
}