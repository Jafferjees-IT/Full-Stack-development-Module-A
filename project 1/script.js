// Retriveing HTML elements from the DOM
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 =document.getElementById('password2');

// functions
function showError(input, message) {
    const formcontrol = input.parentElement;
    formcontrol.
    alert(formcontrol.value);
}

// Event Listener
// Create event listener for Submit Button
form.addEventListener('submit', function(e) {
    // stop reload on submit
    e.preventDefault();

    // check if name is empty
    if(username.value === '')
    {
        showError();
    }
   
});