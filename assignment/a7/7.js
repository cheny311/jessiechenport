/**********************
 * GLOBAL STATE
 **********************/
let currentScene = 0;
let scenes = [];

/**********************
 * SHARED ASSETS
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

  // ✅ 稳定叠层/点击区域
  cnv.elt.style.position = "relative";
  cnv.elt.style.zIndex = "0";

  // 让键盘事件更稳定
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

  // ✅ 把所有 p5 DOM（input/slider/button）强制放进 sketch-container
  // 避免它们跑到 body 形成“透明遮挡层”
  setTimeout(forceAllP5DomInsideContainer, 0);
}

function forceAllP5DomInsideContainer() {
  const container = document.getElementById("sketch-container");
  if (!container) return;

  // p5 DOM element 常见 class：p5Canvas, p5_element
  document.querySelectorAll(".p5_element").forEach((el) => {
    if (el && container && el.parentElement !== container) {
      container.appendChild(el);
    }
  });
}

/**********************
 * DRAW
 **********************/
function draw() {
  background(240);
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

  if (cnv) cnv.elt.focus();
  setTimeout(forceAllP5DomInsideContainer, 0);
}

/**********************
 * EVENT FORWARDING
 **********************/
function keyPressed() {
  scenes[currentScene]?.keyPressed?.();

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
