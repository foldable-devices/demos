import { LitElement, html, css as litCSS } from 'lit';
import { adjustCSS, observe } from "viewportsegments-css-polyfill";
import './side-bar.js';
import './comments-section.js';

const css = (strings, ...values) => {
    const string = adjustCSS(strings[0], "video-player");
    return litCSS([string], ...values);
};

export class VideoPlayer extends LitElement {
    static styles = css`
        :host {
            width: 100%;
            height: 100%;
            z-index: 2;
        }

        title-bar {
            height: 10%;
            width: 100%;
        }

        .root {
            background-color: #ffffff;
            width: 100%;
            height: 100%;
        }

        .content {
            display: flex;
            flex-direction: row;
            align-self: center;
        }

        .video-container {
            display: flex;
            flex-direction: column;
            padding: 10px;
            width: 60%;
        }

        #close {
            position: absolute;
            top: 10px;
            right: 20px;
            font-size: 2rem;
            z-index: 3;
        }

        .title {
            margin: 10px;
            font-size: 1.5rem;
            font-weight: bold;
        }

        .channel-video-actions {
            display: flex;
            flex-direction: row;
            justify-items: center;
        }

        .channel-text {
            font-size: 1rem;
            font-weight: bold;
            display: flex;
            align-items: center;
        }

        .channel-image {
            border-radius: 50%;
            height: 48px;
        }

        .channel {
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        .channel-details {
            display: flex;
            flex-direction: column;
            margin: 5px;
        }

        .subscribers {
            font-size: 0.7rem;
            color: #747474;
        }

        .video-actions {
            font-size: 2rem;
            background-color: #d9d9d9;
            border-radius: 20px;
            margin-left: 5px;
            margin-bottom: 5px;
        }

        .subscribe {
            margin-left: 50px;
        }

        .grow {
            flex-grow: 2;
        }

        .description-box {
            background-color: #d9d9d9;
            border-radius: 20px;
            padding: 10px;
            margin-top: 10px;
        }

        .stats {
            font-size: 0.8rem;
            font-weight: bolder;
        }

        .description {
            margin-top: 5px;
            font-weight: lighter;
            font-size: 0.9rem;
        }

        .fold {
            display: none;
        }

        side-bar {
            width: 40%;
        }

        @media (horizontal-viewport-segments: 2) {
            .video-container {
                width: env(viewport-segment-width 0 0);
            }

            .fold {
                display: block;
                width: calc(env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0));
            }

            side-bar {
                width: env(viewport-segment-width 1 0);
            }
        }
    `;

    static get properties() {
        return { 
            src: {type: String, reflectToAttribute: true, attribute: true },
            alt: {type: String, reflectToAttribute: true, attribute: true },
            title: {type: String, reflectToAttribute: true, attribute: true },
            channel: {type: String, reflectToAttribute: true, attribute: true },
            views: {type: String, reflectToAttribute: true, attribute: true },
            subscribers: {type: String, reflectToAttribute: true, attribute: true },
            date: {type: String, reflectToAttribute: true, attribute: true },
            description: {type: String, reflectToAttribute: true, attribute: true }
        };
    }

    set src(src) {
        let oldSrc = this._src;
        this._src = src;
        this._video.load();
        this.requestUpdate('src', oldSrc);
        this.play();
    }
    
    get src() { return this._src; }

    set alt(alt) {
        let oldAlt = this._alt;
        this._alt = alt;
        this.requestUpdate('alt', oldAlt);
    }
    
    get alt() { return this._alt; }

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

    set description(description) {
        let oldDescription = this._description;
        this._description = description;
        this.requestUpdate('description', oldDescription);
    }
    
    get description() { return this._description; }

    firstUpdated() {
        this._video = this.shadowRoot.querySelector('#video');
        this._source = this.shadowRoot.querySelector('#source');
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
    }

    connectedCallback() {
        super.connectedCallback();
        observe(this);
    }

    play() {
        this._video.play();
    }

    closePlayer() {
        this._video.pause();
        this.shadowRoot.host.style.display = "none";
    }

    _openVideo(event) {
        this._video.pause();
        const video = event.detail.video;
        this.src = video.src;
        this.alt = video.alt;
        this.title = video.title;
        this.date = video.date;
        this.views = video.views;
        this.channel = video.channel;
        this.subscribers = video.subscribers;
        this.description = video.description;
        this._video.play();
        const currentUrl = document.location.href;
        history.pushState({ video : this.src }, null, 
            currentUrl.substring(0, currentUrl.lastIndexOf('/')) + "/" + this.title);
    }

    render() {
        return html`
            <div class="root">
                <div class="content">
                    <div class="video-container">
                        <video preload="metadata" alt="${this.alt}" controls id="video">
                            <source src="videos/${this.src}.mp4" type="video/mp4" id="source">
                        </video>
                        <div class="title">${this.title}</div>
                        <div class="channel-video-actions">
                            <div class="channel">
                                <picture>
                                    <source srcset="images/channels/${encodeURI(this.channel)}.webp" type="image/webp">
                                    <img class="channel-image" src="images/channels/${this.channel}.png" alt="picture of the channel"/>
                                </picture>
                                <div class="channel-details">
                                    <div class="channel-text">${this.channel}</div>
                                    <div class="subscribers">${this.subscribers} subscribers</div>
                                </div>
                            </div>
                            <sl-icon-button class="video-actions subscribe" name="bell" label="subscribe"></sl-icon-button>
                            <div class="grow"></div>
                            <sl-icon-button class="video-actions" name="hand-thumbs-up" label="like"></sl-icon-button>
                            <sl-icon-button class="video-actions" name="hand-thumbs-down" label="dislike"></sl-icon-button>
                            <sl-icon-button class="video-actions" name="share" label="share"></sl-icon-button>
                        </div>
                        <div class="description-box">
                            <div class="stats">${this.views} views ${this.date} ago</div>
                            <div class="description">${this.description}</div>
                        </div>
                        <comments-section></comments-section>
                    </div>
                    <div class="fold"></div>
                    <side-bar @video-selected="${this._openVideo}"></side-bar>
                </div>
            </div>
        `;
    }
}
customElements.define("video-player", VideoPlayer);