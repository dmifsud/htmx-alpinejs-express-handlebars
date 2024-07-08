import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-component')
export class MyComponent extends LitElement {
  static styles = css`
    .container {
      @apply p-4 bg-gray-100 rounded;
    }
  `;

  @property() name = 'World';

  render() {
    return html`
      <div class="container">
        <h1>Hello, ${this.name}!</h1>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-component': MyComponent;
  }
}
