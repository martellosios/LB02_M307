// read form element
const form = document.getElementById("form");
const vorname = document.getElementById("vorname");
const nachname = document.getElementById("nachname");
const email = document.getElementById("email");
const agree = document.getElementById("agree");
const telefon = document.getElementById("telefon");
const textfeld = document.getElementById("textfeld");

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "formular-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "formular-control success";
}

// Check checkbox

function checkCheckbox(input) {
  console.log("checkbox checked is ", input.checked);
  if (!input.checked) {
    document.getElementById("checkbox-error").style.visibility = "visible";
    return false;
  } else {
    document.getElementById("checkbox-error").style.visibility = "hidden";
    return true;
  }
}

// Check email is valid
function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email ist ungültig");
  }
}

// Check phone is valid
function checkTelefon(input) {
  const re =
    /(\b(0041)|\B\+41)(\s?\(0\))?(\s)?[1-9]{2}(\s)?[0-9]{3}(\s)?[0-9]{2}(\s)?[0-9]{2}\b/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Telefonnummer ist ungültig");
  }
}

// Check required fields
function checkRequired(inputArr) {
  let isRequired = false;
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} ist erforderlich`);
      isRequired = true;
    } else {
      showSuccess(input);
    }
  });

  return isRequired;
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} muss mindestens ${min} Buchstaben lang sein`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} darf maximal ${max} Buchstaben lang sein`
    );
  } else {
    showSuccess(input);
  }
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Validate form input elements
function validateForm() {
  if (!checkRequired([vorname, nachname, email, agree, telefon, textfeld])) {
    checkLength(telefon, 10, 15);
    checkEmail(email);
    checkCheckbox(agree);
    checkTelefon(telefon);
    checkLength(textfeld, 10, 500);
  }
}

// Event listeners
form.addEventListener("submit", function (e) {
  //https://www.w3schools.com/jsref/event_preventdefault.asp
  e.preventDefault();
  //First validate form
  validateForm();
});
