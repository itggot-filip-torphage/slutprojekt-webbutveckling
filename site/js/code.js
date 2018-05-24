
function randomPic() {
    var clickbait = ['dota2_icon', 'dota2_icon'];
    return clickbait[Math.floor((Math.random() * 1.99))];
}

function toggleNav(){
    var element = document.querySelector("nav");
    element.classList.toggle("nav_active");
    
    var temp = document.querySelector(".temp");
    temp.classList.toggle("active");
}

// Slideshow
var slideIndex = 1;
showSlides(slideIndex);

var i = 0;
var mains = document.getElementsByClassName("clickbait");
for (i = 0; i < mains.length; i++) {
    mains[i].src = "img/" + randomPic() + ".png";
    console.log(mains[i])
}

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
        dots[i].className = dots[i].className.replace(" dot_active", "");
    }
    slides[slideIndex-1].style.display = "grid"; 
    dots[slideIndex-1].className += " dot_active";
  }