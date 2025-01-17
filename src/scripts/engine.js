const emojis = [
    "🐱",
    "🐱",
    "🦝",
    "🦝",
    "🦊",
    "🦊",
    "🐶",
    "🐶",
    "🐵",
    "🐵",
    "🦁",
    "🦁",
    "🐯",
    "🐯",
    "🐮",
    "🐮"
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
  
  let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));
  
  for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
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
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
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
  
    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
      clearInterval(timer);
      alert(`Você venceu em ${document.querySelector(".timer").textContent} com ${score} pontos!`);
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
  