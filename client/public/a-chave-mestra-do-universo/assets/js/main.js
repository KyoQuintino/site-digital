(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#primary-nav');

  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!open));
      menuButton.setAttribute('aria-label', open ? 'Abrir navegação' : 'Fechar navegação');
      navigation.classList.toggle('is-open', !open);
    });

    navigation.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Abrir navegação');
        navigation.classList.remove('is-open');
      });
    });
  }

  const status = document.querySelector('#checkout-message');
  document.querySelectorAll('[data-checkout]').forEach((button) => {
    button.addEventListener('click', () => {
      const platform = button.dataset.checkout;
      const url = window.CHECKOUT_URLS?.[platform]?.trim();
      const platformName = platform === 'hotmart' ? 'Hotmart' : 'Kiwify';

      if (!url) {
        if (status) {
          status.textContent = `O link oficial da oferta ${platformName} ainda não foi conectado.`;
        }
        return;
      }

      try {
        const checkout = new URL(url);
        if (!['https:', 'http:'].includes(checkout.protocol)) throw new Error('Protocolo inválido');
        window.location.assign(checkout.href);
      } catch {
        if (status) status.textContent = `O URL da oferta ${platformName} precisa ser revisado antes de usar.`;
      }
    });
  });
})();
