
//acceso a elementos  a traves del DOM
function realizarConversion(){
	
	 var elementos=document.getElementsByTagName('input');
	 document.getElementById("caja_res_bin").value = (parseInt(elementos[0].value, 10)).toString(2);
	 document.getElementById("caja_res_oct").value = (parseInt(elementos[0].value, 10)).toString(8);
	 document.getElementById("caja_res_hexa").value = (parseInt(elementos[0].value, 10)).toString(16);
	 
	// alert("hola");

}


