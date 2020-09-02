var dest = new Date("oct 22, 2020 18:30:00").getTime();

var x = setInterval(function() {

var now = new Date().getTime();

var diff = dest - now;

var days = Math.floor(diff / (1000* 60*60*24));
// console.log(days);
var hours = Math.floor((diff % (1000* 60 * 60 * 24)) / (1000 * 60 * 60));
// console.log(hours);
var minutes = Math.floor((diff % (1000* 60 * 60)) / (1000 * 60));
// console.log(minutes);
var seconds = Math.floor((diff % (1000* 60)) / 1000);
// console.log(seconds);

// document.getElementById("counter").innerHTML = days + " DNI " + hours + " GODZIN " + minutes + " MINUT " + seconds + " SEKUND"
document.querySelector(".days").innerHTML = days + " DNI";
document.querySelector(".days").style.marginRight = '40px';

document.querySelector(".hours").innerHTML = hours + " GODZIN";
document.querySelector(".hours").style.marginRight = '40px';

document.querySelector(".minutes").innerHTML = minutes + " MINUT";
document.querySelector(".minutes").style.marginRight = '40px';

document.querySelector(".seconds").innerHTML = seconds + " SEKUND";
document.querySelector(".seconds").style.marginRight = '40px';
}, 1000) ;