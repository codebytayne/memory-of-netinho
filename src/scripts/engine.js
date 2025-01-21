const images = [
  "src/images/img1.png", 
  "src/images/img1.png", 
  "src/images/img2.png", 
  "src/images/img2.png", 
  "src/images/img3.png", 
  "src/images/img3.png", 
  "src/images/img4.png", 
  "src/images/img4.png", 
  "src/images/img5.png", 
  "src/images/img5.png", 
  "src/images/img6.png", 
  "src/images/img6.png", 
  "src/images/img7.png", 
  "src/images/img7.png", 
  "src/images/img8.png", 
  "src/images/img8.png"
];

let openCards = [];
let score = 0;
let timer;
let startTime;
let isGameStarted = false;
const audioPoint = new Audio("./src/audios/ponto.m4a");
const bgAudio = new Audio("./src/audios/trilhasonora.m4a");

bgAudio.loop = true;
bgAudio.volume = 0.4; 

audioPoint.addEventListener('canplaythrough', () => {
  console.log("Áudio de ponto carregado com sucesso.");
}, false);

let shuffledImages = images.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < images.length; i++) {
  let box = document.createElement("div");
  box.className = "item";
  box.innerHTML = `<img src="${shuffledImages[i]}" alt="memory card image">`;
  box.onclick = handleClick;
  document.querySelector(".game").appendChild(box);
}

function handleClick() {
  if (!isGameStarted) {
    bgAudio.play().catch(e => console.error("Erro ao tentar reproduzir trilha sonora: ", e));
    isGameStarted = true;
  }

  if (!timer) {
    startTimer();
  }
  
  if (openCards.length < 2) {
    this.classList.add("boxOpen");
    openCards.push(this);
  }

  if (openCards.length == 2) {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  if (openCards[0].querySelector("img").src === openCards[1].querySelector("img").src) {
      openCards[0].classList.add("boxMatch");
      openCards[1].classList.add("boxMatch");
      score++;
      document.querySelector(".score").textContent = `Pontos: ${score}`;
      audioPoint.play().catch(e => console.error("Erro ao tentar reproduzir áudio de ponto: ", e));
  } else {
      openCards[0].classList.remove("boxOpen");
      openCards[1].classList.remove("boxOpen");
  }

  openCards = [];

  if (document.querySelectorAll(".boxMatch").length === images.length) {
      clearInterval(timer);
      showResult(`Voce venceu em ${document.querySelector(".timer").textContent} com ${score} pontos!`);
  }
}

function startTimer() {
  startTime = new Date();
  timer = setInterval(() => {
    const now = new Date();
    const elapsed = new Date(now - startTime);
    const minutes = String(elapsed.getUTCMinutes()).padStart(2, "0");
    const seconds = String(elapsed.getUTCSeconds()).padStart(2, "0");
    document.querySelector(".timer").textContent = `${minutes}:${seconds}`;
  }, 1000);
}

function showResult(resultText) {
  document.getElementById('resultText').innerText = resultText;
  document.getElementById('resultWindow').classList.remove('hidden');
}

function restartGame() {
  document.getElementById('resultWindow').classList.add('hidden');
  window.location.reload(); // Isso irá reiniciar o jogo
}


if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registrado com sucesso:', registration.scope);
      })
      .catch(error => {
        console.error('Erro ao registrar o Service Worker:', error);
      });
  });
}
