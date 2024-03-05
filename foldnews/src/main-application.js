import { LitElement, html, css as litCSS } from 'lit';
import { adjustCSS, observe } from "viewportsegments-css-polyfill";
import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/alert/alert.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import "./news-article.js";
import 'foldable-device-configurator';
import { Workbox, messageSW} from 'workbox-window';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
setBasePath('/demos/foldnews/');

const css = (strings, ...values) => {
  const string = adjustCSS(strings[0], "main-application");
  return litCSS([string], ...values);
};

export class MainApplication extends LitElement {
  static styles = css`
    :host {
      width: 100vw;
      height: 100vh;
      --background-color: #f9f7f1;
      --default-fold-width: 40px;
      --default-fold-half-width: 20px;
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

    .content {
      width: 100%;
      height: 100%;
      background-color: var(--background-color);
      font-family: 'Cinzel', serif;
    }

    .header {
      text-transform: uppercase;
      font-weight: 900;
      font-size: 70px;
      display: flex;
      align-items: center;
      flex-direction: column;
      height: 17vh;
    }

    .header-main {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      height: 13vh;
    }

    .header-title {
      flex-grow: 2;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    .weather {
      font-size: 15px;
      border: 3px double black;
      display: flex;
      flex-direction: column;
      margin: 20px 20px 20px 0;
      padding: 5px;
    }

    .weather-type {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
    }

    .weather-picture {
      width: 30px;
      margin-left: 5px;
    }

    .title-right {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
    }

    .title-left {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
    }

    .logo-container {
      margin-left: 20px;
    }

    .logo {
      height: 50px;
      display: block;
    }

    .paper {
      background-image: url('images/paper_texture.webp');
      background-position: center;
      background-repeat: repeat;
    }

    .date {
      text-transform: uppercase;
      border-bottom: 2px solid black;
      border-top: 2px solid black;
      text-align: center;
      font-weight: 700;
      font-size: 15px;
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      height: 4vh;
    }

    .date-text {
      padding: 20px 0px 20px 0px;
    }

    .frontpage {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      border-top: 1px solid black;
      border-bottom: 1px solid black;
      width: 100%;
    }


    .frontpage:before {
      left: 0;
      border-right: 1px solid black;
    }

    .frontpage:after {
      right: 0;
      border-left: 1px solid black;
    }

    .fold {
      display: none;
    }

    .cell {
      padding: 10px;
      border-right: solid 1px black;
      border-bottom: solid 1px black;
    }

    .cell-1 {
      grid-row: 1 / span 2;
    }

    .cell-2 {
      grid-column: span 2 / span 2;
    }

    .cell-3 {
      grid-row: 2;
      grid-column: 2;
    }

    .cell-4 {
      grid-column: 1 / span 3;
    }

    .cell-5 {
      grid-row: 2 / span 1;
    }

    .picture {
      max-width: 100%;
    }

    .citation {
      text-align: center;
      font-size: 20px;
      display: block;
      font-family: 'Cinzel', serif;
      margin: 30px 0 30px 0;
      font-weight: 500;
    }

    .citation:before {
      border-top: 2px solid black;
      width: 100px;
      content: '';
      height: 7px;
      display: block;
      margin: auto;
    }

    .citation:after {
      border-bottom: 2px solid black;
      width: 100px;
      content: '';
      display: block;
      height: 7px;
      margin: auto;
    }

    p {
      margin-top: 10px;
    }

    @media (min-width: 320px) and (max-width: 1024px) {
      .header {
        font-size: 1.7em;
      }

      .weather-picture {
        width: 20px;
      }

      .frontpage {
        display: flex;
        flex-direction: column;
      }

      .logo {
        height: 30px;
      }

      .weather {
        font-size: 0.25em;
      }

      .date {
        font-size: 10px;
      }
    }

    @media (horizontal-viewport-segments: 2) {
      .header {
        font-size: 2.5em;
      }

      .fold {
        width: calc(env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0)); 
        height: 100%;
        flex-shrink: 0;
        display: flex;
      }

      .crease {
        border-right: 2px solid #bcbcbc;
        width: 50%;
        height: 100%;
        background-image:
          linear-gradient(
          to right,
            rgba(76, 53, 73, 0.00) 0%,
            rgba(76, 53, 73, 0.02) 2%,
            rgba(76, 53, 73, 0.00) 60%,
            rgba(76, 53, 73, 0.16) 94%
          );
      }

      .crease2 {
        width: 50%;
        height: 100%;
        background-image:
          linear-gradient(
          to right,
            rgba(76, 53, 73, 0.06) 0%,
            rgba(76, 53, 73, 0.10) 2%,
            rgba(76, 53, 73, 0.16) 6%,
            rgba(76, 53, 73, 0.00) 40%
          );
      }

      .fold-cell {
        grid-row: 1 / span 3;
        grid-column: 2;
      }

      .frontpage {
        grid-template-columns: env(viewport-segment-width 0 0) calc(env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0));
      }

      .title-left {
        width: env(viewport-segment-width 1 0);
      }

      .title-right {
        width: env(viewport-segment-width 0 0);
        flex-shrink: 0;
      }

      .date {
        justify-content: flex-start;
      }

      .date-text {
        width: env(viewport-segment-width 0 0);
      }

      .header-main {
        flex-direction: row-reverse;
        justify-content: flex-start;
      }

      .cell {
        border-left: solid 1px black;
        border-right: solid 1px black;
        border-bottom: solid 1px black;
      }

      .cell-1 {
        grid-row: 1 / span 1;
        flex-shrink: 0;
      }

      .cell-2 {
        grid-column: 3;
        flex-shrink: 0;
      }

      .cell-4 {
        grid-row: 2 / span 1;
        grid-column: 1;
      }

      .cell-5 {
        grid-row: 3 / span 1;
      }

      .cell-3 {
        grid-row: 2;
        grid-column: 3;
      }

      .picture {
        display: block;
        max-width: 100%;
      }
    }

    /* This block is for smaller foldable devices */
    @media (horizontal-viewport-segments: 2) and (max-width: 1024px) {
      .fold {
        width: var(--default-fold-width);
      }

      .title-right {
        width: calc(env(viewport-segment-width 0 0) - var(--default-fold-half-width));
      }

      .date-text {
        width: calc(env(viewport-segment-width 0 0) - var(--default-fold-half-width));
      }

      .frontpage {
        display: grid;
        grid-template-columns: calc(env(viewport-segment-width 0 0) - var(--default-fold-half-width)) var(--default-fold-width);
      }
    }

    @media (horizontal-viewport-segments: 1) and (vertical-viewport-segments: 1) {
      .fold {
        display: none;
      }

      .frontpage {
        display: grid;
      }

      .header-main {
        flex-direction: row;
      }

      .date{
        flex-direction: row;
      }

      .title-left {
        width: auto;
      }

      .title-right {
        width: auto;
      }

      .cell-1 {
        grid-row: 1 / span 2;
      }

      .cell-2 {
        grid-column: span 2 / span 2;
      }

      .cell-3 {
        grid-row: 2;
        grid-column: 2;
      }

      .cell-4 {
        grid-column: 1 / span 3;
      }

      .cell-5 {
        grid-row: 2 / span 1;
      }
    }

    @media (min-width: 320px) and (max-width: 1024px) and (horizontal-viewport-segments: 1) and (vertical-viewport-segments: 1) {
      .frontpage {
        display: flex;
        flex-direction: column;
      }
    }
  `;

