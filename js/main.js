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
