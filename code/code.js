function setup() {
  createCanvas(800, 800);
  noStroke();
  angleMode(DEGREES);
}


function draw() {
  background(120);
  translate(width/2, height/2);
 
  
  let steps = 6;
  
 for (let i = 0; i < steps; i++) {
 rotate(360/steps);
  ellipse(0, 0+150, 100, 300);
 
 }
}
