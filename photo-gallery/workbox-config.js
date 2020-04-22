module.exports = {
  "globDirectory": ".",
  "inlineWorkboxRuntime": "true",
  "globPatterns": [
    "**/*.{js,ico,jpg,webp,png,gif,xml,svg,html,css}",
    "manifest.json",
    "web_modules/import-map.json"
  ],
  "swDest": "sw.js"
};