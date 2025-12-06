const cursor = document.querySelector(".cursor");
const trail = document.getElementById("trail");

// Generate random color
function randomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgba(${r}, ${g}, ${b}, 0.6)`;
}

// Mouse follow
document.addEventListener("mousemove", (e) => {
  const color = randomColor();

  // Move cursor
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";

  // Apply new color every move
  cursor.style.background = color;
  cursor.style.boxShadow = `0 0 30px ${color}`;

  // Create particle with same color
  createParticle(e.pageX, e.pageY, color);
});

// Create trailing particles
function createParticle(x, y, color) {
  const particle = document.createElement("div");
  particle.classList.add("particle");
  particle.style.left = x + "px";
  particle.style.top = y + "px";

  // match cursor color
  particle.style.background = color;
  particle.style.boxShadow = `0 0 15px ${color}`;

  trail.appendChild(particle);
  setTimeout(() => particle.remove(), 600);
}

// Click expand animation
document.addEventListener("click", () => {
  cursor.style.animation = "clickExpand 0.3s ease-out";

  setTimeout(() => {
    cursor.style.animation = "";
  }, 300);
});
