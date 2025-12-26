// Thanks Anna Zimmer for providing the code
let webcam;
let tracker = new clm.tracker();
let positions = null;

let faceDetected = false;
let showClearText = true;

const TEXT_MSG = "Can you see me?";
const CENTER_Y = 360;

function setup() {
  // ✅ 创建 canvas 并放入 sketch-container
  let cnv = createCanvas(600, 600);
  cnv.parent('sketch-container');
  
  webcam = createCapture(VIDEO);
  webcam.size(width, height);
  webcam.hide();

  tracker.init();
  tracker.start(webcam.elt);

  textAlign(CENTER, CENTER);
  textSize(48);
}

function draw() {
  clear();
  background(204, 229, 255, 200);
  translate(width, -50);
  scale(-1, 1);

  positions = tracker.getCurrentPosition();
  faceDetected = tracker.getScore() > 0.5;
  showClearText = !faceDetected;

  noStroke();
  fill(255);
  if (showClearText) {
    drawClear(TEXT_MSG);
  } else {
    drawScrambled(TEXT_MSG);
  }
}

function drawClear(msg) {
  fill(247, 255, 244);
  text(msg, width / 2, CENTER_Y);
}

function drawScrambled(msg) {
  const noisy = scrambleText(msg, 6);
  fill(247, 255, 244);
  text(noisy, width / 2 - 20, CENTER_Y);

  // blurry effect
  push();
  translate(width / 2, CENTER_Y);
  for (let i = 0; i < 60; i++) {
    const w = 600 + random(-20, 20);
    const y = random(-600, 500);
    fill(255, 255, 255, random(10, 80));
    rect(-w / 2, y, w, 6);
  }
  pop();
}

function scrambleText(s, intensity = 10) {
  const marks = [
    "\u0300", "\u0301", "那些 ，所謂の蕜傷、 呮 吥 濄 媞 洎巳 給 洎巳 、 製慥 の 徦潒 罷ㄋ`//。", "\u0303", "\u0304", "\u0305", "\u0306", "\u0307",
    "\u0308", "陳怶萭嵗", "\u030A", "\u030B", "\u030C", "\u030D", "\u030E", "\u030F",
    "\u0310", "\u0311", "\u0312", "\u0313", "\u0314", "\u0315", "\u0316", "\u0317",
    "\u0318", "呐，兲 鵝哭 孒 ）、", "\u031A", "尐時吥祗熊當用，長夶喝熊兜來吥急….///", "\u031C", "\u0323", "\u0324", "\u0325",
    "\u0326", "\u0327", "妗兲湜個恏ㄖふ", "\u0329", "杺想哋倳ル嘟能荿", "\u032B", "\u032C", "\u032D",
    "\u032E", "\u032F", "\u0330", "親愛德 、在山東要照顧恏（自 己）蛤，涐会狠想伱,。", "\u0332", "\u0333", "\u0334", "\u0335",
    "\u0336", "莪湜恏囡陔", "\u0338", "沵恏,迣鎅", "\u033A", "\u033B", "\u033C", "\u033D",
    "\u033E", "\u033F"
  ];
  
  let out = "";
  for (const ch of s) {
    if (ch === " ") {
      out += " ";
      continue;
    }
    let t = ch;
    const n = floor(random(intensity, intensity + 3));
    for (let i = 0; i < n; i++) t += random(marks);
    out += t;
  }
  return out;
}