class LeftBubble {
  constructor() {
    this.visible = true;
    this.frames = leftFrames;
    this.idx = 0;
  }
  show() {
    this.visible = true;
  }
  hide() {
    this.visible = false;
  }

  nextFrame() {
    if (!this.frames || this.frames.length === 0) return;
    this.idx = (this.idx + 1) % this.frames.length;
  }

  display(scaleFactor = 1, offsetX = 0, offsetY = 0) {
    if (!this.visible) return;

    push();
    translate(offsetX, offsetY);
    scale(scaleFactor);

    noFill();
    stroke(0);
    strokeWeight(2);
    rect(60, 100, 32, 32, 5);
    if (this.frames && this.frames.length > 0) {
      image(this.frames[this.idx], 62, 102, 28, 28);
    }

    noFill();
    stroke(0);
    strokeWeight(2);
    rect(100, 100, 180, 32, 5);

    fill(0);
    noStroke();
    textSize(16);
    textAlign(LEFT, CENTER);
    text("how r u?", 110, 115);

    pop();
  }
}

class RightBubble {
  constructor() {
    this.visible = true;
  }
  show() {
    this.visible = true;
  }
  hide() {
    this.visible = false;
  }

  display(scaleFactor = 1, offsetX = 0, offsetY = 0) {
    if (!this.visible) return;

    push();
    translate(offsetX, offsetY);
    scale(scaleFactor);

    noFill();
    stroke(0);
    strokeWeight(2);
    rect(280, 160, 210, 32, 5);

    noFill();
    stroke(0);
    strokeWeight(2);
    rect(500, 160, 32, 32, 5);
    if (pipImg) image(pipImg, 502, 162, 28, 28);

    pop();
  }
}

class BlurLayer {
  constructor() {
    this.visible = false;
  }
  show() {
    this.visible = true;
  }
  hide() {
    this.visible = false;
  }

  display() {
    if (!this.visible) return;
    push();
    noStroke();
    fill(255, 255, 255, 130);
    rect(0, 0, width, height);
    pop();
  }
}

