// Loading Animation
window.addEventListener('load', function() {
  setTimeout(function() {
    document.querySelector('.loader').classList.add('fade-out');
    
    // Remove loader from DOM after fade-out
    setTimeout(() => {
      document.querySelector('.loader').remove();
    }, 500);
  }, 1000);
});

// Contact Form Handling
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const output = document.getElementById("formMessage");

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!name || !email || !message) {
    output.textContent = "Please fill in all fields.";
    output.style.color = "red";
  } else if (!emailRegex.test(email)) {
    output.textContent = "Please enter a valid email address.";
    output.style.color = "red";
  } else {
    output.textContent = "Message sent successfully!";
    output.style.color = "green";
    document.getElementById("contactForm").reset();
    
    // Clear success message after 3 seconds
    setTimeout(() => {
      output.textContent = "";
    }, 3000);
  }
});

// Dark Mode Toggle
document.getElementById("toggleMode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const modeBtn = document.getElementById("toggleMode");
  modeBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
  
  // Save preference to localStorage
  localStorage.setItem('darkMode', document.body.classList.contains("dark-mode"));
});

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add("dark-mode");
  document.getElementById("toggleMode").textContent = "☀️";
}

// Starfield Animation
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function initStars() {
  stars = [];
  for (let i = 0; i < 100; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      velocity: Math.random() * 0.5
    });
  }
}

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';

  for (let i = 0; i < stars.length; i++) {
    let s = stars[i];
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
    ctx.fill();

    // Move star
    s.y -= s.velocity;
    if (s.y < 0) {
      s.y = canvas.height;
      s.x = Math.random() * canvas.width;
    }
  }

  requestAnimationFrame(animateStars);
}

// Initialize
window.addEventListener('load', () => {
  resizeCanvas();
  initStars();
  animateStars();
});

window.addEventListener('resize', () => {
  resizeCanvas();
  initStars();
});

// Simple animation for progress bars
document.querySelectorAll('.progress-bar span').forEach(bar => {
  const width = bar.style.width;
  bar.style.width = '0';
  setTimeout(() => {
    bar.style.width = width;
    bar.style.transition = 'width 1.5s ease';
  }, 500);
});

// Project card hover effects
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-5px)';
    card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
  });
});

