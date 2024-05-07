let x =0;
let y =0;
let size =10;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  strokeWeight(5);
  
  
   if(random(1) <0.5 ){
    line(x, y, x+size, y+size);
  } else {
     line(x, x+size, y+size,y);
}

 x+=size;

 if (x> width) {
   x= 0;
   y += size;

 }
 }