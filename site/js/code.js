var width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

function randomPic() {
    if (width >= 1000) {
        var clickbait = ['gaben_desktop', 'dota2_icon'];
    } else {
        var clickbait = ['gaben_mobile', 'dota2_icon'];
    }
    return clickbait[Math.floor((Math.random() * 1.99))];
}

function toggleNav(){
    var element = document.querySelector("nav");
    element.classList.toggle("active");
    
    var temp = document.querySelector(".temp");
    temp.setAttribute("onclick", "toggleNav()")
    temp.classList.toggle("active");
    temp.style.left = "80%";
}

function toggleFilter(){
    var element = document.querySelector(".filter");
    element.classList.toggle("active");
    
    var temp = document.querySelector(".temp");
    temp.classList.toggle("active");
    temp.setAttribute("onclick", "toggleFilter()")
    temp.style.left = "0%";
}

function toggleText(){
    var names = document.querySelectorAll("main p");
    for (i = 0; i < names.length; i++) {
        names[i].classList.toggle("text_visible");
    }
} 

function toggleBox(id, text){
    var icon = id.childNodes[1];
    if (icon.innerHTML === "check_box_outline_blank") {
        icon.innerHTML = "check_box";
    } else if (icon.innerHTML === "check_box") {
        icon.innerHTML = "check_box_outline_blank";
    }
    if (text === true) {
        toggleText();
    }
}

function toggleTips(n){
    var i;
    var classes = document.getElementsByClassName("tips");
    console.log(classes)
    for (i = 0; i < classes.length; i++) {
        classes[i].style.display = "none"; 
    }
    classes[n-1].style.display = "grid"; 
}

// Slideshow
var slideIndex = 1;
showSlides(slideIndex);

var i = 0;
var mains = document.getElementsByClassName("clickbait");
for (i = 0; i < mains.length; i++) {
    mains[i].src = "img/" + randomPic() + ".png";
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