function fetchMethod(method, url, data) {
  return fetch(url, {
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

function fetchProducts() {
  fetch("http://localhost:3000/api/products/all")
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

function goToProduct(id) {
  localStorage.setItem("selectedProduct", id);
  window.location.href = "product-pagina.html";
}

document.querySelector(".product").addEventListener("click", function (event) {
  event.preventDefault();
  const productID = localStorage.getItem("selectedProduct");
  if (productID) {
    fetchSingleProduct(productID);
  }
});

function fetchSingleProduct(id) {
  fetch(`http://localhost:3000/api/products/id/${id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let html = `
        <h1 class="title" id="name">${data.name}</h1>
        <img class="image" src="${data.image}" alt="${data.name}" width="250px" height="250px" id="image" />
        <h4 class="price" id="price">€${data.price}</h4>
        <button class="order-button">Order Now</button>
        <p class="description" id="description">${data.description}</p>`;
      let container = document.querySelector(".product");
      container.innerHTML = html;
      localStorage.removeItem("selectedProduct");
    });
}

// function fetchSingleProduct(id) {
//   fetch(`http://localhost:3000/api/products/id/${id}`)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       let html = `
//         <h1 class="titel" id="name">${data.name}</h1>
//         <img class="afbeelding" src="${data.image}" alt="${data.name}" width="250px" height="250px" id="image" />
//         <h4 class="prijs" id="price">€${data.price}</h4>
//         <button class="bestel-knop">Bestellen</button>
//         <p class="beschrijving" id="description">${data.description}</p>`;
//       let container = document.querySelector(".product");
//       container.innerHTML = html;
//       localStorage.removeItem("selectedProduct");
//     });
// }
