/**********************
 * GLOBAL STATE
 **********************/
let currentScene = 0; // 想从哪一幕开始：0–4（如果你不确定就先改 0）
let scenes = [];

/**********************
 * SHARED ASSETS (给 scenes 用)
 **********************/
let imgHer, imgMe, imgHold;
let cursorImg;
let lipImg;
let kissImg;
let movieB;
let bgS;
let leftFrames = [];
let pipImg;
let bgMusicStarted = false;

// ===== wedding photo assets =====
let jiehunFrame;
let wemarryFrames = [];
let WEMARRY_COUNT = 22;

/**********************
 * CANVAS UTILS
 **********************/
let cnv;
let sketchContainerEl;

function getContainerSize() {
  if (!sketchContainerEl) {
    sketchContainerEl = document.getElementById("sketch-container");
  }

  let w = Math.max(300, sketchContainerEl?.clientWidth || window.innerWidth);

  // 如果 container 没有显式高度，就给个合理高度
  let h = Math.max(
    500,
    sketchContainerEl?.clientHeight || Math.min(900, window.innerHeight * 0.9)
  );

  return { w, h };
}

/**********************
 * PRELOAD
 **********************/
function preload() {
  let names = ["p1", "p2", "p3", "p4", "p5", "p6"];
  for (let n of names) {
    leftFrames.push(loadImage(`images/${n}.jpg`));
  }

  bgS = loadSound("images/happytogether.mp3");
  movieB = loadImage("images/metro.png");
  pipImg = loadImage("images/fish.png");
  cursorImg = loadImage("images/cursor.png");
  imgHer = loadImage("images/handR.png");
  imgMe = loadImage("images/handL.png");
  imgHold = loadImage("images/hold.png");
  lipImg = loadImage("images/lip.png");
  kissImg = loadImage("images/kiss.png");

  jiehunFrame = loadImage("marry/jiehun.png");

  wemarryFrames = [];
  for (let i = 1; i <= WEMARRY_COUNT; i++) {
    wemarryFrames.push(loadImage(`marry/wemarry${i}.png`));
  }
}

/**********************
 * SETUP
 **********************/
function setup() {
  sketchContainerEl = document.getElementById("sketch-container");
  let { w, h } = getContainerSize();

  cnv = createCanvas(w, h);
  cnv.parent("sketch-container");

  // 让键盘事件更稳定（点到画布后 WASD/快捷键更容易生效）
  cnv.elt.tabIndex = 0;
  cnv.elt.style.outline = "none";
  cnv.elt.focus();

  textFont("Kirang Haerang");

  // init scenes
  scenes[0] = new Scene0();
  scenes[1] = new Scene1();
  scenes[2] = new Scene2();
  scenes[3] = new Scene3();
  scenes[4] = new Scene4();

  // ✅ 关键：不要假设每个 scene 都有 start()
  scenes[currentScene]?.start?.();
}

/**********************
 * DRAW
 **********************/
function draw() {
  background(240);

  // ✅ 关键：update/draw 也用安全调用
  scenes[currentScene]?.update?.();
  scenes[currentScene]?.draw?.();
}

/**********************
 * RESIZE
 **********************/
function windowResized() {
  let { w, h } = getContainerSize();
  resizeCanvas(w, h);

  for (let scene of scenes) {
    scene?.handleResize?.();
  }
}

/**********************
 * SCENE SWITCH
 **********************/
function switchScene(newScene) {
  scenes[currentScene]?.reset?.();
  currentScene = newScene;
  scenes[currentScene]?.start?.();

  // 切场景后让 canvas 重新拿焦点（键盘更稳）
  if (cnv) cnv.elt.focus();
}

/**********************
 * EVENT FORWARDING
 **********************/
function keyPressed() {
  scenes[currentScene]?.keyPressed?.();

  // demo: press 1 to go next scene
  if (key === "1") {
    let next = currentScene + 1;
    if (next > 4) next = 0;
    switchScene(next);
  }
}

function mousePressed() {
  if (cnv) cnv.elt.focus();
  scenes[currentScene]?.mousePressed?.();
}

function mouseDragged() {
  scenes[currentScene]?.mouseDragged?.();
}

function mouseReleased() {
  scenes[currentScene]?.mouseReleased?.();
}

function mouseWheel(e) {
  return scenes[currentScene]?.mouseWheel?.(e);
}