  _swAlert;
  _wb;
  _wbRegistration = undefined;

  firstUpdated() {
    this._swAlert = this.shadowRoot.querySelector('#sw-alert');
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
  }

  constructor() {
    super();
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

  render() {
    return html`
      <foldable-device-configurator></foldable-device-configurator>
      <div class="content paper">
        <div class="header">
          <div class="header-main">
            <div class="title-left">
              <div class="weather">
                <div class="weather-type">
                  Sunshine
                  <picture>
                    <source srcset="images/sun.webp" type="image/webp">
                    <img class="weather-picture" src="images/sun.png" alt="Picture of a sun">
                  </picture>
                </div>
                <div>Temperature: 29&deg;C</div>
                <div>Wind: 2km/h</div>
              </div>
            </div>
            <div class="fold">
              <div class="crease"></div>
              <div class="crease2"></div>
            </div>
            <div class="title-right">
              <div>The Fold News</div>
              <div class="logo-container">
                <picture>
                  <source srcset="images/foldnews-logo.webp" type="image/webp">
                  <img class="logo" src="images/foldnews-logo.png" alt="Fold news logo">
                </picture>
              </div>
            </div>
          </div>
          <div class="date">
            <div class="date-text">Portland, OR - June 7th, 2011</div>
            <div class="fold">
              <div class="crease"></div>
              <div class="crease2"></div>
            </div>
          </div>
        </div>
        <div class="frontpage paper">
          <div class="cell cell-1">
            <news-article picturePosition="top">
              <div slot="title">Asus launched its new Zephyrus Duo laptop, two screens in one laptop</div>
              <div slot="author">By Alexis Menard</div>
              <div slot="news-picture">
                <picture>
                  <source srcset="images/asus-zephyrus.webp" type="image/webp">
                  <img class="picture" src="images/asus-zephyrus.png" alt="Picture of the Asus Zephyrus Duo">
                </picture>
              </div>
              <div slot="text">
                Asus launched its new Zephyrus Duo laptop which features two screens. It's a successor of the Zenbook Duo 
                but this time it's directed towards the gaming community.
                <div class="citation">the Zephyrus comes with a new hinge
                design which now lifts the second screen for better visibility</div>
                The specs have also been updated with a 10th Gen Intel Core i9, an updated Nvidia 2080 Super Max-Q, 32GB of
                memory and 2TB of Solid State drive.
                This laptop has two option for the main screen : OLED 4K at 60hz or FHD at 300hz IPS.
                The secondary screen called ScreenPad Plus is a complete screen with touch capability (just like a secondary monitor).
                <p>
                  Beside helping visibility the tilted second screen helps with cooling as Asus put a way to get fresh, unobstructed air
                  intake from beneath the screen.
                </p>
              </div>
            </news-article>
          </div>
          <div class="fold fold-cell">
            <div class="crease"></div>
            <div class="crease2"></div>
          </div>
          <div class="cell cell-5">
            <news-article picturePosition="top">
              <div slot="title">W3C Community showcases early standards for foldables and dual screen devices</div>
              <div slot="author">By Alexis Menard</div>
              <div slot="news-picture">
                <picture>
                  <source srcset="images/battleship.webp" type="image/webp">
                  <img class="picture" src="images/battleship.jpg" alt="Picture of a battleship game demo running on a Asus Zenbook Duo">
                </picture>
              </div>
              <div slot="text">
                The W3C community posted on Twitter a picture of a little demo using early proposed specifications to target dual screens
                and foldable devices. A photo gallery optimized for dual screen as well as a little battleship game was showcased.
                <div class="citation">The proposed standards enable web developers to target these innovative form factors</div>
                These are early standards and are subject to change. At this point Microsoft, Intel and Samsung are involved into
                the work.
              </div>
            </news-article>
          </div>
          <div class="cell cell-2">
            <news-article picturePosition="top">
              <div slot="title">Microsoft demonstrates the Surface Duo</div>
              <div slot="author">By Alexis Menard</div>
              <div slot="news-picture">
                <picture>
                  <source srcset="images/surface-duo.webp" type="image/webp">
                  <img class="picture" src="images/surface-duo.jpg" alt="Picture of the Microsoft Surface Duo">
                </picture>
              </div>
              <div slot="text">
                The Microsoft Surface Duo, also known as the Surface Duo, is an
                upcoming foldable device announced during Microsoft's Surface hardware conference on October 2, 2019.
                Unlike previous Microsoft products, which run a in-house operating system, such as the recently discontinued Windows 10 Mobile, it will run Android instead. 
                <p>
                  The device is generally regarded as a smartphone, however, Microsoft itself is reluctant to use the term to describe the device, instead referring to it as the newest member of the Surface family.
                </p>
              </div>
            </news-article>
          </div>
          <div class="cell cell-3">
            <news-article picturePosition="top">
              <div slot="title">Intel shows its Horseshoe Bend foldable concept</div>
              <div slot="author">By Alexis Menard</div>
              <div slot="news-picture">
                <video class="picture" autoplay loop muted playsinline>
                  <source src="images/intel-hsb.webm" type="video/webm">
                  <source src="images/intel-hsb.mp4" type="video/mp4">
                </video>
              </div>
              <div slot="text">
                Intel showed its new Horseshoe Bend prototype at CES. It's a folding PC with a foldable OLED screen.
                Unfolded the screen size is 17.3 inches making it close to a traditional laptop size.
                <div class="citation">It has a kickstand and a detachable keyboard which allow you to use the device as a monitor</div>
                You can also attach the keyboard on the bottom part of the device if you want to use it as a traditional laptop form factor.
                The added screen estate makes it perfect for productivity allowing to see more.
              </div>
            </news-article>
          </div>
          <div class="cell cell-4">
            <news-article picturePosition="left">
              <div slot="title">Samsung announces the Galaxy Fold.</div>
              <div slot="author">By Alexis Menard</div>
              <div slot="news-picture">
                <picture>
                  <source srcset="images/galaxy-fold.webp" type="image/webp">
                  <img class="picture" src="images/galaxy-fold.jpg" alt="Picture of the Samsung Galaxy Fold">
                </picture>
              </div>
              <div slot="text">
                  The Samsung Galaxy Fold is an Android-based foldable smartphone developed by Samsung Electronics.
                  Unveiled on February 20, 2019, it was released on September 6, 2019 in South Korea.
                  <p>
                    The device is capable of being folded open to expose a 7.3-inch tablet-sized flexible display,
                    while its front contains a smaller "cover" display, intended for accessing the device without opening it.
                  </p>
                  <p>
                    It's a truly futuristic device that enables new way to use the device. On the big screen you can run 3
                    applications at the same time, side by side. It also supports the "App Continuity" mode which is a way to
                    transition from the big screen to the small screen and vice-versa smoothly without restarting the application
                    (provided it's supported by the app itself).
                  </p>
              </div>
            </news-article>
          </div>
        </div>
      </div>
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
    `;
  }
}

customElements.define("main-application", MainApplication);