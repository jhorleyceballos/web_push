const STATIC_CACHE='static-v1';
const DYNAMIC_CACHE='dynamic-v1';
const INMUTABLE_CACHE='inmutable-v1';

const APP_SHELL = [
//   "/",
  "index.html",
  "img/avatars/spiderman.jpg",
  "img/favicon.ico",
];

self.addEventListener('install',e=>{
    const cacheStatic=caches.open(STATIC_CACHE).then(cache=>{
        cache.addAll(APP_SHELL)
    })
    e.waitUntil(Promise.all([cacheStatic]));
})

self.addEventListener('activate',e=>{
    const respuesta=caches.keys().then(keys=>{
        keys.forEach(key=>{
            if(key==STATIC_CACHE && key.includes('static')){
                return caches.delete(key);
            }
        })
    })
    e.waitUntil(respuesta);
})