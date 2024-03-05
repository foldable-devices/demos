import { LitElement, html, css as litCSS } from 'lit';
import { adjustCSS, observe } from "viewportsegments-css-polyfill";

const css = (strings, ...values) => {
  const string = adjustCSS(strings[0], "how-to-screen");
  return litCSS([string], ...values);
};

export class HowToScreen extends LitElement {
  static styles = css`
    :host {
      width: 98vw;
      height: 98vh;
      position: absolute;
      top: 1vh;
      left: 1vw;
      z-index: 4;
      font-size: 1vw;
    }

    .content {
      background: linear-gradient(to bottom, rgba(94,205,199,1) 0%, rgba(41,184,229,1) 53%, rgba(56,136,192,1) 100%);
      border-radius: 1em;
      padding: 4px;
      height: 95%;
    }

    .items {
      display: flex;
      flex-direction: column;
      background-color: white;
      border-radius: 1em;
      height: 100%;
      font-size: 1.3em;
      overflow-y: auto;
      scrollbar-width: thin;
    }

    .title {
      font-size: 1.9em;
      text-align: center;
    }

    p {
      margin: 10px;
    }

    li {
      margin-left: 10px;
      margin-bottom: 5px;
    }

    .menu-button {
      width: 15%;
      display: block;
      margin: auto;
    }

    .menu-button:hover {
      filter: drop-shadow(5px 5px 5px black) saturate(30%);
    }

    .how-to-grid {
      width: 60%;
      margin: auto;
    }

    .how-to-grid-img {
      width: 60%;
      display: block;
      margin: auto;
    }

    .ship-image {
      width: 10%;
      vertical-align: middle;
    }

    .boat-legend {
      display: inline;
    }

    @media (max-width: 1024px) and (orientation: landscape) {
      :host {
        width: 98vw;
        height: 85vh;
      }

      .items {
        font-size: 1.7em;
      }
    }

    @media (horizontal-viewport-segments: 2) {
      :host {
        width: env(viewport-segment-width 0 0);
        height: 90vh;
        top: 0;
        left: 0;
      }

      .items {
        font-size: 1.6em;
      }

      .how-to-grid {
        width: 80%;
        margin: auto;
      }

      .menu-button {
        width: 30%;
      }
    }

    @media (vertical-viewport-segments: 2) {
      :host {
        top: 0;
        left: 0;
      }

      .items {
        font-size: 2.5em;
      }

      .title {
        font-size: 2.8em;
      }

      .how-to-grid {
        width: 80%;
        margin: auto;
      }

      .how-to-grid-img {
        width: 80%;
        display: block;
        margin: auto;
      }

      .menu-button {
        width: 30%;
      }
    }
  `;

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    observe(this);
  }

  close() {
    let event = new CustomEvent('howto-closed', {
      bubbles: true,
      composed: true });
    this.dispatchEvent(event);
  }

  render() {
    return html`
      <div class="content">
        <div class="items">
          <div class="title">Summary</div>
          <p>
            FoldShip is a game where you try to guess the oponent's ships location and sink them.
            Each player has two grids in front of them : yours, where your own ships are placed and
            the opponent's grid, which starts empty. Each grid has vertical and horizontal coordinates. 
          </p>
          <p>The mechanic of the game is simple: each player
            take turn firing at the coordinate of their choice to try to find the opponent's ships.
          </p>
          <div class="title">Setup</div>
          <p>
            Each player have their ship positioned in their grid. The setup is as follow:
          </p>
          <p>
            <picture class="how-to-grid">
              <source srcset="images/grid-how-to.webp" type="image/webp">
              <img class="how-to-grid-img" src="images/grid-how-to.png" alt="example of fold ship grid"/>
            </picture>
          </p>
          <p>
            Each ship can receive a certain amount of hits before they sink. Here are all
            the ships in the game:
          </p>
          <li>
            <div class="boat-legend">
              <picture>
              <source srcset="images/carrier-top-horizontal.webp" type="image/webp">
              <img class="ship-image" src="images/carrier-top-horizontal.webp" alt="picture of a carrier ship"/>
              </picture>
              &rarr; carrier (5 hits before sinking)
            </div>
          </li>
          <li>
            <div class="boat-legend">
              <picture>
                <source srcset="images/battleship-top-horizontal.webp" type="image/webp">
                <img class="ship-image" src="images/battleship-top-horizontal.webp" alt="picture of a battleship"/>
              </picture>
              &rarr; battleship (4 hits before sinking)
            </div>
          </li>
          <li>
          <picture>
            <source srcset="images/destroyer-top-horizontal.webp" type="image/webp">
            <img class="ship-image" src="images/destroyer-top-horizontal.webp" alt="picture of a destroyer ship"/>
            </picture>
            &rarr; destroyer (3 hits before sinking)
          </li>
          <li>
          <picture>
            <source srcset="images/submarine-top-horizontal.webp" type="image/webp">
            <img class="ship-image" src="images/submarine-top-horizontal.webp" alt="picture of a submarine ship"/>
            </picture>
            &rarr; submarine (3 hits before sinking)
          </li>
          <li>
          <picture>
            <source srcset="images/rescue-top-horizontal.webp" type="image/webp">
            <img class="ship-image" src="images/rescue-top-horizontal.webp" alt="picture of a rescue ship"/>
            </picture>
            &rarr; rescue (2 hits before sinking)
          </li>
          <div class="title">Gameplay</div>
          <p>
            Each player takes turns firing shots in an attempt to find the opponent's ships.
            In FoldShip just click into the square you want to fire at. If you hit an opponent's
            boat it will display a red circle. However if you hit the water it will display a white
            circle. If you hit a boat you can fire again.
            The first player who sink the five boats first wins.
          </p>
          <picture>
            <source srcset="images/close-button.webp" type="image/webp">
            <img class="menu-button" src="images/close-button.png" @click="${this.close}" alt="image of a close button"/>
          </picture>
        </div>
      </div>
    `;
  }
}

customElements.define("how-to-screen", HowToScreen);