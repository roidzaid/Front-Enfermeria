var urlLotes = host + "lotes";


function lotes(){
	
	window.location = "lotes.html";
	
	
}

function volver(){

	window.location = "inicio.html";
	
}


function guardarLote(){

	debugger;

	var datosOk = true;
	if($("#vacuna").val() == "" || $("#tipo").val() == "" || $("#lote").val()== ""){
		datosOk = false;
		$('#ErrorLote').css('display', 'block');
        $("#ErrorLote").fadeTo(2000, 500).slideUp(500, function(){
        $("#ErrorLote").slideUp(500);
        });

	}
	

	if(datosOk){
		var token = sessionStorage.getItem("token")

		var loteModel = {
			vacuna:$("#comboVacunas").val(),
			marca:$("#comboMarcas").val(),
			lote:$("#lote").val(),
			usuarioModif:sessionStorage.getItem("usuMod"),
		}

		JSON.stringify(loteModel);

		debugger;
		$.ajax({
			type: "POST",
			url: urlLotes,
			headers: {
				"Authorization": token,
				"Content-Type":"application/json"
			},
			success: function(response)
			{
				debugger;
				limpiarLotes();
				$('#loteOK').css('display', 'block');
                $("#loteOK").fadeTo(2000, 500).slideUp(500, function(){
                $("#loteOK").slideUp(500);
                });

			},

			dataType: "json",
			data: JSON.stringify(loteModel),

			error: function(jqXHR, textStatus, errorThrown) {
				debugger;
				$('#loteExiste').css('display', 'block');
                $("#loteExiste").fadeTo(2000, 500).slideUp(500, function(){
                $("#loteExiste").slideUp(500);
                });

			}

		});
	}

}


function buscarLote(){

	debugger;
	var token = sessionStorage.getItem("token");
	
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

			$("#tLotes").css("display", "inline-block");

			var fechaAlta = response.fechaAlta;
			var vacuna = response.vacuna;
			var marca = response.marca;
			var lote = response.lote;
			var estado = response.estado;

			$("#tbodyLotes").empty();

			$("#tbodyLotes").append('<tr><td style="width:140px;">'+fechaAlta+'</td><td style="width:140px;">'+vacuna+'</td><td style="width:140px;">'+marca+'</td><td style="width:140px;">'+lote+'</td><td style="width:140px;">'+estado+'</td></tr>');

		},
		dataType: "json",
		error: function(xhr, status, error) {
			debugger;
			$('#buscarLote').css('display', 'block');
            $("#buscarLote").fadeTo(2000, 500).slideUp(500, function(){
            $("#buscarLote").slideUp(500);
            });
		}
	});

}


function listarlotes(){


	debugger;
	var token = sessionStorage.getItem("token");

	$.ajax({
		type: "GET",
		url: urlLotes,
		headers: {
			"Authorization": token,
			"Content-Type":"application/json"
		},

		success: function(response)
		{
			debugger;

			$("#tLotes").css("display", "inline-block");

			var list = response;              

			var fechaAlta = "";
			var vacuna = "";
			var marca = "";
			var lote = "";
			var estado = "";

			debugger;

			$("#tbodyLotes").empty();

			for (var i = 0; i < list.length; i++) {

				fechaAlta = list[i].fechaAlta;
				vacuna = list[i].vacuna;
				marca = list[i].marca;
				lote = list[i].lote;
				estado = list[i].estado;

				$("#tbodyLotes").append('<tr><td style="width:140px;">'+fechaAlta+'</td><td style="width:140px;">'+vacuna+'</td><td style="width:140px;">'+marca+'</td><td style="width:140px;">'+lote+'</td><td style="width:140px;">'+estado+'</td></tr>');
			}
		},
		dataType: "json",
		error: function(xhr, status, error) {
			debugger;
			alert("Error al listar lotes");
		}
	});
}

function limpiarLotes(){

	debugger;

	$("#tLotes").css("display", "none");

	$("#comboVacunas").val($("#comboVacunas option:first").val());
	$("#comboMarcas").val($("#comboVacunas option:first").val());
	$("#lote").val("");
	
	
}
