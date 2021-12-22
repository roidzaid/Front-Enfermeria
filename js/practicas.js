var urlPacientes = host + "pacientes";
var urlVacunas = host + "vacunas";
var urlLotes = host + "lotes";
var urlPracticas = host + "practicas";


function practicas(){
	
	window.location = "practicas.html?dni="+$("#dni").val();
	
}

function pacientes(){
	
	window.location = "pacientes.html?dni="+$("#dni").val();
	
	
}


function volver(){

	window.location = "inicio.html";
	
}


function listarPracticas(){

	window.location = "consultaPracticas.html";
	
}


function agregarVacuna() {

	

	debugger;

	var datosOk = true;
	if($("#comboVacunas").val() == "" || $("#comboDosis").val() == ""){
		
        datosOk = false;
        $('#AlertaVacunas').css('display', 'block');
       	$("#AlertaVacunas").fadeTo(2000, 500).slideUp(500, function(){
       	$("#AlertaVacunas").slideUp(500);
       	});

    }


		debugger;
	var token = sessionStorage.getItem("token");
	

	if(datosOk){

		$("#tPracticas").css("display", "inline-block");
		if($("#comboVacunas").val() == "ANTIGRIPAL"){

			$.ajax({
				type: "GET",
				url: urlLotes+"/"+$("#comboVacunas").val()+"/"+$("#comboMarcas").val(),
				headers: {
					"Authorization": token,
					"Content-Type":"application/json"
				},
				success: function(response)
				{
					debugger;

					var vacuna = $("#comboVacunas").val();
					var dosis = $("#comboDosis").val();
					var marca = $("#comboMarcas").val();
					var lote = response.lote;

					if ($("#checkboxAtrasado").is(":checked")){

						var esqAtrasado = "Esq. Atrasado"
					}else{
						var esqAtrasado = "  "
					}


					debugger;

				    $("#tbodyPracticas").append('<tr><td>'+vacuna+'</td><td>'+dosis+'</td><td>'+marca+'</td><td>'+lote+'</td><td>'+esqAtrasado+'</td><td><input type="button" class="borrar" value="Eliminar" onclick="borrarPractica()" style="margin: 5px; width: 100px; height: 30px;"/></td></tr>');

				    limpiarVacunas();

				},
				dataType: "json",
				error: function(xhr, status, error) {
					debugger;
					$('#AlertaLote').css('display', 'block');
       				$("#AlertaLote").fadeTo(2000, 500).slideUp(500, function(){
       				$("#AlertaLote").slideUp(500);
       				});
				}
			});
		}else{

			var vacuna = $("#comboVacunas").val();
			var dosis = $("#comboDosis").val();
			var marca = "N/A";
			var lote = "N/A";

			if ($("#checkboxAtrasado").is(":checked")){

						var esqAtrasado = "Esq. Atrasado"
					}else{
						var esqAtrasado = "  "
					}

			
			debugger;

		    $("#tbodyPracticas").append('<tr><td>'+vacuna+'</td><td>'+dosis+'</td><td>'+marca+'</td><td>'+lote+'</td><td>'+esqAtrasado+'</td><td><input type="button" class="borrar" value="Eliminar" onclick="borrarPractica()" style="margin: 5px; width: 100px; height: 30px;"/></td></tr>');

		    limpiarVacunas();

		}
	}
}

function agregarOtros() {

	debugger;
	var datosOk = true;
	if($("#observacion").val() == ""){
        datosOk = false;
        
        $('#AlertaObservaciones').css('display', 'block');
       	$("#AlertaObservaciones").fadeTo(2000, 500).slideUp(500, function(){
       	$("#AlertaObservaciones").slideUp(500);
       	});

    }

    if(datosOk){

    	$("#tPracticas").css("display", "inline-block");
	
		var observacion = $("#observacion").val();
		
		observacion = observacion.toUpperCase();

		debugger;

	    $("#tbodyPracticas").append('<tr><td>'+observacion+'</td><td></td><td></td><td></td><td></td><td><input type="button" class="borrar" value="Eliminar" onclick="borrarPractica()" style="margin: 5px; width: 100px; height: 30px;"/></td></tr>');

	    limpiarObservaciones();
	}

}

function buscarDosis(){

	$("#comboDosis").empty();

	debugger;
	var token = sessionStorage.getItem("token");

	$.ajax({
		type: "GET",
		url: urlVacunas+"/"+$("#comboVacunas").val(),
		headers: {
			"Authorization": token,
			"Content-Type":"application/json"
		},
		success: function(response)
		{
			debugger;
			for (var i = 0; i < response.length; i++) {

				var dosis = response[i];

				$("#comboDosis").append('<option>'+dosis+'</option>');
			}
		}
	});
}


