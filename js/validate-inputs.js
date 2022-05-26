// read form element
const form = document.getElementById("form");
const geschlecht = document.getElementById("geschlecht");
const vorname = document.getElementById("vorname");
const nachname = document.getElementById("nachname");
const email = document.getElementById("email");
const sprachen = document.getElementById("sprachen");
const agb = document.getElementById("agb");

// Check required fields
function checkRequired(input) {
  let isRequired = false;
  if (input.value.trim() === "") {
    //error
    console.log(`${input.id} is required!`);
    isRequired = true;
  } else {
    console.log(`${input.id} is provided!`);
  }
  return isRequired;
}

// Validate form input elements
function validateForm() {
  //check required inputs
  if (!checkRequired(agb)) {
    //success .. proceed with program
  } else {
    //missing input
    console.log("Missing input");
  }
}

// Event Listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();
  //First Validate form
  validateForm();
});
