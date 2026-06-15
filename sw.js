const CACHE = 'moneylens-v2';
const ASSETS = ['/', '/index.html', '/manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  // Never cache API, CDN, or script calls
  const url = e.request.url;
  if (url.includes('anthropic.com') || url.includes('cdnjs.cloudflare.com') || url.includes('script.google.com')) return;
  e.respondWith(caches.match(e.request).then(cached => cached || fetch(e.request)));
});
