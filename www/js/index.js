document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    let log = false;
    $('#loginButton').click( function(){
    	console.log($('#user').val()+"/"+$('#pass').val())
    	$.ajax({
    		method: "GET",
    		url: $('#URL').val()+"/api/login", //login --> get_courses (aixo i sota en courses)
    		data : {"username":$('#user').val(),"password":$('#pass').val()}, //--> getToken
    		dataType: "json",
    	}).done(function (info) {
    		if (info["status"] == "OK"){
                console.log(info)
                alert("FUNCIONA");
    			localStorage.setItem("URL", $('#URL').val())
    			localStorage.setItem("session_token", info["session_token"]);
    			window.location.assign('courses.html');
    		} else if (info["status"] != "OK"){
    			console.log(info["message"])
    		}
    	}).fail(function(){
    		alert("URL no valida");
    	});
    });

    $('#coursesButton').click(function(){
        let token = localStorage.getItem("session_token");
    })
}
