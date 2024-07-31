
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAXiAUCS05r4DtNdzWATp5--NM2Md5Ky70",
  authDomain: "solehearted-b49bd.firebaseapp.com",
  projectId: "solehearted-b49bd",
  storageBucket: "solehearted-b49bd.appspot.com",
  messagingSenderId: "122391533309",
  appId: "1:122391533309:web:d9e27a6b55710331dc5094",
  measurementId: "G-7C6RSSLDY5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = "en"
const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("google-login");
googleLogin.addEventListener("click", function () {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user);
      window.location.href = "../dist/index2.html";
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    })
})
const googleLogin1 = document.getElementById("google-login1");
googleLogin1.addEventListener("click", function () {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user);
      window.location.href = "../dist/index2.html";
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    })

})
