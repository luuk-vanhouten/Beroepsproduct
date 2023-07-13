import dataAcces from "../db/dataAcces.js";
let products = {};

function getProducts(request, response) {
  products = dataAcces.selectAllQuery("PRODUCTS");
  if (products) {
    response.status(200);
    response.json(products);
  } else {
    response.status(404);
    response.json(products);
  }
}

function getNameProducts(request, response) {
  products = dataAcces.selectQuery("PRODUCT_NAME", request.params.product_name);
  if (products) {
    response.status(200);
    response.json(products);
  } else {
    response.status(404);
    response.json();
  }
}

function getIdProducts(request, response) {
  products = dataAcces.selectQuery("PRODUCT_ID", request.params.product_id);
  if (products) {
    response.status(200);
    response.json(products);
  } else {
    response.status(404);
    response.json();
  }
}

function getCategoryProducts(request, response) {
  products = dataAcces.selectQuery("CATEGORY_ID", request.params.category_id);
  if (products) {
    response.status(200);
    response.json(products);
  } else {
    response.status(404);
    response.json();
  }
}

function getNameCategory(request, response) {
  products = dataAcces.selectQuery(
    "CATEGORY_NAME",
    request.params.category_name
  );
  if (products) {
    response.status(200);
    response.json(products);
  } else {
    response.status(404);
    response.json();
  }
}

const itemController = {
  getProducts: getProducts,
  getNameProducts: getNameProducts,
  getIdProducts: getIdProducts,
  getCategoryProducts: getCategoryProducts,
  getNameCategory: getNameCategory,
};

export default itemController;
