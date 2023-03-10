import { LitElement, html, css as litCSS } from 'lit';
import { adjustCSS, observe } from "viewportsegments-css-polyfill";
import { getVideos } from './data.js';

const css = (strings, ...values) => {
    const string = adjustCSS(strings[0], "side-bar");
    return litCSS([string], ...values);
};

export class SideBar extends LitElement {
    static styles = css`
        .root {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
        }
    `;

    connectedCallback() {
        super.connectedCallback();
        observe(this);
    }

    render() {
        return html`
            <div class="root">
                ${getVideos().map(videos => html`
                    <video-thumbnail src="${videos.name}" alt=${videos.alt} title="${videos.title}" date="${videos.date}"
                    views="${videos.views}" channel="${videos.channel}" subscribers="${videos.subscribers}" 
                    description="${videos.description}" @click="${this._openVideo}" horizontalLayout>
                    </video-thumbnail>
                `)}
            </div>
            `;
    }
}
customElements.define("side-bar", SideBar);