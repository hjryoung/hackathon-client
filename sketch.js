let gameTimer;
let startButton;

function setup (){
  createCanvas(500,500);
  gameTimer = new GameTimer();
  startButton = createButton("Start");
  startButton.position(200, 100);
  startButton.mousePressed(() => {
    gameTimer.start();
    startButton.hide()
  });
}

function draw(){
  background(150);
  gameTimer.draw();

  if (gameTimer.elapsed()) {
    background(0);
    textSize(75);
    fill('red');
    text('Game Over!', 40, height / 2);
  }
}


  
