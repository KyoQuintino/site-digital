# Pacote-fonte — Viver em Paz para Morrer em Paz

Este diretório reúne o código e os materiais de criação da landing page promocional do e-book.

## Conteúdo

- `site/index.html`, `site/style.css` e `site/script.js`: estrutura, estilos e interações da página.
- `site/assets/viver-em-paz-capa.png` e `site/assets/viver-em-paz-divulgacao.png`: artes promocionais originais em PNG.
- `site/manus-routes.json` e `site/favicon.svg`: manifesto de rota e ícone.
- `hotmart-copy.md`: título e descrição para cadastro da oferta.
- `TODO.md` e `app.config.ts`: registro das entregas e metadado de marca do projeto.

Os caminhos da página usam arquivos locais deste pacote. O CTA está atualizado para `https://pay.hotmart.com/C108118040T`.

## Pré-visualização local

A partir deste diretório, execute:

```bash
python3 -m http.server 8000 --directory site
```

Depois abra `http://localhost:8000`.

## Arquivo do e-book

Este repositório é público. O PDF integral do e-book foi intencionalmente excluído para não disponibilizar publicamente o produto digital; o acesso ao arquivo deve seguir as condições da oferta oficial na Hotmart.
