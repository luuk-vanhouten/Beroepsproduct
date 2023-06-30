class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `  
      <footer>
      <ul>
        <li><a href="voorwaarden-pagina.html">Voorwaarden</a></li>
        <li><a href="over-ons-pagina.html">Over ons</a></li>
        <li><a href="contact-pagina.html">Contactinfo</a></li>
      </ul>
    </footer>
      `;
  }
}

customElements.define("footer-component", Footer);
