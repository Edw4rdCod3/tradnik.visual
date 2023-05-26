const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
// Get the "Learn More" button
// Get the "Learn More" button




hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})


document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("load").style.display = "none";

}

var delayInMilliseconds = 1000; //1000 = 1 second

var loader = document.querySelector(".loader")

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disppear");
}







window.addEventListener('scroll', reveal);

function reveal()
{
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++)
  {

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint)
    {
      reveals[i].classList.add('active');
    }
    else
    {
      reveals[i].classList.remove('active');
    }
  }
}


