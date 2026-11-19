document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector("#menu-toggle");
  const navLinks = document.querySelector("#nav-links");
  const currentYear = document.querySelector("#current-year");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Fechar menu" : "Abrir menu"
      );
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
      });
    });
  }

  if (currentYear) currentYear.textContent = new Date().getFullYear();
});