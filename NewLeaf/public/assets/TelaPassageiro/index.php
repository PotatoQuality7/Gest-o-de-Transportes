<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tela Passageiro</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
  <canvas id="papel">
    <p>Muchas tardes madame</p>
  </canvas>
  <header>
    <nav>
      <ul>
        <li><a href="../Perfil/index.html">Perfil</a></li>
        <li><a href="../Preferencias/index.html">Preferencias</a></li>
        <li><a href="../Notificacoes/index.html">Notificacoes</a></li>
        <li><a href="../Estatisticas/index.html">Estatisticas</a></li>
        <li><a href="../Pagamentos/index.html">Pagamentos</a></li>
        <li><a href="../Documentacao/index.html">Documentacao</a></li>
      </ul>
    </nav>
  </header>
  <footer>
    <button id="sair">Sair</button>
  </footer>
  <script>const deletar = <?php echo json_encode($_SESSION[deletado]) ?></script>
  <script src="script.js"></script>
</body>
</html>
