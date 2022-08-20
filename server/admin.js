import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getDatabase,ref,onValue } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";

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
const db = getDatabase(app);// pour recupérer les données dans notre db firebase et l'afficher


function AffichageUsers(){
    const allUsers = ref(db, "user/");
    onValue(allUsers, (snapshot)=>{
        const data = snapshot.val();
        //console.log(data);
        //pour avoir toutes les clés
        var keys = Object.keys(data);
        for(let i = 0 ;  i < keys.length ; i++){
            var current_user = keys[i];
            var email = data[current_user].Email;
            var password = data[current_user].Password;
            var adresse = data[current_user].Adresse;
            var city = data[current_user].City;
            var zipcode = data[current_user].Zipcode;
            console.log(email,password,adresse,city,zipcode);


            var element = document.createElement("div");
            element.innerHTML = 
            '<div class="mb-3 w-75">'
            +'<i class="bi bi-person-check-fill"></i>'
            +'<span class="text-success text-decoration-underline">'+current_user+'</span>'
            +'<div>'
            +'<h3><span class="text-primary">Email :</span>'+email+'</h3>'
            +'</div>'
            +'<p class="mb-0">Town : '+adresse+'</p>'
            +'<p class="mb-0">City : '+city+'</p>'
            +'<p class="mb-0">Zip : '+zipcode+'</p>'
            document.getElementById('dashboard').appendChild(element);

        }
    })
}

AffichageUsers()