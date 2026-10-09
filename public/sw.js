// Clean up and unregister any previously cached Monetag push notification service worker
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => {
  self.registration.unregister();
});
