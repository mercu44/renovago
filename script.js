const bocadillo = document.getElementById("bocadillo")
const menu = document.getElementById("menu");
const navMobil = document.querySelector(".nav-mobil");

bocadillo.addEventListener("click", ()=>{
    bocadillo.classList.toggle("active");
    menu.classList.toggle("active");
    navMobil.classList.toggle("active");
});


emailjs.init("6ejWXDpTYItMERqKq");

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.sendForm(
        "service_c18oxe7",
        "template_rr4o3wp",
        this
    )
    .then(() => {

        alert("Solicitud enviada correctamente.");

        formulario.reset();

    })
    .catch(() => {
        alert("Ha ocurrido un error.");

    });

});