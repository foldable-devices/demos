import { LitElement, html, css as litCSS } from 'lit';

import { adjustCSS, observe } from "viewportsegments-css-polyfill";

const css = (strings, ...values) => {
    const string = adjustCSS(strings[0], "email-panel");
    return litCSS([string], ...values);
};

export class EmailPanel extends LitElement {
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
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      border-bottom: solid 2px #f3eeee;
      align-content: center;
    }

    .email-header {
      height: 10%;
      border-bottom: solid 2px #f3eeee;
      margin: 5px;
    }

    .email-content {
      height: 80%;
      margin: 5px;
    }

    .button-bar {
      background-color: #edecec;
      height: 5%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      font-size: 25px;
    }

    @media (max-width: 1024px) {
      .button-bar {
        height: 7%;
      }

       .email-header {
         height: 13%;
      }
    }

    @media (vertical-viewport-segments: 2) and (device-posture: folded) and (max-width: 1024px) {
       .email-header {
         height: 20%;
      }

      .button-bar {
        height: 15%;
      }
    }
    
    .from {
      font-weight: bold;
      margin-bottom: 3px;
    }

    .to, .title {
      margin-bottom: 3px;
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
            <div class="button-bar">
                <sl-icon-button name="envelope" label="Fetch Email"></sl-icon-button>
                <sl-icon-button name="pencil-square" label="New Email"></sl-icon-button>
                <sl-icon-button name="trash" label="Trash Email"></sl-icon-button>
                <sl-icon-button name="archive" label="Archive Email"></sl-icon-button>
                <sl-icon-button name="reply" label="Reply"></sl-icon-button>
                <sl-icon-button name="reply-all" label="Reply All"></sl-icon-button>
                <sl-icon-button name="forward" label="Forward Email"></sl-icon-button>
                <div class="spacer"></div>
            </div>
            <div class="email-header">
                <div class="from">From: Alexis Menard</div>
                <div class="title">This is an urgent message</div>
                <div class="to">To: GDG Tampa</div>
            </div>
            <div class="email-content">
            Hi GDG,<br>
            <br>
            I'm trying to contact you urgently about your extended warranty coverage.
            Please call me back or reply this email.
            <br><br>
            Alexis Menard,
            <br><br>
            123-134-1234

            </div>
        </div>
    `;
  }
}

customElements.define("email-panel", EmailPanel);