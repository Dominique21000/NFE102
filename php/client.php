
<?php
	$erreur = false;
	if ($action == "validation") {
			$nom = $_POST ["nom"];
			$prenom = $_POST ["prenom"];
			$email = $_POST ["email"];

			// *******************************************
			// Tests Données 
			// ....
			// *******************************************

			$erreur = true;
			
			// ...
	
			if ($erreur) $smarty->display("$page.tpl");
			else {
				$client = new Client ();
				$client->setNom($nom);

			// ...
				
				$client->save ();
				$smarty->display("CompteClient.tpl");
			}
	} else $smarty->display("$page.tpl");
?>
