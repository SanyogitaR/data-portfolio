// Typing animation
const typingTexts = [
  "Data Analyst Professional",
  "Data Scientist Enthusiast", 
  "Python SQL Expert",
  "BI Dashboard Specialist",
  "Data-Driven Insights",
  "End-to-End Analytics",
  "ML Solutions Engineer"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
  const typingElement = document.querySelector('.typing-text');
  const currentText = typingTexts[textIndex];
  
  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }
  
  let typeSpeed = isDeleting ? 50 : 150;
  
  if (!isDeleting && charIndex === currentText.length) {
    typeSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % typingTexts.length;
    typeSpeed = 500;
  }
  
  setTimeout(typeWriter, typeSpeed);
}

// Start typing
document.addEventListener('DOMContentLoaded', function() {
  typeWriter();
  
  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
      document.querySelectorAll(".nav-link").forEach(link => link.classList.remove("active"));
      this.classList.add("active");
    });
  });
});
// PROJECTS ARROWS - WORKING 100%
document.addEventListener('DOMContentLoaded', function() {
  // Projects scroll functionality
  const projList = document.getElementById('projList');
  const projLeft = document.getElementById('projLeft');
  const projRight = document.getElementById('projRight');
  
  let projScroll = 0;
  const projMaxScroll = 1280; // 4 positions * 320px
  
  projLeft.addEventListener('click', function() {
    if (projScroll > 0) {
      projScroll -= 320;
      projList.style.transform = `translateX(-${projScroll}px)`;
      projLeft.disabled = projScroll === 0;
      projRight.disabled = false;
    }
  });
  
  projRight.addEventListener('click', function() {
    if (projScroll < projMaxScroll) {
      projScroll += 320;
      projList.style.transform = `translateX(-${projScroll}px)`;
      projRight.disabled = projScroll === projMaxScroll;
      projLeft.disabled = false;
    }
  });
});

