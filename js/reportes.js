var urlPracticas = host + "practicas";

function reportes(){
	
	window.location = "reportes.html";
	
}

function volver(){
	
	window.location = "reportes.html";
	
}

function hoja2(){
	
	window.location = "hoja2.html";
	
}

function hoja10(){
	
	window.location = "hoja10.html";
	
}

function inicio(){
	
	window.location = "inicio.html";
	
}

function esqAtrasado()
{
	
	window.location = "consultaRecuperos.html";
	
}

function consultaHoja2(){
	
	if (sessionStorage.getItem("token") == null){
		window.location = "solicitarToken.html";
	}

		debugger;
		var token = sessionStorage.getItem("token");
		debugger;
		var anioMesdia = $("#anioMes").val();
		debugger;
		var anioMes = anioMesdia.substring(0, 7);
		debugger;

		$.ajax({
			type: "GET",
			url: host + "reportes/hoja2"+"/"+anioMes,
			headers: {
				"Authorization": token,
				"Content-Type":"application/json"
			},
			success: function(response)
			{
				debugger;

				var moron = response.cantMoron;
				var matanza = response.cantMatanza;
				var merlo = response.cantMerlo;
				var otros = response.cantOtros;
				var si = response.cantOSsi;
				var no = response.cantOSno;

				var cantMenor1V = response.cantMenor1V;
				var cantMenor1M = response.cantMenor1M;
				var cant1a4V = response.cant1a4V;
				var cant1a4M = response.cant1a4M;
				var cant5a9V = response.cant5a9V;
				var cant5a9M = response.cant5a9M;
				var cant10a14V = response.cant10a14V;
				var cant10a14M = response.cant10a14M;
				var cant15a19V = response.cant15a19V;
				var cant15a19M = response.cant15a19M;
				var cant20a34V = response.cant20a34V;
				var cant20a34M = response.cant20a34M;
				var cant35a49V = response.cant35a49V;
				var cant35a49M = response.cant35a49M;
				var cant50a64V = response.cant50a64V;
				var cant50a64M = response.cant50a64M;
				var cantMayor65V = response.cantMayor65V;
				var cantMayor65M = response.cantMayor65M;

				debugger;
				var controlLocalidades = response.cantMoron + response.cantMatanza + response.cantMerlo + response.cantOtros;
				debugger;
				var controlOS = response.cantOSsi + response.cantOSno;
				debugger;
				var controlEdades = response.cantMenor1V + response.cantMenor1M + response.cant1a4V + response.cant1a4M + response.cant5a9V + response.cant5a9M + response.cant10a14V + response.cant10a14M + response.cant15a19V + response.cant15a19M + response.cant20a34V + response.cant20a34M + response.cant35a49V + response.cant35a49M + response.cant50a64V + response.cant50a64M + response.cantMayor65V + response.cantMayor65M;


			$("#tbodyLocalidad").empty();
			$("#tbodyOS").empty();
			$("#tbodyMenor1").empty();
			$("#tbody1a4").empty();
			$("#tbody5a9").empty();
			$("#tbody10a14").empty();
			$("#tbody15a19").empty();
			$("#tbody20a34").empty();
			$("#tbody35a49").empty();
			$("#tbody50a64").empty();
			$("#tbodyMayor65").empty();

			$("#tbodyLocalidad").append('<tr><td>'+moron+'</td><td>'+matanza+'</td><td>'+merlo+'</td><td>'+otros+'</td></tr>');
			$("#tbodyOS").append('<tr><td>'+si+'</td><td>'+no+'</td></tr>');

			$("#tbodyMenor1").append('<tr><td>'+cantMenor1V+'</td><td>'+cantMenor1M+'</td></tr>');
			$("#tbody1a4").append('<tr><td>'+cant1a4V+'</td><td>'+cant1a4M+'</td></tr>');
			$("#tbody5a9").append('<tr><td>'+cant5a9V+'</td><td>'+cant5a9M+'</td></tr>');
			$("#tbody10a14").append('<tr><td>'+cant10a14V+'</td><td>'+cant10a14M+'</td></tr>');
			$("#tbody15a19").append('<tr><td>'+cant15a19V+'</td><td>'+cant15a19M+'</td></tr>');
			$("#tbody20a34").append('<tr><td>'+cant20a34V+'</td><td>'+cant20a34M+'</td></tr>');
			$("#tbody35a49").append('<tr><td>'+cant35a49V+'</td><td>'+cant35a49M+'</td></tr>');
			$("#tbody50a64").append('<tr><td>'+cant50a64V+'</td><td>'+cant50a64M+'</td></tr>');
			$("#tbodyMayor65").append('<tr><td>'+cantMayor65V+'</td><td>'+cantMayor65M+'</td></tr>');

			$("#cantLoc").val(controlLocalidades);
			$("#cantOS").val(controlOS);
			$("#cantEdades").val(controlEdades);

			}
		});

	};


