function recuperosPDF(){

	debugger;
	var token = sessionStorage.getItem("token");
	var desde = sessionStorage.getItem("desde")
	var hasta = sessionStorage.getItem("hasta")
	debugger;
	$.ajax({
		type: "GET",
		url: host+"pdf/recuperos/"+desde+"/"+hasta,
		headers: {
			"Authorization": token,
			"Content-Type":"application/json"
		},
		success: function(response)
		{
		
			debugger;

            var fileURL = "data:application/pdf;base64,"+response.contents;
            window.open(fileURL);

		},
		dataType: "json",
		error: function(xhr, status, error) {
			debugger;
			console.log("error PDF: ");
		}
	});

}

function resaproPDF(){

	debugger;
	var token = sessionStorage.getItem("token");
	var desde = sessionStorage.getItem("desde")
	var hasta = sessionStorage.getItem("hasta")
	debugger;
	$.ajax({
		type: "GET",
		url: host+"pdf/resapro/"+desde+"/"+hasta,
		headers: {
			"Authorization": token,
			"Content-Type":"application/json"
		},
		success: function(response)
		{
		
			debugger;

            var fileURL = "data:application/pdf;base64,"+response.contents;
            window.open(fileURL);

		},
		dataType: "json",
		error: function(xhr, status, error) {
			debugger;
			console.log("error PDF: ");
		}
	});

}