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
      '@material/mwc-ripple',
      '@material/mwc-button',
      '@material/mwc-checkbox',
      '@material/mwc-drawer',
      '@material/mwc-icon-button',
      '@material/mwc-snackbar',
      'viewportsegments-css-polyfill']
    }
  },
};