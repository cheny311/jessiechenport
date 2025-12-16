let X, Y;
let moooo = [90, 67, 90, 55, 82, 100, 80];

function setup() {
  createCanvas(400, 600);
  X = width / 2;
  Y = height / 2;
  angleMode(DEGREES);
}

function draw() {
  background(220);
  
  head(X,Y)
  drawBangs(X,Y)
 
  hair(X, Y);

  arm(X, Y);
  mouth(X,Y,moooo)
}

function drawBangs(x, y) {
  fill(255, 60, 0, 220);
  noStroke();

  let hairC = 13       
  let hairW = 10      
  let one = x - 70

  for (let i = 0; i < hairC; i++) {
    let hx = one + i * hairW;
    let hL = 40
    rect(hx, y - 200, hairW, hL, 20);
  }
}




function hair(x, y) {
push()
  ellipse(x - 65, y - 130, 20, 20);
  ellipse(x - 70, y - 115, 18, 18);
  ellipse(x - 75, y - 100, 16, 16);
  ellipse(x - 80, y - 87, 14, 14);
  ellipse(x + 65, y - 130, 20, 20);
  ellipse(x + 70, y - 115, 18, 18);
  ellipse(x + 75, y - 100, 16, 16);
  ellipse(x + 80, y - 87, 14, 14);

  push();
  scale(0.3, 0.8);
  translate(x + 20, y - 165);
  beginShape();
  vertex(100, 200);
  vertex(140, 140);
  vertex(200, 140);
  vertex(210, 200);
  vertex(165, 225);
  vertex(150, 200);
  endShape(CLOSE);
  pop();

  push();
  scale(0.3, 0.8);
  translate(x + 560, y - 165);
  beginShape();
  vertex(100, 200);
  vertex(140, 140);
  vertex(200, 140);
  vertex(210, 200);
  vertex(165, 225);
  vertex(150, 200);
  endShape(CLOSE);
  pop();

//ear
  push();
  fill(255);
  noStroke();
  ellipse(x - 65, y - 150, 20, 30);
  ellipse(x + 60, y - 150, 20, 30);
  pop();
  pop();
}


function head(x, y) {
  push();
  noStroke();
  fill(250, 230, 160);
  ellipse(x - 4, y - 180, 130, 130);

  fill(255, 192, 203);
  ellipse(x, y - 150, 120, 80);
  pop();

  // eye nose
  push();
  fill(0);
  ellipse(x - 30, y - 150, 10, 10);
  ellipse(x + 20, y - 150, 10, 10);
  pop();


  push();
  scale(0.3, 0.5);
  fill(255, 60, 0, 220);
  noStroke();
  translate(580, 230);
  triangle(30, 75, 58, 100, 86, 75);
  pop();
}



function arm(x, y) {
  stroke(0)
  strokeWeight(3)
  push();

  rotate(15);
  translate(-5, -360);
  noFill();
  strokeWeight(3);
  beginShape();
  curveVertex(260, 480);
  curveVertex(260, 480);
  curveVertex(240, 600);
  curveVertex(290, 680);
  curveVertex(mouseX, 680);
  endShape();
  pop();

  push();
  noFill();
  rotate(-5);
  translate(-80, -280);
  strokeWeight(3);
  beginShape();
  curveVertex(340, 480);
  curveVertex(340, 480);
  curveVertex(410, 600);
  curveVertex(380, 680);
  curveVertex(mouseX, 680);
  endShape();
  pop();

  push();
  noStroke();

  fill(60, 220, 80);
  ellipse(190, 380, 15, 15);
  ellipse(335, 380, 15, 15);
  pop();
}



function mouth(x, y, dataArr) {
push()
  translate(40,30)
  scale(0.8)
  const w = 90
  const h = 26;
  const pad = 8;
  const cx = x;
  const cy = y - 122; 

  const left = cx - w /2
  const right = cx + w/2
  const topY = cy - h/2
  const botY = cy +h/2
  
  const minA = 60
  const maxB = 120
  stroke(255)
  strokeWeight(3)
  noFill()
  
  beginShape()
  for ( let i = 0; i<dataArr.length;i++){
    const xx = map (i,0,dataArr.length-1, left, right)
    let yy = map(dataArr[i],minA,maxB,botY,topY)
    
    
    const staD = 4
    const gapD = 20
    const amp = 3
     yy += sin(frameCount * staD  + i * gapD) * amp; 
    vertex(xx, yy)
    
  }
  
  endShape()
  
  pop()
}
