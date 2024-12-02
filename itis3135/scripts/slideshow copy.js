let slideIndex = 1;
const slideNext = document.querySelector(".next");
const slidePrev = document.querySelector(".prev");
const imageSelect = document.querySelectorAll(".demo");

//Keeps track of which slide should be shown.
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("my-slides");
  let dots = document.getElementsByClassName("demo");
 
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//Next/Prev button is clicked
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//Selects slide clicked
function currentSlide(n) {
  showSlides(slideIndex = n);
}

showSlides(slideIndex);

//finds correct image
imageSelect.forEach((img, imgNum) => {
  img.addEventListener("click", () => {
    currentSlide(imgNum + 1);
  });
});

//Needs to be ran after every elements loads. will not work unless it is like this
document.addEventListener("DOMContentLoaded", function() {
  slideNext.addEventListener("click", function() {
    plusSlides(1);
  });
  slidePrev.addEventListener("click", function() {
    plusSlides(-1);
  });
});