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

function addProduct() {
  let name = document.querySelector("#name").value;
  let description = document.querySelector("#description").value;
  let price = document.querySelector("#price").value;
  let category_id = document.querySelector("#category_id").value;
  let image = document.querySelector("#image").value;
  fetchMethod("POST", "http://localhost:3000/api/products/add", {
    name: name,
    description: description,
    price: price,
    category_id: category_id,
    image: image,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Product toevoegen is niet gelukt");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      window.location.href = "admin.html";
    })
    .catch((error) => {
      console.log("An error occurred:", error);
    });
}

function addCategory() {
  let category_name = document.querySelector("#category_name").value;
  fetchMethod("POST", "http://localhost:3000/api/products/add_category", {
    category_name: category_name,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Categorie toevoegen is niet gelukt");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      window.location.href = "admin.html";
    })
    .catch((error) => {
      console.log("An error occurred:", error);
    });
}

function updateProduct() {
  let product_id = document.querySelector("#product_id").value;
  let name = document.querySelector("#name").value;
  let description = document.querySelector("#description").value;
  let price = document.querySelector("#price").value;
  let category_id = document.querySelector("#category_id").value;
  fetchMethod("PUT", "http://localhost:3000/api/products/update", {
    product_id: product_id,
    name: name,
    description: description,
    price: price,
    category_id: category_id,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Product updaten is niet gelukt");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      window.location.href = "admin.html";
    })
    .catch((error) => {
      console.log("An error occurred:", error);
    });
}

function updateCategory() {
  let category_id = document.querySelector("#category_id").value;
  let category_name = document.querySelector("#category_name").value;
  fetchMethod("PUT", "http://localhost:3000/api/products/update_category", {
    category_id: category_id,
    category_name: category_name,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Categorie updaten is niet gelukt");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      window.location.href = "admin.html";
    })
    .catch((error) => {
      console.log("An error occurred:", error);
    });
}

function updateCustomer() {
  let customer_id = document.querySelector("#customer_id").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  let first_name = document.querySelector("#first_name").value;
  let last_name = document.querySelector("#last_name").value;
  let phone_number = document.querySelector("#phone_number").value;
  let address = document.querySelector("#address").value;
  let city = document.querySelector("#city").value;
  let state = document.querySelector("#state").value;
  let zip_code = document.querySelector("#zip_code").value;
  let country = document.querySelector("#country").value;
  fetchMethod("PUT", "http://localhost:3000/api/customer/update", {
    customer_id: customer_id,
    email: email,
    password: password,
    first_name: first_name,
    last_name: last_name,
    phone_number: phone_number,
    address: address,
    city: city,
    state: state,
    zip_code: zip_code,
    country: country,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Klant updaten is niet gelukt");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      window.location.href = "admin.html";
    })
    .catch((error) => {
      console.log("An error occurred:", error);
    });
}

function deleteProduct() {
  let product_id = document.querySelector("#product_id").value;
  fetch(`http://localhost:3000/api/products/delete/${product_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      product_id: product_id,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Product verwijderen is niet gelukt");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      window.location.href = "admin.html";
    })
    .catch((error) => {
      console.log("An error occurred:", error);
    });
}

function deleteCategory() {
  let category_id = document.querySelector("#category_id").value;
  fetch(`http://localhost:3000/api/products/delete_category/${category_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      category_id: category_id,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Categorie verwijderen is niet gelukt");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      window.location.href = "admin.html";
    })
    .catch((error) => {
      console.log("An error occurred:", error);
    });
}

function deleteCustomer() {
  let customer_id = document.querySelector("#customer_id").value;
  fetch(`http://localhost:3000/api/customer/delete/${customer_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      customer_id: customer_id,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Klant verwijderen is niet gelukt");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      window.location.href = "admin.html";
    })
    .catch((error) => {
      console.log("An error occurred:", error);
    });
}
