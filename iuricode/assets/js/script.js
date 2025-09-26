const abrirMenu = document.getElementById("abrirMenu");
const fecharMenu = document.getElementById("fecharMenu");
const navLinks = document.getElementById("nav-links");

abrirMenu.onclick = () => {
  navLinks.style.width = "250px"; // abre menu
};

fecharMenu.onclick = () => {
  navLinks.style.width = "0"; // fecha menu
};
