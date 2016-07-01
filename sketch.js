var notes = [60, 64, 67, 72];
var Circle;
var circlesArray = [];


function setup() {
  var gameCanvas = createCanvas(windowWidth * 0.75, windowHeight/2);
  background(200);

//setup

/*
function purpleButton() {
  push();
  strokeWeight(5);
  stroke(130, 22, 166);
  fill(130, 22, 166, 150);
  ellipse(80, height/2, 80, 80);
  pop();
}

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

purpleButton();
redButton();
blueButton();
greenButton();
*/
//(placementX, placementY, placementColor, pitchChoice)

circlesArray.push(new Circle(80, height/2, color(130, 22, 166, 150), 60) );
println(circleArray.length);

for (var j = 0; j > circlesArray.length; j++) {
  circlesArray[j].display;
}

osc = new p5.Oscillator('Triangle');

var freq = midiToFreq(notes[0]);
//osc.start();
osc.freq(freq);



//end of setup
}




function draw() {

}
