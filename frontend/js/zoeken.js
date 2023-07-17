function searchProduct() {
  let search = document.getElementById("product").value;
  fetch(`http://localhost:3000/api/products/name/${search}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let products = data;
      let html = "";
      products.forEach((product) => {
        let htmlSegment = `
          <div class="product ">
            <h3>${product.name}</h3>
            <img src="${product.image}" height="200px" widht="200px" alt="${product.name}" />
            <p>${product.description}</p>
            <p>€${product.price}</p>
            <button onclick="goToProduct(${product.id})">Bekijk product</button>
          </div>`;
        html += htmlSegment;
      });
      let container = document.querySelector(".productSec");
      container.innerHTML = html;
    });
}

function searchCategory() {
  let name = document.getElementById("category").value;
  fetch(`http://localhost:3000/api/products/category/${name}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let products = data;
      let html = "";
      products.forEach((product) => {
        let htmlSegment = `
            <div class="product ">
              <h3>${product.name}</h3>
              <img src="${product.image}" height="200px" widht="200px" alt="${product.name}" />
              <p>${product.description}</p>
              <p>€${product.price}</p>
              <button onclick="goToProduct(${product.id})">Bekijk product</button>
            </div>`;
        html += htmlSegment;
      });
      let container = document.querySelector(".productSec");
      container.innerHTML = html;
    });
}
