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

    _videoClicked(element) {
        let event = new CustomEvent('video-selected', {
            detail: { message: 'search text changed', video: element.currentTarget },
            bubbles: true,
            composed: true });
        this.dispatchEvent(event);
    }

    render() {
        return html`
            <div class="root">
                ${getVideos().map(videos => html`
                    <video-thumbnail src="${videos.name}" alt=${videos.alt} title="${videos.title}" date="${videos.date}"
                    views="${videos.views}" channel="${videos.channel}" subscribers="${videos.subscribers}" 
                    description="${videos.description}" @click="${this._videoClicked}" horizontalLayout>
                    </video-thumbnail>
                `)}
            </div>
            `;
    }
}
customElements.define("side-bar", SideBar);