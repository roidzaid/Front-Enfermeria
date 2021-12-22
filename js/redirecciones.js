function lotesIframe(){

	parent.document.getElementById("frameInicio").setAttribute('src', "lotes.html");
	
}

function practicasIframe(){

	parent.document.getElementById("frameInicio").setAttribute('src', "practicas.html?dni="+$("#dni").val());
	
}

function pacientesIframe(){

	parent.document.getElementById("frameInicio").setAttribute('src', "pacientes.html?dni="+$("#dni").val());
	
}

function hoja2Iframe(){
	
	parent.document.getElementById("frameInicio").setAttribute('src', "hoja2.html");
	
}

function hoja10Iframe(){
	
	parent.document.getElementById("frameInicio").setAttribute('src', "hoja10.html");
	
}


function esqAtrasadoIframe()
{
	
	parent.document.getElementById("frameInicio").setAttribute('src', "consultaRecuperos.html");
	
}

function consultaPracticasIframe(){

	parent.document.getElementById("frameInicio").setAttribute('src', "consultaPracticas.html");
	
}


function resaproIframe(){

	parent.document.getElementById("frameInicio").setAttribute('src', "resapro.html");
}
