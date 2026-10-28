# DigitalQuintino — projeto completo

Pacote da página DigitalQuintino com código-fonte e capas locais. A landing de “O Pior Ano da Sua Vida” mantém a arte principal hospedada no site Manus original; essa dependência está documentada na seção da página.

## Requisitos

- Node.js 18+
- pnpm 9+

## Executar localmente

```bash
pnpm install
pnpm dev
```

Abra o endereço exibido pelo Vite.

## Gerar build

```bash
pnpm check
pnpm build
```

O projeto inclui a página de catálogo, o painel `/admin`, as landings documentadas neste README, componentes, estilos, configurações e recursos visuais para a coleção de 30 e-books. `node_modules`, `.git`, logs internos e artefatos temporários foram omitidos para manter o download leve e reproduzível.

## Atualizações desta edição focada em conversão

- Metadados SEO em português, Open Graph, Twitter Card, favicon e dados estruturados básicos `Store`.
- CTA de contato por WhatsApp e formulário de novidades ajustado para abrir uma mensagem preenchida no WhatsApp; o site não afirma armazenar contatos quando não existe backend.
- Seção antes apresentada como depoimentos foi substituída por benefícios de compra/descoberta, evitando publicar avaliações fictícias como se fossem relatos reais.
- Painel de capas continua sendo local ao navegador. **Não é um painel administrativo seguro** e não possui login, autorização ou banco de dados.

## Antes de publicar

1. Revise todos os links de checkout do catálogo (Hotmart ou Kiwify) e confirme que cada link corresponde ao produto correto.
2. Substitua os dados de exemplo por depoimentos reais, com autorização dos clientes, caso queira exibir avaliações.
3. Configure domínio próprio, URL canônica, imagem social Open Graph e sitemap/robots conforme o domínio final.
4. Para painel administrativo real, implemente autenticação e autorização no servidor, persistência no banco de dados e validação dos arquivos enviados.
5. O formulário abre o WhatsApp com o texto preenchido; o visitante ainda precisa confirmar o envio. Não há CRM, captura automática nem consentimento de newsletter implementados.

## Executar

```bash
pnpm install
pnpm dev
```

Para validar tipos e build, use `pnpm check` e `pnpm build` num ambiente com dependências instaladas.

## Extensão editorial: 40 Dias com Deus

- **Modo:** extensão da página existente; mantém o catálogo, os componentes, as fontes Playfair Display/DM Sans, as cores papel/verde/coral e as rotas atuais. Um novo atalho leva à seção dedicada.
- **Direção visual:** apresentação editorial de baixa variação, com uma área de destaque em verde-floresta e acento dourado inspirado na capa; fotografia de jornada ao amanhecer, transições discretas e informação de compra enxuta.
- **Conteúdo e precisão:** título, jornada de 40 dias, versículos, reflexões, orações, desafios práticos e seis etapas seguem a página oficial. Não foram acrescentados preço, depoimentos, autoria, garantia ou promessas sem confirmação.
- **Conversão:** os botões usam exatamente o link informado pelo produtor/afiliado (`https://go.hotmart.com/T107963872D`). Confira as condições finais na página oficial.
- **Imagens:** a mockup do e-book e a imagem editorial são arquivos locais em `client/public/assets/`; nenhuma imagem depende de hotlink externo.

## Nova página: A Tríade do Tempo

A página de vendas de **A Tríade do Tempo**, de Christian Barbosa, está disponível na rota `/triade-do-tempo`. A nova entrada também aparece no catálogo da DigitalQuintino, sem substituir a home, os demais produtos ou o painel `/admin`.

O botão de compra encaminha para o checkout Kiwify informado pelo produtor. A capa usada na página e no catálogo fica em `client/public/assets/triade-do-tempo-cover.webp`; a copy para cadastro na Hotmart está em `products/a-triade-do-tempo/hotmart-copy.md`. O PDF original não faz parte do repositório.

## Nova página: Os Pré-Socráticos

A landing page cinematográfica de **Os Pré-Socráticos** está disponível na rota `/os-presocraticos` e também foi adicionada ao catálogo principal. A página usa as imagens locais `client/public/assets/ebook-hero.webp` e `client/public/assets/ebook-cover-promo.webp`, para funcionar sem hotlinks externos. A copy para cadastro na Hotmart está em `products/os-presocraticos/hotmart-copy.md`.

O PDF integral não foi incluído neste repositório público porque o arquivo informa copyright e direitos exclusivos da edição de 1996. Ele pode ser adicionado posteriormente mediante confirmação de autorização para distribuição pública.

