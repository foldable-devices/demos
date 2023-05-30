import { LitElement, html, css as litCSS} from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/alert/alert.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/spinner/spinner.js';
import 'foldable-device-configurator';
import { adjustCSS, observe } from "viewportsegments-css-polyfill";
import { Workbox, messageSW } from 'workbox-window';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
setBasePath('/demos/photo-gallery/');

const css = (strings, ...values) => {
  const string = adjustCSS(strings[0], "main-application");
  return litCSS([string], ...values);
};

class DetailImage extends LitElement {
  static styles = css`
    :host {
      width: 100%;
      height: 100%;
    }

    #wrapper {
      position: relative;
      height: 100%;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: start;
      align-items: center;
    }

    #text {
      margin: 16px;
      color: white;
      font-size: 1.5em;
      word-wrap: break-word;
      text-align: center;
      height: 20%;
      margin-top: 15px;
    }

    img {
      min-height: 75%;
      height: 90%;
      width: 90%;
      object-fit: contain;
      margin-top: 40px;
    }

    sl-spinner {
      position: absolute;
      top: 50%;
      font-size: 3rem;
      --track-width: 8px;
    }
  `;

  static properties = {
    src: { type: String },
    description: { type: String }
  }

  _spinner;
  _image;
  _legend;

  firstUpdated() {
    this._spinner = this.shadowRoot.querySelector('sl-spinner');
    this._image = this.shadowRoot.querySelector('img');
    this._legend = this.shadowRoot.querySelector('#text');
  }

  updated(changedProperties) {
    if (changedProperties.has("src")) {
      this._spinner.style.visibility = 'visible';
      this._image.addEventListener('load', () => {
        this._spinner.style.visibility = 'hidden';
        this.style.visibility = 'visible';
        this._legend.innerText = this.description;
      }, { once: true });
      this._image.src = this.src;
    }
  }

  render() {
    return html`
      <div id="wrapper">
        <img/>
        <div id="text"></div>
        <sl-spinner></sl-spinner>
      </div>
    `;
  }
}
customElements.define('detail-img', DetailImage);

