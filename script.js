const starField = document.getElementById("star-field");

const STAR_COUNT = 120;

for (let i = 0; i < STAR_COUNT; i++) {
  const star = document.createElement("span");

  star.className = "star";

  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";

  const size = Math.random() < 0.85
    ? Math.random() * 1.5 + 0.5
    : Math.random() * 2 + 1.5;

  star.style.width = size + "px";
  star.style.height = size + "px";

  const moveDuration = Math.random() * 8 + 10;
  const blinkDuration = Math.random() * 3 + 2;

  star.style.animationDuration =
    `${moveDuration}s, ${blinkDuration}s`;

  const delay = Math.random() * -20;

  star.style.animationDelay =
    `${delay}s, ${delay}s`;

  starField.appendChild(star);
}
// ===== 点击星光特效 =====

document.addEventListener("pointerdown", (event) => {
  const effect = document.createElement("div");
  effect.className = "click-star";

  effect.style.left = event.clientX + "px";
  effect.style.top = event.clientY + "px";

  effect.innerHTML = `
  <div class="click-star-shape">
    <svg viewBox="0 0 100 100" aria-hidden="true">
      <polygon points="50,7 61,38 94,38 67,58 77,91 50,71 23,91 33,58 6,38 39,38"></polygon>
    </svg>
  </div>

  <span class="click-ring ring-1"></span>
  <span class="click-ring ring-2"></span>
  <span class="click-ring ring-3"></span>
`;

  document.body.appendChild(effect);

  setTimeout(() => {
    effect.remove();
  }, 900);
});