
function createStars(numberOfStars) {
    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      document.body.appendChild(star);
    }
}
  
  createStars(180); 
  document.querySelector('.ham').addEventListener('click', function() {
    var dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
  const stars = document.querySelectorAll('.star');
  let totalScrollDistance = 0;
  let lastScrollY = window.scrollY;

  // Initialize stars with random positions and store their initial 'top' value
  stars.forEach(star => {
      const initialTop = Math.random() * window.innerHeight;
      star.style.top = `${initialTop}px`;
      star.dataset.initialTop = initialTop; // Store the initial top position
  });

  const moveStars = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;
      totalScrollDistance += scrollDelta;

      stars.forEach(star => {
          const initialTop = parseFloat(star.dataset.initialTop);
          // Calculate the new position based on the total scroll distance.
          // The '0.1' factor controls the movement speed relative to the scroll.
          const newTop = initialTop + (totalScrollDistance * 0.1);

          star.style.top = `${newTop}px`;
      });

      lastScrollY = currentScrollY; // Update the last scroll position
      requestAnimationFrame(moveStars); // Continue the animation
  };

  // Start the star movement animation
  requestAnimationFrame(moveStars);
});