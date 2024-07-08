import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('current-time')
export class CurrentTime extends LitElement {
  static styles = css`
    .fade {
      width: 100%;
      height: 4rem; /* 16px * 4 = 64px */
      background-color: green;
      animation: fadeOut 1s ease-in-out forwards;
    }

    @keyframes fadeOut {
      0% {
        background-color: green;
      }
      100% {
        background-color: transparent;
      }
    }
  `;

  now = new Date().toISOString();

  render() {
    return html`
      <small class="fade"><slot></slot>${this.now}</small>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'current-time': CurrentTime;
  }
}
