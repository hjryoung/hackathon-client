let square = rect(300, 300, 50, 50);
let circle = ellipse(400, 400, 50, 50);
let value = rect(mouseX, mouseY, 1, 1);
function setup () {
  createCanvas(500,500);
}

function draw () {
  background(150);

  ellipse(200, 200, 50, 50);
  ellipse(mouseX, mouseY, 50, 50);
  if (mouseIsPressed === true) {
    rect(mouseX-25, mouseY-25, 50, 50);
  }
}

function mouseClicked() {
  if(value === square){
    rect(mouseX, mouseY, 50, 50);
  }
}
