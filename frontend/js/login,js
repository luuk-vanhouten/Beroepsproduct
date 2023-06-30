document.querySelector("#login").addEventListener("click", function (event) {
  event.preventDefault();
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  fetch(`http://localhost:3000/api/Login/email/${email}/password/${password}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Het inloggen is niet gelukt");
      }
      return response.json();
    })
    .then((data) => {
      document.querySelector("#status").innerHTML = data;
    })
    .catch((error) => {
      console.log("An error occurred:", error);
    });
});
