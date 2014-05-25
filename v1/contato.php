<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Luiz Fernando</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="">
  <meta name="author" content="">

	<!--link rel="stylesheet/less" href="less/bootstrap.less" type="text/css" /-->
	<!--link rel="stylesheet/less" href="less/responsive.less" type="text/css" /-->
	<!--script src="js/less-1.3.3.min.js"></script-->
	
	<link href="css/bootstrap.min.css" rel="stylesheet">
	<link href="css/style.css" rel="stylesheet">



  <link rel="shortcut icon" href="img/favicon.png">
  
	<script type="text/javascript" src="js/jquery.min.js"></script>
	<script type="text/javascript" src="js/bootstrap.min.js"></script>
	<script type="text/javascript" src="js/bootstrap-modal.js"></script>
	<script type="text/javascript" src="js/scripts.js"></script>
</head>

<body>
<div id="background"></div>
<div id="wrap">
<div class="container">
	<div class="row clearfix">
		<div class="col-md-12 column">
			<div class="page-header">
				<h1>
					Luiz Fernando<small>.php</small>
				</h1>
			</div>
		</div>
	</div>
	<div class="row clearfix">
		<div class="col-md-2 column">
			 <a href="trab.php">
				<button type="button" class="btn btn-default">Trabahos</button>
			 </a>
			<a href="quemsou.php">
				<button type="button" class="btn btn-default">Quem Sou</button>
			 </a>
			 <a href="contato.php">
				<button type="button" class="btn btn-default">Contato</button>
			 </a>
		</div>
		<div class="col-md-10 column">
				<div class="col-md-6 column">
					<div id="conteudoForm">
<fieldset>
<div  id="alerta" data-toggle="modal" class="modal fade">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<div id="tituloModal">Teste</div>
			</div>
			<div class="modal-body">
				<div id="bodyModal">testando</div>
			</div>
			<div class="modal-footer">
				<div id="footerModal">só teste</div>
			</div>
		</div>
	</div>
</div>
<a data-toggle="modal" href="#alerta" id="triggerMaluco" style="display:none;">x</a>

<div class="control-group">
  <label class="control-label" for="nome">Nome:</label>
  <div class="controls">
    <input id="nome" name="nome" type="text" placeholder="Ex: Barack Obama" class="input-xlarge">
    
  </div>
   <label class="control-label" for="email">Email:</label>
  <div class="controls">
    <input id="email" name="email" type="text" placeholder="exemplo@gmail.com" class="input-xlarge">
    
  </div>
</div>

<!-- Textarea -->
<div class="control-group">
  <div class="controls">
	<label class="control-label" for="nome">Msg:</label> 
	<br />
    <textarea id="mensagem" name="msg" placeholder="Digite aqui sua mensagem."></textarea>
  </div>
</div>

<!-- Button -->
<div class="control-group">
  <label class="control-label" for="singlebutton"></label>
  <div class="controls">
    <button id="enviar" name="singlebutton" class="btn btn-primary" style="color:#FFF !important;">Enviar!</button>
  </div>
</div>

</fieldset>

						
						
					</div>
				</div>
				<div id="conteudo2" class="col-md-6 column">
					<script type="text/javascript" src="js/habilidades.js"></script>
				</div>
			</div>
		</div>
	</div>
</div>
<div id="footer">
        <div class="container">
            <p class="text-muted credit">Desenvolvido por: <a href="http://www.facebook.com/TheZiron">Luiz Fernando</a>. | Veja a <a href="../v2"> vers&atilde;o Win98</a></p>
        </div>
    </div>
</div>
</body>
</html>
