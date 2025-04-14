// Loading Animation
window.addEventListener('load', function() {
  setTimeout(function() {
    document.querySelector('.loader').classList.add('fade-out');
    
    // Optional: Remove loader from DOM after fade-out
    setTimeout(() => {
      document.querySelector('.loader').remove();
    }, 500); // Matches CSS transition time
  }, 1000); // Adjust time as needed (1000ms = 1s)
});
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const output = document.getElementById("formMessage");

  if (!name || !email || !message) {
    output.textContent = "Please fill in all fields.";
    output.style.color = "red";
  } else {
    output.textContent = "Message sent successfully!";
    output.style.color = "green";
    document.getElementById("contactForm").reset();
  }
});

document.getElementById("toggleMode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const modeBtn = document.getElementById("toggleMode");
  modeBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
let stars = [];

function resizeCanvas() {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Create star objects
for (let i = 0; i < 200; i++) {
stars.push({
  x: Math.random() * window.innerWidth,
  y: Math.random() * window.innerHeight,
  radius: Math.random() * 1.5,
  velocity: Math.random() * 0.5
});
}

function animateStars() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = 'white';

for (let i = 0; i < stars.length; i++) {
  let s = stars[i];
  ctx.beginPath();
  ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
  ctx.fill();

  // Move star
  s.y -= s.velocity;
  if (s.y < 0) {
    s.y = window.innerHeight;
    s.x = Math.random() * window.innerWidth;
  }
}



requestAnimationFrame(animateStars);
}

animateStars();