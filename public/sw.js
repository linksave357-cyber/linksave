// LinkSave Service Worker - Enables PWA installation & Android Web Share Target
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Required fetch handler for PWA installability & WebAPK registration
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
