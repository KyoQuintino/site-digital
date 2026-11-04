# Publicar Digital Quintino na Vercel

## Configuração do projeto

- Repositório: `KyoQuintino/site-digital`
- Branch de produção: `main`
- Projeto Vercel: `site-digital`
- URL do projeto: https://site-digital-blue.vercel.app
- Framework: Vite
- Comando de instalação: `pnpm install --frozen-lockfile`
- Build: `npm run build`
- Diretório publicado: `dist/public`
- O arquivo `vercel.json` aplica os rewrites das páginas estáticas e o fallback de SPA.
- Destino escolhido: **Vercel**. O GitHub Pages não está configurado; o site usa caminhos absolutos e rotas de produto, então publicar em um subdiretório exigiria ajustes de base e de roteamento.

## Verificações automáticas

O GitHub Actions executa em pushes de branches, pull requests direcionados a `main` e também pode ser iniciado manualmente. O workflow `.github/workflows/ci.yml` instala as versões travadas do `pnpm`, executa `pnpm check` e `pnpm build`, confirma a saída em `dist/public` e guarda o build como artefato por sete dias.

O projeto já está conectado ao Vercel pelo Git. O Actions verifica o código; a integração nativa do Vercel é responsável por implantar, evitando duplicar deploy ou manter token da Vercel em GitHub Secrets.

## Atualizações futuras

O repositório `main` está conectado ao projeto Vercel. Um push ou merge para `main` inicia uma nova implantação de produção; outras branches geram previews da Vercel. Para revisar sem alterar produção, trabalhe em uma branch e use o Preview associado ao commit.

Para validar antes de enviar uma atualização:

```bash
pnpm install --frozen-lockfile
pnpm check
pnpm build
test -s dist/public/index.html
```

Antes de integrar à `main`, aguarde o workflow CI e revise o Preview da Vercel: página inicial, rotas internas, imagens, busca/filtros, menu em celular e links dos checkouts.

## Atenção

Este projeto tem uma interface `/admin` que guarda alterações apenas no navegador e não tem autenticação nem banco de dados. Não use esse painel para dados privados nem o considere um painel administrativo seguro.

O build de produção remove os arquivos Manus de depuração usados somente durante o desenvolvimento. Não publique arquivos `.env` ou chaves de integração.
