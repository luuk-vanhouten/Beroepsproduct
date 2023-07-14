document.querySelector("#registreren").addEventListener("click", (event) => {
  event.preventDefault();
  console.log("registreren");
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

  fetch(`http://localhost:3000/api/customer`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
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
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Registreren is niet gelukt");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log("An error occurred:", error);
    });
});
