var notes = [60, 64, 67, 72];
var Circle;
var circlesArray = [];


function setup() {
  var gameCanvas = createCanvas(windowWidth * 0.75, windowHeight/2);


//setup


function purpleButton() {
  push();
  strokeWeight(5);
  stroke(130, 22, 166);
  fill(130, 22, 166, 150);
  ellipse(80, height/2, 80, 80);
  pop();
}
/*
function redButton() {
  push();
  strokeWeight(5);
  stroke(166, 58, 22);
  fill(166, 58, 22, 150);
  ellipse(160, height/2, 80, 80);
  pop();
}

function blueButton() {
  push();
  strokeWeight(5);
  stroke(22, 130, 166);
  fill(22, 130, 166, 150);
  ellipse(240, height/2, 80, 80);
  pop();
}

function greenButton() {
  push();
  strokeWeight(5);
  stroke(58, 166, 22);
  fill(58, 166, 22, 150);
  ellipse(320, height/2, 80, 80);
  pop();
}


redButton();
blueButton();
greenButton();
*/
//(placementX, placementY, placementColor, pitchChoice)



var d = dist(mouseX, mouseY, 80, height/2);


osc = new p5.Oscillator();
osc.setType('sine')

//var freq = midiToFreq(notes[i]);
//osc.start();
//osc.freq(freq);

var i = 0;

//end of setup
}




function draw() {
var d = dist(mouseX, mouseY, 80, height/2);


background(200);
//purpleButton();

push();
strokeWeight(5);
stroke(130, 22, 166);
fill(130, 22, 166, 150);
ellipse(80, height/2, 80, 80);
pop();

if (d > 40){
  text(d,20,20);
  osc.stop();
  freq = midiToFreq(notes[0]);
  //osc.start();
  osc.freq(freq);
}





// end draw
}

function mousePressed() {
  var d = dist(mouseX, mouseY, 80, height/2);

  if (d < 40) {
    stroke(0);
    textSize(20);
    text(d, 20, 20);
    osc.stop();
    var freq = midiToFreq(notes[2]);
    osc.start();
    osc.freq(freq);

  } else if (d > 40){
    text(d,20,20);
    osc.stop();
    freq = midiToFreq(notes[0]);
    //osc.start();
    osc.freq(freq);
  }

}
