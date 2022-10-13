const stars = document.getElementById("Stars");
const moon = document.getElementById("Moon");
const mens = document.getElementById("Mens");

window.addEventListener("scroll", ()=>{
    let value = window.scrollY;
    stars.style.left = `${value * 0.25}px`
    moon.style.top = `${value * 0.5}px`
})