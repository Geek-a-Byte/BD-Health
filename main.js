// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyA6vq9w8iRMWHkcvkP0NnlwYQCXAvYYKsg",
  authDomain: "bddoctors-cbe89.firebaseapp.com",
  databaseURL: "https://bddoctors-cbe89.firebaseio.com",
  projectId: "bddoctors-cbe89",
  storageBucket: "bddoctors-cbe89.appspot.com",
  messagingSenderId: "870175170976",
  appId: "1:870175170976:web:63b8d5197cca734dd604c5",
  measurementId: "G-R4SFKSMNPL",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var messagesRef = firebase.database().ref("contactformmessages");

$("#contactForm").submit(function (e) {
  e.preventDefault();

  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: $(".fullname").val(),
    email: $(".email").val(),
    subject: $(".subject").val(),
    message: $(".message").val(),
  });

  $(".success-message").show();

  $("#contactForm")[0].reset();
});
