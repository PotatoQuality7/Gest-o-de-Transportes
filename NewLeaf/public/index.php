<?php

session_set_cookie_params(60,"/");
session_start();
//if no connect, senha wrong

$user = 'Timana';
$pass = 'Timana';
$db = 'GestaoTransportes';
$dbc = new mysqli('localhost',$user,$pass,$db);


$error = $_SESSION["error"];

if ($_POST['email'] != '' AND $_POST['token'] != '') {
    $email = $_POST['email'];
    $token = $_POST['token'];
    $metodo = $_POST['metodo'];
    if ($metodo == 0)
        $sql = "SELECT u.CodUsuario FROM Usuarios u INNER JOIN Email e on u.CodUsuario=e.CodUsuario WHERE Email=? AND Fim IS NULL AND Senha=?";
    else
      $sql = "SELECT CodUsuario FROM Email INNER JOIN Transportes on CodUsuario=CodGerente WHERE Email=? AND Matricula=?";
	

    $sql = mysqli_prepare($dbc,$sql);
    $sql -> bind_param("ss",$email,$token);
    $sql -> execute();

    $results = $sql->get_result();
    $row = mysqli_fetch_array($results, MYSQLI_ASSOC);
  
    $codUsuario = $row['CodUsuario'];
    if ($row['CodUsuario'] != '') {//login com socesso
        $sql = "INSERT INTO Login(CodUsuario) VALUES (?)";        
        $sql =  mysqli_prepare($dbc,$sql);
        $sql -> bind_param("i",$row['CodUsuario']);
        $sql -> execute();
        $sql -> close();
	$_SESSION["codUsuario"] = $codUsuario;
	$_SESSION["error"] = 0;
    }
    else {
	$error = 1;
	$_SESSION["error"] = $error;
    }
}    

function generico($dbc,$col,$tab,$con,$t,$par) {
	$generic = "SELECT ".$col." FROM ".$tab." WHERE ".$con;
	$generic = $dbc -> prepare($generic);
        $generic -> bind_param($t,$par);	
	$generic -> execute();

	$results = $generic -> get_result();
        return mysqli_fetch_all($results,MYSQLI_ASSOC);
}

?>

<!DOCTYPE html>
<html>
  <head>
    <title>Tela de Login</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="assets/Login/styles.css">
  </head>
  <body>
    <div class="bg-image"></div>
    <div class="login-box">
      <h1>Login</h1>
       <form action="<?php echo $_SERVER["PHP_SELF"] ?>" method="POST">
        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email" required>

        <input type="radio" id="senha" name="metodo" value="0" checked>
        <label for="0">Senha</label>
        <input type="radio" id="matricula" name="metodo" value="1">
        <label for="1">Matricula</label>
        <label for="token">Senha:</label>
        <input type="token" id="token" name="token" required>
	<p id="error">Error</p>
	<input name="submit" type="submit" id="login" value="Login">
        <a href="assets/Cadastro/index.html">Cadastrar-me</a>
       </form>

    </div>
   <script src="assets/Login/dados.js"></script>
   <script>	
	if (<?php echo json_encode($error) ?> == 1) {
	    var error = document.getElementById("error");
	    error.style.display = "inline-block";
	}
	else {
	  var conta;
	  var metodo = <?php echo json_encode($metodo) ?>;
	  var user = <?php echo json_encode(generico($dbc,'*','Usuarios','CodUsuario=?','i',$codUsuario)); ?>;
	  var email = <?php echo json_encode(generico($dbc,'Email','Email','CodUsuario=? AND Fim IS NULL','i',$codUsuario)[0]['Email']); ?>;
	  if (metodo == 0)
	      var transports = <?php echo json_encode(generico($dbc,'*','Transportes','CodGerente!=?','i',0)); ?>;
	  else
	    var transports = <?php echo json_encode(generico($dbc,'*','Transportes','Matricula=?','s',$token)); ?>;
	  var cores = <?php echo json_encode(generico($dbc,'*','Cores','CodUsuario=?','i',$codUsuario)); ?>;
  	  iniciarUsuario();
	}

	async function iniciarUsuario() {
	    usuario.codigo = user[0].CodUsuario;
	    usuario.estatuto = user[0].Estatuto;
	    if (metodo == 0) {//acesso completo
	        usuario.nome = user[0].NomeUsuario;
	        usuario.posicao = user[0].Posicao;
	        usuario.senha = user[0].Senha;
	        usuario.email = email;
	    }
	    transportes.pop();
	    let cor;
	    transports.forEach(function(linhas) {
		for (let i = 0; i < cores.length; i++)
	   	     if (cores[i].CodUsuario == usuario.codigo && cores[i].CodRota == linhas.CodRota) {
		  	 cor = cores[i].Cor;
			 break;
		     }
	        transportes.push({
	          codGerente: linhas.CodGerente,
	          matricula: linhas.Matricula,
	          tipo: linhas.Tipo,
	          codRota: linhas.CodRota,
	          lotacao: linhas.Lotacao,
	          posicao: linhas.Posicao,
	          velocidade: linhas.Velocidade,
	          cor: cor,
	          pontos: [],
	          atual: 0,
	          destino: "",
	        });
	    });
	    reencaminharUsuario();
	}

	function reencaminharUsuario() {

	  switch (usuario.estatuto) {
	    case "Passageiro":
	          console.log("Login com socesso");
	          conta = "Passageiro";
	          link = 'assets/TelaPassageiro/index.html';
	          break;
	    case "Gerente": console.log("Login com socesso");
	          if (metodo == 0) {
	              conta = "Gerente";
        	      link = 'assets/TelaGerente/index.html';
	          }
	          else {
	            conta = "Controlador";
	            link = 'assets/TelaGerente/Estatisticas/index.html';
	          }
	          break;
	  }
  	  sessionStorage.setItem("usuario",JSON.stringify(usuario));
	  sessionStorage.setItem("transportes",JSON.stringify(transportes));
  	  sessionStorage.setItem("preferencias",JSON.stringify(preferencias));
  	  sessionStorage.setItem("admin",JSON.stringify(admin));
	  window.location = link;
	}
	</script>
  </body>
</html>
