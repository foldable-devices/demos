## Run the demo.

Navigate [here](https://foldable-devices.github.io/demos/foldmail/).

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

This project makes use of ECMAScript Modules (ESM) and runs them directly in the browser using [Vite](https://vitejs.dev/). If you install new dependencies using `npm` like `npm install --save my-dependency`, then please run `npm run build` afterwards to generate the new modules in `docs` folder. Also, the `docs` folder should be committed. Make sure to update the package.json file accordingly.

To install app dependencies and but any further steps, run

```bash
$ npm install
```

Shoelace web components can be found [here](https://shoelace.style/)

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

This will update the root `docs` directory which is committed to the repository. This demo runs a service worker, for development purposes you may want to consider ticking the option "Bypass for Network" in the Application tab of the devtools.

To test the deployment you can run
```bash
$ npm run preview
```

## Assets
- Foldmail Icon
    - License: CC0 License
    - Source: https://www.svgrepo.com/svg/186583/envelope-mails
    - Author: SVG Repo