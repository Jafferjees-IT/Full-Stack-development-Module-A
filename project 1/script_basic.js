// Retriveing HTML elements from the DOM (Document Object Model)
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// functions start from 1:00:00
function showError(input, message){
    // Get the parent element of the input field (.from-control)
    const formControl = input.parentElement;
    // override the class  - add error
    formControl.className = 'form-control error';
    // Get the small element for the error message
    const small = formControl.querySelector('small');
    // override the text for small message
    small.innerText = message;
}

// Function to update class for success
function showSuccess(input){
    // Get the parent element of the input field (.from-control)
    const formControl = input.parentElement;
    // override the class  - add error
    formControl.className = 'form-control success';

}

function isValidEmail(email){
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

// Event Listener
// Create event listener for Submit Button
form.addEventListener('submit', function(e) {
    // stop reload on submit
    e.preventDefault();

    // Check required field not empty
    // check if name is empty
    if(username.value === '') {
        showError(username, 'Username is Requird');
    }
    else {
        showSuccess(username);
    }
   
    if(email.value === '') {
        showError(email, 'Email is Requird');
    } else if(!isValidEmail(email.value)) {
        showError(email, 'Invalid Email Address');
    }
    else {
        showSuccess(email);
    }

    if(password.value === '') {
        showError(password, 'Password is Requird');
    }
    else {
        showSuccess(password);
    }

    if(password2.value === '') {
        showError(password2, 'Confirm Password1 is Requird');
    }
    else {
        showSuccess(password2);
    }
});