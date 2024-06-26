document.getElementById('toggle-password').addEventListener('click', function() {
    var passwordInput = document.getElementById('password');
    var type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    // Toggle image based on password visibility
    this.src = type === 'password' ? 'assets/images/on.svg' : 'assets/images/off.svg';
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
