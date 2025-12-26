let speed = 1.0;
let statusText = "";

function setup() {
  // ✅ 创建 canvas 并放入 sketch-container
  let cnv = createCanvas(600, 600);
  cnv.parent('sketch-container');
  
  noStroke();
}

function draw() {
  background(245, 235, 250);
  let h = hour();
  let m = minute();
  let s = second();

  let Fast = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18,
              20, 22, 24, 26, 28, 30, 32, 34, 36, 38,
              40, 42, 44, 46, 48, 50, 52, 54, 56, 58];

  let Slow = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19,
              21, 23, 25, 27, 29, 31, 33, 35, 37, 39,
              41, 43, 45, 47, 49, 51, 53, 55, 57, 59];

  // background responding to hours
  if (h >= 4 && h < 10) {
    // morning yellow
    background(255, 240, 200);
  } else if (h >= 10 && h < 15) {
    // afternoon blue
    background(200, 230, 255);
  } else if (h >= 15 && h < 19) {
    // evening pink
    background(255, 180, 200);
  } else {
    // night navy
    background(40, 40, 70);
  }

  speed = 1.0;
  if (Fast.includes(m)) speed = 2.5;
  else if (Slow.includes(m)) speed = 0.4;

  let speed2 = map(s, 0, 100, 0.1, 6);

  // motion
  const base = 0.1;
  const loop = width + 600;
  const x = (millis() * base * speed) % loop - 300;

  // draw second indicator
  push();
  noStroke();
  translate(width / 2, 200);
  let angle = map(second(), 0, 60, 0, TWO_PI);
  rotate(angle);
  fill(255, 204, 255);
  ellipse(150, 0, 20, 20);
  pop();

  // text based on speed
  if (speed === 0.4) {
    statusText = "Running Late!";
  } else if (speed === 2.5) {
    statusText = "WAIT FOR ME!";
  } else {
    statusText = "YEAH ON TIME";
  }
  
  fill(255);
  textSize(38);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  text(statusText, width / 2, height / 2 - 60);
  textFont('Courier New', 10);

  // draw several cars
  let y = 400;
  drawCar(x, y, color(255, 166, 210)); // pink
  drawCar(x + 190, y, color(166, 205, 255)); // blue
  drawCar(x + 380, y, color(255, 240, 166)); // yellow
  drawCar(x - 190, y, color(255, 240, 166)); // yellow
  drawCar(x - 380, y, color(166, 205, 255)); // blue
  drawCar(x - 570, y, color(255, 166, 210)); // pink
  drawCar(x + 570, y, color(255, 166, 210)); // pink
  drawCar(x - 760, y, color(166, 205, 255)); // blue
  drawCar(x + 760, y, color(166, 205, 255)); // blue
}

function drawCar(x, y, bodyColor) {
  // body
  stroke(255);
  strokeWeight(1);
  fill(bodyColor);
  rect(x, y, 180, 90, 12);

  // windows
  push();
  stroke(200);
  strokeWeight(1);
  fill(241, 255, 204);
  rect(x + 20, y + 20, 25, 25, 3);
  rect(x + 50, y + 20, 25, 25, 3);
  rect(x + 95, y + 20, 25, 25, 3);
  rect(x + 125, y + 20, 25, 25, 3);
  pop();
  
  // doors
  push();
  stroke(200);
  strokeWeight(1);
  fill(255);
  rect(x + 60, y + 50, 25, 35, 5);
  rect(x + 88, y + 50, 25, 35, 5);
  pop();
}