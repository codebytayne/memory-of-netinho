<h1>Jogo da Memória</h1>

<p>Este é um projeto de um Jogo da Memória desenvolvido em HTML, CSS e JavaScript.</p>
<p> 🔗 <a href="https://codebytayne.github.io/memory-game/">https://codebytayne.github.io/memory-game/</a> </p>

<h2>Como Jogar</h2>
<ol>
  <li>Clique em duas cartas para virá-las.</li>
  <li>Se as cartas combinarem, elas permanecerão viradas.</li>
  <li>Se não combinarem, elas retornarão à posição inicial.</li>
  <li>O objetivo é combinar todas as cartas no menor tempo possível.</li>
</ol>

<h2>Funcionalidades</h2>
<ul>
  <li>Temporizador para contar o tempo de jogo.</li>
  <li>Contador de pontos com base na quantidade de pares combinados.</li>
  <li>Botão de reset para reiniciar o jogo.</li>
</ul>

<h2>Pré-requisitos</h2>
<p>Para rodar o projeto localmente, você precisará ter instalado:</p>
<ul>
  <li>Um navegador web (de preferência Google Chrome, Firefox ou Edge)</li>
  <li>Um servidor HTTP para servir os arquivos (opcional, mas recomendado)</li>
</ul>

<h2>Como Executar</h2>
<ol>
  <li>Clone o repositório:</li>
  <pre><code>git clone https://github.com/seu-usuario/jogo-da-memoria.git</code></pre>
  <li>Navegue até o diretório do projeto:</li>
  <pre><code>cd jogo-da-memoria</code></pre>
  <li>Abra o arquivo <code>index.html</code> em seu navegador ou sirva os arquivos usando um servidor HTTP.</li>
</ol>

<h2>Demonstração</h2>
<p>Aqui está um vídeo demonstrando o jogo em funcionamento:</p>
<video width="640" height="480" controls>
  <source src="./src/demo/game recording.mp4" type="video/mp4">
  Seu navegador não suporta o elemento de vídeo.
</video>

<h2>Estrutura do Projeto</h2>
<pre><code>
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
├── index.html
├── README.md
</code></pre>

