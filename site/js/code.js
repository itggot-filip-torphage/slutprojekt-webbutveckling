
function randomPic() {
    var clickbait = ['dota2_icon', 'dota2_icon'];
    return clickbait[Math.floor((Math.random() * 1.99))];
}

document.getElementById("clickbait").src = "img/" + randomPic() + ".png";

function toggleNav(){
    var element = document.querySelector("nav");
    element.classList.toggle("nav_active");

    var temp = document.querySelector(".temp");
    temp.classList.toggle("active");
}

// Slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n)
}

function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("main_slides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "grid"; 
    dots[slideIndex-1].className += " active";
  }