import { LitElement, html, css as litCSS } from 'lit';
import { adjustCSS, observe } from "viewportsegments-css-polyfill";
import { getComments } from './data.js';

const css = (strings, ...values) => {
    const string = adjustCSS(strings[0], "comments-section");
    return litCSS([string], ...values);
};

export class CommentsSection extends LitElement {
    static styles = css`
        .root {
            margin-top: 30px;
        }

        .name-image {
            border-radius: 50%;
            height: 48px;
            width: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            /* background-color: #46ac3f; */
            color: white;
            font-weight: bold;
            text-transform: uppercase;
            font-size: 1.5rem;
            text-align: center;
        }

        .comments-header {
            margin-bottom: 10px;
        }

        .comment-container {
            display: flex;
            flex-direction: row;
        }

        .comment-details {
            display: flex;
            flex-direction: column;
            margin: 5px;
            margin-left: 15px;
        }

        .name-details {
            font-weight: bold;
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        .date-details {
            font-size: 0.8rem;
            color: #747474;
            margin-left: 5px;
        }
        
        .like-section {
            display: flex;
            flex-direction: row;
            margin-top: 5px;
        }

        .comment-text {
            font-weight: normal;
            font-size: 0.9rem;
            margin-top: 5px;
        }
    `;

connectedCallback() {
    super.connectedCallback();
    observe(this);
}

_random_color() {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    return "rgb(" + x + "," + y + "," + z + ")";
}

render() {
    return html`
        <div class="root">
            <div class="comments-header">${getComments().length} comments</div>
            ${getComments().map(comments => html`
                <div class="comment-container">
                    <div class="name-image" style="background-color: ${this._random_color()};">
                        ${comments.name[0]}
                    </div>
                    <div class="comment-details">
                        <div class="name-details">
                            ${comments.name} 
                            <div class="date-details">${comments.date} ago</div>
                        </div>
                        <div class="comment-text">${comments.comment}</div>
                        <div class="like-section">
                            <div class="date-details">
                            <sl-icon-button class="video-actions" name="hand-thumbs-up" label="like"></sl-icon-button> ${comments.likes} 
                            <sl-icon-button class="video-actions" name="hand-thumbs-down" label="dislike"></sl-icon-button> ${comments.dislikes}</div>
                        </div>
                    </div>
                </div>
            `)}
        </div>
        `;
}
}
customElements.define("comments-section", CommentsSection);