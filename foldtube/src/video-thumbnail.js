import { LitElement, html, css as litCSS } from 'lit';
import { adjustCSS, observe } from "viewportsegments-css-polyfill";

const css = (strings, ...values) => {
    const string = adjustCSS(strings[0], "video-thumbnail");
    return litCSS([string], ...values);
};

export class VideoThumbnail extends LitElement {
    static styles = css`
        :host {
            width: 100%;
            height: 100%;
            cursor: pointer;
        }

        .root {
            display: flex;
            align-items: center;
            margin: 10px;
        }

        .vertical {
            flex-direction: column;
            margin-left: 10px;
        }

        .horizontal {
            flex-direction: row;
        }

        video {
            width: 100%;
            border-radius: 10px;
        }

        .video-horizontal {
            width: 50%;
        }

        .title {
            font-size: 1.2rem;
            font-weight: bold;
        }

        .channel {
            font-size: 0.8rem;
            color: #747474;
            margin-top: 10px;
        }

        .stats {
            margin-top: 4px;
            font-size: 0.8rem;
            color: #747474;
        }

        .channel-image {
            border-radius: 50%;
            height: 40px;
            margin-right: 10px;
        }
        
        .details {
            width: 100%;
            display: flex;
            flex-direction: row;
            margin-top: 10px;
        }

        .hidden {
            display: none;
        }
    `;

    static get properties() {
        return { 
            src: {type: String, reflectToAttribute: true, attribute: true },
            title: {type: String, reflectToAttribute: true, attribute: true },
            channel: {type: String, reflectToAttribute: true, attribute: true },
            views: {type: String, reflectToAttribute: true, attribute: true },
            subscribers: {type: String, reflectToAttribute: true, attribute: true },
            date: {type: String, reflectToAttribute: true, attribute: true },
            alt: {type: String, reflectToAttribute: true, attribute: true },
            description: {type: String, reflectToAttribute: true, attribute: true },
            horizontalLayout: {type: Boolean, reflectToAttribute: true, attribute: true }
        };
    }

    set src(src) {
        let oldSrc = this._src;
        this._src = src;
        this.requestUpdate('src', oldSrc);
    }
    
    get src() { return this._src; }

    set title(title) {
        let oldTitle = this._title;
        this._title = title;
        this.requestUpdate('title', oldTitle);
    }
    
    get title() { return this._title; }

    set channel(channel) {
        let oldChannel = this._channel;
        this._channel = channel;
        this.requestUpdate('channel', oldChannel);
    }
    
    get channel() { return this._channel; }

    set views(views) {
        let oldViews = this._views;
        this._views = views;
        this.requestUpdate('views', oldViews);
    }
    
    get views() { return this._views; }

    set subscribers(subscriber) {
        let oldSubscribers = this._subscribers;
        this._subscribers = subscriber;
        this.requestUpdate('subscribers', oldSubscribers);
    }
    
    get subscribers() { return this._subscribers; }

    set date(date) {
        let oldDate = this._date;
        this._date = date;
        this.requestUpdate('date', oldDate);
    }
    
    get date() { return this._date; }

    set alt(alt) {
        let oldAlt = this._alt;
        this._alt = alt;
        this.requestUpdate('alt', oldAlt);
    }
    
    get alt() { return this._alt; }

    set description(description) {
        let oldDescription = this._description;
        this._description = description;
        this.requestUpdate('description', oldDescription);
    }
    
    get description() { return this._description; }

    set horizontalLayout(horizontalLayout) {
        let oldHorizontalLayout = this._horizontalLayout;
        this._horizontalLayout = horizontalLayout;
        this.requestUpdate('horizontalLayout', oldHorizontalLayout);
    }
    
    get horizontalLayout() { return this._horizontalLayout; }

    firstUpdated() {
    }

    constructor() {
        super();
        this._src = '';
        this._alt = '';
        this._title = '';
        this._channel = '';
        this._views = '';
        this._date = '';
        this._subscribers = '';
        this._description = '';
        this._horizontalLayout = false;
    }

    connectedCallback() {
        super.connectedCallback();
        observe(this);
    }

    render() {
        return html`
            <div class="root ${this.horizontalLayout ? "horizontal": "vertical"}">
                <video preload="metadata" alt="${this.alt}" class="${this.horizontalLayout ? "video-horizontal": ""}">
                    <source src="${this.src}.mp4#t=0.5" type="video/mp4">
                </video>
                <div class="details">
                    <picture>
                        <source srcset="images/channels/${encodeURI(this.channel)}.webp" type="image/webp">
                        <img class="channel-image ${this.horizontalLayout ? "hidden": ""}" src="images/channels/${this.channel}.png" alt="picture of the channel"/>
                    </picture>
                    <div class="${this.horizontalLayout ? "vertical": ""}">
                        <div class="title">${this.title}</div>
                        <div class="channel">${this.channel}</div>
                        <div class="stats">${this.views} views &bull; ${this.date} ago</div>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define("video-thumbnail", VideoThumbnail);