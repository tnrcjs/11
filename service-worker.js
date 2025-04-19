const CACHE_NAME = 'lcm-game-v1';
const urlsToCache = [
    '/11/',
    '/11/index.html',
    '/11/manifest.json',
    'https://i.ibb.co/NnWpMGpP/maskable-icon-x192.png',
    'https://i.ibb.co/TBbbB7Wz/maskable-icon-x512.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
            .catch(() => {
                return new Response('오프라인 상태입니다.');
            })
    );
});
