if(window.screen.width > 768){
const body = document.body,
scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0],
height = scrollWrap.getBoundingClientRect().height - 1,
speed = 0.04;

var offset = 0;

body.style.height = Math.floor(height - 5000) + "px";

function smoothScroll() {
offset += (window.pageYOffset - offset) * speed;

var scroll = "translateY(-" + offset + "px) translateZ(0)";
scrollWrap.style.transform = scroll;

callScroll = requestAnimationFrame(smoothScroll);
}

smoothScroll();
}