export class MainApplication extends LitElement {
  static styles = css`
    :host {
      width: 100vw;
      height: 100vh;
    }

    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

    .alert-sw {
      position: absolute;
      bottom: 3vh;
      right: 1vw;
      z-index: 5;
    }

    .text-sw {
      padding-bottom: 10px;
    }

    .reload {
      margin-left: 5px;
    }

    .fullview-container {
      height: 100%;
      width: 100%;
      backdrop-filter: blur(5px) contrast(.8);
      -webkit-backdrop-filter: blur(5px) contrast(.8);
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    .content {
      display: flex;
      flex-direction: row;
    }

    .fullview-container.hidden {
      display: none;
    }

    .arrow-left {
      width: 30px;
      height: 30px;
      border-bottom: solid 10px white;
      border-left: solid 10px white;
      opacity: 0.7;
      border-radius: 15%;
      transform: rotate(45deg);
    }

    .arrow-right {
      width: 30px;
      height: 30px;
      border-top: solid 10px white;
      border-right: solid 10px white;
      opacity: 0.7;
      border-radius: 15%;
      transform: rotate(45deg);
    }

    .arrow-right:hover, .arrow-left:hover {
      opacity: 1;
    }

    #full-img {
      height: 95%;
      width: 85%;
      object-fit: contain;
      user-select: none;
    }

    .loading {
      min-height: 70%;
      height: 70%;
      width: 90%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      visibility: hidden;
    }

    .close {
      position: absolute;
      right: 20px;
      top: 20px;
      width: 32px;
      height: 32px;
      opacity: 0.3;
      background-color: white;
    }

    .close:hover {
      opacity: 1;
    }

    .close:before, .close:after {
      position: absolute;
      left: 15px;
      content: ' ';
      height: 33px;
      width: 2px;
      background-color: #333;
    }

    .close:before {
      transform: rotate(45deg);
    }

    .close:after {
      transform: rotate(-45deg);
    }

    .gallery {
      width: 100vw;
      height: 100vh;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      grid-template-rows: repeat(auto-fit, 1fr);
      grid-gap: 2px;
      background-color: black;
      grid-auto-flow: dense;
      overflow-y: scroll;
      scrollbar-width: thin;
      --scrollbar-background: #dfdfdf;
      --scrollbar-thumb: #84898b;
    }

    @media (min-width: 320px) and (max-width: 1024px) {
      .gallery {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      }
    }

    .gallery::-webkit-scrollbar {
      width: 11px;
    }
    .gallery {
      scrollbar-width: thin;
      scrollbar-color: var(--scrollbar-thumb) var(--scrollbar-background);
    }
    .gallery::-webkit-scrollbar-track {
      background: var(--scrollbar-background);
    }
    .gallery::-webkit-scrollbar-thumb {
      background-color: var(--scrollbar-thumb) ;
      border-radius: 10px;
      border: 3px solid var(--scrollbar-background);
    }

    .detail-container {
      height: 0vh;
      width: 0vw;
      background-color: black;
      color: white;
      overflow: hidden;
    }

    .fold {
      height: 0;
      width: 0;
      background-color: black;
    }

    .detail {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      visibility: hidden;
    }

    .detail-select {
      color: white;
      font-size: 2em;
      text-align: center;
      margin-top : 20px;
    }

    .gallery-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    sl-spinner {
      position: absolute;
      top: 50%;
      font-size: 3rem;
      --track-width: 8px;
    }

    @media (horizontal-viewport-segments: 2) {
      .gallery {
        width: env(viewport-segment-right 0 0);
        height: 100vh;
      }

      .fold {
        height: env(viewport-segment-height 0 0);
        width: calc(env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0));
      }

      .content {
        flex-direction: row;
      }

      .detail-container {
        height: 100vh;
        width: env(viewport-segment-width 1 0);
      }
    }

    @media (vertical-viewport-segments: 2) {
      .gallery {
        width: 100vw;
        height: var(--zenbook-span1-height, env(viewport-segment-top 0 1));
      }

      .fold {
        height: calc(env(viewport-segment-top 0 1) - env(viewport-segment-bottom 0 0));
        width: env(viewport-segment-width 0 0);
      }

      .content {
        flex-direction: column-reverse;
      }

      .detail-container {
        height: var(--zenbook-span2-height, env(viewport-segment-height 0 0));
        width: 100vw;
      }
    }

    @media (vertical-viewport-segments: 2) and (device-posture: folded) {
      .gallery {
        width: 100vw;
        height: 100vh;
      }

      .fold {
        height: 0;
        width: 0;
      }

      .content {
        flex-direction: row;
      }

      .detail-container {
        height: 0vh;
        width: 0vw;
      }

      #full-img {
        height: env(viewport-segment-bottom 0 0);
      }

      .fullview-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
      }

      .arrow-left {
        margin-top: calc(env(viewport-segment-bottom 0 0) / 2);
      }

      .arrow-right {
        margin-top: calc(env(viewport-segment-bottom 0 0) / 2);
      }
    }

    @media (horizontal-viewport-segments: 1) and (vertical-viewport-segments: 1) {
      .gallery {
        width: 100vw;
        height: 100vh;
      }

      .fold {
        height: 0;
        width: 0;
      }

      .content {
        flex-direction: row;
      }

      .detail-container {
        height: 0vh;
        width: 0vw;
      }

      /* This is only temporary for the Neo emulator, otherwise background blur is awfully slow */
      .fullview-container {
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
        background: rgb(0, 0, 0, 0.5);
        height: 100vh;
      }
    }
  `;

  static properties = {
    _full_view_container_classes: { type: String }
  };

  _full_img;
  _detail_img;
  _detail_container;
  _detail;
  _detail_select;
  _drawer;
  _spinner;
  _fold;
  _gallery;
  _fullview_container;
  _swAlert;
  _wb;
  _wbRegistration = undefined;

