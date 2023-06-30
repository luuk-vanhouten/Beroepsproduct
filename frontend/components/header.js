class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `   
    <header>
      <a href="home-pagina.html">
        <img
          src="../images/Logo.png"
          alt="Dikke kat logo"
          width= 250px
          height= 33px
        />
      </a>
    </header>
    `;
  }
}

customElements.define("header-component", Header);