function limpiarVacunas(){

	debugger;
	$("#comboVacunas").val($("#comboVacunas option:first").val());
	$("#comboDosis").val($("#comboVacunas option:first").val());
	$("#comboMarcas").val($("#comboVacunas option:first").val());
	$("#checkboxAtrasado").prop("checked", false);
	
	
}


function limpiarObservaciones(){

	debugger;
	$("#observacion").val("");

	
}


function limpiarTodo(){

	debugger;
	$("#comboVacunas").val($("#comboVacunas option:first").val());
	$("#comboDosis").val($("#comboVacunas option:first").val());
	$("#comboMarcas").val($("#comboVacunas option:first").val());
	$("#observacion").val("");
	
	$("#dni").val("");
	
	$("#tbodyPaciente").empty();
    $("#tbodyPracticas").empty();

	
}


function guardarPracticas(){

	debugger;
	
		var token = sessionStorage.getItem("token")
		
		debugger;

		var tablePaciente=document.getElementById("tabPaciente");
		var t=1;

		while(row=tablePaciente.rows[t++]){

			var tDNI = "";
			var tNombre = "";
			var tApellido = "";
			var tFecNac = "";
			var tSexo = "";
			var tOS = "";
			var tDireccion = "";
			var tLocalidad = "";
			var tNomResp = "";
			var tApeResp = "";
			var tDNIResp = "";

			var s=0; //start counting columns in row
			while(cell=row.cells[s++]){
			 


			    debugger;
                switch (s) {
                	case 1:
                        tDNI = cell.innerText;
                        break;
                    case 2:
                        tNombre = cell.innerText;
                        break;
                    case 3:
                        tApellido = cell.innerText;
                        break;
                    case 4:
                        tFecNac = cell.innerText;
                        break;
                    case 5:
                        tSexo = cell.innerText;
                        break;
                    case 6:
                        tOS = cell.innerText;
                        break;
                    case 7:
                        tDireccion = cell.innerText;
                        break;
                    case 8:
                        tLocalidad = cell.innerText;
                        break;
                    case 9:
                        tNomResp = cell.innerText;
                        break;
                    case 10:
                        tApeResp = cell.innerText;
                        break;
                    case 11:
                        tDNIResp = cell.innerText;
                        break;
				}
			}
		}


		var table=document.getElementById("tabPracticas");
		var r=1;

		while(row=table.rows[r++]){

			var observacionesAux = "";
			var vacunaAux = "";
			var dosisAux = "";
			var tipoVacunaAux = "";
			var loteAux = "";
			var esqAtrasadoAux = "";

			var c=0; //start counting columns in row
			while(cell=row.cells[c++]){
			 


			    debugger;
                switch (c) {
                    case 1:
                        observacionesAux = cell.innerText;
                        break;
                    case 2:
                        dosisAux = cell.innerText;

                        if (dosisAux != ""){
                        	vacunaAux = observacionesAux;
                        	observacionesAux = "";
                        }
                        break;
                    case 3:
                        tipoVacunaAux = cell.innerText;
                        break;
                    case 4:
                        loteAux = cell.innerText;
                        break;
                    case 5:
                    	debugger;
                        esqAtrasadoAux = cell.innerText;
                        break;
				}
			}


				debugger;
				var practica = {
						idPractica:"",
			        	fecha:"",
			        	nombre:tNombre,
			        	apellido:tApellido,
			        	dni:tDNI,
			        	fechaNac:tFecNac,
			        	sexo:tSexo,
			        	obraSocial:tOS,
			        	localidad:tLocalidad,
			        	direccion:tDireccion,
			        	nombreResponsable:tNomResp,
			        	apellidoResponsable:tApeResp,
			        	dniResponsable:tDNIResp,
			        	observaciones:observacionesAux,
			        	vacuna:vacunaAux,
			        	dosis:dosisAux,
			        	tipoVacuna:tipoVacunaAux,
			        	lote:loteAux,
			        	usuarioModif:sessionStorage.getItem("usuMod"),
			        	esqAtrasado:esqAtrasadoAux,
					}



	            JSON.stringify(practica);

				debugger;
				$.ajax({
					type: "POST",
					url: urlPracticas,
					headers: {
						"Authorization": token,
						"Content-Type":"application/json"
					},
					success: function(response)
					{
						debugger;
						limpiarTodo();
               		 	$('#practicaOk').css('display', 'block');
                		$("#practicaOk").fadeTo(2000, 500).slideUp(500, function(){
                       	$("#practicaOk").slideUp(500);
                       	});

                       	$("#datosPersonales").css("display", "none");
						$("#tDatosPersonales").css("display", "none");
						$("#cargaPracticas").css("display", "none");
						$("#tituloAgregarPracticas").css("display", "none");
						$("#btnGuardarPracticas").css("display", "none");
						$("#tPracticas").css("display", "none");

					},

					dataType: "json",
					data: JSON.stringify(practica),

					error: function(jqXHR, textStatus, errorThrown) {
						debugger;
						alert(response);

					}

				});
			
		}
}





