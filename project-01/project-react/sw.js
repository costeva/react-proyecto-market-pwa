const CACHE_ELEMENTS = [
  "/",
  "/index.html",
  "/index.js",
  "/index.css",
  "/App/AppUI.js",

  "/App/App.css",

  "/App/components/TodoCounter.js",
  "/App/components/TodoCounter.scss",
  "/App/components/TodoForm.js",
  "/App/components/TodoForm.scss",
  "/App/components/TodoItems.js",
  "/App/components/TodoItems.scss",
  "/App/components/TodoList.js",
  "/App/components/TodoList.scss",
  "/App/components/TodoSearch.js",
  "/App/components/TodoSearch.scss",
  "/App/components/CreateTodoButton.js",
  "/App/components/CreateTodoButton.scss",
  "/App/components/Modal.js",
  "/App/components/Modal.scss",
  "/App/App.js",
  "/App/App.scss",
  "/TodoContext.js",
  "/TodoContext.scss",
  "/components/TodoCounter.js",
  "/style/TodoCounter.scss",
  "/components/TodoForm.js",
  "/style/TodoForm.scss",
  "/components/TodoItems.js",
  "/style/TodoItems.scss",
  "/components/TodoList.js",
  "/style/TodoList.scss",
  "/components/TodoSearch.js",
  "/style/TodoSearch.scss",
  "/components/CreateTodoButton.js",
  "/style/CreateTodoButton.css",
  "/components/Modal.js",
  "/style/Modal.scss",
  "/img/market.png",
  "/TodoContext/index.js",
  "/TodoContext/useLocalStorage.js",
];
const CACHE_NAME = "v1";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      cache.addAll(CACHE_ELEMENTS).then(() => {
        self.skipWaiting();
      }).catch((error) => {
        console.log(error);
      });
    })
  );
});

self.addEventListener("active", (event) => {

    const cacheWhitelist = [CACHE_NAME];

    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      }) .then(() => {
            self.clients.claim();
      })                          
    );
  });

  self.addEventListener("fecht", (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
    );
  });