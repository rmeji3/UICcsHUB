
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

// Create the overlay element and append it to the body
const overlay = document.createElement('div');
overlay.className = 'blur-overlay';
document.body.appendChild(overlay);

// Add event listeners to the hover target
const hoverTarget = document.querySelector('.progress-outer');
hoverTarget.addEventListener('mouseenter', () => overlay.style.display = 'block');
hoverTarget.addEventListener('mouseleave', () => overlay.style.display = 'none');

const hoverTarget2 = document.querySelector('.profile-outer');
hoverTarget2.addEventListener('mouseenter', () => overlay.style.display = 'block');
hoverTarget2.addEventListener('mouseleave', () => overlay.style.display = 'none');

const hoverTarget3 = document.querySelector('.socials-outer');
hoverTarget3.addEventListener('mouseenter', () => overlay.style.display = 'block');
hoverTarget3.addEventListener('mouseleave', () => overlay.style.display = 'none');
