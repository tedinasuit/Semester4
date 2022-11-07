importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);

workbox.routing.registerRoute(
  ({request}) => request.destination === 'image',
  new workbox.strategies.NetworkFirst()
);

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('static-v1')
    .then(cache => cache.addAll([
      '/offline.html'
    ]))
  )
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
    .then(response => response || fetch(event.request))
    .catch(() => {
      if (event.request.mode == 'navigate') {
        return caches.match('/offline.html');
      }
    })
  );
});