  firstUpdated() {
    this._gallery = this.shadowRoot.querySelector('.gallery');
    this._full_img = this.shadowRoot.querySelector('#full-img');
    this._detail_img = this.shadowRoot.querySelector('detail-img');
    this._detail_container = this.shadowRoot.querySelector('.detail-container');
    this._detail = this.shadowRoot.querySelector('.detail');
    this._detail_select = this.shadowRoot.querySelector('.detail-select');
    this._spinner = this.shadowRoot.querySelector('sl-spinner');
    this._drawer = this.shadowRoot.querySelector('#drawer');
    this._swAlert = this.shadowRoot.querySelector('#sw-alert');
    this._fold = this.shadowRoot.querySelector('.fold');
    this._fullview_container = this.shadowRoot.querySelector('.fullview-container');

    // Check that service workers are supported
    if ('serviceWorker' in navigator) {
      // Use the window load event to keep the page load performant
      window.addEventListener('load', async () => {
        this._wb = new Workbox('./sw.js');
        this._wb.addEventListener('waiting', () => this._showSWAlert());
        this._wb.addEventListener('externalwaiting', () => this._showSWAlert());
        this._wbRegistration = await this._wb.register();
      });
    }

    screen.orientation.addEventListener('change', _ => {
      this._closePicture();
    });
  }

  constructor() {
    super();
    this._full_view_container_classes = { hidden: true };
  }

  connectedCallback() {
    super.connectedCallback();
    observe(this);
  }

  _showSWAlert() {
    this._swAlert.show();
  }

  _reloadSW() {
    this._wb.addEventListener('controlling', () => {
      window.location.reload();
      this._wbRegistration = undefined;
    });
    // Send a message to the waiting service worker instructing
    // it to skip waiting, which will trigger the `controlling`
    // event listener above.
    if (this._wbRegistration && this._wbRegistration.waiting) {
      messageSW(this._wbRegistration.waiting, {type: 'SKIP_WAITING'})
    }
  }

  _openPicture(e) {
    const source_image = e.currentTarget.children[1].currentSrc;
    const path = source_image.replace('-l', '');
    const hasVerticalSegments = window.matchMedia("(vertical-viewport-segments: 2)").matches;
    const hasHorizontalSegments = window.matchMedia("(horizontal-viewport-segments: 2)").matches;
    if (navigator.devicePosture != undefined &&
        ((navigator.devicePosture.type === 'folded' && hasHorizontalSegments) ||
        (navigator.devicePosture.type === 'continuous' && (hasVerticalSegments || hasHorizontalSegments)))) {
      this._detail_select.style.display = 'none';
      this._detail.style.visibility = 'visible';
      if (this._detail_img.src === path)
        return;
      this._detail_img.description = e.currentTarget.children[1].alt;
      this._detail_img.src = path;
      this._detail_img.style.visibility = 'hidden';
    } else {
      this._full_view_container_classes = { hidden: false };
      this._full_img.setAttribute('src', path);
      this._spinner.style.visibility = 'visible';
      this._full_img.addEventListener('load', () => {
        this._spinner.style.visibility = 'hidden';
      }, { once: true });
      this._current_image = e.currentTarget;
    }
  }

  _closePicture() {
    this._full_view_container_classes = { hidden: true };
  }

  _previousPicture(event) {
    event.stopPropagation();

    if (this._current_image.parentNode.previousElementSibling) {
      const previous_node_image = this._current_image.parentNode.previousElementSibling.children[0];
      let previous_image = previous_node_image.children[1].currentSrc;
      const path = previous_image.replace('-l', '');
      this._full_img.setAttribute('src', path);
      this._current_image = previous_node_image;
    }
  }

  _nextPicture(event) {
    event.stopPropagation();

    if (this._current_image.parentNode.nextElementSibling) {
      const next_node_image = this._current_image.parentNode.nextElementSibling.children[0];
      let next_image = next_node_image.children[1].currentSrc;
      const path = next_image.replace('-l', '');
      this._full_img.setAttribute('src', path);
      this._current_image = next_node_image;
    }
  }

