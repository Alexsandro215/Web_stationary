// Abrir modal
document.getElementById("openModalBtn").addEventListener("click", () => {
    document.getElementById("loginModal").style.display = "flex";
  });
  
  // Cerrar modal
  document.getElementById("closeModalBtn").addEventListener("click", () => {
    document.getElementById("loginModal").style.display = "none";
  });
  
  // Cerrar al hacer clic fuera del modal
  window.addEventListener("click", (e) => {
    const modal = document.getElementById("loginModal");
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
  
  // SLIDER
const track = document.getElementById("sliderTrack");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentSlide = 0;

function updateSlider() {
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
  dots.forEach(dot => dot.classList.remove("active"));
  dots[currentSlide].classList.add("active");
}

nextBtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % dots.length;
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + dots.length) % dots.length;
  updateSlider();
});

dots.forEach(dot => {
  dot.addEventListener("click", () => {
    currentSlide = parseInt(dot.dataset.index);
    updateSlider();
  });
});

updateSlider();
