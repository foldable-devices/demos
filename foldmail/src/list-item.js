import { LitElement, html, css as litCSS } from 'lit';

import { adjustCSS, observe } from "viewportsegments-css-polyfill";

const css = (strings, ...values) => {
    const string = adjustCSS(strings[0], "list-item");
    return litCSS([string], ...values);
};

export class ListItem extends LitElement {
    static styles = css`
        :host {
            width: 100%;
            height: 100%;
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
            flex-direction: column;
            border-bottom: solid 2px #f3eeee;
            padding: 4px;
        }

        .header-name {
            font-weight: bold;
            font-size: 1rem;
            margin: 5px 5px 0px 5px;
        }

        .title {
            font-size: 0.9rem;
            margin: 5px 3px 0px 5px;
        }

        .preview {
            font-size: 0.7rem;
            color: gray;
            margin: 5px 3px 0px 5px;
        }
    `;

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
                <div class="header-name">Alexis Menard</div>
                <div class="title">This is an urgent message</div>
                <div class="preview">I'm trying to contact you urgently about your extended
                    warranty coverage. Please call me back or reply this email</div>
            </div>
        `;
    }
}

customElements.define("list-item", ListItem);