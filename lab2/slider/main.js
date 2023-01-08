const sliderItems = document.querySelectorAll(".slide");
const prevButton  = document.getElementById("button-prev");
const nextButton  = document.getElementById("button-next");

let curSlideIndex = localStorage.getItem('index') ?? 0;
let timer = null;


const nextSlide = () => {
    curSlideIndex = (curSlideIndex + 1) % sliderItems.length;
    localStorage.setItem("index", curSlideIndex);
    clearInterval(timer);
    renderSlider(curSlideIndex);
}

const prevSlide = () => {
    if (curSlideIndex === 0) {
        curSlideIndex = sliderItems.length - 1;
    }
    else {
        curSlideIndex--;
    }
    localStorage.setItem("index", curSlideIndex);
    clearInterval(timer);
    renderSlider(curSlideIndex);
}

function renderSlider(index) {
    for(let slide of sliderItems) {
        slide.classList.remove('active');
    }

    sliderItems[index].classList.add('active');
    timer = setInterval(nextSlide, 5000);
    
}

renderSlider(curSlideIndex);


prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide)
document.addEventListener('keydown', (event) => {
    if(event.code === 'ArrowRight' || event.code === 'Space') {
        nextSlide();
    }
    else if (event.code === 'ArrowLeft') {
        prevSlide();
    }
});