$().ready(function (){
    console.log("dans fichier js - DOM charge");
    var form = $( "#formulaire_client" );//select the form
    form.validate({
        rules : {
            prenom : {
                required : true,
                minlength : 3
            },
            nom : "required",
            adresse : "required",
            cp : "required",
            ville : "required",
            telephone : "required",
            email : "required",
            login : "required",
            mdp: {
                required : true,
                
            },
            mdp2 : {
                required : true,
                equalTo : "#mdp",
            }
            
        },
        
        messages: {
            prenom : "Veuillez saisir votre prénom",
            nom : "Veuillez saisir votre nom",
            adresse : "Veuillez saisir votre adresse",
            cp : "Veuillez entrer votre code postal",
            ville : "Veuillez entrer votre ville",
            telephone : "Veuillez entrer votre numéro de téléphone",
            email : "Veuillez entrer votre email",
            login : "Veuillez saisir votre login",
            mdp : "Veuillez saisir votre mot de passe ",
            mdp2 : "Veuillez confirmer votre mot de passe"
        }, // fin messages
     
        // errorPlacement function
        // - l'etique d'erreur
        // - l'element invalide
        errorPlacement: function(error, element) {
            console.log("dans errorPlacement");
            // affichage des messagers d'erreurs
            error.appendTo(element.next().next());
        }, // fin errorPlacement*/
     
       
        // définit la class CSS dans laquelle s'affiche les messages d'erreurs
        errorClass : "error",
      
        submitHandler: function() { alert("Submitted!") }

    }); // fin de validate   
   
}); // fin de ready