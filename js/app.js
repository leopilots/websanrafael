//- navegation
// ocultar o mostrar el menu
document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
});
// bloquear el scroll 
document.querySelector(".menu-btn").addEventListener("click", toggleScroll);
function toggleScroll() {
    const body = document.body;
    if (body.style.overflow === "hidden") {
        body.style.overflow = "auto"; 
    } else {
        body.style.overflow = "hidden";
    }
}