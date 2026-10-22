(() => {
  // Link oficial do checkout fornecido pelo responsável pela oferta.
  const HOTMART_CHECKOUT_URL = "https://pay.hotmart.com/U108118072R";

  const menuButton = document.querySelector(".menu-toggle");
  const menu = document.querySelector("#menu-principal");

  if (menuButton && menu) {
    menuButton.addEventListener("click", () => {
      const expanded = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!expanded));
      menuButton.setAttribute("aria-label", expanded ? "Abrir menu" : "Fechar menu");
      menu.classList.toggle("is-open", !expanded);
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Abrir menu");
        menu.classList.remove("is-open");
      });
    });
  }

  const year = document.querySelector("#ano-atual");
  if (year) year.textContent = String(new Date().getFullYear());

  const checkoutNote = document.querySelector("#checkout-note");
  document.querySelectorAll("[data-hotmart-cta]").forEach((cta) => {
    if (/^https:\/\//i.test(HOTMART_CHECKOUT_URL)) {
      cta.href = HOTMART_CHECKOUT_URL;
      cta.target = "_blank";
      cta.rel = "noopener noreferrer";
      if (checkoutNote) checkoutNote.textContent = "Você será direcionado à página oficial da oferta na Hotmart.";
      return;
    }

    cta.addEventListener("click", (event) => {
      event.preventDefault();
      if (checkoutNote) {
        checkoutNote.textContent = "O checkout da Hotmart ainda não foi conectado. O responsável pela oferta deve inserir o link oficial em HOTMART_CHECKOUT_URL, no arquivo script.js.";
        checkoutNote.focus?.();
      }
    });
  });
})();
