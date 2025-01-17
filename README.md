# Jogo da Memória

Este é um projeto de um Jogo da Memória desenvolvido em HTML, CSS e JavaScript.

## Como Jogar

1. Clique em duas cartas para virá-las.
2. Se as cartas combinarem, elas permanecerão viradas.
3. Se não combinarem, elas retornarão à posição inicial.
4. O objetivo é combinar todas as cartas no menor tempo possível.

## Funcionalidades

- Temporizador para contar o tempo de jogo.
- Contador de pontos com base na quantidade de pares combinados.
- Botão de reset para reiniciar o jogo.

## Pré-requisitos

Para rodar o projeto localmente, você precisará ter instalado:

- Um navegador web (de preferência Google Chrome, Firefox ou Edge)
- Um servidor HTTP para servir os arquivos (opcional, mas recomendado)

## Como Executar

1. Clone o repositório:
    ```sh
    git clone https://github.com/seu-usuario/jogo-da-memoria.git
    ```

2. Navegue até o diretório do projeto:
    ```sh
    cd jogo-da-memoria
    ```

3. Abra o arquivo `index.html` em seu navegador ou sirva os arquivos usando um servidor HTTP.

## Demonstração

Aqui está um vídeo demonstrando o jogo em funcionamento:

<video width="640" height="480" controls>
  <source src="./src/demo/game%20recording.mp4" type="video/mp4">
  Seu navegador não suporta o elemento de vídeo.
</video>

## Estrutura do Projeto

```plaintext
jogo-da-memoria/
├── .vscode/
│   └── settings.json
├── src/
│   ├── audios/
│   │   ├── ponto.m4a
│   │   └── trilhasonora.m4a
│   ├── demo/
│   │   └── game recording.mp4
│   ├── fontes/
│   │   ├── tittlefont.ttf
│   │   └── typppfont.ttf
│   ├── images/
│   │   └── favicon-32x32.png
│   ├── scripts/
│   │   └── engine.js
│   └── styles/
│       ├── main.css
│       └── reset.css
├── estrutura.txt
├── index.html
├── README.md
