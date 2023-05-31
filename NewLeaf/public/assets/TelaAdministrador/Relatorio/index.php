<?php

$user = 'Timana';
$pass = 'Timana';
$db = 'GestaoTransportes';
$dbc = new mysqli('localhost',$user,$pass,$db);

$sql = "SELECT * FROM Usuarios u INNER JOIN Email e ON u.CodUsuario=e.CodUsuario INNER JOIN Login l ON u.CodUsuario=l.CodUsuario WHERE u.Estado='Activo' AND Fim IS NULL";
$results = mysql_query($dbc,$sql);
$users = mysqli_fetch_all($results, MYSQLI_ASSOC);

?>

<!DOCTYPE>
<html>
<head>
	<title>Relatorio</title>
</head>
<body>
	<button id="trocar">Trocar</button>
	<script>let usuarios = <?php echo json_encode($users) ?></script>
	<script src="script.js"></script>
</body>
</html>
