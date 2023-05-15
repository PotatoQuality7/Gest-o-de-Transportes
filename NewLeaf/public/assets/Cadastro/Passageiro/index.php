<?php

$user = 'Timana';
$pass = 'Timana';
$db = 'GestaoTransportes';
$dbc = new mysqli('localhost',$user,$pass,$db);

$sql = "SELECT Email FROM Email";
$results = mysql_query($dbc,$sql);
$rows = mysqli_fetch_all($results, MYSQLI_ASSOC);
$invalido = false;
foreach ($rows as $row) {
    if ($row['Email'] == $_POST['email']) {
        $invalido = true;
        $rows = "";
    }
 }

if ($invalido == false) {

        $sql = "INSERT INTO Usuarios(NomeUsuario,Senha,Estatuto) VALUES (?,?,?)";
        $sql = mysqli_prepare($dbc,$sql);
        $sql -> bind_param("sss",$_POST['nome'],$_POST['senha'],"Passageiro");
        $sql -> execute();

        $sql = "SELECT max(CodUsuario) AS CodUsuario FROM Usuarios";
        $result = mysqli_query($dbc,$sql);
        $_SESSION['codUsuario'] = ($result['CodUsuario']+1);

        $sql = "INSERT INTO Login(CodUsuario) VALUES (".$_SESSION['codUsuario'].")";
        mysqli_query($dbc,$sql);

        $sql = "INSERT INTO Email(CodUsuario,Email) VALUES (?,?)";
        $sql = mysqli_prepare($dbc,$sql);
        $sql -> bind_param("is",$_SESSION['codUsuario'],$_POST['email']);
        $sql -> execute();


        $sql = "SELECT count(CodRota) AS Count FROM Rotas";
        $result = mysqli_query($dbc,$sql);
        $count = $result['Count'];

        for ($i = 0; $i < $count; $i++) {
             $cor = "rgb(".rand(0,255).",".rand(0,255).",".rand(0,255).")";
             $sql = "INSERT INTO Cores(CodUsuario,CodRota,Cod) VALUES (".$_SESSION['codUsuario'].",$i,".$cor.")";
             mysqli_query($dbc,$sql);        
        }


}

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Cadastro</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h2>Cadastro Passageiro</h2>
  <form action="/add" method="POST">
    <div>
      <label for="nome">Nome:</label>
      <input type="text" id="nome" name="nome" required>
    </div>
    <br>
    <div>
      <label for="bi">Número de BI:</label>
      <input type="text" id="bi" name="bi" required>
    </div>
    <br>
    <div>
      <label for="email">E-mail:</label>
      <input type="email" id="email" name="email" required>
    </div>
    <br>
    <div>
      <label for="senha">Senha:</label>
      <input type="password" id="senha" name="senha" required>
    </div>
    <br>
    <div>
      <label for="confirmar-senha">Confirmar Senha:</label>
      <input type="password" id="confirmar-senha" name="confirmar-senha" required>
    </div>
    <br>
    <button id="submit" type="submit">Cadastrar</button>
  </form>
</body>
</html>
