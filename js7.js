const slider = document.querySelector('.gallery-slider');
const prevArrow = document.querySelector('.prev-arrow');
const nextArrow = document.querySelector('.next-arrow');
const pagerItems = document.querySelectorAll('.pager-item');

let currentIndex = 0;

prevArrow.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = 0;
  }
  updateSlider();
});

nextArrow.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex > 7) {
    currentIndex = 7;
  }
  updateSlider();
});

pagerItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    currentIndex = index;
    updateSlider();
  });
});

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  pagerItems.forEach((item, index) => {
    item.classList.toggle('active', index === currentIndex);
  });
}