//--Hamburger menu--

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})


document.querySelectorAll(".nav-link").forEach(n=> n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


//--Sticky header----------------------------------

// When the user scrolls the page, execute myFunction
window.onscroll = function() { myFunction()};



// Get the header
var header = document.getElementById("myHeader");

var body = document.getElementById("body");


// Get the offset position of the navbar
var sticky = header.offsetTop;


// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {

    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
      body.classList.add("paddingtop");
    } else {
      header.classList.remove("sticky");
      body.classList.remove("paddingtop");
    }
  }