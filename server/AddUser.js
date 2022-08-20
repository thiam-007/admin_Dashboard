// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getDatabase,ref,set } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzV1htp1JyfZZ1LAKoY07Gw_Y_a1_vedI",
  databaseURL: "https://projet2-thiam-default-rtdb.europe-west1.firebasedatabase.app/",
  authDomain: "projet2-thiam.firebaseapp.com",
  projectId: "projet2-thiam",
  storageBucket: "projet2-thiam.appspot.com",
  messagingSenderId: "284464298641",
  appId: "1:284464298641:web:f76f97221457100f139d30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const myForm = document.getElementById("myForm");

function submitForm(e){
    e.preventDefault();
    //! Retourner tous les inputs
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const adresse = document.getElementById("adresse").value;
    const city = document.getElementById("city").value;
    const zipcode = document.getElementById("zipcode").value;
    console.log(email,password,adresse,city,zipcode);
    //! teste sur les inputs
    if(email.trim().length === 0 || password.trim().length === 0 || adresse.trim().length === 0 || city.trim().length === 0 || zipcode.trim().length === 0) {
        alert("Remplissez tous les champs SVP ! ");
    }else{
        //!  Send Data to database function and clear form
        createUser(email,password,adresse,city,zipcode);
        alert("User created successfully :D !");
        myForm.reset();
    }
}


//! envoyer les données dans notre base de donnée firebase et l'implémentation de la function createuser
//! ref prend 2 paramètre le db et le nom du dossier
//! math.floor pour transformer les nombres en entier
function createUser(email,password,adresse,city,zipcode){
    const db = getDatabase();
    set(ref(db,'user/'+email.slice(0,4)+Math.floor(Math.random()*100).toString()),{
        Email : email,
        Password : password,
        Adresse : adresse,
        City : city,
        Zipcode : zipcode
    })
}

myForm.addEventListener('submit',(e)=>submitForm(e))