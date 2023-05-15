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
	$sql -> bind_param("sss",$_POST['nome'],$_POST['senha'],"Gerente");
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
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro Gerente</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h2>Cadastro Gerente</h2>
     <div class="formulario">
	<form action="<?php echo $_SERVER["PHP_SELF"] ?>" method="POST">
          <label for="nome">Nome:</label>
          <input id="nome" type="text" name="nome" required>
          <br><br>
          <label for="apelido">Apelido:</label>
          <input type="text" name="apelido" required>
          <br><br>
          <label for="email">Email:</label>
          <input type="email" name="email" required>
          <br><br>
          <label for="naturalidade">Naturalidade:</label>
          <input type="text" name="naturalidade" required>
          <br><br>
          <label for="cidade">Cidade:</label>
          <input type="text" name="cidade" required>
          <br><br>
          <label for="senha">Senha:</label>
          <input type="password" name="senha" required>
          <br><br>
          <label for="">Confirmar senha:</label>
          <input type="password" name="senha" required>
          <br><br>
          <button id="submit" name="submit" type="submit">Cadastrar</button>
        </form>
     </div>
     <script src="script.js"></script>
</body>
</html>
