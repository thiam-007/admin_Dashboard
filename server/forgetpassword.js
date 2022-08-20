// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
  import { getAuth,sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
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
  const auth = getAuth();



  const formulaire = document.getElementById("resetPwd");

  function ResetPassword(e){
    e.preventDefault();
    const email = document.getElementById("email").value;
    console.log(email);
    if(email.trim().length === 0){
      alert("Please fill the form")
    }else{
      sendPasswordResetEmail(auth,email)
    .then(()=>{
      alert("a link has been sended to your email !");
    })
    .catch((error)=>{
      console.log(error);
      alert("Try again ! an error happen");
    })
    }
  }


  formulaire.addEventListener('submit', (e)=>ResetPassword(e))