class Scene1 {
  constructor() {
    // ====== reference layout size ======
    this.REF_W = 1200;
    this.REF_H = 700;

    // ====== input box (blue) in reference coords ======
    this.INPUT_W = 180;
    this.INPUT_H = 34;
    this.INPUT_X = this.REF_W / 2 - this.INPUT_W / 2;
    this.INPUT_Y = 560; // ✅ 往下挪就改这里，比如 610

    // Try Again btn (reference coord)
    this.tryBtn = { w: 160, h: 40, x: 0, y: 0 };
    this.tryAgainVisible = false;

    this.input = createInput("");
    this.input.parent("sketch-container");
    this.input.style("position", "absolute");
    this.input.style("z-index", "10");
    this.input.style("font-family", "Kirang Haerang");
    this.input.style("font-size", "16px");
    this.input.style("height", this.INPUT_H + "px");
    this.input.style("line-height", this.INPUT_H + "px");
    this.input.style("padding", "0 10px");
    this.input.style("box-sizing", "border-box");

    this.visible = false;
    this.input.hide();

    this.message = "";
    this.lastSentText = "";

    this.leftBubble = new LeftBubble();
    this.rightBubble = new RightBubble();
    this.blurLayer = new BlurLayer();

    this.hasBeenActivated = false;

    this.input.elt.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        let sent = this.input.value();
        this.lastSentText = sent;
        this.input.value("");

        // ✅ 还是 10%
        this.message = random(1) < 0.1 ? "We can go out!" : "Unmatched";

        if (this.message === "Unmatched") {
          this.blurLayer.show();
          this.tryAgainVisible = true;
        } else {
          this.input.hide();
          this.tryAgainVisible = false;
          this.blurLayer.hide();
        }

        e.preventDefault();
      }
    });
  }

  start() {
    this.input.value("");
    this.lastSentText = "";
    this.message = "";
    this.tryAgainVisible = false;

    this.blurLayer.hide();
    this.leftBubble.show();
    this.rightBubble.show();
    this.hasBeenActivated = false;

    this.show();
    setTimeout(() => this.input.elt.focus(), 20);
  }

  reset() {
    this.message = "";
    this.lastSentText = "";
    this.tryAgainVisible = false;
    this.blurLayer.hide();

    this.input.value("");
    this.leftBubble.idx = 0;

    this.visible = false;
    this.input.hide();
    this.hasBeenActivated = false;
  }

  update() {}
  draw() {
    this.display();
  }

  getLayoutTransform() {
    let s = min(width / this.REF_W, height / this.REF_H);
    let ox = (width - this.REF_W * s) / 2;
    let oy = (height - this.REF_H * s) / 2;
    return { s, ox, oy };
  }

  positionInput() {
    let { s, ox, oy } = this.getLayoutTransform();
    let x = ox + this.INPUT_X * s;
    let y = oy + this.INPUT_Y * s;
    let w = this.INPUT_W * s;
    let h = this.INPUT_H * s;

    this.input.elt.style.left = `${x}px`;
    this.input.elt.style.top = `${y}px`;
    this.input.elt.style.width = `${w}px`;
    this.input.elt.style.height = `${h}px`;
    this.input.elt.style.lineHeight = `${h}px`;
    this.input.elt.style.fontSize = `${16 * s}px`;
  }

  updateTryBtnPos() {
    let { s, ox, oy } = this.getLayoutTransform();
    let baseX = this.REF_W / 2 - this.tryBtn.w / 2;
    let baseY = 320;
    this.tryBtn.x = ox + baseX * s;
    this.tryBtn.y = oy + baseY * s;
  }

  handleTryAgain() {
    this.leftBubble.nextFrame();
    this.lastSentText = "";
    this.message = "";
    this.blurLayer.hide();
    this.tryAgainVisible = false;

    this.input.show();
    this.input.value("");
    this.input.elt.focus();
  }

  show() {
    if (!this.visible) {
      this.input.show();
      this.visible = true;
    }
  }

  display() {
    background(240);

    const { s, ox, oy } = this.getLayoutTransform();

    // ✅ input 永远跟 layout
    this.positionInput();
    this.updateTryBtnPos();

    // ✅ bubbles 用 reference coords
    this.leftBubble.display(s, ox, oy);
    this.rightBubble.display(s, ox, oy);

    this.blurLayer.display();

    // cursor
    noCursor();
    if (cursorImg) {
      push();
      translate(mouseX, mouseY - 70);

      // ✅ 先判断是否翻转
      if (mouseX < width / 3) {
        scale(-1, 1);
      }

      // ✅ 然后绘制图片（坐标改为 0, 0）
      image(cursorImg, 0, 0, 100, 100);
      pop();
    }

    if (!this.hasBeenActivated) {
      this.show();
      this.hasBeenActivated = true;
      this.input.elt.focus();
    }

    if (this.message) {
      let msgY = this.message === "Unmatched" ? height / 2 + 50 : height / 2;

      push();
      fill(0);
      strokeWeight(4);
      textSize(40);
      textAlign(CENTER, CENTER);
      textFont("Kirang Haerang");
      text(this.message, width / 2, msgY);
      pop();

      // ✅ 成功提示词（你之前说看不到，我这里固定放下面）
      if (this.message === "We can go out!") {
        push();
        fill(0);
        noStroke();
        textSize(26);
        textAlign(CENTER, CENTER);
        textFont("Kirang Haerang");
        text("Press 1 to go to see the movie", width / 2, msgY + 80);
        pop();
      }
    }

    if (this.tryAgainVisible) {
      let { x, y, w, h } = this.tryBtn;
      push();
      stroke(0);
      fill(255);
      rect(x, y, w, h, 8);
      noStroke();
      fill(0);
      textSize(16);
      textAlign(CENTER, CENTER);
      textFont("Kirang Haerang");
      text("Try again", x + w / 2, y + h / 2 + 1);
      pop();
    }
  }

  mousePressed() {
    if (!this.tryAgainVisible) return;
    let { x, y, w, h } = this.tryBtn;
    if (mouseX >= x && mouseX <= x + w && mouseY >= y && mouseY <= y + h) {
      this.handleTryAgain();
    }
  }

  handleResize() {
    this.positionInput();
    this.updateTryBtnPos();
  }
}
