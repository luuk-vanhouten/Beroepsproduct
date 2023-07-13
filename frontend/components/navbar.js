class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <nav>
      <ul>
        <li class="left"><a href="home-pagina.html">Home</a></li>
        <li class="left"><a href="categorieën-pagina.html" onclick="">Categorieën</a></li>
        <li class="right"><a href="login.html">Login</a></li>
        <li class="right"><a href="contact-pagina.html">Contact</a></li>
        <li class="zoek-icon"><i class="fa-solid fa-magnifying-glass"></i></li>
        <li class="right"><input type="text" placeholder="Zoeken..." id="zoeken"/></li>
      </ul>
    </nav>
    `;
  }
}

customElements.define("navbar-component", Navbar);
