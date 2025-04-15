
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const password = loginForm.password.value;

    if (password === "NOUSMASSETER") {
        alert("You have successfully entered the password.");
        window.location.href = "https://ka-denz.github.io/NM_password/";;
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})