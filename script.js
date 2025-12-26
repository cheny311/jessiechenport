/**
 * ------------------------------
 * 1. CC Lab 页面：散沙 assignments
 * ------------------------------
 */
const placeBubbles = () => {
  const list = document.getElementById("sandList");
  const container = document.querySelector(".assignments");

  // 安全检查
  if (!list || !container) return;

  const items = Array.from(list.querySelectorAll("li"));
  const count = items.length;
  if (count === 0) return;

  // 获取容器实际尺寸（对应 CSS 中的 600px 高度）
  const cw = container.clientWidth;
  const ch = container.clientHeight;

  // 如果加载太快拿不到尺寸，延迟重试
  if (cw === 0 || ch === 0) {
    setTimeout(placeBubbles, 100);
    return;
  }

  // 布局参数（根据你的 CSS 调整）
  const padding = 40;          // 左右边距
  const topOffset = 80;        // 避开 "Assignments" 标题文字
  const bottomOffset = 40;     // 底部留白，防止泡泡贴边

  /**
   * 核心逻辑：将容器划分为 3x3 的网格 (9个格子)
   * 7个泡泡随机分配到这 9 个格子里，确保绝对不重叠
   */
  const cols = 3; 
  const rows = 3;
  const cellW = (cw - padding * 2) / cols;
  const cellH = (ch - topOffset - bottomOffset) / rows;

  // 创建格子坐标池
  let slots = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      slots.push({ r, c });
    }
  }

  // 随机打乱格子顺序 (Fisher-Yates shuffle)
  for (let i = slots.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [slots[i], slots[slots[j] ? j : 0]] = [slots[j], slots[i]];
  }

  items.forEach((item, index) => {
    // 强制设置定位
    item.style.position = "absolute";
    item.style.display = "block";

    // 获取当前泡泡要去的格子
    const slot = slots[index % slots.length];
    
    // 格子的左上角起点
    const slotX = padding + slot.c * cellW;
    const slotY = topOffset + slot.r * cellH;

    // 获取泡泡自身尺寸
    const itemW = item.offsetWidth || 120;
    const itemH = item.offsetHeight || 40;

    // 在格子内部增加一点点随机偏移，让排列看起来很自然（不呆板）
    // 这里的偏移量限制在格子的 30% 以内，确保不撞车
    const randomOffsetX = Math.random() * (cellW - itemW) * 0.8;
    const randomOffsetY = Math.random() * (cellH - itemH) * 0.8;

    let finalX = slotX + randomOffsetX;
    let finalY = slotY + randomOffsetY;

    // --- 最终边界强力保险 ---
    // 确保 left 不会超过右边界，top 不会超过底边界
    finalX = Math.max(padding, Math.min(finalX, cw - itemW - padding));
    finalY = Math.max(topOffset, Math.min(finalY, ch - itemH - bottomOffset));

    // 应用坐标
    item.style.left = finalX + "px";
    item.style.top = finalY + "px";

    // 动画延迟错开
    item.style.animationDelay = (Math.random() * 2) + "s";
  });
};

// 监听加载和缩放
window.addEventListener("load", placeBubbles);
window.addEventListener("resize", placeBubbles);


/**
 * ------------------------------
 * 2. Home 页面：5x10 grid 里的 15 个 squares
 * ------------------------------
 */
window.addEventListener("load", () => {
  const grid = document.getElementById("squareGrid");
  if (!grid) return; 

  const squares = grid.querySelectorAll(".square");

  const positions = [];
  for (let row = 1; row <= 10; row++) {
    for (let col = 1; col <= 5; col++) {
      positions.push({ row, col });
    }
  }

  for (let i = positions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [positions[i], positions[j]] = [positions[j], positions[i]];
  }

  squares.forEach((square, index) => {
    if (positions[index]) {
      const pos = positions[index];
      square.style.gridRowStart = pos.row;
      square.style.gridColumnStart = pos.col;
      square.style.setProperty("--i", index);
    }
  });
});