  render() {
    const images = [
      { name: "images/air-balloon-l", alt: "This is a beautiful picture of an air balloon in the sky." },
      { name: "images/asia-l", alt: "This photo depicts a woman on a boat somewhere in Asia." },
      { name: "images/china-l", alt: "Architecture in China, a tower of a building." },
      { name: "images/church-l", alt: "A black church in the middle of nowhere." },
      { name: "images/city-l", alt: "A modern city somewhere in Asia." },
      { name: "images/waterfall2-l", alt: "River with a tiny waterfall." },
      { name: "images/cloud-l", alt: "Clouds in the sky, view from high altitude." },
      { name: "images/desert-l", alt: "A desert with cactus." },
      { name: "images/river2-l", alt: "A river inside a canyon." },
      { name: "images/disney-l", alt: "The Disney castle in Orlando" },
      { name: "images/forest-l", alt: "A road crossing a green forest" },
      { name: "images/greece-l", alt: "Greece architecture" },
      { name: "images/city2-l", alt: "A city street with an arch" },
      { name: "images/lake-l", alt: "Women coming out of a lake somewhere lost in the nature" },
      { name: "images/mountain-l", alt: "Peak of a high mountain and a cloudy sky" },
      { name: "images/new-york-l", alt: "A street in New York" },
      { name: "images/pool-l", alt: "Relaxing pool in a luxury hotel" },
      { name: "images/restaurant-l", alt: "Restaurant on the edge of a river somewhere in France" },
      { name: "images/river-l", alt: "River with people kayaking" },
      { name: "images/road-l", alt: "Long straight road somewhere in USA" },
      { name: "images/sand-l", alt: "Desert with rocky mountains on the background" },
      { name: "images/sea-l", alt: "Beautiful transparent sea water somewhere in the pacific" },
      { name: "images/sfo-l", alt: "Golden gate in San Francisco" },
      { name: "images/stars-l", alt: "Wonderful astronomy shot of stars in the sky" },
      { name: "images/tents-l", alt: "Camping tents hanging on a cliff" },
      { name: "images/waterfall-l", alt: "Picture of a waterfall between big rocks" },
      { name: "images/mountain2-l", alt: "Beautiful picture of a mountain landscape" },
      { name: "images/wave-l", alt: "This is a picture from a wave in the ocean" },
      { name: "images/aerial-l", alt: "This is an aerial picture of a city" },
      { name: "images/building-l", alt: "This is a picture from inside a building" },
      { name: "images/catamaran-l", alt: "This is a picture of a catamaran with blue water" },
      { name: "images/cats-l", alt: "Thisa picture of two cats sleeping" },
      { name: "images/egypt-l", alt: "This is a picture from somewhere in Egypt" },
      { name: "images/feather-l", alt: "This is a picture of colorful feathers" },
      { name: "images/fruits-l", alt: "This is a picture of a water bottle and fruits" },
      { name: "images/golden-gate-l", alt: "This is a picture of the Golden Gate" },
      { name: "images/marocco-l", alt: "This is a picture of ancient building in Marocco" },
      { name: "images/milky-way-l", alt: "This is a picture from the Milky Way" },
      { name: "images/palm-tree-l", alt: "This is a picture of palm trees with beautiful weather" },
      { name: "images/rainbow-l", alt: "This is a picture of a rainbow from a light" },
      { name: "images/road2-l", alt: "This is a picture from a road with a lot of trees" },
      { name: "images/surf-l", alt: "This is a picture of a surfer" },
      { name: "images/volcano-l", alt: "This is an aerial picture of a volcano" }
    ];

    return html`
      <foldable-device-configurator></foldable-device-configurator>
      <div class="content">
          <div class="alert-sw">
            <sl-alert id="sw-alert" variant="primary" closable duration="10000">
              <sl-icon slot="icon" name="info-circle"></sl-icon>
              <div class="text-sw">
                <strong>A newer version of the application is available</strong>
              </div>
              Please reload to update: 
              <sl-button class="reload" size="small" @click="${this._reloadSW}">Reload</sl-button>
            </sl-alert>
          </div>
          <div class="gallery">
            ${images.map(images => html`
              <figure class="gallery-item">
                <picture @click="${this._openPicture}">
                  <source srcset="${images.name}.webp" type="image/webp">
                  <img src="${images.name}.jpg" class="gallery-img" alt=${images.alt}>
                </picture>
              </figure>
            `)}
          </div>

          <div class="fold"></div>

          <div class="detail-container">
            <div class="detail-select">Select an image in the gallery.</div>
            <div class="detail">
              <detail-img></detail-img>
            </div>
          </div>

          <div class="fullview-container ${classMap(this._full_view_container_classes)}" @click="${this._closePicture}">
            <div class="close" @click="${this._closePicture}"></div>
            <div class="arrow-left" @click="${this._previousPicture}"></div>
            <sl-spinner></sl-spinner>
            <img id="full-img">
            <div class="arrow-right" @click="${this._nextPicture}"></div>
          </div>
        </div>
    `;
  }
}

customElements.define("main-application", MainApplication);