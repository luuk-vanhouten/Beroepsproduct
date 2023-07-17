class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <nav>
      <ul>
        <li class="left"><a href="home-pagina.html">Home</a></li>
        <li class="left"><a href="zoek-pagina.html">Zoeken</a></li>
        <li class="right"><a href="login.html">Login</a></li>
        <li class="right"><a href="nee.html">Contact</a></li>
        <li class="right"><a href="admin.html">Admin</a></li>
      </ul>
    </nav>
    `;
  }
}

customElements.define("navbar-component", Navbar);
