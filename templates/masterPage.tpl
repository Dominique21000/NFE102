<!DOCTYPE html>
<html>
<head>
	<!-- -->
	
</head>
<body>
	<div id="logo">LOGO</div>
	<div id="header">MY Lib</div>
	<div id="totem">Menu <br/>
		<ul>
			<li/><a href="index.php?page=accueil">Accueil</a>
		<br/>
			<li/><a href="index.php?page=catalogue">Catalogue</a>
		<br/>
			<li/><a href="index.php?page=client">Client</a>
		</ul>
	</div>
	</div>
	<div id="body">{block name="title"}{$smarty.block.child}{/block}</div>
	<div id="info">PANIER  <span id="nbPanier"></span></div>
	<div id="footer">FOOTER</div>

</body>
