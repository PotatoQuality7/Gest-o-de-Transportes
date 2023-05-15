<?php

$user = 'Timana';
$pass = 'Timana';
$db = 'GestaoTransportes';
$dbc = new mysqli('localhost',$user,$pass,$db);

$sql = "UPDATE Usuarios SET Estado='Fantasma' WHERE CodUsuario=".$_SESSION['codUsuario'];
mysqli_query($dbc,$sql);

$sql = "DELETE * FROM Cores WHERE CodUsuario=".$_SESSION['codUsuario'];
mysqli_query($dbc,$sql);

$sql = "DELETE * FROM Preferencias WHERE CodUsuario=".$_SESSION['codUsuario'];
mysqli_query($dbc,$sql);

$_SESSION['deletado'] = 1;

?>
<!DOCTYPE html>
<html>
  <head>
    <title>Tela de Login</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="assets/Login/styles.css">
  </head>
  <body>
   <script>
 	let usuario = JSON.parse(sessionStorage.getItem("usuario"));
	switch (usuario.estatuto) {
		case "Passageiro": window.location = '../TelaPassageiro/index.html'; break;
		case "Gerente": window.location = '../TelaGerente/index.html'; break;
		case "Administrador": window.location = '../TelaAdministrador/index.html'; break;
	}
   </script>
 </body>
</html>
