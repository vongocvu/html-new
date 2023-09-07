const slider_product = document.querySelector(".also-add");
const prev = document.getElementById("prev-slider");
const next = document.getElementById("next-slider");
let currentIndex = 0;



next.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >  slider_product.children.length - 2) {
        currentIndex = slider_product.children.length - 2;
      }

    updateSlider(currentIndex);
  });
  
  prev.addEventListener('click', () => {
    currentIndex-- ;
    if (currentIndex < 0 ) {
      currentIndex = 0;
        
      }
   
    updateSlider(currentIndex);
  });
  function updateSlider() {
    let sliders = document.querySelectorAll(".sliders");
    const translateX = -currentIndex * sliders[0].offsetWidth;
    slider_product.style.transform = `translateX(${translateX}px)`;
  }
 
 