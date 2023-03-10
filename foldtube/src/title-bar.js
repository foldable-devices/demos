import { LitElement, html, css as litCSS } from 'lit';
import { adjustCSS, observe } from "viewportsegments-css-polyfill";

const css = (strings, ...values) => {
    const string = adjustCSS(strings[0], "title-bar");
    return litCSS([string], ...values);
};

export class TitleBar extends LitElement {
    static styles = css`
    :host{
        position: sticky;
        top: 0;
    }
    .root {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: white;
    }
    .search {
        margin: auto;
        flex-grow: 2;
        margin: 4px;
    }

    .logo {
        font-size: 2rem;
    }

    .icon {
        font-size: 2rem;
        margin: 4px;
    }
    `;

    _searchInput;

    connectedCallback() {
        super.connectedCallback();
        observe(this);
    }

    firstUpdated() {
        this._searchInput = this.shadowRoot.querySelector('#search-input');
    }

    _redirectToHomePage() {
        document.location.href='/';
    }

    _textChanged() {
        let event = new CustomEvent('search-text-changed', {
            detail: { message: 'search text changed', text: this._searchInput.value },
            bubbles: true,
            composed: true });
        this.dispatchEvent(event);
    }

    render() {
        return html`
            <div class="root">
                <sl-icon-button src="images/play-button.svg" label="FoldTube" class="logo" @click="${this._redirectToHomePage}"></sl-icon-button>
                <sl-input id="search-input" placeholder="Search" size="medium" pill class="search" @sl-change="${this._textChanged}">
                    <sl-icon name="search" slot="suffix" @click="${this._textChanged}"></sl-icon>
                </sl-input>
                <sl-icon name="bell" class="icon"></sl-icon>
                <sl-icon name="person" class="icon"></sl-icon>
            </div>
            `;
    }
}
customElements.define("title-bar", TitleBar);