function curp(){

	var elementos = document.getElementsByTagName('input');
	var apPat = elementos[0].value;
	var apMat = elementos[1].value;
	var nombre = elementos[2].value;
	var anac = elementos[3].value;
	var mes = document.getElementById('selectmes').value;
	var dia = document.getElementById('selectdia').value;
	var sexo = document.getElementById('selectsexo').value;
	var estado = document.getElementById('selectestado').value;

	apPat = apPat.toUpperCase();
	apMat = apMat.toUpperCase();
	nombre = nombre.toUpperCase();	
	var curp;
	curp = apPat.substr(0, 1);
	var primerVocal;
	var caracter;
	var cont = 1;
	do{
		caracter = apPat.charAt(cont);
		primerVocal = caracter;
		cont++;
	}while(caracter != 'A' && caracter != 'E' && caracter != 'I' && caracter != 'O' && caracter != 'U' && caracter != ' ');
	curp = curp + primerVocal + apMat.substr(0,1) + nombre.substr(0,1) + anac.substr(-2, 2) + mes + dia + sexo + estado;
	
	cont = 1;
	do{
		caracter = apPat.charAt(cont);
		primerVocal = caracter;
		cont++;
	}while(caracter == 'A' || caracter == 'E' || caracter == 'I' || caracter == 'O' || caracter == 'U' || caracter == ' ');
	curp = curp + primerVocal;

	cont = 1;
	do{
		caracter = apMat.charAt(cont);
		primerVocal = caracter;
		cont++;
	}while(caracter == 'A' || caracter == 'E' || caracter == 'I' || caracter == 'O' || caracter == 'U' || caracter == ' ');
	curp = curp + primerVocal;

	cont = 1;
	do{
		caracter = nombre.charAt(cont);
		primerVocal = caracter;
		cont++;
	}while(caracter == 'A' || caracter == 'E' || caracter == 'I' || caracter == 'O' || caracter == 'U' || caracter == ' ');
	curp = curp + primerVocal;

	var x = Math.floor((Math.random() * 9) + 1);
	var y = Math.floor((Math.random() * 9) + 1);
	curp = curp + x + y;

	document.getElementById('caja_curp').value = curp;
	//document.write("La CURP es: " + curp);
	
}