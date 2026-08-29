/* =====================================================================
   SERVICE WORKER — Academia de Comisionamiento
   ---------------------------------------------------------------------
   Permite que la Academia funcione SIN INTERNET una vez visitada.
   Estrategia:
     - Navegación (el HTML): red primero, cache como respaldo.
       Así siempre recibes la versión más nueva si hay señal, y sigues
       teniendo la app completa si estás sin cobertura.
     - Resto de archivos: cache primero con actualización en segundo plano.

   IMPORTANTE AL ACTUALIZAR: sube el número de CACHE_VERSION. Eso invalida
   el cache anterior y fuerza la descarga de la versión nueva.
   ===================================================================== */

const CACHE_VERSION = 'aca-v1';
const CACHE_NAME = 'academia-' + CACHE_VERSION;

const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png'
];

/* --- Instalación: guarda los archivos base --- */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
      .catch(err => console.warn('[SW] Falló el precache:', err))
  );
});

/* --- Activación: borra caches de versiones anteriores --- */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k.startsWith('academia-') && k !== CACHE_NAME)
            .map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

/* --- Intercepción de peticiones --- */
self.addEventListener('fetch', event => {
  const req = event.request;

  // Solo peticiones GET del mismo origen
  if (req.method !== 'GET') return;
  if (new URL(req.url).origin !== self.location.origin) return;

  // El documento HTML: red primero para recibir actualizaciones
  if (req.mode === 'navigate' || req.destination === 'document') {
    event.respondWith(
      fetch(req)
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then(c => c.put('./index.html', copy));
          return res;
        })
        .catch(() => caches.match('./index.html').then(r => r || caches.match('./')))
    );
    return;
  }

  // Resto: cache primero, actualizando en segundo plano
  event.respondWith(
    caches.match(req).then(cached => {
      const network = fetch(req)
        .then(res => {
          if (res && res.status === 200) {
            const copy = res.clone();
            caches.open(CACHE_NAME).then(c => c.put(req, copy));
          }
          return res;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});

/* --- Permite que la página fuerce la activación de una versión nueva --- */
self.addEventListener('message', event => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});
