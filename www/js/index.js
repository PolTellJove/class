document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    let log = false;
    $('#loginButton').click( function(){
    	$.ajax({
    		method: "GET",
    		url: $('#URL').val()+"/api/login",
    		data : {"username":$('#user').val(),"password":$('#pass').val()},
    		dataType: "json",
    	}).done(function (info) {
    		if (info["status"] == "OK"){
                console.log(info)
    			localStorage.setItem("URL", $('#URL').val())
    			localStorage.setItem("session_token", info["session_token"]);

                alert("OK");
                window.location.assign('courses.html');
                alert("OK2");

    		} else if (info["status"] != "OK"){
    			alert(info["message"])
    		}
    	}).fail(function(){
    		alert("URL no valida");
    	});


            
    });
}
