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


document.querySelector('.ham').addEventListener('click', function() {
    var dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.classList.toggle('active');
});

const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel_button_right');
const prevButton = document.querySelector('.carousel_button_left');
const dotsNav = document.querySelector('.carousel_nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) =>{
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current_slide');
    targetSlide.classList.add('current_slide');
}

const updateDots = (currentDot, targetDot) =>{
    currentDot.classList.remove('current_slide');
    target.classList.add('current_slide')
}


prevButton.addEventListener('click', e=>{
    const currentSlide = track.querySelector('.current_slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current_slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide)


    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot)
    hideShowArrows(slides, prevButton, nextButton, prevIndex);

});

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current_slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current_slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide)

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot)
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
});

dotsNav.addEventListener('~', e => {
    const targetDot = e.target.closest('button');

    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];
    
    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot)
    hideShowArrows(slides, prevButton, nextButton, targetIndex);
    
})

function updateActiveDot(newActiveDot) {
    document.querySelectorAll('.carousel_indicator').forEach(dot => {
        dot.classList.remove('current_slide', 'animate-indicator');
    });
    newActiveDot.classList.add('current_slide', 'animate-indicator');
}


let movingForward = true; 

const autoAdvance = () => {
    const currentSlide = document.querySelector('.current_slide');
    const nextSlide = currentSlide.nextElementSibling || slides[0]; 
    const currentDot = document.querySelector('.carousel_indicator.current_slide');
    const nextDot = currentDot.nextElementSibling || dots[0]; 

    const nextIndex = Array.from(slides).findIndex(slide => slide === nextSlide);

    moveToSlide(track, currentSlide, nextSlide); 
    updateActiveDot(nextDot); 
    hideShowArrows(slides, prevButton, nextButton, nextIndex); 
};

let autoAdvanceInterval = setInterval(autoAdvance, 3500); 

document.querySelectorAll('.carousel_indicator').forEach(indicator => {
    indicator.addEventListener('~', function() {
        updateActiveDot(this); 

        clearInterval(autoAdvanceInterval); 
        autoAdvanceInterval = setInterval(autoAdvance, 3500); 
    });
});


