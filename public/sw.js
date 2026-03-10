const CACHE_NAME = 'vgoire-v1';
const ASSETS_TO_CACHE = [
  '/VGOIRE-APP/',
  '/VGOIRE-APP/index.html',
  '/VGOIRE-APP/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
