'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon-16x16.png": "3a0fb0b6a81fe0574710e31cded99e6c",
"flutter_bootstrap.js": "75ba19444b1faaaee4d2d67106d93483",
"version.json": "65a069bb3edfe36b664fd13cb888f57a",
"favicon.ico": "9cc2110bf0da1d5edf4d447e9969dea2",
"index.html": "0b73b25e69d4d8b90d9ec7796773a62d",
"/": "0b73b25e69d4d8b90d9ec7796773a62d",
"android-chrome-192x192.png": "095eb4880c535e53c25877dd9283a20d",
"apple-touch-icon.png": "e40e0deba2f1c19af065b54c6e176eb1",
"main.dart.js": "b587f409c1dd0c70d4d6171a9671940a",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon-48x48.png": "efceedb61de22a73dc1576a449b72d43",
"favicon.png": "839fd549bfab57574b8f0901774c632c",
"android-chrome-512x512.png": "6188c4968a8ed36f726f361b731d5e3b",
"icons/Icon-192.png": "839fd549bfab57574b8f0901774c632c",
"icons/Icon-maskable-192.png": "839fd549bfab57574b8f0901774c632c",
"icons/Icon-maskable-512.png": "839fd549bfab57574b8f0901774c632c",
"icons/Icon-512.png": "839fd549bfab57574b8f0901774c632c",
"manifest.json": "1a496fb35df26c610893ccb54bd8ad6e",
"robots.txt": "5e0bd1c281a62a380d7a948085bfe2d1",
"assets/AssetManifest.json": "7f2c97bcd2addace4897b2b102c29c4e",
"assets/NOTICES": "324ee6953ec114b5316ad9129ace59fa",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "75c28a8d5b7d3fb74284ed5f91a54bde",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "5d9f8c2e9277e8354b3b98933e5b0ae8",
"assets/fonts/MaterialIcons-Regular.otf": "51885c7f6db35a6ca0d201bd66c8731d",
"assets/assets/screenshots/bucktly_1_light.png": "2486b1ada64a4ff4a67fb69315cd785c",
"assets/assets/screenshots/bucktly_3_dark.png": "a867bc39523078290e942f79b31ba972",
"assets/assets/screenshots/bucktly_2_dark.png": "b6e4242533143ea190d9b6d804b1fd4a",
"assets/assets/screenshots/bucktly_2_light.png": "d680b1a38d3a7120a86496d94e5361b9",
"assets/assets/screenshots/bucktly_3_light.png": "48662f0903f8645b9d4563a627c4beac",
"assets/assets/screenshots/bucktly_1_dark.png": "a396c9fdcae70ee90c5909a1bf6d9dde",
"assets/assets/images/vikas_image.jpg": "59a4b9fd014b15973d139f193bb04084",
"assets/assets/images/app_icon.png": "e8caee19156cb4b0494a05ad2e818a38",
"assets/assets/images/bucktly_logo.png": "4cdc8101f70b5230b757bd93a64553d3",
"assets/assets/bucktly_favicons/favicon-16x16.png": "3a0fb0b6a81fe0574710e31cded99e6c",
"assets/assets/bucktly_favicons/favicon.ico": "9cc2110bf0da1d5edf4d447e9969dea2",
"assets/assets/bucktly_favicons/android-chrome-192x192.png": "095eb4880c535e53c25877dd9283a20d",
"assets/assets/bucktly_favicons/apple-touch-icon.png": "e40e0deba2f1c19af065b54c6e176eb1",
"assets/assets/bucktly_favicons/favicon-48x48.png": "efceedb61de22a73dc1576a449b72d43",
"assets/assets/bucktly_favicons/android-chrome-512x512.png": "6188c4968a8ed36f726f361b731d5e3b",
"assets/assets/bucktly_favicons/favicon-32x32.png": "f62824a723aa77299a30b564175a05a9",
"favicon-32x32.png": "f62824a723aa77299a30b564175a05a9",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
