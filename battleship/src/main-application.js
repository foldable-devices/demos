import { LitElement, html, css as litCSS, customElement } from '../web_modules/lit-element.js';
import { classMap } from '../web_modules/lit-html/directives/class-map.js';
import { adjustCSS, observe } from "../web_modules/spanning-css-polyfill.js";
import { PlayerGrid } from "./player-grid.js";

const css = (strings, ...values) => {
  const string = adjustCSS(strings[0], "main-application");
  return litCSS([string], ...values);
};

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

    .content {
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 100vw;
      height: 100vh;
    }

    .stripes {
      height: 250px;
      width: 200px;
      background-size: 40px 40px;
    }

    .angled {
      background-color: #737373;
      background-image:
        linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%,
        transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%,
        transparent 75%, transparent);
    }

    .fold {
      height: 100vh;
      width: 15px;
    }

    .enemy-fleet {
      background-image: url("images/ocean.png");
      width: 50%;
      height: 100%;
    }

    .fleet {
      background-image: url("images/ocean.png");
      width: 50%;
      height: 100%;
    }

    @media (spanning: single-fold-vertical) {
      .fold {
        height: env(fold-height);
        width: env(fold-width);
      }

      .content {
        flex-direction: row;
      }

      .enemy-fleet {
        width: env(fold-left);
        height: 100vh;
      }

      .fleet {
        height: 100vh;
        width: calc(100vw - env(fold-left) - env(fold-width));
      }
    }

    @media (spanning: single-fold-horizontal) {
      .fold {
        height: env(fold-height);
        width: env(fold-width);
      }

      .content {
        flex-direction: column;
      }

      .enemy-fleet {
        height: var(--zenbook-span2-height, env(fold-top));
        width: 100vw;
      }

      .fleet {
        width: 100vw;
        height: var(--zenbook-span1-height, calc(100vh - env(fold-top) - env(fold-height)));
      }
    }

    @media (spanning: none) {
      .fold {
        height: 100vh;
        width: 15px;
      }

      .content {
        flex-direction: row;
      }
    }
  `;

  firstUpdated() {
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    observe(this);
  }
  render() {
    return html`
      <div class="content">
        <div class="enemy-fleet">
          <player-grid></player-grid>
        </div>
        <div class="fold angled stripes"></div>
        <div class="fleet">
          <player-grid></player-grid>
        </div>
      </div>
    `;
  }
}

customElements.define("main-application", MainApplication);