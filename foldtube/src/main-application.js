import { LitElement, html, css as litCSS } from 'lit';
import { adjustCSS, observe } from "viewportsegments-css-polyfill";
import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/alert/alert.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import 'foldable-device-configurator';
import { findVideo, getVideos, filterVideos } from './data.js';
import './title-bar.js';
import './video-player.js';
import './video-thumbnail.js';
import { Workbox, messageSW} from 'workbox-window';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
setBasePath('/demos/foldtube/');

const css = (strings, ...values) => {
  const string = adjustCSS(strings[0], "main-application");
  return litCSS([string], ...values);
};

export class MainApplication extends LitElement {
  static styles = css`
    :host {
      width: 100vw;
      height: 100vh;
      --background-color: #ffffff;
    }

    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
      overflow: hidden;
    }

    title-bar {
      height: 10%;
      width: 100%;
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
      overflow-y: scroll;
    }

    .grid-list {
      display: grid;
      width: 100%;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }

    video-player {
      display: none;
    }

    .fold {
      display: none;
    }

    @media (horizontal-viewport-segments: 2) {
      .grid-list {
        grid-template-columns: env(viewport-segment-width 0 0) calc(env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0)) env(viewport-segment-width 1 0);
      }

      .fold {
        display: block;
        grid-row: 1 / span 30;
        grid-column: 2;
      }
    }
  `;

  _filter;
  _swAlert;
  _wb;
  _wbRegistration = undefined;

  static get properties() {
    return { 
        videos: {type: Array, reflectToAttribute: false, attribute: true }
    }
  }
  
  set videos(videos) {
    let oldVideos = this._videos;
    this._videos = videos;
    this.requestUpdate('videos', oldVideos);
}

  get videos() { return this._videos; }

  firstUpdated() {
    this._swAlert = this.shadowRoot.querySelector('#sw-alert');
    this._player = this.shadowRoot.querySelector('#player');
    this._videoList = this.shadowRoot.querySelector('#video-list');
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
    window.onpopstate = (event) => {
      if (event.state === null) {
        this._hidePlayer();
      } else {
        const video = findVideo(event.state.video);
        if (video != null) {
          this._showPlayer();
          this._player.src = video.name;
          this._player.alt = video.alt;
          this._player.title = video.title;
          this._player.date = video.date;
          this._player.views = video.views;
          this._player.channel = video.channel;
          this._player.subscribers = video.subscribers;
          this._player.description = video.description;
          this._player.play();
        }
      }
    }
  }

  _hidePlayer() {
    this._player.closePlayer();
    this._videoList.style.display = 'grid';
  }

  _showPlayer() {
    this._player.style.display = 'inline';
    this._videoList.style.display = 'none';
  }

  constructor() {
    super();
    this._filter = '';
    this._videos = getVideos();
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

  _openVideo(element) {
    this._showPlayer();
    this._player.src = element.currentTarget.src;
    this._player.alt = element.currentTarget.alt;
    this._player.title = element.currentTarget.title;
    this._player.date = element.currentTarget.date;
    this._player.views = element.currentTarget.views;
    this._player.channel = element.currentTarget.channel;
    this._player.subscribers = element.currentTarget.subscribers;
    this._player.description = element.currentTarget.description;
    this._player.play();
    history.pushState({ video : this._player.src }, null, document.location.href + "/" + this._player.title);
  }

  _filterVideos(event) {
    this._hidePlayer();
    this._filter = event.detail.text;
    this.videos = filterVideos(this._filter);
  }

  render() {
    return html`
      <foldable-device-configurator></foldable-device-configurator>
      <div class="content">
        <title-bar @search-text-changed="${this._filterVideos}"></title-bar>
        <div class="grid-list" id="video-list">
          ${this.videos.map(videos => html`
            <video-thumbnail src="${videos.name}" alt=${videos.alt} title="${videos.title}" date="${videos.date}"
            views="${videos.views}" channel="${videos.channel}" subscribers="${videos.subscribers}" 
            description="${videos.description}" @click="${this._openVideo}">
            </video-thumbnail>
          `)}
          <div class="fold"></div>
        </div>
        <video-player id="player"></video-player>
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