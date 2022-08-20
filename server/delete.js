// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getDatabase,get,ref,remove } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzV1htp1JyfZZ1LAKoY07Gw_Y_a1_vedI",
  authDomain: "projet2-thiam.firebaseapp.com",
  databaseURL: "https://projet2-thiam-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "projet2-thiam",
  storageBucket: "projet2-thiam.appspot.com",
  messagingSenderId: "284464298641",
  appId: "1:284464298641:web:f76f97221457100f139d30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const myForm = document.getElementById('myForm');

function deleteUser(e){
    e.preventDefault();
    const userId = document.getElementById('deleteUser').value;
    if(userId.trim().length < 1){
        alert("User not found !")
    }else{
        const userRef = ref(db, "user/" + userId);
        get(userRef)
        .then((result)=>{
            if(result.exists()){
                remove(userRef)
                .then(()=>{
                    alert("USER : " + userId + "Delete successfully ! ");
                    myForm.reset();
                })
            }
        })
        .catch((error)=>{ alert("Try again, Error happend");
        console.log(error);
    });
    }

}


myForm.addEventListener('submit', (e)=>deleteUser(e));