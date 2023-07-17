class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `  
      <footer>
      <ul>
        <li><a href="nee.html">Voorwaarden</a></li>
        <li><a href="nee.html">Over ons</a></li>
        <li><a href="nee.html">Contactinfo</a></li>
      </ul>
    </footer>
      `;
  }
}

customElements.define("footer-component", Footer);
