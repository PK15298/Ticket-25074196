var firebaseConfig = {
  apiKey: "AIzaSyCxQUpTTDH5Pg6rqsrxevxtfKQGSOnu8qk",
  authDomain: "kwitter-6aa58.firebaseapp.com",
  databaseURL: "https://kwitter-6aa58-default-rtdb.firebaseio.com",
  projectId: "kwitter-6aa58",
  storageBucket: "kwitter-6aa58.appspot.com",
  messagingSenderId: "407967846650",
  appId: "1:407967846650:web:8c3a915d38979acfd3f943"
};
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"

function addroom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}


function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      //Start code
      console.log("Room_Names - " + Room_names);
      row = "<div class='room_name ' id= " + Room_names + " onclick ='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
    });
  });
}
getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}