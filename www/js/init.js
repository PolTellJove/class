(function($){
  $(function(){

    $('.sidenav').sidenav();
    //$('.parallax').parallax();
    $('.tabs').tabs({"swipeable":true});

    $.ajax({
        method: "GET",
        url: localStorage.getItem("URL")+"/api/get_courses",
        data : {"session_token":localStorage.getItem("session_token")},
        dataType: "json",
    }).done(function (datos) {
        alert("OK3");
        console.log(localStorage.getItem("session_token"));
        console.log(datos);
        for (let item in datos) {
            let cursos = datos[item]
            for (let item2 in cursos) {
                console.log(cursos[item2]["description"]);
            }
        }
    }).fail(function () {
        alert("ERROR");
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space

document.addEventListener('deviceready', onDeviceReady, false);
 
function onDeviceReady() {
    // Cordova is now initialized. Have fun!
 
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //document.getElementById('deviceready').classList.add('ready');
}