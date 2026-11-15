# Portfólio Pessoal

**Aluno:** Guilherme

## Descrição do portfólio
Site de portfólio pessoal criado para apresentar quem sou, as tecnologias que estudo e os projetos que fiz durante o curso técnico. O site tem menu de navegação, carousel de destaque e as seções Perfil, Habilidades, Projetos e Contato, além do rodapé.

## Tecnologias utilizadas
- HTML5
- CSS3
- Bootstrap 5.3
- JavaScript
- Devicon (ícones das tecnologias)
- Rust (um dos projetos exibidos)
- Git e GitHub Pages

## Link do site publicado
https://sunguizinhodev.github.io/portfolio/

## Como o projeto funciona
- O **menu** (navbar do Bootstrap) fica fixo no topo e leva para cada seção por links internos (`#perfil`, `#habilidades`, `#projetos`, `#contato`). No celular ele vira um botão.
- O **carousel** é a abertura do site, com 3 slides, textos e botões que levam para as seções.
- A seção **Perfil** tem a apresentação, cards com informações e as tecnologias que uso.
- A seção **Habilidades** mostra o meu nível em cada tecnologia com barras de progresso.
- A seção **Projetos** usa o grid e os cards do Bootstrap para mostrar as atividades que desenvolvi.
- A seção **Contato** tem botões para e-mail, GitHub e LinkedIn.
- O site é responsivo, ou seja, se adapta a celular, tablet e computador.

## Recurso novo adicionado
Além do que foi feito em aula, adicionei:
1. Uma nova seção de **Habilidades** com barras de progresso que enchem sozinhas quando a seção aparece na tela.
2. **Animação no carousel**: o texto de cada slide aparece subindo.
3. **Efeito hover** nos cards de projetos (o card sobe e ganha sombra) e nos botões.

## Como o recurso foi implementado
**Barras de habilidades (HTML + CSS + JavaScript):**
- No HTML usei a barra de progresso do Bootstrap (`progress` e `progress-bar`) e guardei o valor de cada uma no atributo `data-valor`.
- No CSS a barra começa com `width: 0` e tem `transition: width 1.5s ease`, para a mudança de largura ser lenta.
- No JavaScript (`script.js`) usei o `IntersectionObserver`, que avisa quando a barra aparece na tela. Nesse momento o código muda o `style.width` para o valor do `data-valor` e a transição do CSS faz a animação.

**Animação do carousel (CSS):**
- Criei a animação `@keyframes subir`, que muda a opacidade de 0 para 1 e o deslocamento do texto. Ela é aplicada em `.carousel-item.active .carousel-caption`, então toda vez que um slide fica ativo o texto aparece com o efeito.

**Hover dos cards (CSS):**
- A classe `.projeto` tem `transition` e, no `:hover`, usei `transform: translateY(-10px)` e `box-shadow` para o card subir com sombra.

## Estrutura de arquivos
```
index.html
style.css
script.js
README.md
```
