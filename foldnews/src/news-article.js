import { LitElement, html, css as litCSS } from '/web_modules/lit-element.js';
import { adjustCSS, observe } from "/web_modules/spanning-css-polyfill.js";

const css = (strings, ...values) => {
  const string = adjustCSS(strings[0], "news-article");
  return litCSS([string], ...values);
};

class NewsArticle extends LitElement {
  static styles = css`
    .item {
      min-height: 200px;
      height: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      font-family: 'Open Sans', sans-serif;
      padding: 10px;
    }

    .article-title {
      font-weight: 900;
      text-transform: uppercase;
      margin-bottom: 5px;
      text-align: center;
      font-family: 'Cinzel', serif;
      font-size: 24px;
    }

    .author {
      font-style: italic;
      margin-bottom: 10px;
    }

    .author:before {
      border-top: 2px solid black;
      width: 100%;
      content: '';
      height: 7px;
      display: block;
    }

    .author:after {
      border-bottom: 2px solid black;
      width: 100%;
      content: '';
      display: block;
      height: 7px;
    }

    .picture-container {
      width: 80%;
      margin-bottom: 10px;
      display: flex;
      justify-content: center;
    }

    .text {
      padding: 15px;
    }

    .article-content {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .large-text {
      width: 70%;
    }

    @media (min-width: 320px) and (max-width: 1024px) {
      .article-title {
        font-size: 1.2em;
      }
    }

  `;

  static get properties() {
    return { picturePosition : {type: String, reflectToAttribute: true, attribute: true} };
  }

  set picturePosition(position) {
    let oldPosition = this._picturePosition;
    this._picturePosition = position;
    const isMobile =
      window.matchMedia('(min-width: 320px) and (max-width: 1024px)').matches || false;
    if (isMobile)
      this._picturePosition = 'top';
    this.requestUpdate('picturePosition', oldPosition);
    if (this._text)
      this._togglePicturePosition();
  }

  get picturePosition() { return this._picturePosition; }

  constructor() {
    super();
    this._picturePosition = 'top';
  }

  firstUpdated() {
    this._text = this.shadowRoot.querySelector('#text');
    this._content = this.shadowRoot.querySelector('#content');
    this._togglePicturePosition();
  }

  _togglePicturePosition() {
    switch(this._picturePosition) {
      case 'left': {
          this._text.classList.add('large-text');
          this._content.style.flexDirection = 'row';
        }
        break;
      case 'right': {
        this._text.classList.add('large-text');
        this._content.style.flexDirection = 'row-reverse';
      }
      break;
      case 'top': {
        this._text.classList.remove('large-text');
        this._content.style.flexDirection = 'column';
      }
      break;
      case 'bottom': {
        this._text.classList.remove('large-text');
        this._content.style.flexDirection = 'column-reverse';
      }
      break;
    }
  }

  connectedCallback() {
    super.connectedCallback();
    observe(this);
  }

  render() {
    return html`
      <div class="item">
        <div class="article-title">
          <slot name="title"></slot>
        </div>
        <div class="author">
          <slot name="author"></slot>
        </div>
        <div class="article-content" id="content">
          <div class="picture-container">
            <slot name="news-picture"></slot>
          </div>
          <div class="text" id="text">
            <slot name="text"></slot>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define("news-article", NewsArticle);