function validateNumMembers(input) {
    if (input.value < 1 || input.value > 20) {
        document.getElementById('party-size-error').innerHTML = 'Please enter a number between 1 and 20';
        input.value = "";
    } else {
        document.getElementById('party-size-error').innerHTML = '';
    }
}


function validateEmail(input) {
    const emailValue = input.value;
    const allowedDomains = ['gmail.com', 'hotmail.com', 'yahoo.com'];
    const domain = emailValue.split('@')[1];
    if (!allowedDomains.includes(domain)) {
        document.getElementById('email-error').innerHTML = 'Please enter a Gmail, Hotmail, or Yahoo email address';
        input.value = "";
    } else {
        document.getElementById('email-error').innerHTML = '';
    }
}