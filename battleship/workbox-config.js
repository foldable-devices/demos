module.exports = {
  "globDirectory": "build",
  "inlineWorkboxRuntime": "true",
  "globPatterns": [
    "**/*.{ico,html,css}",
    "images/manifest/icon-512x512.png",
    "images/manifest/icon-192x192.png",
    "images/manifest/safari-pinned-tab.svg",
    "manifest.json",
    "images/battleship-top-horizontal.webp",
    "images/battleship-top-vertical.webp",
    "images/carrier-top-horizontal.webp",
    "images/carrier-top-vertical.webp",
    "images/destroyer-top-horizontal.webp",
    "images/destroyer-top-vertical.webp",
    "images/rescue-top-horizontal.webp",
    "images/rescue-top-vertical.webp",
    "images/submarine-top-horizontal.webp",
    "images/submarine-top-vertical.webp",
    "images/ocean-1024.webp",
    "images/captain.webp",
    "images/close-button.webp",
    "images/restart-button.webp",
    "images/new-game-button.webp",
    "images/how-to-button.webp",
    "web_modules/import-map.json",
    "dist/*.js"
  ],
  "swDest": "build/sw.js",

  // Define runtime caching rules.
  runtimeCaching: [{
    // Match any request that ends with .webp .png, .jpg, .jpeg or .svg.
    urlPattern: /\.(?:png|jpg|jpeg|svg|webp)$/,

    // Apply a cache-first strategy.
    handler: 'CacheFirst',

    options: {
      // Use a custom cache name.
      cacheName: 'images',

      // Only cache 15 images.
      expiration: {
        maxEntries: 15,
      },
    },
  }],
};