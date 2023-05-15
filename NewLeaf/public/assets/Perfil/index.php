<?php

$user = "Timana";
$pass = "Timana";
$db = "GestaoTransportes";

$dbc = new mysqli('localhost',$user,$pass,$db);

function validar($nova) {//verificar tambem caracteres especiais;
	return strlen($nova) >= 8;
}

function cozinhar($dbc,$sql) {
    $sql = mysqli_prepare($dbc,$sql);
    $sql -> bind_param("i",$_SESSION['codUsuario']);
    $sql -> execute();
}

$sql = "SELECT Senha FROM Usuarios WHERE CodUsuario=".$_SESSION["codUsuario"];
$results = mysqli_query($dbc,$sql);
$senha = $results['Senha'];
$_SESSION['deletado'] = 0;
if ($_POST['atual'] == $senha) {
    if (validar($_POST['nova']) == true) {
	$senha = $_POST['nova'];
	$msg = 2;
    }
    else
      $msg = 1;
    $sql = "UPDATE Usuarios SET NomeUsuario=?, Senha=? WHERE CodUsuario=?";   
    $sql = mysqli_prepare($dbc,$sql);
    $sql -> bind_param("ssi",$_POST['nome'],$_POST['senha'],$_SESSION['codUsuario']);
    $sql -> execute();

    $sql = "UPDATE Email SET Fim=current_timestamp WHERE CodUsuario=? AND Fim IS NULL";
    cozinhar($dbc,$sql);

    $sql = "INSERT INTO Email(CodUsuario) VALUES (?)";
    cozinhar($dbc,$sql);

}
else
  $msg = 0;

?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Perfil do Usuário</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <nav>
      <ul>
        <li><a href="../Perfil/index.php">Perfil</a></li>
        <li><a href="../Preferencias/index.html">Preferencias</a></li>
        <li><a href="../Notificacoes/index.html">Notificacoes</a></li>
        <li><a href="../Estatisticas/index.html">Estatisticas</a></li>
        <li><a href="../Pagamentos/index.html">Pagamentos</a></li>
        <li><a href="../Documentacao/index.html">Documentacao</a></li>
      </ul>
    </nav>
    <h1 id="h1"></h1>
    <div class="fomulario">
        <form action="<?php echo $_SERVER["PHP_SELF"] ?>" method="POST">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" value="" required><br><br>
            <label for="apelido">Apelido:</label>
            <input type="text" id="apelido" name="apelido" value="" required><br><br>
            <label for="email">E-mail:</label>
            <input type="email" id="email" name="email" value="" required><br><br>
            <label for="naturalidade">Naturalidade:</label>
            <input type="text" id="naturalidade" name="naturalidade" value="" required><br><br>
            <label for="cidade">Cidade:</label>
            <input type="text" id="cidade" name="cidade" value="" required><br><br>
	    <label id="latual" for="atual">Senha:</label>
            <input type="password" id="atual" name="atual" value="" placeholder="········" required><br><br>	
            <label for="nova">Senha Nova:
            	<input type="password" id="nova" name="nova" value="">
	    	<button id="revelar"></button>
	    </label>
            <br><br>
            <button type="button" id="btnEditar" onclick="editarInformacoes(true)">Editar Informações</button>
            <button type="button" id="btnSenha" onclick="alterarSenha()">Alterar Senha</button>
	    <button type="submit" id="confirmar">Confirmar</button>
          </form>
        <form action="deletar.php" method="POST">
            <button type="button" id="deletar">Deletar Conta</button>
            <input type="text" id="dsenha">Senha</button>
	    <button type="button" id="enter">Enter</button>
            <button type="button" id="cancelar">Cancelar</button>
            <button type="submit" id="certeza">Certeza</button>
	</form>

    </div>
    <script> var msg = <?php echo json_encode($msg) ?></script>
    <script src="script.js"></script>
  </body>
</html>
