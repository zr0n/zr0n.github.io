//Pegando o número do usuário de uma maneira simples e aplicando a Conjectura de Collatz
window.addEventListener("load", function(){
	numMax = parseInt(prompt("Até que número deseja fazer a comparação? (Digite um número natural)", "999999"));
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
		if (a%2==0) //caso o número seja par
			return collatzCalc(a/2, qtd); //é dividido por 2 e o resultado é passado como parâmetro novamente para a mesma função (recursivo)
		else //Caso contrário (ímpar),
			return collatzCalc(1 + (3*a), qtd); //ele é multiplicado por 3 e é passado como parâmetro (recursivo)
	}
	return qtd;
}

