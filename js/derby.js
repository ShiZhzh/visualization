document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('derby-carousel-track');
    
    // 克隆幻灯片以实现无缝连续滚动
    // 我们复制内容，以便CSS动画可以滚动通过第一组
    // 并在第二组对齐时无缝重置到开始。
    const slides = Array.from(track.children);
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        track.appendChild(clone);
    });

    const nextButton = document.getElementById('derby-next');
    const prevButton = document.getElementById('derby-prev');

    let currentSlideIndex = 0;

    // 更新幻灯片位置
    const updateSlidePosition = () => {
        const width = track.getBoundingClientRect().width;
        // 注意：这里的逻辑假设 width 是单个幻灯片的宽度，或者容器宽度配合CSS布局
        track.style.transform = 'translateX(-' + (width * currentSlideIndex) + 'px)';
    };

    // 切换到下一张
    const moveToNextSlide = () => {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        updateSlidePosition();
    };

    // 切换到上一张
    const moveToPrevSlide = () => {
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        updateSlidePosition();
    };

    // 绑定按钮事件
    nextButton.addEventListener('click', () => {
        moveToNextSlide();
        resetAutoPlay();
    });

    prevButton.addEventListener('click', () => {
        moveToPrevSlide();
        resetAutoPlay();
    });

    // 自动播放 - 间隔调整为2000ms
    let autoPlayInterval = setInterval(moveToNextSlide, 2000);

    // 重置自动播放计时器 (用户交互后)
    const resetAutoPlay = () => {
        clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(moveToNextSlide, 2000);
    };

    window.addEventListener('resize', updateSlidePosition);
});
