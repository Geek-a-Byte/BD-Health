//   var e = document.getElementById("Signinrole");
//   var value=e.selectElement.options[e.selectedIndex].value;// get selected option value
//   var Signinrole=e.options[e.selectedIndex].text;//get the selected option text
//   //document.getElementById("Signinrole").selectedIndex = 1;
//   console.log(Signinrole);
var Signinrole;
 
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
  
  const patientrole= document.getElementById('patient-role');
  const contactno= document.getElementById('phone');
  const address= document.getElementById('address');
//   const Signinrole=document.getElementById('Signinrole');
  const Signinemail=document.getElementById('Signinemail_id');
  const Signinpassword=document.getElementById('Signinpassword');
  
  
  const database =firebase.database();

  addUserBtn.addEventListener('click',(e)=>{
         e.preventDefault();
           database.ref('/Doctors/'+username.value).set({    
           username: username.value,           
                   
           password: password.value,
           hospital: hospital.value,
           designation: designation.value, 
           contactno: contactno.value,
           address:address.value,
           email:  email.value,
         });
        
  document.querySelector('.alert').style.display = 'block';
   setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);
  
    setTimeout(function(){
    // document.location.href="./index.html";
    window.location.reload();
  },3050);

       
  });

 
   addPatientBtn.addEventListener('click',(e)=>{
         e.preventDefault();
           database.ref('/Patients/'+patientusername.value).set({
         
           username: patientusername.value,           
             
           password: patientpassword.value,
           email: patientemailId.value,

         }
         );
       
       window.location.reload()
        
  });

 
  
        

        var flag=1;
       
        SigninBtn.addEventListener('click',(e)=>{
           var el = document.querySelector("#Signinrole");
           Signinrole = el.value;
         e.preventDefault();
            var Ref;
             if(Signinrole=="Doctor"){
            Ref=firebase.database().ref('Doctors/');
            Ref.once('value',function(snapshot){
                   snapshot.forEach(function(itemSnapshot){
                        //get the object for one snapshot
                        var itemData=itemSnapshot.val();
                        console.log(itemData.email);
                        console.log(itemData.password);
                       
                        // var name=itemData. username;
                        var email=itemData.email;
                        var password=itemData.password;
                        
                        // console.log(email);
                        // console.log(password);
                        console.log(Signinemail.value);
                        console.log(Signinpassword.value);
                        
                        
                        if(email==Signinemail.value && password==Signinpassword.value)
                        {
                         
                          //  window.location.reload();
                         
                              alert("User Verified");
                              // window. location. replace("../Doctor/DocPortal.html");
                              // window. location. replace("https://geek-a-byte.github.io/BD-Health/Doctor/DocPortal.html");
                                setTimeout(function(){
                                   document.location.href="https://geek-a-byte.github.io/BD-Health/Doctor/DocPortal.html";
                                  //  window.location.reload();
                                       },1000);
                              console.log("user found");
                              flag=0;
                          
                         
                        }
                       
                       

                        
                   })
                        if(flag!=0)
                        {
                          alert("User Not Verified");
                          console.log("user not found");
                           
                        }
        })
      }
            else if(Signinrole=="Patient"){
               console.log(Signinrole);
            Ref=firebase.database().ref('Patients/');
            Ref.once('value',function(snapshot){
                   snapshot.forEach(function(itemSnapshot){
                        //get the object for one snapshot
                        var itemData=itemSnapshot.val();
                        console.log(itemData.email);
                        console.log(itemData.password);
                       
                        // var name=itemData. username;
                        var email=itemData.email;
                        var password=itemData.password;
                        
                        // console.log(email);
                        // console.log(password);
                        console.log(Signinemail.value);
                        console.log(Signinpassword.value);
                        
                        
                        if(email==Signinemail.value && password==Signinpassword.value)
                        {
                         
                          //  window.location.reload();
                         
                              alert("User Verified");
                              // window. location. replace("../Patient/PatientPortal.html");
                              // window. location. replace("https://geek-a-byte.github.io/BD-Health/Patient/PatientPortal.html");
                               setTimeout(function(){
                                   document.location.href="https://geek-a-byte.github.io/BD-Health/Patient/PatientPortal.html";
                                  //  window.location.reload();
                                       },1000);
                              console.log("user found");
                              flag=0;
                          
                         
                        }
                       

                        
                   })
                        if(flag!=0)
                        {
                          alert("User Not Verified");
                          console.log("user not found");
                           
                        }
        })
      }
      else
      {
         alert("User Not Verified");
         console.log("user not found");
      }
     
         
      
        
  });
