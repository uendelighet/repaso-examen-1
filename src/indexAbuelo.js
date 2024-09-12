
import * as components from './components/indexPadre.js';

class AppContainer extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
   this.shadowRoot.innerHTML += `
inút boton 
   
  }
}

customElements.define('app-container', AppContainer);