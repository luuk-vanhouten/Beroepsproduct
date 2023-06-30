import dataAcces from "../db/dataAcces.js";
let classes = {};

function getProducts(request, response) {
  classes = dataAcces.selectQuery0Params("product");
  if (classes) {
    response.status(200);
    response.json(classes);
  } else {
    response.status(404);
    response.json(classes);
  }
}

function getNameProducts(request, response) {
  classes = dataAcces.selectQuery1Param("product", request.params.product_name);
  if (classes) {
    response.status(200);
    response.json(classes);
  } else {
    response.status(404);
    response.json();
  }
}

function getIdProducts(request, response) {
  classes = dataAcces.selectQuery1Param("product", request.params.product_id);
  if (classes) {
    response.status(200);
    response.json(classes);
  } else {
    response.status(404);
    response.json();
  }
}

function getCategoryProducts(request, response) {
  classes = dataAcces.selectQuery1Param("category", request.params.category_id);
  if (classes) {
    response.status(200);
    response.json(classes);
  } else {
    response.status(404);
    response.json();
  }
}

function getNameCategory(request, response) {
  classes = dataAcces.selectQuery1Param(
    "category",
    request.params.category_name
  );
  if (classes) {
    response.status(200);
    response.json(classes);
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
