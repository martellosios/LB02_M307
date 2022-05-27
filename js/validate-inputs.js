// read form element
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const agree = document.getElementById("agree");

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

function checkCheckbox(form) {
  console.log("checkbox checked is ", form.agree.checked);
  if (!form.agree.checked) {
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
    showError(input, "Email is not valid");
  }
}

// Check required fields
function checkRequired(inputArr) {
  let isRequired = false;
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
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
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
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
  if (!checkRequired([username, email, password, agree])) {
    checkLength(username, 3, 15);
    checkLength(password, 8, 25);
    checkEmail(email);
    checkCheckbox(agree);
  }
}

/**
 * Send form data to server
 * Info: https://stackoverflow.com/questions/4295782/how-to-process-post-data-in-node-js
 */
function sendForm() {
  const SERVER = "http://localhost:3000";
  fetch(SERVER + "/register/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username: username,
        email: email,
      },
    }),
  });
}

// Event listeners
form.addEventListener("submit", function (e) {
  //https://www.w3schools.com/jsref/event_preventdefault.asp
  e.preventDefault();
  //First validate form
  validateForm();
  //Send Data
  sendForm();
});
