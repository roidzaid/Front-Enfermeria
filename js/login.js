function login(){

	var url = host + 'usuarios/login';
	var credentials = $("#usuario").val() + ":" + $("#pass").val();
    var auth = "Basic " + btoa(credentials);
    debugger;
	
	$.ajax({
        type: "GET",
        url: url,
        headers: {
            'Authorization':auth,
            'Content-Type':'application/json'
        },
        success: function(response)
        {
            debugger;
            sessionStorage.setItem("token", "Bearer " + response);
            sessionStorage.setItem("usuMod", $("#usuario").val());
            $('#bienvenido').css('display', 'block');
            $("#bienvenido").fadeTo(2000, 500).slideUp(500, function(){
            $("#bienvenido").slideUp(500);
            window.location = "inicio.html";
            });


            
        },
        error: function(xhr, status, error) {
            debugger;
            $('#usuYPassNoExiste').css('display', 'block');
            $("#usuYPassNoExiste").fadeTo(2000, 500).slideUp(500, function(){
            $("#usuYPassNoExiste").slideUp(500);
            });
          
        }
	});
	
}



function salir() {
    debugger;
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('usuMod');
    window.location = "index.html";
}


function inicio() {
    debugger;
    window.location = "inicio.html";
}
