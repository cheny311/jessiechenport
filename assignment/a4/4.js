let X, Y;

function setup() {
  createCanvas(400, 600);
  X = width / 2;
  Y = height / 2;
  angleMode(DEGREES)
}

function draw() {
  background(220); 

  body(X,Y)
  head(X,Y);
  hair(X,Y)
  feet(X,Y)
  arm(X,Y)
 
}

function hair(x,y){
// noStroke()
push()
fill(255,60,0,220)
noStroke()
rect(x-70,y-200,10,35,20);
rect(x-60,y-200,10,40,20);
rect(x-30,y-200,10,30,20);
rect(x-50,y-200,10,30,20);
rect(x-40,y-200,10,30,20);
rect(x-30,y-200,10,30,20);
rect(x-20,y-200,10,30,20);
rect(x-10,y-200,10,30,20);
rect(x,y-200,10,30,20);
rect(x+10,y-200,10,30,20);
rect(x+20,y-200,10,30,20);
rect(x+30,y-200,10,30,20);
rect(x+40,y-200,10,30,20); 
rect(x+50,y-200,10,50,20); 
  
  
ellipse(x-65,y-130,20,20)  
ellipse(x-70,y-115,18,18)   
ellipse(x-75,y-100,16,16)  
ellipse(x-80,y-87,14,14)  
ellipse(x+65,y-130,20,20)  
ellipse(x+70,y-115,18,18)   
ellipse(x+75,y-100,16,16)  
ellipse(x+80,y-87,14,14)  
  push()
  scale(0.3,0.8)
  translate(x+20,y-165)
  beginShape();
  vertex(100, 200);  
  vertex(140, 140);  
  vertex(200, 140);  
  vertex(210, 200);  
  vertex(165, 225);  
  vertex(150, 200);  
  endShape(CLOSE);
  pop()
  
   push()
  scale(0.3,0.8)
  translate(x+560,y-165)
  beginShape();
  vertex(100, 200);  
  vertex(140, 140);  
  vertex(200, 140);  
  vertex(210, 200);  
  vertex(165, 225);  
  vertex(150, 200);  
  endShape(CLOSE);
  pop()
  //ear
  push()
  fill(255)
  noStroke()
  ellipse(x - 65, y - 150, 20,30)
  ellipse(x + 60, y - 150, 20,30)
  pop()
  pop()
}
function head(x, y) {
  push()
  noStroke()
  push()
fill(250, 230, 160);
  ellipse(x-4,y-180,130,130)
  
  pop() 
  push()
  fill(255, 192, 203)
  ellipse(x, y - 150, 120, 80);
  pop()

  pop()
  //eyes
  push()
  fill(0)
  ellipse(x - 30, y - 150, 10,10)
  ellipse(x + 20, y - 150, 10,10)
  pop()
  line(205,180,192,170)
  line(192,170,180,180)
  push()
  // strokeWeight(5)
  scale(0.3,0.5)
  fill(255,60,0,220)
  noStroke()
  translate(580,230)
  triangle(30, 75, 58, 100, 86, 75);
  pop()
}

function body(x,y){
push()
noStroke()
ellipse(x-40,y-45,30,30)
  
push();
fill(245, 236, 225)
rect(x-20, y-112, 30, 30);
pop();

push();
fill(240, 220, 200); 
rect(x-30, y-102, 52, 30);
pop();

push();
fill(230, 200, 210); 
rect(x-30, y-92, 54, 30);
pop();

push();
fill(210, 210, 230); 
rect(x-30, y-82, 56, 30);
pop();

push();
fill(200, 220, 230);
rect(x-30, y-72, 58, 30);
pop();

push();
fill(200, 230, 200);
rect(x-30, y-62, 60, 30);
pop();
pop()
  
  push()
  strokeWeight(2)
  stroke(0, 255, 255)
  fill(173, 216, 230);
  triangle(x-30, y-45, x, y-80, x+30, y-45); 
  triangle(x-30, y-45, x, y-5, x+30, y-45); 
  triangle(x-60, y-5, x-30, y-45, x, y-5); 
  triangle(x+60, y-5, x+30, y-45, x, y-5); 
  pop()
  
  push()
  noStroke()
  fill(255,80,50,210)
  rect(x-60,y-4,120,60);
  pop()
  
  push()
  translate(0,3)
  strokeWeight(5)
  stroke(173, 216, 230)
  fill(180, 238, 245);
  rect(x-80,y+55,50,50);
  rect(x-30,y+55,60,50);
  rect(x+25,y+55,50,50);
  pop()
}


function feet(x,y){
  push()
  noFill()
  strokeWeight(5)
  scale(0.5)
  rotate(-30)
  beginShape();
  translate(-450,650)
  curveVertex(80, 320);   
  curveVertex(80, 320);  
  curveVertex(140, 240); 
  curveVertex(200, 140);  
  curveVertex(230, 120); 
  curveVertex(270, 135);  
  curveVertex(330, 150); 
  curveVertex(360, 150);  
  curveVertex(360, 150);  
  endShape();
  pop()
  
    
  push()
  noFill()
  strokeWeight(5)
  scale(0.5)
  rotate(-30)
  beginShape();
  translate(-280,780)
  curveVertex(80, 320);   
  curveVertex(80, 320);  
  curveVertex(140, 240); 
  curveVertex(200, 140);  
  curveVertex(230, 120); 
  curveVertex(270, 135);  
  curveVertex(330, 150); 
  curveVertex(360, 150);  
  curveVertex(360, 150);  
  endShape();
  pop()
  push()
  translate(0,4)
  strokeWeight(5)
  stroke(173, 216, 230)
  fill(180, 238, 245);
  rect(x-80,y+54,50,50);
  pop()
  translate(-55,80)
  
  push()
  noStroke()
fill(250, 230, 160);
  translate(120,70)
  rotate(40)
  ellipse(x+20,y-20,80,40)
  ellipse(x+110,y-80,80,40)
  pop()
  

  push()
  noStroke()
  fill(255, 192, 203);
  translate(100,40)
  rotate(40)
  ellipse(220,y,20,20)
  ellipse(240,y+5,20,20)
  ellipse(260,y+5,20,20)
  ellipse(280,y+5,20,20)
  pop()
  
  push()
  noStroke()
  fill(255, 192, 203);
  translate(205,55)
  rotate(40)
  ellipse(220,y,20,20)
  ellipse(240,y+5,20,20)
  ellipse(260,y+5,20,20)
  ellipse(280,y+5,20,20)
  pop()
 

}

function arm(x,y){
  push()
  rotate(15)
  translate(-5,-360)
  noFill()
  strokeWeight(3)
  beginShape();
  curveVertex(260, 480); 
  curveVertex(260, 480); 
  curveVertex(240, 600); 
  curveVertex(290, 680); 
  curveVertex(mouseX, 680); 
  endShape();
  pop()

  
  
  push()
  noFill()
  rotate(-5)
  translate(-80,-280)
  strokeWeight(3)
  beginShape();
  curveVertex(340, 480);  
  curveVertex(340, 480);
  // curveVertex(340, 480);
  curveVertex(410, 600);  
  curveVertex(380, 680);  
  curveVertex(mouseX, 680);  
  endShape();
  pop()
  push()
  noStroke()
  ellipse(x+70,y-125,30,30)

  fill(60, 220, 80);
  ellipse(190,380,15,15)
  ellipse(335,380,15,15)
 
  pop()
}