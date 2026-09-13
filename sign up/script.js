// ========================================
// LANDRECORD SIGN UP
// ========================================


// PASSWORD
const password =
    document.getElementById("password");


// CONFIRM PASSWORD
const confirmPassword =
    document.getElementById("confirmPassword");


// PASSWORD SHOW/HIDE
const showPassword =
    document.getElementById("showPassword");


// CONFIRM PASSWORD SHOW/HIDE
const showConfirmPassword =
    document.getElementById("showConfirmPassword");


// ========================================
// SHOW PASSWORD
// ========================================

showPassword.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";

        this.textContent = "◉";

    } else {

        password.type = "password";

        this.textContent = "◉";

    }

});


// ========================================
// SHOW CONFIRM PASSWORD
// ========================================

showConfirmPassword.addEventListener(
    "click",
    function () {

        if (confirmPassword.type === "password") {

            confirmPassword.type = "text";

            this.textContent = "◉";

        } else {

            confirmPassword.type = "password";

            this.textContent = "◉";

        }

    }
);


// ========================================
// SIGN UP FORM
// ========================================

const signupForm =
    document.getElementById("signupForm");


signupForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const fullName =
            document.getElementById(
                "fullName"
            ).value.trim();


        const email =
            document.getElementById(
                "email"
            ).value.trim();


        const username =
            document.getElementById(
                "username"
            ).value.trim();


        const passwordValue =
            password.value;


        const confirmPasswordValue =
            confirmPassword.value;


        const terms =
            document.getElementById(
                "terms"
            ).checked;


        // -------------------------------
        // FULL NAME
        // -------------------------------

        if (fullName.length < 2) {

            alert(
                "Please enter your full name."
            );

            return;
        }


        // -------------------------------
        // EMAIL
        // -------------------------------

        if (!email) {

            alert(
                "Please enter your email address."
            );

            return;
        }


        // -------------------------------
        // USERNAME
        // -------------------------------

        if (username.length < 3) {

            alert(
                "Username must be at least 3 characters."
            );

            return;
        }


        // -------------------------------
        // PASSWORD
        // -------------------------------

        if (passwordValue.length < 6) {

            alert(
                "Password must contain at least 6 characters."
            );

            return;
        }


        // -------------------------------
        // PASSWORD MATCH
        // -------------------------------

        if (
            passwordValue !==
            confirmPasswordValue
        ) {

            alert(
                "Passwords do not match. Please try again."
            );

            confirmPassword.focus();

            return;
        }


        // -------------------------------
        // TERMS
        // -------------------------------

        if (!terms) {

            alert(
                "Please agree to the Terms & Conditions and Privacy Policy."
            );

            return;
        }


        // -------------------------------
        // SUCCESS
        // -------------------------------

        alert(
            `Welcome to LandRecord, ${fullName}!`
        );


        console.log({
            fullName: fullName,
            email: email,
            username: username
        });

    }
);