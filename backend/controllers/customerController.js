import dataAccess from "../db/dataAccess.js";

let classes = {};

function registerCustomer(request, response) {
  // console.log(request);
  const first_name = request.body.first_name;
  const last_name = request.body.last_name;
  const email = request.body.email;
  const password = request.body.password;
  const phone_number = request.body.phone_number;
  const address = request.body.address;
  const city = request.body.city;
  const state = request.body.state;
  const zip_code = request.body.zip_code;
  const country = request.body.country;
  const customerAdd = dataAccess.registerNewCustomer(
    first_name,
    last_name,
    email,
    password,
    phone_number,
    address,
    city,
    state,
    zip_code,
    country
  );
  response.json(customerAdd);
}

function loginCustomer(request, response) {
  classes = dataAccess.loginCustomer(request.body.email, request.body.password);
  if (classes && classes.length > 0) {
    response.status(200);
    response.json("Ingelogd");
  } else {
    response.json("Email of wachtwoord is onjuist");
    response.status(404);
  }
}

function updateCustomer(request, response) {
  const customerUpdate = dataAccess.updateCustomer(
    request.body.customer_id,
    request.body.first_name,
    request.body.last_name,
    request.body.email,
    request.body.password,
    request.body.phone_number,
    request.body.address,
    request.body.city,
    request.body.state,
    request.body.zip_code,
    request.body.country
  );
  response.status(200);
  response.json(customerUpdate);
}

function deleteCustomer(request, response) {
  const customerDel = dataAccess.deleteCustomer(request.params.customer_id);
  response.status(200);
  response.json(customerDel);
}

const functions = {
  registerCustomer: registerCustomer,
  loginCustomer: loginCustomer,
  updateCustomer: updateCustomer,
  deleteCustomer: deleteCustomer,
};

export default functions;
