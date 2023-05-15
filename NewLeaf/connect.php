<?php

//if no connect, senha wrong

$user = 'Timana';
$pass = 'Timana';
$db = 'GestaoTransportes';

$dbc = new mysqli('localhost', $user, $pass, $db) or die("Oof");

$sql = "INSERT INTO Login(CodUsuario) VALUES (20230003)";

$result = mysqli_query($dbc, $sql) or die("Oof");

//while($row = $result -> fetch_assoc())
  //    echo $row['CodUsuario'],$row['Entrada'],$row['Saida'], "<br>\n";

?>
