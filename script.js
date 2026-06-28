const bocadillo = document.getElementById("bocadillo")
const menu = document.getElementById("menu");
const navMobil = document.querySelector(".nav-mobil");

bocadillo.addEventListener("click", ()=>{
    bocadillo.classList.toggle("active");
    menu.classList.toggle("active");
    navMobil.classList.toggle("active");
});