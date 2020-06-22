// Set the date we're counting down to
var countDownDate = new Date("Jul 05, 2020 23:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var days = ("0" + days).slice(-2)
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var hours = ("0" + hours).slice(-2)
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var minutes = ("0" + minutes).slice(-2);
    var seconds = Math.floor((distance % (1000 * 60 )) / 1000 );
    var seconds = ("0" + seconds).slice(-2)

    // Output the result in an element with id="demo"
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;

    //If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "0";
        document.getElementById("hours").innerHTML = "0";
        document.getElementById("min").innerHTML = "0";
        document.getElementById("sec").innerHTML = "0";
    }
}, 1000);

'use strict'


