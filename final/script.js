let button = document.getElementById("to-top-button");
window.onscroll = function() {scrollFunction()};
let navbar_bg = document.getElementById("nav-background");
let navbar = document.getElementById("nav-container");

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    button.style.display = "block";
    navbar.style.height = "60px";
    navbar_bg.style.height = "60px";
    navbar.style.transition = "0.5s ease-out";
    navbar_bg.style.transition = "0.5s ease-out";
  } else {
    button.style.display = "none";
    navbar.style.height = "80px";
    navbar_bg.style.height = "80px";
    navbar.style.transition = "0.5s ease-out";
    navbar_bg.style.transition = "0.5s ease-out";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}