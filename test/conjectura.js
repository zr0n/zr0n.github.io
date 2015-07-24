//Pegando o n�mero do usu�rio de uma maneira simples e aplicando a Conjectura de Collatz
window.addEventListener("load", function(){
	numMax = parseInt(prompt("At� que n�mero deseja fazer a compara��o? (Digite um n�mero natural)", "999999"));
	higherNumber(numMax);
})
maior = {};
maior.num = 0;
maior.qtd = 0;
qtd = 0;


var higherNumber = function (numMax){
	
	
	for(i=1;i < numMax; i++){
		var qtdAtual = collatzCalc(i, 0);
		var numAtual = i;
		if(qtdAtual > maior.qtd){
			maior.num = i;
			maior.qtd = qtdAtual;
		}
			
	}
	alert(maior.num);
}

var collatzCalc = function(a,qtd){
	
	if (a>1) {
		qtd++;
		if (a%2==0) //caso o n�mero seja par
			return collatzCalc(a/2, qtd); //� dividido por 2 e o resultado � passado como par�metro novamente para a mesma fun��o (recursivo)
		else //Caso contr�rio (�mpar),
			return collatzCalc(1 + (3*a), qtd); //ele � multiplicado por 3 e � passado como par�metro (recursivo)
	}
	return qtd;
}

