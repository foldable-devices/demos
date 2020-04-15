## Run the demo.

Navigate [here](https://foldable-devices.github.io/demos/battleship).

It uses the [device configurator](https://github.com/foldable-devices/device-configurator) to emulate various devices.

## Adapting your web application to foldable/dual screen devices

Currently there are two polyfills you can use to design or adapt web contents for foldable devices :
- A JavaScript API called Window Segments located [here](https://github.com/foldable-devices/windowsegments-polyfill)
- CSS Properties called Spanning located [here](https://github.com/foldable-devices/spanning-css-polyfill)

Both are proposals from Microsoft and the web community. At this time this demo only react to the spanning media-queries.

:warning: The two aforementioned APIs are early work in progress and are subject to change anytime.

## Work on the demo.

To install app dependencies, run

```bash
$ npm install
```

This project makes use of ECMAScript Modules (ESM) and runs them directly in the browser using [Snowpack](snowpack.dev). If you install new dependencies using `npm` like `npm install --save @material/mwc-button`, then please run `npx snowpack` afterwards to generate the new modules in `web_modules` folder. Also, the `web_modules` folder should be committed. Make sure to update the package.json file accordingly.

ESM compatible modules can be found using [pika.dev](pika.de). Material design web components can be found by searching for `@material/mwc-`. You can try out the demo page here: [Material Web Components demo](https://mwc-demos.glitch.me/)

Then run

```bash
$ npx snowpack --optimize
```

To test in the browser, run

```bash
$ npm run start
```

To build, run

```bash
$ npm run build
```

This will update the `web_modules` directory which can be committed to the repository.

## Assets

- Icon
    - License: Public Domain
    - Source: OpenClipart/SVG-ID: 69365
- Water Texture
    - License: Public Domain
    - Source: OpenGameArt.org, [link](https://opengameart.org/content/the-battle-for-wesnoth-water-animation)
    - Credit: Zookeeper and Zabin
- Ships
    - License : Shutterstock Standard which grants "Unlimited web distribution"
    - Copyright is transfered to Alexis Menard.