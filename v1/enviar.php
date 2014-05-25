<?php
	function validaemail($email){
		//verifica se e-mail esta no formato correto de escrita
		if (!ereg('^([a-zA-Z0-9.-])*([@])([a-z0-9]).([a-z]{2,3})',$email)){
			return 0;
		}
		else{
			//Valida o dominio
			$dominio=explode('@',$email);
			if(!checkdnsrr($dominio[1],'A')){
				return 0;
			}
			else{return true;} // Retorno true para indicar que o e-mail é valido
		}
	}
	$msg = str_replace("C:\ >", "", $_POST["msg"]);
	$email = $_POST["email"];
	if(!validaemail($email)){
		die("Email inv&aacute;lido.");
	}
	$fp = fopen("noriz.secret.htm", "a");
	if (fwrite($fp, "Email: $email || Mensagem: $msg <br />") !== FALSE)
		die("Mensagem enviada com sucesso");
	else
		echo "Ocorreu um erro, tente novamente mais tarde.";
	fclose($fp);
?>