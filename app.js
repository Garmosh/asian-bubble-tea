// Function to detect when elements are visible in the viewport
function handleScrollAnimation() {
  const elements = document.querySelectorAll('.fade-in');
  
  elements.forEach(el => {
    const position = el.getBoundingClientRect();
    
    if (position.top < window.innerHeight && position.bottom > 0) {
      el.classList.add('visible');
    }
  });
}

// Attach the scroll event listener
window.addEventListener('scroll', handleScrollAnimation);

// Trigger the animation initially in case elements are already visible
handleScrollAnimation();
