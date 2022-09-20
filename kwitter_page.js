//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
      apiKey: "AIzaSyBW9cOx0EibPgkLSIXcRSNwMDZQF0sQbSM",
      authDomain: "twitter-b4e87.firebaseapp.com",
      databaseURL: "https://twitter-b4e87-default-rtdb.firebaseio.com",
      projectId: "twitter-b4e87",
      storageBucket: "twitter-b4e87.appspot.com",
      messagingSenderId: "462806726522",
      appId: "1:462806726522:web:8f16ca34a8df61394bc8c3",
      measurementId: "G-VSXVYZYRMD"
    };
    
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send () {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            user_name:user_name,
            msg:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
            window.location = "index.html";
}