// read form element
const vorname = document.getElementById(elementId: 'vorname');
const nachname = document.getElementById(elementId: "nachname");
const email = document.getElementById(elementId: "email");
const passwort = document.getElementById(elementId: "passwort");

// Event Listeners
form.addEventListener(type: "submit" , listener: function (e:Event){
    e.preventDefault();
    alert("test");
});
