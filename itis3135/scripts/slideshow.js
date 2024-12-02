let slideIndex = 1;
const imageSelect = document.querySelectorAll(".demo");

//Keeps track of which slide should be shown.
function showSlides(n) {
  let i;
  let img = document.getElementsByClassName("selected-img");
  let showHide = document.getElementsByClassName("demo");
 
  if (n > img.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = img.length;
  }
  for (i = 0; i < img.length; i++) {
    img[i].style.display = "none";
  }
  for (i = 0; i < showHide.length; i++) {
    showHide[i].className = showHide[i].className.replace(" active", "");
  }
  img[slideIndex-1].style.display = "block";
  showHide[slideIndex-1].className += " active";
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