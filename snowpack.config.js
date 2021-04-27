/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    "@snowpack/plugin-sass"
  ],
  install: [
    "bulma/bulma.sass"
  ],
  installOptions: {
    rollup: {plugins: [require('rollup-plugin-scss')()]}
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};
