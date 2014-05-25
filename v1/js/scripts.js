$(document).ready(function(){
	$("#enviar").click(function(){
		msg = String($("#mensagem").val());
		if(msg.length > 6){
			email = $("#email").val();
			if((email.length == 0) || (email.indexOf("@") < 1)){
				email = 0;
				if(email == 0){
					$("#tituloModal").html("Erro");
					$("#bodyModal").html("Digite um email v&aacute;lido.");
					$("#footerModal").html("Obrigado.");
					$("#triggerMaluco").click();
				}
			}
			if(email != 0){
			
				$.post("enviar.php", {msg: msg, email: email}).done(function(data){
					
						
					$("#tituloModal").html("Aviso");
					$("#bodyModal").html(data);
					$("#footerModal").html("Obrigado.");
					$("#triggerMaluco").click();
					setTimeout(function(){
						$("#alerta").modal("hide");
					}, 3000);
					
					
				});
			}
			//alert("Email: "+email+" e mensagem: "+msg); //debug
		}
		else{
			$("#tituloModal").html("Erro");
			$("#bodyModal").html("Mensagem muito curta.");
			$("#footerModal").html("Obrigado.");
			$("#triggerMaluco").click();
		}
	});
	setBg = function(){
		var background = "";
		for(var i = 0; i < 10000; ++i){
			rand = Math.floor((Math.random() * 2) );
			background = background + rand;
		}
		setTimeout(function(){
			$("#background").html(background);
			setBg();
		}, 400);
	};
	
	setBg();
	
	

});