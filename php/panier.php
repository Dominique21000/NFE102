<?php
	session_start();
	if ($action == "ajout" && isset ($_GET["id"])) {

		if (!isset($_SESSION ["panier"])) {
			$panier = array ();
			
		} else {
			$panier = $_SESSION ["panier"];
		}
		
		$panier [count($panier)] = $_GET["id"];
		$_SESSION ["panier"] = $panier;

	} 
	$nb = count($panier);
	
	// Retour en JSON du nbre d'element dans le panier
	echo ("{\"panier\" : $nb}");
	
?>
