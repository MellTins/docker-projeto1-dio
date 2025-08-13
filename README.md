# Site estático no Apache com Docker Compose

Este é um projeto modelo para servir uma aplicação **HTML + CSS + JS** usando o **Apache httpd** dentro de um container, orquestrado com **Docker Compose**.

## Requisitos
- Docker Desktop (Windows/Mac) ou Docker Engine (Linux)
- Compose V2 (já vem no Docker Desktop). Verifique com:
  ```bash
  docker --version
  docker compose version
  ```

## Estrutura
```
docker-apache-static-site/
├─ docker-compose.yml
├─ public/
│  ├─ index.html
│  ├─ style.css
│  ├─ app.js
│  └─ assets/
```

## Subir o projeto
```bash
# na pasta do projeto
docker compose up -d
# pare e remova quando quiser
docker compose down
```

Abra: http://localhost:8080

Alterações feitas dentro de `public/` aparecem ao recarregar a página (o volume é montado com bind mount).

### Se a porta 8080 estiver ocupada
Edite `docker-compose.yml` e troque `8080:80` por `8081:80` (ou outra porta livre).

## Comandos úteis
```bash
# ver logs
docker compose logs -f web

# reiniciar o serviço
docker compose restart web

# ver containers em execução
docker ps
```

## Publicar no GitHub (passo a passo)
```bash
# 1) dentro da pasta do projeto
git init

# 2) crie um commit inicial
git add .
git commit -m "feat: projeto Docker + Apache + site estático"

# 3) defina o branch principal como 'main' (opcional)
git branch -M main

# 4) crie o repositório no GitHub e copie a URL SSH/HTTPS, então:
git remote add origin <URL_DO_SEU_REPO>
git push -u origin main
```

## Ir além (opcional)
- **Estilize mais sua página** (componentes, animações, responsividade, acessibilidade).
- **SPA/Frameworks**: é possível servir o build estático de React/Vue/Svelte (pasta `dist`) no mesmo `public/`.
- **PHP**: troque a imagem por `php:8.2-apache` se quiser rodar `.php`.
- **Reescritas/roteamento**: para SPAs, habilite `mod_rewrite` e um `.htaccess` (exige configuração extra).

Bom estudo! 🎉
