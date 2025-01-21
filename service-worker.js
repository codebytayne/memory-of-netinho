const CACHE_NAME = 'memory-of-netinho-v1';
const urlsToCache = [
  '/', // Página inicial
  '/index.html', // HTML principal
  '/src/styles/reset.css', // CSS
  '/src/styles/main.css',
  '/src/scripts/engine.js', // Script principal
  '/src/images/img1.png', // Imagens do jogo
  '/src/images/img2.png',
  '/src/images/img3.png',
  '/src/images/img4.png',
  '/src/images/img5.png',
  '/src/images/img6.png',
  '/src/images/img7.png',
  '/src/images/img8.png',
  '/src/audios/ponto.m4a', // Áudios
  '/src/audios/trilhasonora.m4a',
  '/src/fontes/Starborn.ttf', // Fontes
  '/src/fontes/typppfont.ttf',
  '/src/favicon/favicon-32x32.png' // Favicon
];

// Evento de instalação: Armazena arquivos no cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Arquivos armazenados no cache com sucesso!');
      return cache.addAll(urlsToCache);
    })
  );
});

// Evento de fetch: Intercepta requisições e serve do cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

// Evento de ativação: Limpa caches antigos
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('Cache antigo removido:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
