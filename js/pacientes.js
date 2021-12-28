var urlPacientes = host + "pacientes";

function buscarPaciente(){

	debugger;

	if (sessionStorage.getItem("token") == null){
		window.location = "solicitarToken.html";
	}

	var token = sessionStorage.getItem("token");
	
	$.ajax({
		type: "GET",
		url: urlPacientes+"/"+$("#dni").val(),
		headers: {
			"Authorization": token,
			"Content-Type":"application/json"
		},
		success: function(response)
		{

			$("#datosPersonales").css("display", "block");
			$("#tDatosPersonales").css("display", "block");
			$("#cargaPracticas").css("display", "inline-block");
			$("#tituloAgregarPracticas").css("display", "block");
			$("#btnGuardarPracticas").css("display", "block");


			$("#tbodyPaciente").empty();

			$("#tbodyPaciente").append('<tr><td>'+response.dni+'</td><td>'+response.nombre+'</td><td>'+response.apellido+'</td><td>'+response.fechaNac+'</td><td>'+response.sexo+'</td><td >'+response.obraSocial+'</td><td >'+response.direccion+'</td><td >'+response.localidad+'</td><td >'+response.nombreResponsable+'</td><td >'+response.apellidoResponsable+'</td><td >'+response.dniResponsable+'</td></tr>');

			$("#dni").val("");

		},
		dataType: "json",
		error: function(xhr, status, error) {
			
			if(status == 400 || status != 401){
				debugger;
				//pacientes($("#dni").val());


			}else{
				debugger;
			alert("Error al buscar el paciente");
			}

		}
	});
}

function buscarPacienteEnPacientes(){

	debugger;

	if (sessionStorage.getItem("token") == null){
		window.location = "solicitarToken.html";
	}

	var token = sessionStorage.getItem("token");
	
	$.ajax({
		type: "GET",
		url: urlPacientes+"/"+$("#dni").val(),
		headers: {
			"Authorization": token,
			"Content-Type":"application/json"
		},
		success: function(response)
		{
			debugger;
			$("#nombre").val(response.nombre);
			$("#apellido").val(response.apellido);

			debugger;
			var dateString = response.fechaNac;
			debugger;
			var dateParts = dateString.split("-");
			debugger;
			var dia  = dateParts[2]; 
			var mes  = dateParts[1];
			var anio = dateParts[0];
			debugger;
			$("#fechaNac").val(anio+"-"+mes+"-"+dia);

			validarEdad();

			debugger;
		       	if(response.sexo == "masculino"){
		       		debugger;
		       		$("#masculino").prop("checked", true);
		       	}else{
		       		$("#femenino").prop("checked", true);
		       	}

		       	debugger;
		       	if(response.obraSocial == "si"){
		       		debugger;
		       		$("#si").prop("checked", true);
		       	}else{
		       		$("#no").prop("checked", true);
		       	}
			
			$("#localidad").val(response.localidad);
			$("#direccion").val(response.direccion);
			$("#nombreResponsable").val(response.nombreResponsable);
			$("#apellidoResponsable").val(response.apellidoResponsable);
			$("#dniResponsable").val(response.dniResponsable);
			$("#sexo").val(response.sexo);
			$("#obraSocial").val(response.obraSocial);
			

			deshabilitarCamposPacienteEnPacientes();

		},
		dataType: "json",
		error: function(xhr, status, error) {
			
			if(status == 400 || status != 401){
				debugger;
				/*pacientes();*/


			}else{
				debugger;
			alert("Error al buscar el paciente");
			}

		}
	});
}


/*function deshabilitarCamposPaciente(){

        $("#nombre").prop('disabled', true);
        $("#apellido").prop('disabled', true);
        $("#fechaNac").prop('disabled', true);
        $("#sexo").prop('disabled', true);
        $("#obraSocial").prop('disabled', true);
        $("#localidad").prop('disabled', true);
        $("#direccion").prop('disabled', true);
        $("#nombreResponsable").prop('disabled', true);
        $("#apellidoResponsable").prop('disabled', true);
        $("#dniResponsable").prop('disabled', true);

}
*/
function deshabilitarCamposPacienteEnPacientes(){

        $("#nombre").prop('disabled', true);
        $("#apellido").prop('disabled', true);
        $("#fechaNac").prop('disabled', true);
        $("#masculino").prop('disabled', true);
        $("#femenino").prop('disabled', true);
        $("#si").prop('disabled', true);
        $("#no").prop('disabled', true);
        $("#localidad").prop('disabled', true);
        $("#direccion").prop('disabled', true);
        $("#nombreResponsable").prop('disabled', true);
        $("#apellidoResponsable").prop('disabled', true);
        $("#dniResponsable").prop('disabled', true);

}

