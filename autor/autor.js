/* =========================
   FUNCIÓN DE SALIDA GLOBAL
========================= */
function exitPage() {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = "index.html";
  }
}

/* =========================
   TECLA ESC (PC)
========================= */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    exitPage();
  }
});

/* =========================
   BOTÓN < (CELULAR / ANDROID)
========================= */
window.addEventListener("popstate", () => {
  exitPage();
});

// Animación de aparición suave
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.2 });

sections.forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = "translateY(40px)";
  sec.style.transition = "all 0.8s ease";
  observer.observe(sec);
});
/*BOTÓN*/
const Btn = document.getElementById("Btn");

if (Btn) {
  Btn.addEventListener("click", () => {
    document.body.classList.add("btn");

    setTimeout(() => {
      window.location.href = "index.html";
    }, 750);
  });
}
