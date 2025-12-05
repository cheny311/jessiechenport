//online code for Gradient
function radialGradient(x, y, w, h, cInner, cOuter, steps = 40) {
  noStroke();
  for (let i = steps; i >= 1; i--) {
    const t = i / steps;                      // 1 → 0
    fill( lerpColor(cInner, cOuter, 1 - t) ); // 由内到外
    ellipse(x, y, w * t, h * t);
  }
}


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255, 171, 224,2);
 
  const topY = height/4 - 11;
  push()
  translate(0,-8)
  // last layer
  push();
  noStroke(); 
  fill(120,210,255)
  rect(width/2-175,height/3+175,350,90,0,0,200,200);
  ellipse(width/2,height/3+175,350,20);
  radialGradient(
  width/2, height/3 + 175, 350, 20,
  color(138, 255, 196,220),
  color(57, 222, 247,0),
  44
);
  
  pop();
  
  
  // third layer buttom
  push();
  noStroke();  
  push()
  fill(120,210,255,220)
  rect(width/2-140-2.5,height/3+100,285,20,200);
  pop()
  ellipse(width/2,height/3+115,280,60);
  radialGradient(
  width/2, height/3 + 115, 280, 60,
  color(120,210,255,210),
  color(0,150,220,0),
  48
);
  pop();
  
  // layer 4 red connector
  push(); 
  fill(255, 87, 87)
  noStroke();
  rect(width/2-5,278,10,40);
  pop();
  
  
  
  // layer three top
  push();
  noStroke(); 
  ellipse(width/2,220,230,2); 
  radialGradient(
  width/2, 222, 230, 25,
  color(117, 255, 200,210),
  color(85, 208, 250,0),
    48
);
  pop();

  // second red connector
  push();
  fill(255, 87, 130);
  noStroke();
  rect(width/2-5,185,10,36);
  pop();
  
//second layer
  push()
  noStroke(); 
  
//second layer bottom
  ellipse(width/2,height/3+30,230,60);
  radialGradient(
  width/2, height/3 + 30, 230, 60,
  color(120,210,255,210),
  color(0,150,220,0),
  48
);
  pop();
  
  //second layer top
  radialGradient(
  width/2, 146, 180, 25,
  color(117, 255, 200,210),
  color(85, 208, 250,0),
    48
);
 
  // top layer connector
  push();
  fill(255, 87, 150);
  noStroke();
  rect(width/2-5,120,10,25); 
  pop();

  // top layer bottom
  push(); 
  noStroke();
  ellipse(width/2,100,120,45); 
  radialGradient(
  width/2, 100, 120, 45,
  color(120,210,255,210),
  color(0,150,220,0),
  44
);
  pop();

  // first layer top
  push();
  radialGradient(
    width/2, topY, 102, 22,
    color(117, 255, 200,210),
    color(85, 208, 250,0),
    48
  );
  pop();

  
  // top fountain
  push(); 
  noStroke(); 
  fill(98, 252, 191);
  beginShape();
  curveVertex(130+10,120-30);
  curveVertex(130+10,140-30-10);
  curveVertex(130+10,120-30);
  curveVertex(180-10,120-30);
  curveVertex(220-10,120-30);
  curveVertex(270-10,120-30);
  curveVertex(270-10,140-30-10);
  curveVertex(130+10,140-30-10);
  curveVertex(130+10,120-30);
  curveVertex(130+10,140-30);
  endShape(CLOSE);
  pop();
  
  //second fountain
  push();
  translate(0,5);
  noStroke();
  fill(98, 252, 191);
  beginShape();
  curveVertex(130+10-40,140);
  curveVertex(130+10-40,160-5-5+3);
  curveVertex(130+10-40,140);
  curveVertex(180-10+40,140);
  curveVertex(220-10+40,140);
  curveVertex(270-10+40,140);
  curveVertex(270-10+40,160-5-5+3);
  curveVertex(130+10-40,160-5-5+3);
  curveVertex(130+10-40,140);
  curveVertex(130+10-40,160-5-5+3);
  endShape(CLOSE);
  pop();

  //third fountain
  push(); 
  translate(0,5);
  noStroke();
  fill(98, 252, 191);
  beginShape();
  curveVertex(130+10-40-20,140+50+20+5+2);
  curveVertex(130+10-40-20,160-5-5+3+80);
  curveVertex(130+10-40-20,140+50+20+5+2);
  curveVertex(180-10+40+20,140+50+20+5+2);
  curveVertex(220-10+40+20,140+50+20+5+2);
  curveVertex(270-10+40+20,140+50+20+5+2);
  curveVertex(270-10+40+20,160-5-5+3+80);
  curveVertex(130+10-40-20,160-5-5+3+80);
  curveVertex(130+10-40-20,140+50+20+5+2);
  curveVertex(130+10-40-20,160-5-5+3+80);
  endShape(CLOSE);
  pop();

  //top decor
  noStroke();
  push();
  fill(255, 110, 214);
  rect(width/2-5,45,10,45);
  pop()
  
  push()
  fill(113, 229, 245)
  ellipse(width/2,57,20,10)
  pop()
  
  push()
  fill(110, 255, 219)
  ellipse(width/2,35,15,15)
  pop()

  push()
  translate(0,5)
  fill(110, 253, 255)
  rect(width/2-17.5,43,35,8,10); 
  pop()
  
  push()
  fill(150, 255, 255)
  rect(width/2-22.5,40,45,10,10); 
  pop();
  
  push()
  scale(0.8)
  translate(50,10)
  
  push()
  noFill();
  stroke(20);
  stroke(33, 185, 255,50);
  strokeWeight(4);
  translate(0,10)
  beginShape();
  vertex(width/2, 20);                       // 起点
  //            cx1         cy1      cx2               cy2      ex            ey
  bezierVertex(width/2, 20-40,width/2+90,20-15,width/2+140,20+110);
  endShape();

  pop()
