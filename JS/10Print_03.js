let ellipseRate = 8;
let x = 0;
let y = 0;
let spacing = 20;
let randomValue = 0.9;
let rectRatio = 1;
let strokeW = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);  
  background(255);
}

function draw() {
  linePattern();
}

function linePattern(){
  strokeWeight(strokeW);
  strokeCap(ROUND);
  stroke(0);

  if(random(1)<randomValue){
    line(x,y,x+spacing,y+spacing);
  }else{
    square(x,y+spacing,x+spacing,y);
  }
  x += spacing;
  if(x > width){
    x = 0;
    y = y + spacing;
  }
}