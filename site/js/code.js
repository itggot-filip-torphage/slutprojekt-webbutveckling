var clickbait = ['ic_airline_seat_individual_suite_black_24dp_1x.png', 'ic_disc_full_black_24dp_1x.png'];

function randomImage(list){
    var num = Math.floor(Math.random() * list.length);
    document.getElementById('clickbait').setAttribute('src', 'img/' + list[num]);
}

function toggleMobileMenu() {
    var element = document.querySelector("nav")
    element.classList.toggle("toggleMobileNav")
}