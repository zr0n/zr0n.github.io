document.write("<div>");
embaralhar = function (o){ 
	for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
}
var palavras = ["codeigniter", "php", "html", "css", "shell script", "expect script", "javascript", "jquery", "seo", "bootstrap", "design patterns", "magento", "joomla", "wordpress", "prestashop", "baSH script", "cloud computing", "charge balance", "zend"];
palavras = embaralhar(palavras);
var ind;
var rand = 0;
for(ind = 0; ind < palavras.length; ++ind){
	if(rand == 0){
		rand = 1;
		rotate = "0.2";
	}
	else{
		rand = 0;
		rotate = "-0.2";
	}
	document.write("<h6 id=\"a"+ind+"\" style=\"display:none;-webkit-transform: rotate("+rotate+"deg);-moz-transform: rotate("+rotate+"deg);-o-transform: rotate("+rotate+"deg);writing-mode: lr-tb;\">"+palavras[ind]+"</h6>");
	
	
}
temporizar = function(i){
	setTimeout(function(){
		$("#a"+i).fadeIn();
	}, 500 * i);
};

zerar = function(){
	setTimeout(function(){
		$("#conteudo2 h6").fadeOut();
		
		mostrar();
	}, 500 * $("#conteudo2 h6").length + 200);
};
mostrar = function(){
	for(i = 0; i < $("#conteudo2 h6").length; ++i){
		temporizar(i);
	}
	zerar();
}
mostrar();
document.write("</div>");