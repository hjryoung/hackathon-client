let a = 330

function setup (){
  createCanvas(500,500);
}

  const time = setInterval(() => {
    a--;
  }, 1000);

function draw(){
  background(150);
  fill(255);
  rect(415, 0, 100, 50);
  fill(0);
  textSize(20);
  text('Time left', 420, 20)
  text(a, 445, 40);
    if (a <= 0) {
      background(0);
      textSize(75);
      fill('red');
      text('Game Over!', 40, height / 2);
    }
}


  
