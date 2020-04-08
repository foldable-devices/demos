import { LitElement, html, css, customElement } from '../web_modules/lit-element.js';

export class PlayerGrid extends LitElement {
  static styles = css`
    :host {
      width: 100%;
      height: 100%;
      display: flex;
    }

    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

    .item{
      border: solid 1px white;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .grid {
      display: grid;
      width: 100%;
      height: 100%;
      grid-template-columns: repeat(11, 1fr);
      grid-template-rows: repeat(11, 1fr);
    }
  `;

  firstUpdated() {
  }

  constructor() {
    super();
  }

  render() {
    const grid = [
      ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      ['A', '', '', '', '', '', '', '', '', '', ''],
      ['B', '', '', '', '', '', '', '', '', '', ''],
      ['C', '', '', '', '', '', '', '', '', '', ''],
      ['D', '', '', '', '', '', '', '', '', '', ''],
      ['E', '', '', '', '', '', '', '', '', '', ''],
      ['F', '', '', '', '', '', '', '', '', '', ''],
      ['G', '', '', '', '', '', '', '', '', '', ''],
      ['H', '', '', '', '', '', '', '', '', '', ''],
      ['I', '', '', '', '', '', '', '', '', '', ''],
      ['J', '', '', '', '', '', '', '', '', '', ''],
    ];
    return html`
      <div class="grid">
          ${grid.map(row => 
            row.map( cell => html`
              <div class="item">${cell}</div>
            `)
          )}
      </div>
    `;
  }
}

customElements.define("player-grid", PlayerGrid);