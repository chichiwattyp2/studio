const fileHolderTemplate = `
  <style>
    .image-placeholder {
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 23.75em;
      height: 23.75em;
      background: var(--passive-color);
      border: 1px solid var(--passive-color-dark);
      box-sizing: border-box;
      border-radius: 5px;
      font-family: Chakra Petch;
      font-style: normal;
      font-weight: 600;
      font-size: 1.25em;
      line-height: 25px;
      color: var(--passive-color-dark);
      cursor: pointer;
    }
  </style>

  <div>
    <div class="image-placeholder">
      Click to upload
    </div>
  </div>`;

class FileHolder extends HTMLElement {
    constructor() {
        super();

        var shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = fileHolderTemplate;
    }

    connectedCallback() {
        this.classList.add('pages-content-element');
    }
}

customElements.define('file-holder', FileHolder);
