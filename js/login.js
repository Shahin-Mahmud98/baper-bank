document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.nodeValue;

    // get user password

    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    if (userEmail == 'sonaai@gmail.com ' && userPassword == 'secret') {
        console.log('valid user');
    }
})