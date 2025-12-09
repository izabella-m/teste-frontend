# Teste Frontend — Doity Fork

Este projeto é uma fork do front-end de telas da plataforma  Doity , desenvolvida para u utilizando  HTML, CSS e boas práticas de arquiteturm teste técnico.O objetivo principal do projeto é estruturar telas estáticas com organização limpa, reaproveitamento de estilos e padronização visual entre as páginas.

---

## Estrutura do Projeto

```
teste-frontend/
│
├── pagina.html            # Telas principais
│
├── assets/
│   ├── css/
│   │   ├── arquivos.css    # Arquivos css em comum
│   │   ├── global.css      # Classes utilitárias globais
│   │   ├── pages/
│   │   │   ├── pagina2.css # Arquivos css específico de cada página
│   │   │   ├── pagina3.css
│   │   │   └── pagina4.css
│   │   └── main.css        # Importa todos os CSS acima
│   │
│   ├── js/
│   │   ├── arquivos.js   # Lógica presente em cada página 
│   │   
│   │
│   ├── img/                # Imagens do projeto
│   ├── icons/              # Ícones SVG
│   └── fonts/              # Fontes externas
│
└── README.md
```

---

## Estilização

O arquivo **main.css** centraliza todos os imports:

```css
@import '960.css';
@import 'admin_responsive.css';
@import 'admin_text.css';
@import 'admin_v2.css';
@import 'admin.css';
@import 'bootstrap-tooltip.css';
@import 'croppie.css';
@import 'datepicker.css';
@import 'doitystrap.css';
```

Isso permite que cada HTML importe  **apenas um CSS** , mantendo organização:

```html
<link rel="stylesheet" href="assets/css/main.css">
```

### Estilos globais

Classes reutilizáveis estão definidas em `global.css`.

Exemplos: `.btn`, `.text-center`, `.container`, `.mt-20` etc.

---

## Funcionalidades

* ✔️ Organização de pastas seguindo boas práticas
* ✔️ Ícones e imagens servidos via `assets/`
* ✔️ Import centralizado via `main.css`
* ✔️ Estrutura sem frameworks (somente HTML + CSS + JS puro)
* ✔️ Layouts baseados em referências reais do site **Doity**

---

## 🚀 Como executar o projeto

1. Faça o clone:

```bash
git clone https://github.com/izabella-m/teste-frontend.git
```

2. Entre na pasta:

```bash
cd teste-frontend
```

3. Abra qualquer página no navegador (por exemplo):

```bash
open criar-pesquisa.html
```

Ou use a extensão *Live Server* do VSCode.

---

## Tecnologias Utilizadas

* **HTML5**
* **CSS3**
* **JavaScript**
* Organização modular de estilos
* Padrões de design de UI básicos

---

## Padrões de commit usados

* `feat:` nova funcionalidade
* `fix:` correção de bug
* `style:` formatação, remoção de espaços
* `refactor:` refatoração de código
* `chore:` manutenção geral, remover arquivos inutilizados

---

## Vídeo

Link: https://youtu.be/UIzIX-d0VH8

[Link Aqui](https://youtu.be/UIzIX-d0VH8)
