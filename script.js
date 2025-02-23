// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "api-key",
  authDomain: "login",
  projectId: "login",
  storageBucket: "login",
  messagingSenderId: "value",
  appId: "kqjef",
  measurementId: "kqwugf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Handle login form submission
const loginForm = document.getElementById("login-form");
const errorMessage = document.getElementById("error-message");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Successful login
            window.location.href = "dashboard.html"; // Redirect to the dashboard or home page
        })
        .catch((error) => {
            // Handle errors here
            errorMessage.textContent = error.message;
        });
});
