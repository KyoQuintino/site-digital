# Plano de integração — A Tríade do Tempo

## Abordagem

Preservar a loja DigitalQuintino e adicionar a página de vendas do e-book como rota React `/triade-do-tempo`. O catálogo existente receberá um cartão para o produto que direciona à nova rota; não alterar a home, o catálogo dos outros títulos nem o painel `/admin` além da inclusão compatível do novo produto.

Reutilizar o conteúdo, a arte e a copy já criados para o e-book. A imagem gerada será copiada para `client/public/assets/`; a copy de cadastro Hotmart ficará em `products/a-triade-do-tempo/hotmart-copy.md`. Implementar a página em `client/src/pages/TriadeDoTempo.tsx` e escopar sua folha de estilo sob `.triade-landing` para não sobrescrever estilos globais da loja. O botão de compra abre o endereço Kiwify informado pelo usuário: `https://pay.kiwify.com.br/geaafqF`.

O `vercel.json` existente já redireciona rotas da aplicação para `index.html`; assim, a nova rota utiliza o roteamento React sem alterar regras de implantação. Atualizar o README com o caminho e a integração.

## Estrutura afetada

- `client/src/App.tsx`: registrar a rota.
- `client/src/pages/TriadeDoTempo.tsx` e `client/src/pages/TriadeDoTempo.css`: conteúdo e estilos isolados da landing page.
- `client/src/lib/catalog.ts`: adicionar um produto ao catálogo existente, com link para a nova rota.
- `client/public/assets/triade-do-tempo-cover.webp`: disponibilizar localmente a imagem gerada para a página e o cartão.
- `products/a-triade-do-tempo/hotmart-copy.md`: disponibilizar título e descrição para cadastro na Hotmart.
- `README.md`: documentar a nova página e o provedor de pagamento.

Não copiar o PDF original nem inserir credenciais no repositório. Reutilizar a direção visual cinematográfica escura e dourada já aprovada para o e-book.