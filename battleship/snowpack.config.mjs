export default {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: ['@snowpack/plugin-babel'],
  packageOptions: {
    knownEntrypoints: ['foldable-device-configurator'],
    rollup: {
      dedupe: [
      'lit-element',
      'lit-html',
      'lit',
      'viewportsegments-css-polyfill']
    }
  },
};