function habilitarCamposPacienteEnPacientes(){

        $("#nombre").prop('disabled', false);
        $("#apellido").prop('disabled', false);
        $("#fechaNac").prop('disabled', false);
        $("#masculino").prop('disabled', false);
        $("#femenino").prop('disabled', false);
        $("#si").prop('disabled', false);
        $("#no").prop('disabled', false);
        $("#localidad").prop('disabled', false);
        $("#direccion").prop('disabled', false);
        $("#nombreResponsable").prop('disabled', false);
        $("#apellidoResponsable").prop('disabled', false);
        $("#dniResponsable").prop('disabled', false);

}

	



function habilitarCamposPaciente(){

	$("#dni").prop('disabled', false);
        $("#nombre").prop('disabled', false);
        $("#apellido").prop('disabled', false);
        $("#fechaNac").prop('disabled', false);
        $("#sexo").prop('disabled', true);
        $("#obraSocial").prop('disabled', true);
        $("#localidad").prop('disabled', false);
        $("#direccion").prop('disabled', false);
        $("#nombreResponsable").prop('disabled', false);
        $("#apellidoResponsable").prop('disabled', false);
        $("#dniResponsable").prop('disabled', false);

}

function habilitarCamposModif(){

	habilitarCamposPacienteEnPacientes();

	sessionStorage.setItem("pacienteModif", "si");
	
}

