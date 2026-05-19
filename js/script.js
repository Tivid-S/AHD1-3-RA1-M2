const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const closeBtn = document.getElementById("close-btn");
const submit = document.getElementById("submit-btn");

// Abre/cierra con el botón 
btn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Maneja el envío del formulario
submit.addEventListener("click", (e) => {
  e.preventDefault();
  MensajeEnviado();
});

//  Cierra con el botón 
closeBtn.addEventListener("click", () => {
  menu.style.animation = "izquierdaDerecha 0.3s ease forwards";
  setTimeout(() => {
    menu.classList.remove("active");
    menu.style.animation = "";
  }, 50);
});

// Cierra al hacer click en un enlace
menu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    menu.style.animation = "izquierdaDerecha 0.3s ease forwards";
    setTimeout(() => {
      menu.classList.remove("active");
      menu.style.animation = "";
    }, 300);
  });
});

function MensajeEnviado() {
  alert("¡Mensaje enviado! Gracias por contactarnos.");
}