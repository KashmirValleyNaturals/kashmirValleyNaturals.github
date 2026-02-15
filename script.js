/* =========================
   PRELOADER
========================= */
window.addEventListener("load", function () {
  const loader = document.getElementById("preloader");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 800);
  }
});


/* =========================
   MOBILE MENU TOGGLE
========================= */
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  if (menu) {
    menu.classList.toggle("active");
  }
}


/* =========================
   SCROLL REVEAL ANIMATION
========================= */
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});


/* =========================
   STOCK AUTO DECREASE
========================= */
let stock = 7;
const stockElement = document.getElementById("stock-count");

if (stockElement) {
  setInterval(() => {
    if (stock > 3) {
      stock--;
      stockElement.innerText = stock;
    }
  }, 8000);
}


/* =========================
   COUNTDOWN TIMER
========================= */
let time = 3600; // 1 hour
const countdownElement = document.getElementById("countdown");

if (countdownElement) {
  setInterval(() => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;

    countdownElement.innerText = minutes + "m " + seconds + "s";

    if (time > 0) {
      time--;
    }
  }, 1000);
}


/* =========================
   TESTIMONIAL AUTO SLIDER
========================= */
let index = 0;
const slider = document.getElementById("testimonial-slider");

if (slider) {
  const totalSlides = slider.children.length;

  setInterval(() => {
    index = (index + 1) % totalSlides;
    slider.style.transform = "translateX(-" + index * 100 + "%)";
  }, 4000);
}