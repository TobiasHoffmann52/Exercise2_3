function setup() {
  createCanvas(600, 600);
  stroke(0);
  strokeWeight(1);
  angleMode(DEGREES);
}

let steps = 6;
let rCircle = 0;

function draw() {
  background(191, 216, 255);
  translate(width/2, height/2);

  // Farver
  let dred = color("#db2e0b");
  let lred = color("#ff937d");
  let dgreen = color("#54db4d");
  let lgreen = color("#97f092");



  fill(255);
  circle(0, 0, 515);

  push();
  rotate(mouseX*0.1);
  for (let i = 0; i < (steps * 6); i++) {
    rotate(360/ (steps*6));
    fill(lred);
    ellipse(0, 230, 65, 55);
  }
  pop();

  push();
  rotate(mouseY*0.2);
  for (let i = 0; i < (steps * 5); i++) {
    rotate(360/ (steps*5));
    fill(lgreen);
    ellipse(0, 210, 45, 55);
  }
  pop();

  push();
  rotate(-mouseX*0.2);
  for (let i = 0; i < (steps * 5); i++) {
    rotate(360/ (steps*5));
    fill(lred);
    circle(50, 170, 50);
  }
  pop();

  push();
  rotate(mouseY*0.1 + (-mouseX) * 0.2 );
  for (let i = 0; i < (steps * 4); i++) {
    rotate(360/ (steps*4));
    fill(lgreen);
    circle(25, 145, 50);
  }
  pop();

  push();
  rotate(mouseX*0.1 + (-mouseY) * 0.2 );
  for (let i = 0; i < (steps * 3); i++) {
    rotate(360/ (steps*3));
    fill(dred);
    circle(0, 110, 50);
  }
  pop();

  fill(255);
  circle(0, 0, 210);

  push();


  if (mouseX < width/2) {
    rCircle = rCircle + 0.5;
  } else if (mouseX > width/2) {
    rCircle = rCircle - 0.5;
  }

  if (mouseY < height/2) {
    rCircle = rCircle + 2;
  } else if (mouseY > height/2) {
    rCircle = rCircle - 1;
  }


  rotate(rCircle);
  for (let i = 0; i < steps; i++) {
    rotate(360 / steps);

    fill(lred);

    arc(0, 0, 200, 200, 0, 25, PIE);
  }

  for (let i = 0; i < steps; i++) {
    rotate(360 / steps);

    fill("white");

    arc(0, 0, 200, 200, 25, 30, PIE);
    arc(0, 0, 200, 200, 55, 60, PIE);
  }
  for (let i = 0; i < steps; i++) {
    rotate(360 / steps);

    fill(dgreen);
    arc(0, 0, 200, 200, 30, 55, PIE);
  }
  pop();

  fill("black");
  circle(0, 0, 50);
}
