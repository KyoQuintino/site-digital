# Publicar Digital Quintino na Vercel

## Configuração do projeto
- Repositório privado: `KyoQuintino/site-digital`
- Branch de produção: `main`
- Projeto Vercel: `site-digital`
- URL do projeto: https://site-digital-blue.vercel.app
- Framework: Vite
- Comando de instalação: `npm install --no-audit --no-fund`
- Build: `npm run build`
- Diretório publicado: `dist/public`
- O arquivo `vercel.json` aplica o rewrite de SPA para as rotas do frontend.

## Atualizações futuras
O repositório `main` já está conectado ao projeto Vercel. Um push para essa branch inicia uma nova implantação de produção. A Vercel mantém previews para outras branches.

Para validar antes de enviar uma atualização:

```bash
pnpm install --frozen-lockfile
pnpm check
pnpm build
```

Depois, revise o deployment no painel da Vercel e confira a página inicial, rotas internas, imagens e links da Hotmart.

## Atenção
Este projeto tem uma interface `/admin` que guarda alterações apenas no navegador e não tem autenticação nem banco de dados. Não use esse painel para dados privados nem o considere um painel administrativo seguro.

O build de produção remove os arquivos Manus de depuração usados somente durante o desenvolvimento. Não publique arquivos `.env` ou chaves de integração.