function borrarPractica(){
	$(document).on('click', '.borrar', function (event) {
	    event.preventDefault();
	    $(this).closest('tr').remove();
	});
}

function buscarPracticas(){

	debugger;
	var token = sessionStorage.getItem("token");
	
	if($("#dni").val() == "" && $("#fechaDesde").val() == "" && $("#fechaHasta").val() == ""){

		$.ajax({
			type: "GET",
			url: urlPracticas+"/all",
			headers: {
				"Authorization": token,
				"Content-Type":"application/json"
			},
			success: function(response)
			{
				debugger;

				var list = response;  

				var FechaHora = "";
				var nombre = "";
				var apellido = "";
				var dni = "";
				var observaciones = "";
				var vacuna = "";
				var dosis = "";
				var tipoVacuna = "";
				var profecional = "";

				debugger;
				$("#tbodyPracticas").empty();

				for (var i = 0; i < list.length; i++) {

					var FechaHora = list[i].fecha.slice(0, 10)+" "+list[i].fecha.slice(11, -13);
					var idPractica = list[i].idPractica;
					var nombre = list[i].nombre;
					var apellido = list[i].apellido;
					var dni = list[i].dni;
					var observaciones = list[i].observaciones;
					var vacuna = list[i].vacuna;
					var dosis = list[i].dosis;
					var profecional = list[i].usuarioModif;

					if (vacuna == ""){

						$("#tbodyPracticas").append('<tr><td>'+FechaHora+'</td><td style="display:none;">'+idPractica+'</td><td>'+nombre+" "+apellido+'</td><td>'+dni+'</td><td >'+observaciones+'</td><td >'+profecional+'</td></tr>');
					}else{
						$("#tbodyPracticas").append('<tr><td>'+FechaHora+'</td><td style="display:none;">'+idPractica+'</td><td>'+nombre+" "+apellido+'</td><td>'+dni+'</td><td >'+vacuna+" "+dosis+'</td><td >'+profecional+'</td></tr>');
					}
				}


			},
			dataType: "json",
			error: function(xhr, status, error) {
				debugger;
				alet("error al buscar lote activo");
			}
		});
	
	}else{

		if($("#dni").val() != "" && $("#fechaDesde").val() == "" && $("#fechaHasta").val() == ""){

			$.ajax({
			type: "GET",
			url: urlPracticas+"/paciente/"+$("#dni").val(),
			headers: {
				"Authorization": token,
				"Content-Type":"application/json"
			},
			success: function(response)
			{
				debugger;

				var list = response;  

				var FechaHora = "";
				var nombre = "";
				var apellido = "";
				var dni = "";
				var observaciones = "";
				var vacuna = "";
				var dosis = "";
				var tipoVacuna = "";
				var profecional = "";

				debugger;
				$("#tbodyPracticas").empty();

				for (var i = 0; i < list.length; i++) {
					debugger;
					var FechaHora = list[i].fecha.slice(0, 10)+" "+list[i].fecha.slice(11, -13);
					var idPractica = list[i].idPractica;
					var nombre = list[i].nombre;
					var apellido = list[i].apellido;
					var dni = list[i].dni;
					var observaciones = list[i].observaciones;
					var vacuna = list[i].vacuna;
					var dosis = list[i].dosis;
					var profecional = list[i].usuarioModif;

					if (vacuna == ""){

						$("#tbodyPracticas").append('<tr><td>'+FechaHora+'</td><td style="display:none;">'+idPractica+'</td><td>'+nombre+" "+apellido+'</td><td>'+dni+'</td><td >'+observaciones+'</td><td >'+profecional+'</td></tr>');
					}else{
						$("#tbodyPracticas").append('<tr><td>'+FechaHora+'</td><td style="display:none;">'+idPractica+'</td><td>'+nombre+" "+apellido+'</td><td>'+dni+'</td><td >'+vacuna+" "+dosis+'</td><td >'+profecional+'</td></tr>');
					}
				}

			},
			dataType: "json",
			error: function(xhr, status, error) {
				debugger;
				alet("error al buscar lote activo");
			}
			});

		}else{

			if($("#dni").val() != "" && $("#fechaDesde").val() != "" && $("#fechaHasta").val() != ""){

				$.ajax({
				type: "GET",
				url: urlPracticas+"/paciente/"+$("#dni").val()+"/"+$("#fechaDesde").val()+"/"+$("#fechaHasta").val(),
				headers: {
					"Authorization": token,
					"Content-Type":"application/json"
				},
				success: function(response)
				{
					debugger;

					var list = response;  

					var FechaHora = "";
					var nombre = "";
					var apellido = "";
					var dni = "";
					var observaciones = "";
					var vacuna = "";
					var dosis = "";
					var tipoVacuna = "";
					var profecional = "";

					debugger;
					$("#tbodyPracticas").empty();

					for (var i = 0; i < list.length; i++) {

						var FechaHora = list[i].fecha.slice(0, 10)+" "+list[i].fecha.slice(11, -13);
						var idPractica = list[i].idPractica;
						var nombre = list[i].nombre;
						var apellido = list[i].apellido;
						var dni = list[i].dni;
						var observaciones = list[i].observaciones;
						var vacuna = list[i].vacuna;
						var dosis = list[i].dosis;
						var profecional = list[i].usuarioModif;

						if (vacuna == ""){

							$("#tbodyPracticas").append('<tr><td>'+FechaHora+'</td><td style="display:none;">'+idPractica+'</td><td>'+nombre+" "+apellido+'</td><td>'+dni+'</td><td >'+observaciones+'</td><td >'+profecional+'</td></tr>');
						}else{
							$("#tbodyPracticas").append('<tr><td>'+FechaHora+'</td><td style="display:none;">'+idPractica+'</td><td>'+nombre+" "+apellido+'</td><td>'+dni+'</td><td >'+vacuna+" "+dosis+'</td><td >'+profecional+'</td></tr>');
						}
					}

				},
				dataType: "json",
				error: function(xhr, status, error) {
					debugger;
					alet("error al buscar lote activo");
				}
				});

			}else{

				if($("#dni").val() == "" && $("#fechaDesde").val() != "" && $("#fechaHasta").val() != ""){

					$.ajax({
					type: "GET",
					url: urlPracticas+"/fecha/"+$("#fechaDesde").val()+"/"+$("#fechaHasta").val(),
					headers: {
						"Authorization": token,
						"Content-Type":"application/json"
					},
					success: function(response)
					{
						debugger;

						var list = response;  

						var FechaHora = "";
						var nombre = "";
						var apellido = "";
						var dni = "";
						var observaciones = "";
						var vacuna = "";
						var dosis = "";
						var tipoVacuna = "";
						var profecional = "";

						debugger;
						$("#tbodyPracticas").empty();

						for (var i = 0; i < list.length; i++) {

							var FechaHora = list[i].fecha.slice(0, 10)+" "+list[i].fecha.slice(11, -13);
							var idPractica = list[i].idPractica;
							var nombre = list[i].nombre;
							var apellido = list[i].apellido;
							var dni = list[i].dni;
							var observaciones = list[i].observaciones;
							var vacuna = list[i].vacuna;
							var dosis = list[i].dosis;
							var profecional = list[i].usuarioModif;

							if (vacuna == ""){

								$("#tbodyPracticas").append('<tr><td>'+FechaHora+'</td><td style="display:none;">'+idPractica+'</td><td>'+nombre+" "+apellido+'</td><td>'+dni+'</td><td >'+observaciones+'</td><td >'+profecional+'</td></tr>');
							}else{
								$("#tbodyPracticas").append('<tr><td>'+FechaHora+'</td><td style="display:none;">'+idPractica+'</td><td>'+nombre+" "+apellido+'</td><td>'+dni+'</td><td >'+vacuna+" "+dosis+'</td><td >'+profecional+'</td></tr>');
							}
						}

					},
					dataType: "json",
					error: function(xhr, status, error) {
						debugger;
						alet("error al buscar lote activo");
					}
					});

				}else{
					$('#fechasError').css('display', 'block');
                	$("#fechasError").fadeTo(2000, 500).slideUp(500, function(){
                    $("#fechasError").slideUp(500);
                    });
				}

			}

		}	
	}

	$("#dni").val("");
	$("#fechaDesde").val("");
	$("#fechaHasta").val("");


};

function buscarPaciente(){

	debugger;
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
			$("#cargaVacunas").css("display", "inline-block");
			$("#cargaOtros").css("display", "inline-block");
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
				pacientes($("#dni").val());


			}else{
				debugger;
			alert("Error al buscar el paciente");
			}

		}
	});
}
