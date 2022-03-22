(function($){
  $(function(){

    $('.sidenav').sidenav();
    //$('.parallax').parallax();
    $('.tabs').tabs({"swipeable":true});

    $.ajax({
        method: "GET",
        url: localStorage.getItem("URL")+"/api/get_courses",
        data : {"token":localStorage.getItem("session_token")},
        dataType: "json",
    }).done(function (info) {
        console.log(localStorage.getItem("session_token"));
        console.log(info["course_list"]);
        for (let item in info["course_list"]) {
            let cursos = info["course_list"][item]
            console.log(cursos);
            console.log(cursos["title"]);
            let newRow=$('<a href="#!" class="collection-item">'+cursos["title"]+'</a>')
            $("#llista_principal").append(newRow);
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