function guardarPaciente(){

	debugger;

	var modificacion = sessionStorage.getItem("pacienteModif")

	if (modificacion == "si"){

		sessionStorage.removeItem('pacienteModif');
		console.log("se modifica paciente");
		modificarPaciente();

	}else{


	var datosOk = true;
	if($("#nombre").val() == "" || $("#apellido").val() == "" || $("#dni").val()== "" || $("#fechaNac").val()== ""){
		datosOk = false;
		$('#errorPaciente').css('display', 'block');
       		$("#errorPaciente").fadeTo(2000, 500).slideUp(500, function(){
       		$("#errorPaciente").slideUp(500);
       		});

	}else{

		if (!$("#femenino").is(':checked') && !$("#masculino").is(':checked')){
			datosOk = false;
			$('#errorSexo').css('display', 'block');
	       		$("#errorSexo").fadeTo(2000, 500).slideUp(500, function(){
	       		$("#errorSexo").slideUp(500);
	       		});


		}else{
			if (!$("#si").is(':checked') && !$("#no").is(':checked')){
				datosOk = false;
				$('#errorOS').css('display', 'block');
	       			$("#errorOS").fadeTo(2000, 500).slideUp(500, function(){
	       			$("#errorOS").slideUp(500);
	       			});
	       		}else{

				/*if($("#localidad").val() == "" || $("#direccion").val() == ""){
					datosOk = false;
					$('#errorDomicilio').css('display', 'block');
			       		$("#errorDomicilio").fadeTo(2000, 500).slideUp(500, function(){
			       		$("#errorDomicilio").slideUp(500);
			       		});

				}else{*/

					
					const fecha = new Date();
					var fnac = new Date($("#fechaNac").val());
					const hoy = Date.UTC(fecha.getFullYear(), fecha.getMonth(), fecha.getDate());
					const nac = Date.UTC(fnac.getFullYear(), fnac.getMonth(), fnac.getDate());
  					
					day = (1000*60*60*24);

					debugger;
					var difference = (((hoy-nac)/day)-1)/365;
					debugger;

					if(difference < 18 && ($("#nombreResponsable").val() == "" || $("#apellidoResponsable").val() == "" || $("#dniResponsable").val() == "")){
						datosOk = false;
						$('#errorResponsable').css('display', 'block');
			       			$("#errorResponsable").fadeTo(2000, 500).slideUp(500, function(){
			       			$("#errorResponsable").slideUp(500);
			       			});
					}



				/*}*/
			}
		}
	}

	

	if(datosOk){
		debugger;
		
		if (sessionStorage.getItem("token") == null){
			window.location = "solicitarToken.html";
		}


		var token = sessionStorage.getItem("token")



		debugger;
	       	if($("#masculino").is(':checked')){
	       		debugger;
	       		sexoAux = "masculino"
	       	}else{
	       		if($("#femenino").is(':checked')){
	       			debugger;
	       			sexoAux = "femenino"
	       		}else{
	       			datosOk = false;
	       			alert("Debe seleccionar sexo del paciente");	
	       		}
	       	}

	       	debugger;
	       	if($("#si").is(':checked')){
	       		debugger;
	       		obraSocialAux = "si"
	       	}else{
	       		if($("#no").is(':checked')){
		       		debugger;
	       			obraSocialAux = "no"
	       		}else{
	       			datosOk = false;
	       			alert("Debe seleccionar si el paciente tiene obra social");
	       		}
	       	}
	       	
	       	var localidadAux = "";
	       	if ($("#localidad").val() == "Elegir..."){
	       		localidadAux = "";
	       	}else{
	       		localidadAux = $("#localidad").val();
	       	}



	       	debugger;
		

		var paciente = {
			fechaAlta:"",
			nombre:$("#nombre").val().toUpperCase(),
			apellido:$("#apellido").val().toUpperCase(),
			dni:$("#dni").val(),
			fechaNac:$("#fechaNac").val(),
			sexo:sexoAux,
			obraSocial:obraSocialAux,
			localidad:localidadAux,
			direccion:$("#direccion").val().toUpperCase(),
			nombreResponsable:$("#nombreResponsable").val().toUpperCase(),
			apellidoResponsable:$("#apellidoResponsable").val().toUpperCase(),
			dniResponsable:$("#dniResponsable").val(),
			usuarioModif:sessionStorage.getItem("usuMod"),
		}

		JSON.stringify(paciente);

		debugger;
		$.ajax({
			type: "POST",
			url: urlPacientes,
			headers: {
				"Authorization": token,
				"Content-Type":"application/json"
			},
			success: function(response)
			{
				debugger;
				$('#pacienteOk').css('display', 'block');
			       	$("#pacienteOk").fadeTo(2000, 500).slideUp(500, function(){
			       	$("#pacienteOk").slideUp(500);
			       	window.location = "practicas.html?dni="+$("#dni").val();
			       	});

			},

			dataType: "json",
			data: JSON.stringify(paciente),

			error: function(jqXHR, textStatus, errorThrown) {
				debugger;

				if(jqXHR.status == 500 || jqXHR.status == 501){
					debugger;
					datosOk = false;
					$('#yaExiste').css('display', 'block');
			       		$("#yaExiste").fadeTo(2000, 500).slideUp(500, function(){
			       		$("#yaExiste").slideUp(500);
			       		});


				}else{
					debugger;
					datosOk = false;
					$('#error').css('display', 'block');
			       		$("#error").fadeTo(2000, 500).slideUp(500, function(){
			       		$("#error").slideUp(500);
			       		});
				};
			}

		})
		
	};
	};
}

function validarEdad(){

	const fecha = new Date();
	var fnac = new Date($("#fechaNac").val());
	const hoy = Date.UTC(fecha.getFullYear(), fecha.getMonth(), fecha.getDate());
	const nac = Date.UTC(fnac.getFullYear(), fnac.getMonth(), fnac.getDate());
		
	day = (1000*60*60*24);

	debugger;
	var difference = (((hoy-nac)/day)-1)/365;
	debugger;

	if(difference < 18){
		
		$("#datosResponsable").css("display", "block");
		

	}else{
		$("#datosResponsable").css("display", "none");
			
	}

}


