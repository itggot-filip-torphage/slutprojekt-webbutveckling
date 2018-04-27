var clickbait = ['ic_airline_seat_individual_suite_black_24dp_1x.png', 'ic_disc_full_black_24dp_1x.png'];

function randomImage(list){
    alert(clickbait.keys())
    var num = Math.floor(Math.random() * list.length);
    document.getElementById(clickbait.keys()).setAttribute('src', 'img/' + list[num]);
}