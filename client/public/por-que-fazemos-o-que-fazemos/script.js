// Preencha somente com o link oficial/autorizado da oferta deste produto.
// Exemplo: const HOTMART_OFFER_URL = "https://go.hotmart.com/...";
const HOTMART_OFFER_URL = "";

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Abrir menu");
      navigation.classList.remove("is-open");
    });
  });
}

const offerButton = document.querySelector("[data-offer-link]");
const offerStatus = document.querySelector("#offer-status");
const validOffer = /^https:\/\/(?:[a-z0-9-]+\.)*hotmart\.com(?:\.br)?\//i.test(HOTMART_OFFER_URL);

if (offerButton instanceof HTMLAnchorElement && offerStatus) {
  if (validOffer) {
    offerButton.href = HOTMART_OFFER_URL;
    offerButton.target = "_blank";
    offerButton.rel = "noopener noreferrer";
    offerButton.removeAttribute("aria-disabled");
    offerButton.childNodes[0].textContent = "Acessar oferta na Hotmart ";
    offerStatus.textContent = "Você será direcionado à página da oferta na Hotmart para conferir os detalhes.";
  } else {
    offerButton.removeAttribute("href");
    offerButton.setAttribute("aria-disabled", "true");
    offerStatus.textContent = "O link oficial da oferta ainda não foi conectado. O botão será ativado quando o endereço correto for configurado.";
  }
}
