///////// Contador de Oferta Bomba

// Set the date we're counting down to
var countDownDateOferta = new Date("May 19, 2020 23:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDateOferta - now;

    // Time calculations for days, hours, minutes and seconds
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var hours = ("0" + hours).slice(-2)
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var minutes = ("0" + minutes).slice(-2);
    var seconds = Math.floor((distance % (1000 * 60 )) / 1000 );
    var seconds = ("0" + seconds).slice(-2)

    // Output the result in an element with id="demo"
    document.getElementById("hoursBomb").innerHTML = hours;
    document.getElementById("minBomb").innerHTML = minutes;
    document.getElementById("secBomb").innerHTML = seconds;

    //If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("hoursBomb").innerHTML = "0";
        document.getElementById("minBomb").innerHTML = "0";
        document.getElementById("secBomb").innerHTML = "0";
    }
}, 1000);   
'use strict'