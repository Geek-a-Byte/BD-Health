  const username= document.getElementById('username');
  const email= document.getElementById('email_id');
  const message= document.getElementById('subject');
      // Your web app's Firebase configuration
    // initialize firebase
    var firebaseConfig = {
        apiKey: "AIzaSyDQqtJGLAyJdeWvm28B-hMNxOwwuW4ferY",
        authDomain: "bd-health-637cc.firebaseapp.com",
        databaseURL: "https://bd-health-637cc.firebaseio.com",
        projectId: "bd-health-637cc",
        storageBucket: "bd-health-637cc.appspot.com",
        messagingSenderId: "737021719272",
        appId: "1:737021719272:web:aa1b836a2c66b8cfc04f5d"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    //rootref is the whole realtime database
    
    const rootRef=firebase.database().ref();
    //commentsref is just the comments data in the database
    const commentsRef=rootRef.child('/contacts/');
    
    //list for click on submit button
    document.getElementById('ContactBtn').addEventListener('click',function(){
             //replace line breaks in comment with br tags
             var newComment=message.value.replace(/\n/g,"<br>");
             //define a new,keyed post
             var newPostRef=commentsRef.push();//if we want to edit the comment then it is necessary to have a key to that comment
             //fill the new keyed post with data
             if(username.value!=""){
             newPostRef.set({
                 name: username.value.trim(),
                 comment:newComment.trim(),
                 email:email.value.trim(),
                 when: firebase.database.ServerValue.TIMESTAMP
                })
            }
            alert("message sent successfully");
    })
   