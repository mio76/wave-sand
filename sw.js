// sw.js
const CACHE_NAME = 'wave-sand-cache-v1';

const urlsToCache = [
  '/wave-sand/',
  '/wave-sand/index.html',
  '/wave-sand/icon-192.png',
  '/wave-sand/icon-512.png',
  '/wave-sand/background.mp3',
  '/wave-sand/sand.jpg',
  '/wave-sand/wave.webp',
  '/wave-sand/crab.svg',
  '/wave-sand/dune.webp',
  '/wave-sand/star.webp'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});