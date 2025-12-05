// ------------------------------
// 1. CC Lab 页面：散沙 assignments
// ------------------------------
window.addEventListener("load", () => {
  const list = document.getElementById("sandList");
  const container = document.querySelector(".assignments");

  // ✅ home.html 上没有这些元素，就直接退出，避免报错
  if (!list || !container) return;

  const items = list.querySelectorAll("li");

  const containerRect = container.getBoundingClientRect();
  const padding = 20;          // 内边距，避免贴边
  const topOffset = 60;        // 留出上面给 "Assignments" 标题
  const usableWidth = containerRect.width - padding * 2;
const usableHeight = containerRect.height - topOffset - padding;

  const placed = [];           // 已经放好的元素信息
  const margin = 8;            // 元素之间的安全间距

  items.forEach((item) => {
    // 先让浏览器计算好尺寸
    const w = item.offsetWidth;
    const h = item.offsetHeight;

    let x, y;
    let ok = false;
    let attempts = 0;
    const maxAttempts = 300;

    while (!ok && attempts < maxAttempts) {
      // 在可用区域随机一个位置
      x = Math.random() * (usableWidth - w) + padding;
      y = Math.random() * (usableHeight - h) + topOffset;

      ok = true;

      // 检查是否和已放置的元素重叠
      for (const p of placed) {
        const noOverlap =
          x + w + margin < p.x ||      // 在左边
          x > p.x + p.w + margin ||    // 在右边
          y + h + margin < p.y ||      // 在上面
          y > p.y + p.h + margin;      // 在下面

        if (!noOverlap) {
          ok = false;
          break;
        }
      }
      attempts++;
    }

    // 设置最终位置（用 px，相对于 .assignments）
    item.style.left = x + "px";
    item.style.top = y + "px";

    placed.push({ x, y, w, h });

    // 每个 li 的漂浮时间略微错开
    const delay = Math.random() * 2;
    item.style.animationDelay = delay + "s";
  });
});


// ------------------------------
// 2. Home 页面：5x10 grid 里的 15 个 squares
// ------------------------------
window.addEventListener("load", () => {
  const grid = document.getElementById("squareGrid");
  if (!grid) return;  // ✅ 不在 home.html 就直接跳过

  const squares = grid.querySelectorAll(".square");

  // 所有可用的格子位置：10 行 × 5 列 = 50 个
  const positions = [];
  for (let row = 1; row <= 10; row++) {
    for (let col = 1; col <= 5; col++) {
      positions.push({ row, col });
    }
  }

  // Fisher-Yates 洗牌，随机打乱顺序
  for (let i = positions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [positions[i], positions[j]] = [positions[j], positions[i]];
  }

  // 取前 15 个位置，给 15 个方块
  squares.forEach((square, index) => {
    const pos = positions[index];
    square.style.gridRowStart = pos.row;
    square.style.gridColumnStart = pos.col;

    // ✅ 关键：给每个 square 不同的 --i，用来控制动画延迟
    square.style.setProperty("--i", index);
  });
});
