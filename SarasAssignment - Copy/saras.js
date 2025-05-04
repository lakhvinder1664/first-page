// Typing effect
const text = "Aspiring Web & App Developer | BCA Student | SEO Intern";
let index = 0;
function type() {
  document.getElementById("typing").innerText = text.slice(0, index++);
  if (index <= text.length) {
    setTimeout(type, 80);
  }
}
type();

// Back to Top button
const topBtn = document.getElementById("topBtn");
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};
topBtn.onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
//cta-collabe
let currentCTA = 0;
const ctaSlides = document.querySelectorAll(".cta-slide");

function changeCTASlide() {
  ctaSlides.forEach((slide, index) => {
    slide.classList.remove("active");
    if (index === currentCTA) {
      slide.classList.add("active");
    }
  });

  currentCTA = (currentCTA + 1) % ctaSlides.length;
}

setInterval(changeCTASlide, 4000); // change every 4 seconds


// Form validation
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  const name = form.querySelector("input[type='text']").value.trim();
  const email = form.querySelector("input[type='email']").value.trim();
  const message = form.querySelector("textarea").value.trim();

  if (!name || !email || !message) {
    e.preventDefault();
    alert("Please fill out all fields.");
  } else {
    alert("Message sent successfully! (not really, this is a demo 😄)");
  }
});
// Improved CTA slider animation
let currentCTA = 0;
const ctaSlides = document.querySelectorAll(".cta-slide");
const totalSlides = ctaSlides.length;

// Initialize first slide
ctaSlides[0].classList.add("active");

function changeCTASlide() {
    // Remove active class from all slides
    ctaSlides.forEach(slide => {
        slide.classList.remove("active");
    });
    
    // Update current slide index
    currentCTA = (currentCTA + 1) % totalSlides;
    
    // Add active class to current slide
    ctaSlides[currentCTA].classList.add("active");
    
    // Set timeout for next slide change
    setTimeout(changeCTASlide, 3000); // Change every 3 seconds
}

// Start the slider
setTimeout(changeCTASlide, 3000);