function consultaHoja10(){

	if (sessionStorage.getItem("token") == null){
		window.location = "solicitarToken.html";
	}
	
		debugger;
		var token = sessionStorage.getItem("token");
		debugger;
		var anioMesdia = $("#anioMes").val();
		debugger;
		var anioMes = anioMesdia.substring(0, 7);
		debugger;

		$.ajax({
			type: "GET",
			url: host + "reportes/hoja10"+"/"+anioMes,
			headers: {
				"Authorization": token,
				"Content-Type":"application/json"
			},
			success: function(response)
			{
				debugger;


				var pentavalente_d1 = response.pentavalente_D1;
    			var vcn_13_d1 = response.vcn_13_D1;
    			var rotavirus_d1 = response.rotavirus_D1;
    			var ipv_salk_d1 = response.ipv_SALK_D1;
    			var meningococo_d1 = response.meningococo_D1;
    			var meningococo_d2 = response.meningococo_D2;
    			var pentavalente_d2 = response.pentavalente_D2;
    			var vcn_13_d2 = response.vcn_13_D2;
    			var rotavirus_d2 = response.rotavirus_D2;
    			var ipv_salk_d2 = response.ipv_SALK_D2;
    			var pentavalente_d3 = response.pentavalente_D3;
    			var ipv_salk_d3 = response.ipv_SALK_D3;
    			var vcn_13_r = response.vcn_13_R;
    			var hep_a = response.hep_A;
    			var triple_viral_d1 = response.triple_VIRAL_D1;
    			var antigripal_6m_12m = response.antigripal_6M_12M;
    			var meningococo_d3 = response.meningococo_D3;
    			var varicela = response.varicela;
    			var pentavalente_r = response.pentavalente_R;
    			var antigripal_12m_24m = response.antigripal_12M_24M;
    			var triple_viral_2a_4a = response.triple_VIRAL_2A_4A;
			    var pentavalente_2a_4a = response.pentavalente_2A_4A;
			    var ipv_salk_r_ie = response.ipv_SALK_R_IE;
			    var triple_viral_d2_ie = response.triple_VIRAL_D2_IE;
			    var dpt_r_ie = response.triple_VIRAL_D2_IE;
			    var dt_7a_9a_d1 = response.dt_7A_9A_D1;
			    var dt_7a_9a_d2 = response.dt_7A_9A_D2;
			    var dt_7a_9a_d3 = response.dt_7A_9A_D3;
			    var meningococo_r_11a = response.meningococo_R_11A;
			    var dtp_ac_11a = response.dtp_AC_11A;
			    var hpv_m_d1 = response.hpv_M_D1;
			    var hpv_m_d2 = response.hpv_M_D2;
			    var hpv_v_d1 = response.hpv_V_D1;
			    var hpv_v_d2 = response.hpv_V_D2;
			    var antigripal_emb = response.antigripal_EMB;
			    var dtp_ac_emb = response.dtp_AC_EMB;
			    var hep_b_emb_d1 = response.hep_B_EMB_D1;
			    var hep_b_emb_d2 = response.hep_B_EMB_D2;
			    var hep_b_emb_d3 = response.hep_B_EMB_D3;
			    var dt_emb_d1 = response.dt_EMB_D1;
			    var dt_emb_d2 = response.dt_EMB_D2;
			    var dt_emb_d3 = response.dt_EMB_D3;
			    var antigripal_puer = response.antigripal_PUER;
			    var dtp_ac_puer = response.dtp_AC_PUER;
			    var hep_b_21a_40a_d1 = response.hep_B_21A_40A_D1;
			    var hep_b_21a_40a_d2 = response.hep_B_21A_40A_D2;
			    var hep_b_21a_40a_d3 = response.hep_B_21A_40A_D3;
			    var hep_b_mayor_40a_d1 = response.hep_B_MAYOR_40A_D1;
			    var hep_b_mayor_40a_d2 = response.hep_B_MAYOR_40A_D2;
			    var hep_b_mayor_40a_d3 = response.hep_B_MAYOR_40A_D3;
			    var dt_mayor_17a_d1 = response.dt_MAYOR_17A_D1;
			    var dt_mayor_17a_d2 = response.dt_MAYOR_17A_D2;
			    var dt_mayor_17a_d3 = response.dt_MAYOR_17A_D3;
			    var triple_viral_18a_d1 = response.triple_VIRAL_18A_D1;
			    var triple_viral_18a_d2 = response.triple_VIRAL_18A_D2;
			    var triple_viral_r_camp = response.triple_VIRAL_R_CAMP;
			    var hep_b_ps = response.hep_B_PS;
			    var antigripal_ps = response.antigripal_PS;
			    var dtp_ac_ps = response.dtp_AC_PS;
			    var vcn_13_m65 = response.vcn_13_M65;
			    var n_23_m65 = response.n_23_M65;
			    var antigripal_m65 = response.antigripal_M65;
			    var vcn_13_fr = response.vcn_13_FR;
			    var n_23_fr = response.n_23_FR;
			    var antigripal_fr = response.antigripal_FR;
			    var triple_viral_7a_18a_d1 = response.triple_VIRAL_7A_18A_D1;
			    var triple_viral_7a_18a_d2 = response.triple_VIRAL_7A_18A_D2;
			    var triple_viral_7a_18a_r_camp = response.triple_VIRAL_7A_18A_R_CAMP;
			    var hep_b_2a_4a_d1 = response.hep_B_2A_4A_D1;
			    var hep_b_2a_4a_d2 = response.hep_B_2A_4A_D2;
			    var hep_b_2a_4a_d3 = response.hep_B_2A_4A_D3;
			    var hep_b_5a_9a_d1 = response.hep_B_5A_9A_D1;
			    var hep_b_5a_9a_d2 = response.hep_B_5A_9A_D2;
			    var hep_b_5a_9a_d3 = response.hep_B_5A_9A_D3;
			    var hep_b_10a_12a_d1 = response.hep_B_10A_12A_D1;
			    var hep_b_10a_12a_d2 = response.hep_B_10A_12A_D2;
			    var hep_b_10a_12a_d3 = response.hep_B_10A_12A_D3;
			    var hep_b_13a_20a_d1 = response.hep_B_13A_20A_D1;
			    var hep_b_13a_20a_d2 = response.hep_B_13A_20A_D2;
    			var hep_b_13a_20a_d3 = response.hep_B_13A_20A_D3;
			
    			debugger;

			$("#tbodyVacunasNiñes2Meses").empty();
			$("#tbodyVacunaAntimeningococica").empty();
			$("#tbodyVacunasNiñes4Meses").empty();
			$("#tbodyVacunasNiñes6Meses").empty();
			$("#tbodyVacunasNiñes12Meses").empty();
			$("#tbodyVacunasNiñes15Meses").empty();
			$("#tbodyVacunasNiñes18Meses").empty();
			$("#tbodyTripleViralNiñes2a4Años").empty();
			$("#tbodyPentavalenteNiñes2a4Años").empty();
			$("#tbodyDobleBacterianaIngresoEscolar").empty();
			$("#tbodyVacunasIngresoEscolar").empty();
			$("#tbodyVacunasNiñes11Años").empty();
			$("#tbodyVacunasEmbarazoHepB").empty();
			$("#tbodyVacunasEmbarazoDT").empty();
			$("#tbodyVacunasEmbarazo").empty();
			$("#tbodyVacunasPuerperio").empty();
			$("#tbodyVacunasAdultosHepB21a40Años").empty();
			$("#tbodyVacunasAdultosHepB40Años").empty();
			$("#tbodyVacunasAdultosDT17Años").empty();
			$("#tbodyVacunasAdultosTripleViral18Años").empty();
			$("#tbodyVacunasPersonalSalud").empty();
			$("#tbodyVacunasMayores65Años").empty();
			$("#tbodyVacunasGrupoRiesgo").empty();
			$("#tbodyVacunasAdultosTripleViral18Años").empty();
			$("#tbodyVacunasAdultosHepB2a4Años").empty();
			$("#tbodyVacunasAdultosHepB5a9Años").empty();
			$("#tbodyVacunasAdultosHepB10a12Años").empty();
			$("#tbodyVacunasAdultosHepB13a20Años").empty();
			$("#tbodyVacunasOtras").empty();

			debugger;
			   
			$("#tbodyVacunasNiñes2Meses").append('<tr><td>'+pentavalente_d1+'</td><td>'+vcn_13_d1+'</td><td>'+rotavirus_d1+'</td><td>'+ipv_salk_d1+'</td></tr>');
			debugger;
			$("#tbodyVacunaAntimeningococica").append('<tr><td>'+meningococo_d1+'</td><td>'+meningococo_d2+'</td></tr>');
			debugger;
			$("#tbodyVacunasNiñes4Meses").append('<tr><td>'+pentavalente_d2+'</td><td>'+vcn_13_d2+'</td><td>'+rotavirus_d2+'</td><td>'+ipv_salk_d2+'</td></tr>');
			debugger;
			$("#tbodyVacunasNiñes6Meses").append('<tr><td>'+pentavalente_d3+'</td><td>'+ipv_salk_d3+'</td></tr>');
			debugger;
			$("#tbodyVacunasNiñes12Meses").append('<tr><td>'+vcn_13_r+'</td><td>'+hep_a+'</td><td>'+triple_viral_d1+'</td><td>'+antigripal_6m_12m+'</td></tr>');
			debugger;
			$("#tbodyVacunasNiñes15Meses").append('<tr><td>'+meningococo_d3+'</td><td>'+varicela+'</td></tr>');

			$("#tbodyVacunasNiñes18Meses").append('<tr><td>'+pentavalente_r+'</td><td>'+antigripal_12m_24m+'</td></tr>');

			$("#tbodyTripleViralNiñes2a4Años").append('<tr><td>'+triple_viral_2a_4a+'</td></tr>');

			$("#tbodyPentavalenteNiñes2a4Años").append('<tr><td>'+pentavalente_2a_4a+'</td></tr>');

			$("#tbodyDobleBacterianaIngresoEscolar").append('<tr><td>'+dt_7a_9a_d1+'</td><td>'+dt_7a_9a_d2+'</td><td>'+dt_7a_9a_d3+'</td></tr>');
			$("#tbodyVacunasIngresoEscolar").append('<tr><td>'+ipv_salk_r_ie+'</td><td>'+triple_viral_d2_ie+'</td><td>'+dpt_r_ie+'</td></tr>');

			$("#tbodyVacunasNiñes11Años").append('<tr><td>'+meningococo_r_11a+'</td><td>'+dtp_ac_11a+'</td><td>'+hpv_m_d1+'</td><td>'+hpv_m_d2+'</td><td>'+hpv_v_d1+'</td><td>'+hpv_v_d2+'</td></tr>');

			$("#tbodyVacunasEmbarazoHepB").append('<tr><td>'+hep_b_emb_d1+'</td><td>'+hep_b_emb_d2+'</td><td>'+hep_b_emb_d3+'</td></tr>');
			$("#tbodyVacunasEmbarazoDT").append('<tr><td>'+dt_emb_d1+'</td><td>'+dt_emb_d2+'</td><td>'+dt_emb_d3+'</td></tr>');
			$("#tbodyVacunasEmbarazo").append('<tr><td>'+antigripal_emb+'</td><td>'+dtp_ac_emb+'</td></tr>');

			$("#tbodyVacunasPuerperio").append('<tr><td>'+antigripal_puer+'</td><td>'+dtp_ac_puer+'</td></tr>');

			$("#tbodyVacunasAdultosHepB21a40Años").append('<tr><td>'+hep_b_21a_40a_d1+'</td><td>'+hep_b_21a_40a_d2+'</td><td>'+hep_b_21a_40a_d3+'</td></tr>');
			$("#tbodyVacunasAdultosHepB40Años").append('<tr><td>'+hep_b_mayor_40a_d1+'</td><td>'+hep_b_mayor_40a_d2+'</td><td>'+hep_b_mayor_40a_d3+'</td></tr>');
			$("#tbodyVacunasAdultosDT17Años").append('<tr><td>'+dt_mayor_17a_d1+'</td><td>'+dt_mayor_17a_d2+'</td><td>'+dt_mayor_17a_d3+'</td></tr>');
			$("#tbodyVacunasAdultosTripleViral18Años").append('<tr><td>'+triple_viral_18a_d1+'</td><td>'+triple_viral_18a_d2+'</td><td>'+triple_viral_r_camp+'</td></tr>');

			$("#tbodyVacunasPersonalSalud").append('<tr><td>'+hep_b_ps+'</td><td>'+antigripal_ps+'</td><td>'+dtp_ac_ps+'</td></tr>');

			$("#tbodyVacunasMayores65Años").append('<tr><td>'+vcn_13_m65+'</td><td>'+n_23_m65+'</td><td>'+antigripal_m65+'</td></tr>');

			$("#tbodyVacunasGrupoRiesgo").append('<tr><td>'+vcn_13_fr+'</td><td>'+n_23_fr+'</td><td>'+antigripal_fr+'</td></tr>');

			$("#tbodyOtrasVacunasTripleViral18Años").append('<tr><td>'+triple_viral_7a_18a_d1+'</td><td>'+triple_viral_7a_18a_d2+'</td><td>'+triple_viral_7a_18a_r_camp+'</td></tr>');
			$("#tbodyOtrasVacunasHepB2a4Años").append('<tr><td>'+hep_b_2a_4a_d1+'</td><td>'+hep_b_2a_4a_d2+'</td><td>'+hep_b_2a_4a_d3+'</td></tr>');
			$("#tbodyOtrasVacunasHepB5a9Años").append('<tr><td>'+hep_b_5a_9a_d1+'</td><td>'+hep_b_5a_9a_d2+'</td><td>'+hep_b_5a_9a_d3+'</td></tr>');
			$("#tbodyOtrasVacunasHepB10a12Años").append('<tr><td>'+hep_b_10a_12a_d1+'</td><td>'+hep_b_10a_12a_d2+'</td><td>'+hep_b_10a_12a_d3+'</td></tr>');
			$("#tbodyOtrasVacunasHepB13a20Años").append('<tr><td>'+hep_b_13a_20a_d1+'</td><td>'+hep_b_13a_20a_d2+'</td><td>'+hep_b_13a_20a_d3+'</td></tr>');

			}
		});

	};


