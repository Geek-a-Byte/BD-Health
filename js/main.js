  const username= document.getElementById('username');
  const patientusername= document.getElementById('patient-username');
  const email= document.getElementById('email_id');
  const patientemailId= document.getElementById('patient-email');
  const password= document.getElementById('password');
  const patientpassword= document.getElementById('patient-password');
  const designation= document.getElementById('Designation');
  const addUserBtn= document.getElementById('addBtn');
  const addPatientBtn= document.getElementById('addPatientBtn');
  const hospital= document.getElementById('hospital');
  const role= document.getElementById('role');
  const patientrole= document.getElementById('patient-role');
  const contactno= document.getElementById('phone');
  const address= document.getElementById('address');
  const Signinrole=document.getElementById('Signinrole');
  const Signinemail=document.getElementById('Signinemail_id');
  const Signinpassword=document.getElementById('Signinpassword');
  const database =firebase.database();

  addUserBtn.addEventListener('click',(e)=>{
         e.preventDefault();
           database.ref('/Doctors/'+username.value).set({    
           username: username.value,           
           role:role.value,           
           password: password.value,
           hospital: hospital.value,
           designation: designation.value, 
           contactno: contactno.value,
           address:address.value,
           email:  email.value,
         });
         
       window.location.reload()
        
  });



   addPatientBtn.addEventListener('click',(e)=>{
         e.preventDefault();
           database.ref('/Patients/'+username.value).set({
         
           username: patientusername.value,           
           role:patientrole.value,           
           password: patientpassword.value,
           
           
        

         });
         
       window.location.reload()
        
  });

//   var leadsRef = database.ref('');
// leadsRef.on('value', function(snapshot) {
//     snapshot.forEach(function(childSnapshot) {
//       var childData = childSnapshot.val();
//     });
// });


// var userId = firebase.auth().currentUser.uid;
// return firebase.database().ref('/Doctors/' + username.value).once('value').then((snapshot) => {
//   var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
//   // ...
// });

        //get comments whose frompage equals this page's pathname

       
        SigninBtn.addEventListener('click',(e)=>{
         e.preventDefault();
            var DoctorRef=firebase.database().ref('Doctors/');
            var PatientRef=firebase.database().ref('Patients/');
        DoctorRef.once('value',function(snapshot){
                   snapshot.forEach(function(itemSnapshot){
                        //get the object for one snapshot
                        var itemData=itemSnapshot.val();
                        var comment=itemData.comment ;
                        // var name=itemData. username;
                        var email=itemData. email;
                        var password=itemData. password;
                        var role=itemData. role;
                        
                        if(email==Signinemail.value && password==Signinpassword.value && role==Signinrole.value)
                        {
                          alert("User Verified");
                          //  window.location.reload();
                           if(role=="Doctor")
                           {
                              window. location. replace("../Doctor/DocPortal.html");
                           }
                           else if(role=="Patient")
                           {
                              window. location. replace("../Patient/PatientPortal.html");
                           }
                         
                        }
                        // else
                        // {
                        //   alert("User Not Verified");
                        //   console.log("user not found")
                        // }

                        
                   })
        })
       PatientRef.once('value',function(snapshot){
                   snapshot.forEach(function(itemSnapshot){
                        //get the object for one snapshot
                        var itemData=itemSnapshot.val();
                        var password=itemData.password;
                        var role=itemData.role;
                        
                        if( password==Signinpassword.value && role==Signinrole.value)
                        {
                          alert("User Verified");
                          //  window.location.reload();
                        
                           if(role=="Patient")
                           {
                              window. location. replace("../Patient/PatientPortal.html");
                           }
                         
                        }
                        // else
                        // {
                        //   alert("User Not Verified");
                        //   console.log("user not found")
                        // }

                        
                   })
        })
         
      
        
  });
