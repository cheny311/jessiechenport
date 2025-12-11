// let a = 0;
// let shapeA = 0


function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  frameRate(100)
  noFill();
  stroke(10)
  bgColor = color(255, 194, random(222, 250));
}


function draw() {
  let t = constrain(mouseX / width,0,1);
  let bR = lerp(255,230,t)
  background(bgColor);
  //head
  push()
  noStroke()
  fill(255,30,255,20)
  let w = lerp(200, 220, t);
  let h = lerp(200, 150, t);
  let r = lerp(100 ,20 ,t);
  rect(width/2-100, height/2-80, w, h, r )
  pop()
  
  
  //left ear
  // let earLX = lerp(60,61,t)
  let earLY = lerp(70,50,t)
  let rA = lerp(180,150,t)
  let rB = lerp(18,30,t)
  let sA = lerp(26,28,t)
  push()
  noStroke()
  fill(186, 225, 255)
  rect(45,rA,55,earLY,rB)
  pop()
  push()
  noStroke()
  translate(30,120)
  fill(189, 255, 220)
  rect(40,earLY,sA,sA*0.8,rB)
  pop()
  
  //right ear
  // let earRX = lerp(width/2+124,width/2+145,t)
  // let earRY = lerp(height/2+20,height/2,t)
  let rC = lerp(301,320,t)
  let rD = lerp(275,291,t)
  push()
  noStroke()
  fill(186, 225, 255)
  rect(rC,rA,55,earLY,rB)
  pop()
  push()
  noStroke()
  fill(189, 255, 220)
  translate(30,120)
  rect(rD,earLY,sA,sA*0.8,rB)
  pop()

  
  
  
 //eye big
  push()
  fill(255)
  rect(130,155,45,50,10)
  rect(230,155,45,50,10)
  pop()
  
  //eyeball
  push()
  fill(0)
  let kx = constrain (mouseX,130,145)
  let ky = constrain (mouseY,150,175)
  let kxx = constrain (mouseX,230,245)
  rect(kx,ky,30,30,10)
  rect(kxx,ky,30,30,10)
  pop()
  
  
  //nose
  push()
  fill(252, 255, 179)
  noStroke()
  let n = lerp(30,20,t)
  rect(width/2,height/2,n,20,30)
  pop()
  // constrain(value, min, max)
  
  
  //mouth
  push()
  let nA = lerp(20,39,t)
  let hA = lerp(260,222,t)
  let hB = lerp(30,5,t)
  let nC = lerp(20,33,t)
  
  //outside teeth
  push()
  fill(255)
  rect(190,hA,nA,nA,hB)
  pop()
  
  //inside mouth
  push()
  fill(255,0,0,210)
  let hY = lerp(260,228,t)
  rect(190,hY,nA,nC-4,hB)
  pop()
  pop()
  
  //blush to tear
  push()
  noStroke()
  rR = lerp(255,0,t)
  rG = lerp(0,0,t)
  rBB = lerp (0,255,t)
  bA = lerp(30,80,t)
  bB = lerp(30,10,t)
  bY = lerp(220,200,t)
  
// rect(130, 200, 30, 30, 10);
  push()
  fill(rR,rG,rBB,95)
  rect(130,bY,bB,bA,10)
  let rY = lerp(250,265,t)
  rect(rY,bY,bB,bA,10)
  pop()
  
  pop()
  
  
  
  //hair
  push()
  rectMode(CENTER);
  noStroke()
  translate(200, 90);
  let H = lerp(0,20,t)
  let YY = lerp(0,30,t)
  
  //right hair
  push()
  fill(69, 199, 255,199)
  rotate(H)
  rect(YY,0,20,80,20)
  pop()
  
  //left hair
  push()
  rotate(-H)
  fill(65, 250, 179,199)
  rect(0,0,20,80,20)
  pop()
  pop()
  
  
  
  //eyebow
  push()
  noStroke()
  let e = constrain(mouseX/ width,0,1)
  let ww = lerp(55,70,e)
  let hh = lerp(10,12,e)
  let ro = lerp(15,-25,e)
  
  //left
  push();
  fill(196, 255, 150)
  rectMode(CENTER);
  translate(150, 155);
  rotate(ro);
  rect(0,0,ww,hh,10)
  pop()
  
  //right
  push()
  fill(172, 208, 252)
  rectMode(CENTER)
  translate(255,155)
  rotate(-ro)
  rect(0,0,ww,hh,10)

  pop()
  pop()
  
}
function mousePressed() {
  bgColor = color(255, 194, random(222, 250));
}
 
