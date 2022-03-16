document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    let log = false;
    $('#loginButton').click(function(){
    	console.log($('#user').val()+"/"+$('#pass').val())
    	$.ajax({
    		method: "GET",
    		url: $('#URL').val()+"/api/login/"+$('#user').val()+"/"+$('#pass').val(),
    		//data : {"username":$('#user').val(),"password":$('#pass').val()},
    		dataType: "json",
    	}).done(function (info) {
    		if (info["status"] == "OK"){
    			localStorage.setItem("URL", $('#URL').val())
    			localStorage.setItem("session_token", info["session_token"]);
    			window.location.assign('test.html');
    		} else if (info["status"] != "OK"){
    			console.log(info["message"])
    		}
    	}).fail(function(){
    		alert("URL no valida");
    	});
    });
}
