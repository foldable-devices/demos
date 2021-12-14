## Run the demo.

Navigate [here](https://foldable-devices.github.io/demos/foldnews/build).

It uses the [device configurator](https://github.com/foldable-devices/device-configurator) to emulate various devices.

## Adapting your web application to foldable/dual screen devices

Currently there are two polyfills you can use to design or adapt web contents for foldable devices :
- A JavaScript API called Viewport Segments located [here](https://github.com/foldable-devices/viewportsegments-polyfill)
- CSS Properties called Viewport Segments located [here](https://github.com/foldable-devices/viewportsegments-css-polyfill)

Both are proposals from Microsoft and the web community. At this time this demo only react to the spanning media-queries.

:warning: The two aforementioned APIs are early work in progress and are subject to change anytime.

## Work on the demo.

To install app dependencies, run

```bash
$ npm install
```

This project makes use of ECMAScript Modules (ESM) and runs them directly in the browser using [Snowpack](snowpack.dev). If you install new dependencies using `npm` like `npm install --save @material/mwc-button`, then please run `npm run build` afterwards to generate the new modules in `build\web_modules` folder. Also, the `build` folder should be committed. Make sure to update the package.json file accordingly.

ESM compatible modules can be found using [pika.dev](pika.de). Material design web components can be found by searching for `@material/mwc-`. You can try out the demo page here: [Material Web Components demo](https://mwc-demos.glitch.me/)

Then run

```bash
$ npm run build
```

To test in the browser, run

```bash
$ npm run start
```

To build, run

```bash
$ npm run build
```

This will update the `build` directory which is committed to the repository. This demo runs a service worker, for development purposes you may want to consider ticking the option "Bypass for Network" in the Application tab of the devtools.

## Assets

- Icon
    - License: Public Domain
    - Source: https://publicdomainvectors.org/
- Other assets
    - License : Shutterstock Standard which grants "Unlimited web distribution"
    - Copyright is transfered to Alexis Menard.