function consultaRecuperos(){

	
	debugger;
	var datosOk = true;
	if($("#fechaDesde").val() == "" || $("#fechaHasta").val() == ""){
		datosOk = false;
        $('#fechasError').css('display', 'block');
       	$("#fechasError").fadeTo(2000, 500).slideUp(500, function(){
       	$("#fechasError").slideUp(500);
       	});
	}

	if (sessionStorage.getItem("token") == null){
		window.location = "solicitarToken.html";
	}

	debugger;
	var token = sessionStorage.getItem("token");

	sessionStorage.setItem("desde", $("#fechaDesde").val());
    sessionStorage.setItem("hasta", $("#fechaHasta").val());

	if(datosOk){
		debugger;
		$.ajax({
			type: "GET",
			url: urlPracticas+"/listaRecupero/"+$("#fechaDesde").val()+"/"+$("#fechaHasta").val(),
			headers: {
				"Authorization": token,
				"Content-Type":"application/json"
			},
			success: function(response)
			{
				debugger;

				var list = response;  
				var hoy = new Date();
				
				debugger;
				$("#tbodyAtrasadas").empty();

				for (var i = 0; i < list.length; i++) {

					var varon = "";
					var mujer = "";
					var edad = "";
					var nacimiento = "";
					var vacuna = "";
					var dosis1 = "";
					var dosis2 = "";
					var dosis3 = "";
					var dosisR = "";
					
					if (list[i].sexo == "masculino"){
                    	varon = "X";
					}else{
						mujer = "X";
					};

					
					if(list[i].edadAños < 2){
						edad = list[i].edadMeses + "M";	
					}else{
						edad = list[i].edadAños + "A";	
					}

   				
					nacimiento = list[i].fechaNac;
					vacuna = list[i].vacuna;

					
					switch (list[i].dosis) {

				        case "N/A":
						case "+18A(1ra)":
						case "<65 FR":
						case ">65":
						case "11A":
						case "1ra":
						case "7-18A(1ra)":
						case "EMB":
						case "EMB 1ra":
						case "P.E":
						case "P.S":
						case "PREMA":
						case "PUER":
						case "UD":

				        	dosis1 = "X";

				        break;

				        case "+18A(2da)":
						case "2da":
						case "2da/IE":
						case "7-18A(2da)":
						case "EMB 2da":

				        	dosis2 = "X";

				        break;

				        case "3ra":
				        case "EMB 3ra":

				        	dosis3 = "X";

				        break;

				        case "+18A R/Camp":
						case "3ra/R":
						case "7-18A R/Camp":
						case "R/11A":
						case "R/IE":

							dosisR = "X";

						break;

				        default:

				        	dosis1 = "X";

				        break;

			 		}
			 		debugger;
					$("#tbodyAtrasadas").append('<tr><td>'+varon+'</td><td>'+mujer+'</td><td>'+edad+'</td><td>'+nacimiento+'</td><td >'+vacuna+'</td><td >'+dosis1+'</td><td >'+dosis2+'</td><td >'+dosis3+'</td><td >'+dosisR+'</td></tr>');
				}


			},
			dataType: "json",
			error: function(xhr, status, error) {
				debugger;
				alert("error al buscar lote activo");
			}
		});
	
	}

	debugger;
	$("#fechaDesde").val("");
	$("#fechaHasta").val("");


};



