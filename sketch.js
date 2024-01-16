//let s = 300 - second();

function setup (){
  createCanvas(500,500);
}

function draw () {
  background(150);
  text("time left in game" + (300-second()), 5, 50);
}
