 var firebaseConfig = {

      apiKey: "AIzaSyBCO7QWMtdy7wpaO52G_spOh2axBc6tD9I",
    
      authDomain: "kwitter-41263.firebaseapp.com",
    
      databaseURL: "https://kwitter-41263-default-rtdb.firebaseio.com",
    
      projectId: "kwitter-41263",
    
      storageBucket: "kwitter-41263.appspot.com",
    
      messagingSenderId: "481491400108",
    
      appId: "1:481491400108:web:afdc403c3014bf2f4eb609"
    
    };
    
    
    // Initialize Firebase
    
     firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
