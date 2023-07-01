const CACHE_NAME = 'index-cache';
const urlsToCache = [
  '/',
  './index.html',
  './src/stylesheet.css',
  './src/slideimg.js',
  './table.css',
  './images/equ2gra/1.jpeg',
  './images/equ2gra/2.jpeg',
  './images/equ2gra/3.jpeg',
  './images/equ2gra/4.jpeg',
  './images/gitscore/1.jpeg',
  './images/gitscore/2.jpeg',
  './images/gitscore/3.jpeg',
  './images/gitscore/4.jpeg',
  './images/opensolver/1.jpeg',
  './images/opensolver/2.jpeg',
  './images/opensolver/3.jpeg',
  './images/opensolver/4.jpeg',
  './images/player/1.jpeg',
  './images/player/2.jpeg',
  './images/player/3.jpeg',
  './images/player/4.jpeg',
  './images/svgg/1.jpeg',
  './images/svgg/2.jpeg',
  './images/svgg/3.jpeg',
  './images/svgg/4.jpeg',
  './images/userbot/1.jpeg',
  './images/userbot/2.jpeg',
  './images/userbot/3.jpeg',
  './images/userbot/4.jpeg',
  './images/youranimelist/1.jpeg',
  './images/youranimelist/2.jpeg',
  './images/youranimelist/3.jpeg',
  './images/youranimelist/4.jpeg',
  // Aggiungi qui altri file che desideri memorizzare nella cache
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});