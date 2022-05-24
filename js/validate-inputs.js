// read form element
const form = document.getElementById(elementId: 'form');
const geschlecht = document.getElementById(elementId 'geschlecht');
const vorname = document.getElementById(elementId 'vorname');
const nachname = document.getElementById(elementId 'nachname');
const email = document.getElementById(elementId 'email');
const sprachen = document.getElementById(elementId 'sprachen');

// Event Listeners
form.addEventListener(type: 'submit' , listener: function (e:Event){
    e.preventDefault();
    alert("test");
});
