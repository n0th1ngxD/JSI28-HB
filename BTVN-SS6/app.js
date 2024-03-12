// import {
//     getAuth,
//     createUserWithEmailAndPassword,
//     sendEmailVerification,
// } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";

// const auth = getAuth(app);

const mainForm = document.getElementById("mainForm");

mainForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const mainData = {
        email: mainForm.email.value.trim(),
        password: mainForm.password.value.trim(),
        rpPassword: mainForm.rpPassword.value.trim(),
    };

    // alert("oK")
    console.log(mainData);
    checking.check(mainData);
});