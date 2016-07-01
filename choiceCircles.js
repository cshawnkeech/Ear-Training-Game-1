//Circle class
function Circle(placementX, placementY, placementColor, pitchChoice) {

  this.x = placementX;
  this.y = placementY;
  this.radius = 80;
  this.fillColor = placementColor;
  this.note = pitchChoice;

  this.display = function() {
    push();
    strokeWeight(5);
    stroke(166, 58, 22);
    fill(this.fillColor);
    ellipse(this.x, this.y, 80, 80);
    pop();
  }

  this.isOverCircle = function() {
    var dist(mouseX, mouseY, this.x, this.y);
    if (dist < this.radius) {
      return true;
    } else {
      return false;
    }
  }

}
