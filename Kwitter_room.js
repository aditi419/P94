//ADD YOUR FIREBASE LINKS HERE
const config = {
    apiKey: "AIzaSyA0Hkn9sa6sb_U9nTWTUjgcqY0DPSBrz8w",
    authDomain: "classtest-c96b9.firebaseapp.com",
    projectId: "classtest-c96b9",
    storageBucket: "classtest-c96b9.appspot.com",
    messagingSenderId: "8967930635",
    appId: "1:8967930635:web:d5a5d222a06a0d9ca5180e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();