// // import {
// //     getAuth,
// //     createUserWithEmailAndPassword,
// //     sendEmailVerification
// // } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// // const auth = getAuth(app);

// const checking = {};

// // firebase.auth().createUserWithEmailAndPassword(email, password)
// // .then((userCredential) => {
// //     let user = userCredential.user
// // })
// // .catch((error) => {
// //     let errorCode = error.code;
// //     let errorMessage = error.message;
// // });

// checking.check = (mainData) => {
//     if(mainData.email == "") {
//         document.getElementById("emailError").innerHTML = "Please input your email";
//     } else {
//         document.getElementById("emailError").innerHTML = "";
//     }

//     if(mainData.password == "") {
//         document.getElementById("passwordError").innerHTML = "Please input your password";
//     } else {
//         document.getElementById("passwordError").innerHTML = "";
//     }

//     if(mainData.rpPassword != mainData.password) {
//         document.getElementById("rpPasswordError").innerHTML = "Please confirm your password";
//     } else {
//         document.getElementById("rpPasswordError").innerHTML = "";
//     }
// }

// These samples are intended for Web so this import would normally be
// done in HTML however using modules here is more convenient for
// ensuring sample correctness offline.
import firebase from "firebase/app";
import "firebase/auth";

function signInWithEmailPassword() {
  var email = "test@example.com";
  var password = "hunter2";
  // [START auth_signin_password]
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  // [END auth_signin_password]
}

function signUpWithEmailPassword() {
  var email = "test@example.com";
  var password = "hunter2";
  // [START auth_signup_password]
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
  // [END auth_signup_password]
}

function sendEmailVerification() {
  // [START auth_send_email_verification]
  firebase.auth().currentUser.sendEmailVerification()
    .then(() => {
      // Email verification sent!
      // ...
    });
  // [END auth_send_email_verification]
}

function sendPasswordReset() {
  const email = "sam@example.com";
  // [START auth_send_password_reset]
  firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
      // Password reset email sent!
      // ..
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
  // [END auth_send_password_reset]
}