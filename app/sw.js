self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("chavo-app").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./manifest.json",
        "./icon-192.png",
        "./icon-512.png",
        "./sonidos/intro.mp3",
        "./sonidos/golpe.mp3",
        "./sonidos/cachetada.mp3",
        "./sonidos/escuela.mp3",
        "./sonidos/risas1.mp3",
        "./sonidos/risas2.mp3",
        "./sonidos/romantico.mp3"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});