document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('derby-carousel-track');
    
    // Clone slides for seamless continuous scrolling
    // We duplicate the content so the CSS animation can scroll through the first set
    // and seamlessly reset to the start when the second set aligns.
    const slides = Array.from(track.children);
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        track.appendChild(clone);
    });

    const nextButton = document.getElementById('derby-next');
    const prevButton = document.getElementById('derby-prev');

    let currentSlideIndex = 0;

    const updateSlidePosition = () => {
        const width = track.getBoundingClientRect().width;
        track.style.transform = 'translateX(-' + (width * currentSlideIndex) + 'px)';
    };

    const moveToNextSlide = () => {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        updateSlidePosition();
    };

    const moveToPrevSlide = () => {
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        updateSlidePosition();
    };

    nextButton.addEventListener('click', () => {
        moveToNextSlide();
        resetAutoPlay();
    });

    prevButton.addEventListener('click', () => {
        moveToPrevSlide();
        resetAutoPlay();
    });

    // Auto play - adjusted rate to 2000ms
    let autoPlayInterval = setInterval(moveToNextSlide, 2000);

    const resetAutoPlay = () => {
        clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(moveToNextSlide, 2000);
    };

    window.addEventListener('resize', updateSlidePosition);
});
