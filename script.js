

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

readFile("./nyt.txt")

function readFile(filename) {
    fetch(filename).then(function(response) {
        return response;
    }).then(function(data){
        return data.text();
    }).then(function(fileContents) {
        document.getElementById("contents").innerHTML = fileContents;
    }).catch(function(err) {
        console.log('Fetch problem show: ' + err.message);
    });
}