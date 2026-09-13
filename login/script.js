// ========================================
// PASSWORD SHOW / HIDE
// ========================================

const passwordInput =
    document.getElementById("password");

const togglePassword =
    document.getElementById("togglePassword");


togglePassword.addEventListener("click", function () {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        this.textContent = "◉";

    } else {

        passwordInput.type = "password";

        this.textContent = "◉";

    }

});


// ========================================
// LOGIN FORM
// ========================================

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get entered username/email
    const username = document.getElementById("email").value.trim();

    // Save username so the landing page can display it
    localStorage.setItem("username", username);
    localStorage.setItem("isLoggedIn", "true");

    // Go to landing page
    window.location.href = "../landing page/landing.html";
});

// ========================================
// SOCIAL LOGIN BUTTONS
// ========================================

const socialButtons =
    document.querySelectorAll(".social-btn");


socialButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        console.log(
            this.innerText.trim() +
            " login clicked"
        );

        // Connect Google/Microsoft
        // OAuth authentication here.

    });

});