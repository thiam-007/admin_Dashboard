  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAzV1htp1JyfZZ1LAKoY07Gw_Y_a1_vedI",
    authDomain: "projet2-thiam.firebaseapp.com",
    projectId: "projet2-thiam",
    storageBucket: "projet2-thiam.appspot.com",
    messagingSenderId: "284464298641",
    appId: "1:284464298641:web:f76f97221457100f139d30"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


  const formulaire = document.getElementById("LoginForm");


  function checkLogin(e){
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email,password);

    const auth = getAuth();
    // 1er acces à auth 2eme email et 3eme au password
    // signInWithEmailAndPassword fonction predefini par firebase pour checker nos données dans notre db
    signInWithEmailAndPassword(auth, email,password)
    //si le user existe success
    .then((userCredential) => {
        console.log(userCredential);
        localStorage.setItem("cnx", "A");
        alert('Connection success');
        window.location = "../pages/admin.html";
    })
    // sinon erreur
    .catch((error) => {
        console.log(error);
        alert("Password or email invalid !")
    })
  }

  formulaire.addEventListener('submit', (e) =>checkLogin(e))