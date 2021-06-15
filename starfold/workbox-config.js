module.exports = {
  "globDirectory": "build",
  "inlineWorkboxRuntime": "true",
  "globPatterns": [
    "**/*.{ico,html,css,js}",
    "images/manifest/icon-512x512.png",
    "images/manifest/icon-192x192.png",
    "images/manifest/safari-pinned-tab.svg",
    "manifest.json",
    "images/about-button.webp",
    "images/close-button.webp",
    "images/explosion.webp",
    "images/menu.png",
    "images/metal.jpg",
    "images/meteor.webp",
    "images/meteor2.webp",
    "images/play-button.webp",
    "images/ship.webp",
    "images/right-controller.webp",
    "images/left-controller.webp",
    "images/up-controller.webp",
    "images/down-controller.webp",
    "images/restart-button.webp",
    "images/resume-button.webp",
    "images/pause-button.webp",
    "images/y-button.webp",
    "images/missile.webp",
    "images/starfield-1024.webp",
    "_snowpack/pkg/import-map.json",
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
  },
  {
    urlPattern: /^https:\/\/fonts\.googleapis\.com/,
    handler: 'StaleWhileRevalidate',
    options: {
      cacheName: 'google-fonts-stylesheets'
    }
  },
  {
    urlPattern: /^https:\/\/fonts\.gstatic\.com/,
    handler: 'StaleWhileRevalidate',
    options: {
      cacheName: 'google-fonts-stylesheets'
    }
  }],
};
