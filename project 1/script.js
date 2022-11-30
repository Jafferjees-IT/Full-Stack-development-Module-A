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
// Function Check reqiurd data
function checkRequird(inputArray){
    inputArray.forEach(function(input){
       if(input.value===''){
        //showError(input, input.id +' is Required');
       // showError(input, `${input.id} is Required`);
       showError(input, `${getFieldID(input)} is Required`);
       }
       else
       {
        showSuccess(input);
       }
    });
}
// Function to det the id of the input field
function getFieldID(input){

    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}

// Event Listener
// Create event listener for Submit Button
form.addEventListener('submit', function(e) {
    // stop reload on submit
    e.preventDefault();

    // Check required field not empty
    // check if name is empty
    checkRequird([username,email,password,password2])
});