function modificarPaciente(){

	debugger;

	var modificacion = sessionStorage.getItem("pacienteModif")

	var datosOk = true;
	if($("#nombre").val() == "" || $("#apellido").val() == "" || $("#dni").val()== "" || $("#fechaNac").val()== ""){
		datosOk = false;
		$('#errorPaciente').css('display', 'block');
       		$("#errorPaciente").fadeTo(2000, 500).slideUp(500, function(){
       		$("#errorPaciente").slideUp(500);
       		});


	}else{

		if (!$("#femenino").is(':checked') && !$("#masculino").is(':checked')){
			datosOk = false;
			$('#errorSexo').css('display', 'block');
	       		$("#errorSexo").fadeTo(2000, 500).slideUp(500, function(){
	       		$("#errorSexo").slideUp(500);
	       		});


		}else{
			if (!$("#si").is(':checked') && !$("#no").is(':checked')){
				datosOk = false;
				$('#errorOS').css('display', 'block');
	       			$("#errorOS").fadeTo(2000, 500).slideUp(500, function(){
	       			$("#errorOS").slideUp(500);
	       			});
	       		}else{

				/*if($("#localidad").val() == "" || $("#direccion").val() == ""){
					datosOk = false;
					$('#errorDomicilio').css('display', 'block');
			       		$("#errorDomicilio").fadeTo(2000, 500).slideUp(500, function(){
			       		$("#errorDomicilio").slideUp(500);
			       		});

				}else{*/

					
					const fecha = new Date();
					var fnac = new Date($("#fechaNac").val());
					const hoy = Date.UTC(fecha.getFullYear(), fecha.getMonth(), fecha.getDate());
					const nac = Date.UTC(fnac.getFullYear(), fnac.getMonth(), fnac.getDate());
  					
					day = (1000*60*60*24);

					debugger;
					var difference = (((hoy-nac)/day)-1)/365;
					debugger;

					if(difference < 18 && ($("#nombreResponsable").val() == "" || $("#apellidoResponsable").val() == "" || $("#dniResponsable").val() == "")){
						datosOk = false;
						$('#errorResponsable').css('display', 'block');
			       			$("#errorResponsable").fadeTo(2000, 500).slideUp(500, function(){
			       			$("#errorResponsable").slideUp(500);
			       			});
					}



				/*}*/
			}
		}
	}

	

	if(datosOk){

		if (sessionStorage.getItem("token") == null){
			window.location = "solicitarToken.html";
		}

		var token = sessionStorage.getItem("token")

		debugger;
	       	if($("#masculino").is(':checked')){
	       		debugger;
	       		sexoAux = "masculino"
	       	}else{
	       		if($("#femenino").is(':checked')){
	       			debugger;
	       			sexoAux = "femenino"
	       		}else{
	       			datosOk = false;
	       			alert("Debe seleccionar sexo del paciente");	
	       		}
	       	}

	       	debugger;
	       	if($("#si").is(':checked')){
	       		debugger;
	       		obraSocialAux = "si"
	       	}else{
	       		if($("#no").is(':checked')){
		       		debugger;
	       			obraSocialAux = "no"
	       		}else{
	       			datosOk = false;
	       			alert("Debe seleccionar si el paciente tiene obra social");
	       		}
	       	}

	       	debugger;
		

		var paciente = {
			fechaAlta:"",
			nombre:$("#nombre").val(),
			apellido:$("#apellido").val(),
			dni:$("#dni").val(),
			fechaNac:$("#fechaNac").val(),
			sexo:sexoAux,
			obraSocial:obraSocialAux,
			localidad:$("#localidad").val(),
			direccion:$("#direccion").val(),
			nombreResponsable:$("#nombreResponsable").val(),
			apellidoResponsable:$("#apellidoResponsable").val(),
			dniResponsable:$("#dniResponsable").val(),
			usuarioModif:sessionStorage.getItem("usuMod"),
		}

		JSON.stringify(paciente);

		debugger;
		$.ajax({
			type: "PUT",
			url: urlPacientes,
			headers: {
				"Authorization": token,
				"Content-Type":"application/json"
			},
			success: function(response)
			{
				debugger;
				$('#pacienteModif').css('display', 'block');
			       	$("#pacienteModif").fadeTo(2000, 500).slideUp(500, function(){
			       	$("#pacienteModif").slideUp(500);
			       	practicas($("#dni").val());
			       	});

			       	
				

			},

			dataType: "json",
			data: JSON.stringify(paciente),

			error: function(jqXHR, textStatus, errorThrown) {
				debugger;

				if(jqXHR.status == 500 || jqXHR.status == 501){
					debugger;
					datosOk = false;
					$('#yaExiste').css('display', 'block');
			       		$("#yaExiste").fadeTo(2000, 500).slideUp(500, function(){
			       		$("#yaExiste").slideUp(500);
			       		});


				}else{
					debugger;
					datosOk = false;
					$('#error').css('display', 'block');
			       		$("#error").fadeTo(2000, 500).slideUp(500, function(){
			       		$("#error").slideUp(500);
			       		});
				};
			}

		})
		
	};
	
}

