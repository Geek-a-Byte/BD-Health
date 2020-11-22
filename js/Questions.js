
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
   
    const  QuesRef=rootRef.child('Questions');
    const  AnsRef=rootRef.child('Replies');
    //list for click on submit button

    document.getElementById('submitQuestion').addEventListener('click',function(){
             //replace line breaks in comment with br tags
             var newQues=document.getElementById('txQues').value.replace(/\n/g,"<br>");
             //define a new,keyed post
             var newQuesRef=QuesRef.push();//if we want to edit the comment then it is necessary to have a key to that comment
             //fill the new keyed post with data
             if(document.getElementById('QuesName').value!=""){
             newQuesRef.set({
                 name: document.getElementById('QuesName').value.trim(),
                 Question:newQues.trim(),
                 frompage2:location.pathname,//necessary bcoz we want to know the location where the commentor commented
                 when: firebase.database.ServerValue.TIMESTAMP
                })
            }
    })
   

   
    function showPastQuestions(){
        var showat=document.getElementById('pastques');
        //get comments whose frompage equals this page's pathname
        var QuesRef=firebase.database().ref('Questions/').orderByChild('frompage2').equalTo(location.pathname);
        QuesRef.once('value',function(snapshot){
                   snapshot.forEach(function(itemSnapshot){
                        //get the object for one snapshot
                        var itemData=itemSnapshot.val();
                        var comment=itemData.Question;
                        var name=itemData.name;
                        if(name=="")
                        {
                            name="anonymous";
                        }
                        var when=new Date(itemData.when).toLocaleDateString("en-us");
                        showat.innerHTML+="<li>"+comment+"<span> -- "+name +" (" +when +
                            ")<span>"+"<button id=\"reply\" onClick=\"createDiv()\">Reply</button>"+"</li>";
                   })
        })
    }
    // g = document.createElement('div');
    //g.setAttribute("id", "Div1");
    var text;
    function createDiv() {
        var div = document.createElement('div');
        div.setAttribute("id", "Div1");
        var id = $(this).attr('Div1');
        div.innerHTML = document.getElementById('replyText').innerHTML;
        $("#"+id).css({"width": "50px", "height": "30px","background-color":"red"});
        var showat=document.getElementById('pastques');
        showat.appendChild(div);
        text= document.getElementById('txAns').value;        
    }
        document.getElementById('submitAns').addEventListener('click',function(){
             //replace line breaks in comment with br tags
             var newAns=text.replace(/\n/g,"<br>");
             console.log(newAns);
             //define a new,keyed post
             var newAnsRef=AnsRef.push();//if we want to edit the comment then it is necessary to have a key to that comment
             //fill the new keyed post with data
             if(document.getElementById('AnsName').value!=""){
             newAnsRef.set({
                 name: document.getElementById('AnsName').value.trim(),
                 Answer:newAns.trim(),
                 frompage3:location.pathname,//necessary bcoz we want to know the location where the commentor commented
                 when: firebase.database.ServerValue.TIMESTAMP
                })
            }
    })
     document.getElementById('cancel').addEventListener('click',function(){
             //replace line breaks in comment with br tags
              $('#replyText').parent().remove();
    })
     function showReplies(){
        var showat=document.getElementById('replyToPastQuestions');
        //get comments whose frompage equals this page's pathname
        var replyRef=firebase.database().ref('Replies/').orderByChild('frompage3').equalTo(location.pathname);
        replyRef.once('value',function(snapshot){
                   snapshot.forEach(function(itemSnapshot){
                        //get the object for one snapshot
                        var itemData=itemSnapshot.val();
                        var comment=itemData.Answer;
                        var name=itemData.name;
                        if(name=="")
                        {
                            name="anonymous";
                        }
                        var when=new Date(itemData.when).toLocaleDateString("en-us");
                        showat.innerHTML+="<li>"+comment+"<span> -- "+name +" (" +when +
                            ")<span>"+"</li>";
                   })
        })
    }
    //called when page first opens and also after submit button click
    
    showPastQuestions()
    showReplies()

