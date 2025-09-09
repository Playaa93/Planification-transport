const CACHE = 'transportpro-v2';
// Use relative paths so it works under GitHub Pages subpaths
const ASSETS = [
  'index.html',
  'style.css',
  'app.js',
  'supabase-config.js',
  'manifest.webmanifest',
  'favicon.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  // Ignore non-HTTP(S) schemes (e.g., chrome-extension://)
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return;

  // Favicon fallback (use cached SVG) when site is at domain root
  if (url.pathname === '/favicon.ico') {
    event.respondWith(
      caches.match('favicon.svg').then((resp) => resp || fetch(request)).catch(() => fetch(request))
    );
    return;
  }

  event.respondWith(
    fetch(request)
      .then((response) => {
        const clone = response.clone();
        // Cache only same-origin requests
        if (url.origin === self.location.origin) {
          caches.open(CACHE).then((cache) => cache.put(request, clone)).catch(() => {});
        }
        return response;
      })
      .catch(() => caches.match(request).then((cached) => cached || caches.match('index.html')))
  );
});