// 1) 原弧线的“对称”（向左）
  push();
  noFill();
  stroke(20);
  strokeWeight(4);
  stroke( 33, 185, 255,50)
  translate(0,10);
  beginShape();
  vertex(width/2, 20);
  bezierVertex(width/2, 20-40,  width/2-90, 20-15,  width/2-140, 20+110);
  endShape();
  pop();

// 2) 比她小一些（0.8 倍，向右）
  push();
  noFill();
  stroke(20);
  strokeWeight(4);
  stroke( 197, 246, 252)
  translate(0,10);
  beginShape();
  vertex(width/2, 20);
  bezierVertex(width/2,            20-40*0.8,
             width/2+90*0.8,     20-15*0.8,
             width/2+140*0.8,    20+110*0.8);
  endShape();
  pop();

// 3) “小一些”的对称（0.8 倍，向左）
  push();
  noFill();
  stroke(20);
  strokeWeight(4);
  translate(0,10);
  stroke(197, 246, 252);
  beginShape();
  vertex(width/2, 20);
  bezierVertex(width/2,            20-40*0.8,
             width/2-90*0.8,     20-15*0.8,
             width/2-140*0.8,    20+110*0.8);
  endShape();
  pop();

// 4) 比她大一些（1.2 倍，向右）
  push();
  noFill();
  stroke(20);
  strokeWeight(4);
  translate(0,10);
  beginShape();
  stroke(197, 246, 252)
  vertex(width/2, 20);
  bezierVertex(width/2,            20-40*1.2,
             width/2+90*1.2,     20-15*1.2,
             width/2+140*1.2,    20+110*1.2);
  endShape();
  pop();

// 5) “大一些”的对称（1.2 倍，向左）
  push();
  noFill();
  stroke(20);
  strokeWeight(4);
  translate(0,10);
  beginShape();
  stroke(197, 246, 252);
  vertex(width/2, 20);
  bezierVertex(width/2,            20-40*1.2,
             width/2-90*1.2,     20-15*1.2,
             width/2-140*1.2,    20+110*1.2);
  endShape();
  pop();

  pop()
  pop()

}
