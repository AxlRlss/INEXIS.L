/* ==== INEXIS — LINK IN BIO INTERACCIONES===== */
document.addEventListener("DOMContentLoaded", () => {
    const universeButtons = document.querySelectorAll(".universe-button");

    /* ==== EVITAR DRAG ACCIDENTAL DE ELEMENTOS ==== */
    universeButtons.forEach(button => {
        button.addEventListener(
            "dragstart", event => { event.preventDefault();
            }
        );
    });

    /* ==== EFECTO DE ENTRADA ==== */
    universeButtons.forEach((button, index) => {
        button.style.opacity = "0";
        button.style.transform = "translateY(10px)";
        setTimeout(() => {
            button.style.transition = "opacity 0.55s ease, transform 0.55s ease";
            button.style.opacity = "1";
            button.style.transform = "translateY(0)";
        }, 100 + (index * 90));
    });
});

