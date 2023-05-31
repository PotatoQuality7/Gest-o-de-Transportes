<?php

$user = 'Timana';
$pass = 'Timana';
$db = 'GestaoTransportes';
$dbc = new mysqli('localhost',$user,$pass,$db);

$sql

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Estatísticas dos Transportes</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <canvas id="papel">
      <div id="algo"></div>
      <p>Muchas tardes madame</p>
    </canvas>
    <h1>Estatisticas</h1>
    <button id="trocarModo">Trocar Modo</button>
    <script src="script.js"></script>
  </body>
</html>
