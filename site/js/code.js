var clickbait = ['ic_airline_seat_individual_suite_black_24dp_1x.png', 'ic_disc_full_black_24dp_1x.png'];

function randomImage(list){
    var num = Math.floor(Math.random() * list.length);
    document.getElementById('clickbait').setAttribute('src', 'img/' + list[num]);
}



$('i#toggleMenu').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();

    $('nav').toggleClass('active');

    $(document).one('click', function closeMenu (e){
        if($('nav').has(e.target).length === 0){
            $('nav').removeClass('active');
        } else {
            $(document).one('click', closeMenu);
        }
    });
});