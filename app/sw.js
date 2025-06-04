self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("chavo-app").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./manifest.json",
        "./icon-192.png",
        "./icon-512.png",
        "./sonidos/Intro.mp3",
        "./sonidos/Golpe.mp3",
        "./sonidos/Cachetada.mp3",
        "./sonidos/Escuela.mp3",
        "./sonidos/Risas 1.mp3",
        "./sonidos/Risas 2.mp3",
        "./sonidos/Romantico.mp3"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});