function resapro(){


	debugger;
	var datosOk = true;
	if($("#fechaDesde").val() == "" || $("#fechaHasta").val() == ""){
		datosOk = false;
        $('#fechasError').css('display', 'block');
       	$("#fechasError").fadeTo(2000, 500).slideUp(500, function(){
       	$("#fechasError").slideUp(500);
       	});
	}

	if (sessionStorage.getItem("token") == null){
		window.location = "solicitarToken.html";
	}

	debugger;
	var token = sessionStorage.getItem("token");

	sessionStorage.setItem("desde", $("#fechaDesde").val());
    sessionStorage.setItem("hasta", $("#fechaHasta").val());

	if(datosOk){
		debugger;
		$.ajax({
			type: "GET",
			url: urlPracticas+"/resapro/"+$("#fechaDesde").val()+"/"+$("#fechaHasta").val(),
			headers: {
				"Authorization": token,
				"Content-Type":"application/json"
			},
			success: function(response)
			{
				debugger;

				var list = response;  
				
				
				debugger;
				$("#tbodyResapro").empty();

				for (var i = 0; i < list.length; i++) {

				debugger;
				var colum1 = "";
    			var colum2 = "";
    			var colum3 = "";
    			var colum4 = "";
    			var obraSocial = "";
    			var BCG = "";
    			var Hep_B_1 = "";
    			var Hep_B_2 = "";
    			var Hep_B_3 = "";
    			var VCN_13_1 = "";
    			var VCN_13_2 = "";
    			var VCN_13_3 = "";
    			var Pentavalente_1 = "";
    			var Pentavalente_2 = "";
    			var Pentavalente_3 = "";
    			var SALK_IPV_1 = "";
    			var SALK_IPV_2 = "";
    			var SALK_IPV_3 = "";
    			var SALK_IPV_R = "";
    			var Rotavirus_1 = "";
    			var Rotavirus_2 = "";
    			var Meningococo_1 = "";
    			var Meningococo_2 = "";
    			var Meningococo_3 = "";
    			var Meningococo_R = "";
    			var Antigripal = "";
    			var Triple_Viral_1 = "";
    			var Triple_Viral_2 = "";
    			var Hep_A = "";
    			var Varicela = "";
    			var DTP_Hib = "";
    			var DTP = "";
    			var DTP_Ac = "";
    			var HPV_1 = "";
    			var HPV_2 = "";
    			var DT = "";
    			var SR = "";

    			
    			debugger;
				colum1 = list[i].nomyApe;
    			colum2 = list[i].dni;
    			colum3 = list[i].nomyApeResponsable;
    			colum4 = list[i].edad;
    			obraSocial = list[i].obraSocial;
    			BCG = list[i].bcg;
    			Hep_B_1 = list[i].hep_B_1;
    			Hep_B_2 = list[i].hep_B_2;
    			Hep_B_3 = list[i].hep_B_3;
    			VCN_13_1 = list[i].vcn_13_1;
    			VCN_13_2 = list[i].vcn_13_2;
    			VCN_13_3 = list[i].vcn_13_3;
    			Pentavalente_1 = list[i].pentavalente_1;
    			Pentavalente_2 = list[i].pentavalente_2;
    			Pentavalente_3 = list[i].pentavalente_3;
    			SALK_IPV_1 = list[i].salk_IPV_1;
    			SALK_IPV_2 = list[i].salk_IPV_2;
    			SALK_IPV_3 = list[i].salk_IPV_3;
    			SALK_IPV_R = list[i].salk_IPV_R;
    			Rotavirus_1 = list[i].rotavirus_1;
    			Rotavirus_2 = list[i].rotavirus_2;
    			Meningococo_1 = list[i].meningococo_1;
    			Meningococo_2 = list[i].meningococo_2;
    			Meningococo_3 = list[i].meningococo_3;
    			Meningococo_R = list[i].meningococo_R;
    			Antigripal = list[i].antigripal;
    			Triple_Viral_1 = list[i].triple_Viral_1;
    			Triple_Viral_2 = list[i].triple_Viral_2;
    			Hep_A = list[i].hep_A;
    			Varicela = list[i].varicela;
    			DTP_Hib = list[i].dtp_Hib;
    			DTP = list[i].dtp;
    			DTP_Ac = list[i].dtp_Ac;
    			HPV_1 = list[i].hpv_1;
    			HPV_2 = list[i].hpv_2;
    			DT = list[i].dt;
    			SR = list[i].sr;
					
				
    			debugger;
					
				$("#tbodyResapro").append('<tr><td>'+colum1+'</td><td>'+colum2+'</td><td>'+colum3+'</td><td>'+colum4+'</td><td>'+obraSocial+'</td><td ROWSPAN="2">'+BCG+'</td><td ROWSPAN="2">'+Hep_B_1+'</td><td ROWSPAN="2">'+Hep_B_2+'</td><td ROWSPAN="2">'+Hep_B_3+'</td><td ROWSPAN="2">'+VCN_13_1+'</td><td ROWSPAN="2">'+VCN_13_2+'</td><td ROWSPAN="2">'+VCN_13_3+'</td><td ROWSPAN="2">'+Pentavalente_1+'</td><td ROWSPAN="2">'+Pentavalente_2+'</td><td ROWSPAN="2">'+Pentavalente_3+'</td><td ROWSPAN="2">'+SALK_IPV_1+'</td><td ROWSPAN="2">'+SALK_IPV_2+'</td><td ROWSPAN="2">'+SALK_IPV_3+'</td><td ROWSPAN="2">'+SALK_IPV_R+'</td><td ROWSPAN="2">'+Rotavirus_1+'</td><td ROWSPAN="2">'+Rotavirus_2+'</td><td ROWSPAN="2">'+Meningococo_1+'</td><td ROWSPAN="2">'+Meningococo_2+'</td><td ROWSPAN="2">'+Meningococo_3+'</td><td ROWSPAN="2">'+Meningococo_R+'</td><td ROWSPAN="2">'+Antigripal+'</td><td ROWSPAN="2">'+Triple_Viral_1+'</td><td ROWSPAN="2">'+Triple_Viral_2+'</td><td ROWSPAN="2">'+Hep_A+'</td><td ROWSPAN="2">'+Varicela+'</td><td ROWSPAN="2">'+DTP_Hib+'</td><td ROWSPAN="2">'+DTP+'</td><td ROWSPAN="2">'+DTP_Ac+'</td><td ROWSPAN="2">'+HPV_1+'</td><td ROWSPAN="2">'+HPV_2+'</td><td ROWSPAN="2">'+DT+'</td><td ROWSPAN="2">'+SR+'</td></tr>');

				debugger;
				colum1 = list[i].domicilio;
    			colum2 = list[i].fechaNac;
    			colum3 = list[i].dniResponsable;
    			colum4 = list[i].sexo;

    			$("#tbodyResapro").append('<tr><td>'+colum1+'</td><td>'+colum2+'</td><td>'+colum3+'</td><td>'+colum4+'</td></tr>');

				}


			},
			dataType: "json",
			error: function(xhr, status, error) {
				debugger;
				alert("error al generar resapro");
			}
		});
	
	}

	debugger;
	$("#fechaDesde").val("");
	$("#fechaHasta").val("");

	
}