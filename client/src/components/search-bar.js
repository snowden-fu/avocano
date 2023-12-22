// SearchBar.js
import { LitElement, html, css } from 'lit';
import { MDCTextField } from '@material/textfield';

class SearchBar extends LitElement {

firstUpdated() {
    // Initialize MDC Web components when the component is first updated
    this.textField = new MDCTextField(this.shadowRoot.querySelector('.mdc-text-field'));
}

  render() {
    return html`
        <div class="search-container">
            <div class="mdc-text-field mdc-text-field--outlined">
                <input type="text" id="search-input" class="mdc-text-field__input" placeholder="Search">
                <div class="mdc-notched-outline">
                    <div class="mdc-notched-outline__leading"></div>
                    <div class="mdc-notched-outline__notch">
                        <label for="search-input" class="mdc-floating-label">Search</label>
                    </div>
                    <div class="mdc-notched-outline__trailing"></div>
                </div>
            </div>
            <button class="mdc-button mdc-button--raised" @click=${this._onSearchClick}>Search</button>
        </div>
    `;
  }

  _onSearchClick() {
    // Handle the search click event
    console.log('Search clicked!');
  }
}

customElements.define('search-bar', SearchBar);
