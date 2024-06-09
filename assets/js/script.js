document.getElementById('toggle-password').addEventListener('click', function() {
    var passwordInput = document.getElementById('password');
    var type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.textContent = type === 'password' ? '👁️' : '🙈';
});

function checkPassword() {
    const correctPassword = "yourpassword"; // Change this to your desired password
    const enteredPassword = document.getElementById("password").value;

    if (enteredPassword === correctPassword) {
        document.getElementById("login-form").style.display = "none";
        document.getElementById("content").style.display = "block";
    } else {
        alert("Incorrect password. Please try again.");
    }
}
