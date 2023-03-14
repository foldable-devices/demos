module.exports = {
  "globDirectory": "../docs/foldtube",
  "inlineWorkboxRuntime": true,
  "globPatterns": [
    "**/*.{ico,html,css,js}",
    "images/manifest/icon-512x512.png",
    "images/manifest/icon-192x192.png",
    "images/manifest/safari-pinned-tab.svg",
    "manifest.json",
    "assets/*.js",
    "images/channels/*.webp",
    "images/thumbnails/*.webp"
  ],
  "swDest": "../docs/foldtube/sw.js",

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