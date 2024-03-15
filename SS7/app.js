// Thiết kế kết nối firebase.
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyAugehBPfp7h0k5uUtXTPNQWSH4HL3d_rQ",
    authDomain: "nps-jsi18-hb-vu.firebaseapp.com",
    projectId: "nps-jsi18-hb-vu",
    storageBucket: "nps-jsi18-hb-vu.appspot.com",
    messagingSenderId: "1059245847176",
    appId: "1:1059245847176:web:950b2773005e6a4f7ba53d"
};

 // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);