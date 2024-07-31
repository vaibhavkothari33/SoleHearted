
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

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


const user = auth.currentUser;

function updateUserProfile(user) {
    const userName = "Hello "+" "+user.displayName;
    // const userEmail = user.email;
    const userProfilePicture = user.photoURL;
    const userProfilePicture1 = user.photoURL;

    document.getElementById("userName").textContent = userName;
    // document.getElementById("userEmail").textContent = userEmail;
    document.getElementById("userProfilePicture").src = userProfilePicture;
    document.getElementById("userProfilePicture1").src = userProfilePicture1;
}
onAuthStateChanged(auth, (user) => {
    if (user) {
        updateUserProfile(user);
        const uid = user.uid;
        return uid;
    }
    else {
        alert("Create Account first & login");
        window.location.href = "../dist/index1.html";
    }
})
// updateUserProfile()