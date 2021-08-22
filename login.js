
document.getElementById('submit-button').addEventListener('click', function () {
    console.log('clicked');
    const email = document.getElementById('email-field').value;
    const pass = document.getElementById('password-field').value;
    if (email == '0909maruf@gmail.com' && pass == '12345') {
        window.location.href = 'banking.html';
    }
})