
function randomIcon() {
    var clickbait = ['menu', 'home'];
    return clickbait[Math.floor((Math.random * 1.99))];
}

document.getElementById("clickbait").innerHTML = randomIcon();

function toggleNav(){
    var element = document.querySelector("nav");
    element.classList.toggle("nav_active");

    var temp = document.querySelector(".temp");
    temp.classList.toggle("active");
}