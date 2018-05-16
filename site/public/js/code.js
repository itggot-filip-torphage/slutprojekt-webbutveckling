var clickbait = ['ic_airline_seat_individual_suite_black_24dp_1x.png', 'ic_disc_full_black_24dp_1x.png'];

function randomImage(list){
    var num = Math.floor(Math.random() * list.length);
    document.getElementById('clickbait').setAttribute('src', 'img/' + list[num]);
}

// toggleMenu.addEventListener('click',  function(event){
    //     var element = document.querySelector("nav");
    //     element.classList.toggle("toggleMobileNav")
    // })
    
    
const toggleMenu = document.getElementById('toggleMenu')
toggleMenu.addEventListener('click', function(event){    
    var element = document.querySelector("nav");
    if (element.className !== 'togleMobileNav') {
        element.classList.toggle("toggleMobileNav")        
    } else {

    }
})

const toggleMen = document.getElementById('index_container')
toggleMen.addEventListener('click', function(event){    
    var element = document.querySelector("nav");
    var isClickInside = element.contains(event.target);
    if (element.className === 'togleMobileNav') {
        if (!isClickInside) {
            element.classList.toggle("toggleMobileNav")
        }
    }
})
