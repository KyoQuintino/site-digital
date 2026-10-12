# DigitalQuintino — projeto completo

Pacote independente da página DigitalQuintino, com código-fonte e capas locais. As referências `/manus-storage/...` foram convertidas para `/assets/...` para que o projeto funcione fora do WebDev.

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

O pacote inclui as páginas `/` e `/admin`, os componentes, estilos, configurações e as imagens utilizadas no catálogo e no hero para os 27 e-books, incluindo o destaque de “40 Dias com Deus”. `node_modules`, `.git`, logs internos e artefatos temporários foram omitidos para manter o download leve e reproduzível.


## Atualizações desta edição focada em conversão

- Metadados SEO em português, Open Graph, Twitter Card, favicon e dados estruturados básicos `Store`.
- CTA de contato por WhatsApp e formulário de novidades ajustado para abrir uma mensagem preenchida no WhatsApp; o site não afirma armazenar contatos quando não existe backend.
- Seção antes apresentada como depoimentos foi substituída por benefícios de compra/descoberta, evitando publicar avaliações fictícias como se fossem relatos reais.
- Painel de capas continua sendo local ao navegador. **Não é um painel administrativo seguro** e não possui login, autorização ou banco de dados.

## Antes de publicar

1. Revise todos os links de checkout Hotmart no catálogo e confirme que cada link corresponde ao produto correto.
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
