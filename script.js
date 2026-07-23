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

const imagenes = document.getElementById("imagenes");
let indice = 0;
const total = imagenes.children.length;

function mover(direccion) {
    indice += direccion;

    if (indice < 0) {
        indice = total - 1;
    }

    if (indice >= total) {
        indice = 0;
    }

    const ancho = document.querySelector(".ventana").offsetWidth;

    imagenes.style.transform = `translateX(-${indice * ancho}px)`;
}
const ventana = document.querySelector(".ventana");

let inicioX = 0;
let finX = 0;

ventana.addEventListener("touchstart", (e) => {
    inicioX = e.touches[0].clientX;
});

ventana.addEventListener("touchend", (e) => {
    finX = e.changedTouches[0].clientX;

    if (inicioX - finX > 50) {
        mover(1); // izquierda
    }

    if (finX - inicioX > 50) {
        mover(-1); // derecha
    }
});