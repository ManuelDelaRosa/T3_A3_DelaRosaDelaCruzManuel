function totalVocales(){

	
	var elementos=document.getElementsByTagName('input');
	document.getElementById("caja_vocales").value = (vocales(elementos[0].value));
	document.getElementById("caja_consonantes").value = (consonantes(elementos[0].value));
	document.getElementById("caja_buscar").value = (caracter(elementos[0].value,elementos[1].value));
	document.getElementById("caja_loca").value = (cadenaLoca(elementos[0].value));

}

function vocales(cad){
	cad=cad.toUpperCase();
	var cont=0;
	var cara;
for (var i = 0; i < cad.length; i++) {
	cara=cad.charAt(i);
	if (cara=='A'||cara=='E'||cara=='I'||cara=='O'||cara=='U') {
		
		cont++;
	}
}
return cont;
}

function consonantes(cad){

	cad=cad.toUpperCase();
	var cont=0;
	var cara;
for (var i = 0; i < cad.length; i++) {
	cara=cad.charAt(i);
	if (cara=='A'||cara=='E'||cara=='I'||cara=='O'||cara=='U') {
		
		
	}else{
		if ((cara >= 'A' && cara <= 'Z'&& cara!='A')||(cara >= 'A' && cara <= 'Z'&& cara!='E')||(cara >= 'A' && cara <= 'Z'&& cara!='I')||(cara >= 'A' && cara <= 'Z'&& cara!='O')||(cara >= 'A' && cara <= 'Z'&& cara!='U')) {
			cont++;
		}
		
	}
}
return cont;
	//alert("consonantes");
	/*cad=cad.toUpperCase();
	var cont=0;
	var cara;
for (var i = 0; i < cad.length; i++) {
	cara=cad.charAt(i);
	//cara.isAlphabetic(cara.charCodeAt(i));
	if (cara.isAlphabetic(cad.charCodeAt(i)) ) {
		
		cont++;
	}
}
return cont;*/

}

function caracter(cad, let){
	cad=cad.toUpperCase();
	let=let.toUpperCase();
	var cont=0;
	var cara;
for (var i = 0; i < cad.length; i++) {
	cara=cad.charAt(i);
	if (cara==let) {
		
		cont++;
	}
}
return cont;

}

function cadenaLoca(cad){
	cad=cad.toUpperCase();
	var loca="";
	var cara;
for (var i = 0; i < cad.length; i++) {
	cara=cad.charAt(i);
	if (i% 2 == 0) {
		
		loca+=cara.toUpperCase();
	}else{
		loca+=cara.toLowerCase();
	}

}
return loca;

}