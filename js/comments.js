
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
    const commentsRef=rootRef.child('comments');
    
    //list for click on submit button
    document.getElementById('submitComment').addEventListener('click',function(){
             //replace line breaks in comment with br tags
             var newComment=document.getElementById('txComment').value.replace(/\n/g,"<br>");
             //define a new,keyed post
             var newPostRef=commentsRef.push();//if we want to edit the comment then it is necessary to have a key to that comment
             //fill the new keyed post with data
             if(document.getElementById('commentorName').value!=""){
             newPostRef.set({
                 name: document.getElementById('commentorName').value.trim(),
                 comment:newComment.trim(),
                 frompage:location.pathname,//necessary bcoz we want to know the location where the commentor commented
                 when: firebase.database.ServerValue.TIMESTAMP
                })
            }
    })
   

    function showPastcomments(){
        var showat=document.getElementById('pastcomments');
        //get comments whose frompage equals this page's pathname
        var commentsRef=firebase.database().ref('comments/').orderByChild('frompage').equalTo(location.pathname);
        commentsRef.once('value',function(snapshot){
                   snapshot.forEach(function(itemSnapshot){
                        //get the object for one snapshot
                        var itemData=itemSnapshot.val();
                        var comment=itemData.comment ;
                        var name=itemData.name;
                        if(name=="")
                        {
                            name="anonymous";
                        }
                        var when=new Date(itemData.when).toLocaleDateString("en-us");
                        showat.innerHTML+="<li>"+comment+"<span> -- "+name +" (" +when +
                            ")<span></li>";
                   })
        })
    }
   
    //called when page first opens and also after submit button click
    showPastcomments()
    
