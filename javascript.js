const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");
const button = document.getElementById("createacc");
const error = document.getElementById("error");

button.addEventListener("click", () => {
    if (password.value !== cpassword.value) {
        console.log("Passwords do not match");
        error.classList.add("show");
    } else {
        console.log("Passwords fine");
        error.classList.remove("show");
    }
});


//if (password === cpassword)
