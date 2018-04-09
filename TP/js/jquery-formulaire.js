$(document).ready(function(){ 
  console.log("dom chargé");
 /*  ('#btn_validez').submit(function(event) 
      {
         alert( "Handler for .submit() called." );
        // event.preventDefault();
        if (('#nom').value =="")
       {
         alert("Veuillez saisir votre nom");
         return false;
       }
     }); 
     */
     
     $("#formulaire_client").submit(function(){
         if (('#nom').value =="")
         {
            alert("Veuillez saisir votre nom");
            return false;
       }
    });
  });