## Novo e-book: PNL — O segredo das pessoas bem-sucedidas

O e-book de **Paul Lydon** foi adicionado ao catálogo principal com a capa local `client/public/assets/pnl-o-segredo-das-pessoas-bem-sucedidas.png`, os dados editoriais e a copy de cadastro em `products/pnl-o-segredo-das-pessoas-bem-sucedidas/hotmart-copy.md`. O checkout usa o link informado: `https://go.hotmart.com/M108123748P`.

O PDF integral não foi incluído no repositório público; a entrega do arquivo ocorre conforme a configuração da oferta na Hotmart.

## Nova página: 101 Sucos Detox

A landing page cinematográfica de **101 Sucos Detox**, de Danielle Pereira, está disponível em `/101-sucos-detox` como página estática. Ela preserva o catálogo principal e usa arquivos locais em `client/public/101-sucos-detox/`. Os CTAs apontam para o checkout Kiwify informado: `https://pay.kiwify.com.br/p7Zu3B7`.

## Nova página: O Pior Ano da Sua Vida

A landing page está disponível na rota `/o-pior-ano-da-sua-vida` e também foi adicionada ao catálogo principal, sem substituir a home, os demais produtos ou o painel `/admin`. Os CTAs seguem para o checkout Kiwify informado: `https://pay.kiwify.com.br/ILln18s`.

A página usa a arte já hospedada no site Manus original; por isso, a imagem depende dessa URL pública. A copy de cadastro Hotmart fica em `products/o-pior-ano-da-sua-vida/hotmart-copy.md`. O PDF integral não foi adicionado ao repositório público. A seção de opiniões permanece reservada a depoimentos reais e autorizados.


## Nova página: Limite Zero

A landing page de **Limite Zero**, de Joe Vitale e Ihaleakala Hew Len, está disponível em `/limite-zero/` e foi adicionada ao catálogo principal da vitrine. A capa original em PNG e a versão otimizada em WebP ficam em `client/public/assets/`; os arquivos da landing ficam em `client/public/limite-zero/`. Os CTAs apontam para o checkout Kiwify informado: `https://pay.kiwify.com.br/oIqQUxE`. A copy de cadastro para Hotmart está em `products/limite-zero/hotmart-copy.md`. O PDF integral do livro não foi incluído neste repositório público.

## Nova página: Por Que Fazemos o Que Fazemos?

A landing independente de **Por Que Fazemos o Que Fazemos?**, de Mario Sergio Cortella, está em `/por-que-fazemos-o-que-fazemos/` e também entrou no catálogo. A página usa WebP otimizados em `client/public/assets/`; os PNG originais ficam em `products/por-que-fazemos-o-que-fazemos/`. Contém metadados sociais e espaços reservados para depoimentos autênticos e selo decorativo. A copy sugerida para cadastro está em `products/por-que-fazemos-o-que-fazemos/hotmart-copy.md`. O botão da Hotmart permanece desativado até ser configurado o link oficial/autorizado da oferta; a arte é conceitual, não reproduz a capa editorial e não representa endosso do autor ou da editora.


## Nova página: Liderança com Propósitos

A landing de **Liderança com Propósitos**, de Rick Warren, está disponível em `/lideranca-com-propositos/` e foi incluída no catálogo da vitrine. A página usa imagens WebP locais em `client/public/assets/`, com a capa e a arte promocional final. O checkout informado é `https://pay.hotmart.com/J108122629V`; pagamento, preço e condições são tratados na Hotmart. A copy de cadastro está em `products/lideranca-com-propositos/hotmart-copy.md`. O PDF integral não foi incluído neste repositório público; os depoimentos continuam como espaços reservados e o selo é editorial, sem alegação de garantia ou certificação.


## Nova página: Viver em Paz para Morrer em Paz

A landing de **Viver em Paz para Morrer em Paz**, de Mario Sergio Cortella, fica em `/viver-em-paz-para-morrer-em-paz/` e está conectada ao card já existente no catálogo. O CTA principal leva ao checkout informado: `https://pay.hotmart.com/C108118040T`. A página usa as artes promocionais locais em WebP (`client/public/assets/viver-em-paz-capa-promocional-lite.webp` e `client/public/assets/viver-em-paz-banner-divulgacao-lite.webp`); as regras de rota estão em `vercel.json`.

A copy para cadastrar na Hotmart está em `products/viver-em-paz-para-morrer-em-paz/hotmart-copy.md`. O PDF integral não foi incluído no repositório público. A seção de depoimentos mantém espaços reservados para avaliações reais autorizadas, e o selo da página é editorial, sem alegar certificação ou garantia.
