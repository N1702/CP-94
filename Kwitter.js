function add_user(){
    user_name= document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";

}
var firebaseConfig = {
    apiKey: "AIzaSyCY_t9Ry5HUjw6y5xtbscRTuCOrsJIzgn8",
    authDomain: "cp-93-8eba6.firebaseapp.com",
    databaseURL: "https://cp-93-8eba6-default-rtdb.firebaseio.com",
    projectId: "cp-93-8eba6",
    storageBucket: "cp-93-8eba6.appspot.com",
    messagingSenderId: "708598207446",
    appId: "1:708598207446:web:ff5e53ed2d7dd566958a77"
  };
  
  // Initialize Firebase
  var app = initializeApp(firebaseConfig);